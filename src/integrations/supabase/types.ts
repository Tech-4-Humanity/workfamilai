export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      abm_accounts: {
        Row: {
          account_tier: string | null
          annual_revenue: number | null
          assigned_to: string | null
          budget_authority: number | null
          campaign_history: Json | null
          company_name: string
          created_at: string
          current_tech_stack: Json | null
          decision_makers: Json | null
          employee_count: number | null
          engagement_score: number | null
          id: string
          industry: string | null
          next_action: string | null
          pain_points: Json | null
          preferred_functions: Json | null
          updated_at: string
        }
        Insert: {
          account_tier?: string | null
          annual_revenue?: number | null
          assigned_to?: string | null
          budget_authority?: number | null
          campaign_history?: Json | null
          company_name: string
          created_at?: string
          current_tech_stack?: Json | null
          decision_makers?: Json | null
          employee_count?: number | null
          engagement_score?: number | null
          id?: string
          industry?: string | null
          next_action?: string | null
          pain_points?: Json | null
          preferred_functions?: Json | null
          updated_at?: string
        }
        Update: {
          account_tier?: string | null
          annual_revenue?: number | null
          assigned_to?: string | null
          budget_authority?: number | null
          campaign_history?: Json | null
          company_name?: string
          created_at?: string
          current_tech_stack?: Json | null
          decision_makers?: Json | null
          employee_count?: number | null
          engagement_score?: number | null
          id?: string
          industry?: string | null
          next_action?: string | null
          pain_points?: Json | null
          preferred_functions?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      active_agent_roster: {
        Row: {
          agent_code: string | null
          agent_id: number | null
          agent_name: string | null
          ai_readiness_level: number | null
          core_team_label: string | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          task_usage_minutes: number | null
          value_score: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Relationships: []
      }
      activity_participants: {
        Row: {
          activity_id: string
          contribution_notes: string | null
          created_at: string
          family_member_id: string
          id: string
          involvement_level_id: string
          specific_role: string | null
          step_id: string | null
          updated_at: string
        }
        Insert: {
          activity_id: string
          contribution_notes?: string | null
          created_at?: string
          family_member_id: string
          id?: string
          involvement_level_id: string
          specific_role?: string | null
          step_id?: string | null
          updated_at?: string
        }
        Update: {
          activity_id?: string
          contribution_notes?: string | null
          created_at?: string
          family_member_id?: string
          id?: string
          involvement_level_id?: string
          specific_role?: string | null
          step_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_participants_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "business_activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_participants_involvement_level_id_fkey"
            columns: ["involvement_level_id"]
            isOneToOne: false
            referencedRelation: "involvement_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_participants_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "activity_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_steps: {
        Row: {
          activity_id: string
          created_at: string
          dependencies: string[] | null
          estimated_hours: number | null
          id: string
          is_decision_point: boolean | null
          step_code: string
          step_description: string | null
          step_order: number
          step_title: string
          updated_at: string
        }
        Insert: {
          activity_id: string
          created_at?: string
          dependencies?: string[] | null
          estimated_hours?: number | null
          id?: string
          is_decision_point?: boolean | null
          step_code: string
          step_description?: string | null
          step_order: number
          step_title: string
          updated_at?: string
        }
        Update: {
          activity_id?: string
          created_at?: string
          dependencies?: string[] | null
          estimated_hours?: number | null
          id?: string
          is_decision_point?: boolean | null
          step_code?: string
          step_description?: string | null
          step_order?: number
          step_title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_steps_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "business_activities"
            referencedColumns: ["id"]
          },
        ]
      }
      agency_partner_network: {
        Row: {
          agency_id: string
          created_at: string | null
          joint_win_count: number | null
          labor_model: string | null
          last_engagement: string | null
          merged_ecosystem_entity_name: string | null
          network_rank: number | null
          partner_code: string
          relationship_score: number
          updated_at: string | null
        }
        Insert: {
          agency_id: string
          created_at?: string | null
          joint_win_count?: number | null
          labor_model?: string | null
          last_engagement?: string | null
          merged_ecosystem_entity_name?: string | null
          network_rank?: number | null
          partner_code: string
          relationship_score?: number
          updated_at?: string | null
        }
        Update: {
          agency_id?: string
          created_at?: string | null
          joint_win_count?: number | null
          labor_model?: string | null
          last_engagement?: string | null
          merged_ecosystem_entity_name?: string | null
          network_rank?: number | null
          partner_code?: string
          relationship_score?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_activity_log: {
        Row: {
          agent_id: string | null
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          user_id: string | null
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          user_id?: string | null
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_activity_log_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agent_registry"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_automation_readiness: {
        Row: {
          agent_code: string
          automation_resistance_score: number
          change_adaptability_rating: number
          created_at: string
          id: string
          innovation_openness_score: number
          process_flexibility_index: number
          tech_comfort_level: number
          training_willingness_score: number
          updated_at: string
        }
        Insert: {
          agent_code: string
          automation_resistance_score?: number
          change_adaptability_rating?: number
          created_at?: string
          id?: string
          innovation_openness_score?: number
          process_flexibility_index?: number
          tech_comfort_level?: number
          training_willingness_score?: number
          updated_at?: string
        }
        Update: {
          agent_code?: string
          automation_resistance_score?: number
          change_adaptability_rating?: number
          created_at?: string
          id?: string
          innovation_openness_score?: number
          process_flexibility_index?: number
          tech_comfort_level?: number
          training_willingness_score?: number
          updated_at?: string
        }
        Relationships: []
      }
      agent_collaboration_metrics: {
        Row: {
          agent_code: string
          communication_style: string
          conflict_resolution_approach: string
          created_at: string
          cross_functional_comfort: number
          id: string
          leadership_preference: string
          mentoring_capacity_score: number
          remote_collaboration_effectiveness: number
          team_size_preference: string
          updated_at: string
        }
        Insert: {
          agent_code: string
          communication_style?: string
          conflict_resolution_approach?: string
          created_at?: string
          cross_functional_comfort?: number
          id?: string
          leadership_preference?: string
          mentoring_capacity_score?: number
          remote_collaboration_effectiveness?: number
          team_size_preference?: string
          updated_at?: string
        }
        Update: {
          agent_code?: string
          communication_style?: string
          conflict_resolution_approach?: string
          created_at?: string
          cross_functional_comfort?: number
          id?: string
          leadership_preference?: string
          mentoring_capacity_score?: number
          remote_collaboration_effectiveness?: number
          team_size_preference?: string
          updated_at?: string
        }
        Relationships: []
      }
      agent_display_metadata: {
        Row: {
          agent_display_name: string | null
          summary: string | null
          title: string | null
        }
        Insert: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Update: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Relationships: []
      }
      agent_enhanced_skills: {
        Row: {
          agent_code: string
          continuous_learning_commitment: number
          created_at: string
          cross_domain_versatility: number
          expertise_validation_level: string
          id: string
          industry_depth_score: number
          learning_velocity_index: number
          skill_transfer_ability: number
          updated_at: string
        }
        Insert: {
          agent_code: string
          continuous_learning_commitment?: number
          created_at?: string
          cross_domain_versatility?: number
          expertise_validation_level?: string
          id?: string
          industry_depth_score?: number
          learning_velocity_index?: number
          skill_transfer_ability?: number
          updated_at?: string
        }
        Update: {
          agent_code?: string
          continuous_learning_commitment?: number
          created_at?: string
          cross_domain_versatility?: number
          expertise_validation_level?: string
          id?: string
          industry_depth_score?: number
          learning_velocity_index?: number
          skill_transfer_ability?: number
          updated_at?: string
        }
        Relationships: []
      }
      agent_external_data: {
        Row: {
          agent_code: string
          competitive_positioning_score: number | null
          created_at: string
          external_validation_sources: string[] | null
          id: string
          industry_demand_index: number | null
          last_updated: string
          market_intelligence_data: Json | null
          market_salary_benchmark: number | null
          onet_skill_alignment_score: number | null
          updated_at: string
        }
        Insert: {
          agent_code: string
          competitive_positioning_score?: number | null
          created_at?: string
          external_validation_sources?: string[] | null
          id?: string
          industry_demand_index?: number | null
          last_updated?: string
          market_intelligence_data?: Json | null
          market_salary_benchmark?: number | null
          onet_skill_alignment_score?: number | null
          updated_at?: string
        }
        Update: {
          agent_code?: string
          competitive_positioning_score?: number | null
          created_at?: string
          external_validation_sources?: string[] | null
          id?: string
          industry_demand_index?: number | null
          last_updated?: string
          market_intelligence_data?: Json | null
          market_salary_benchmark?: number | null
          onet_skill_alignment_score?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      agent_feature_requests: {
        Row: {
          classification: string | null
          coverage_score: number | null
          created_at: string | null
          department: string | null
          id: string
          job_id: string | null
          missing_skills: string[] | null
          reason: string | null
          slack_pct: number | null
          title: string | null
        }
        Insert: {
          classification?: string | null
          coverage_score?: number | null
          created_at?: string | null
          department?: string | null
          id?: string
          job_id?: string | null
          missing_skills?: string[] | null
          reason?: string | null
          slack_pct?: number | null
          title?: string | null
        }
        Update: {
          classification?: string | null
          coverage_score?: number | null
          created_at?: string | null
          department?: string | null
          id?: string
          job_id?: string | null
          missing_skills?: string[] | null
          reason?: string | null
          slack_pct?: number | null
          title?: string | null
        }
        Relationships: []
      }
      agent_financial_metrics: {
        Row: {
          agent_code: string
          budget_management_score: number
          cost_estimation_accuracy: number
          created_at: string
          financial_reporting_quality: number
          id: string
          project_profitability_history: number
          revenue_generation_track_record: number
          risk_management_capability: number
          updated_at: string
        }
        Insert: {
          agent_code: string
          budget_management_score?: number
          cost_estimation_accuracy?: number
          created_at?: string
          financial_reporting_quality?: number
          id?: string
          project_profitability_history?: number
          revenue_generation_track_record?: number
          risk_management_capability?: number
          updated_at?: string
        }
        Update: {
          agent_code?: string
          budget_management_score?: number
          cost_estimation_accuracy?: number
          created_at?: string
          financial_reporting_quality?: number
          id?: string
          project_profitability_history?: number
          revenue_generation_track_record?: number
          risk_management_capability?: number
          updated_at?: string
        }
        Relationships: []
      }
      agent_knowledge_base: {
        Row: {
          agent_name: string
          confidence_score: number | null
          content: string
          created_at: string
          expires_at: string | null
          id: string
          knowledge_type: string
          relevance_tags: string[] | null
          source: string | null
          updated_at: string
        }
        Insert: {
          agent_name: string
          confidence_score?: number | null
          content: string
          created_at?: string
          expires_at?: string | null
          id?: string
          knowledge_type: string
          relevance_tags?: string[] | null
          source?: string | null
          updated_at?: string
        }
        Update: {
          agent_name?: string
          confidence_score?: number | null
          content?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          knowledge_type?: string
          relevance_tags?: string[] | null
          source?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      agent_pack_activity: {
        Row: {
          created_at: string | null
          event: string
          id: string
          pack_id: string | null
        }
        Insert: {
          created_at?: string | null
          event: string
          id?: string
          pack_id?: string | null
        }
        Update: {
          created_at?: string | null
          event?: string
          id?: string
          pack_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_pack_activity_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "agent_packs"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_pack_pricing: {
        Row: {
          annual_price: number | null
          base_price: number
          created_at: string | null
          custom_integrations: boolean | null
          id: string
          implementation_included: boolean | null
          included_features: string[] | null
          max_agents: number
          max_monthly_hours: number | null
          monthly_price: number | null
          pack_id: string | null
          priority_support: boolean | null
          support_level: string | null
          tier_name: string
          updated_at: string | null
        }
        Insert: {
          annual_price?: number | null
          base_price: number
          created_at?: string | null
          custom_integrations?: boolean | null
          id?: string
          implementation_included?: boolean | null
          included_features?: string[] | null
          max_agents: number
          max_monthly_hours?: number | null
          monthly_price?: number | null
          pack_id?: string | null
          priority_support?: boolean | null
          support_level?: string | null
          tier_name: string
          updated_at?: string | null
        }
        Update: {
          annual_price?: number | null
          base_price?: number
          created_at?: string | null
          custom_integrations?: boolean | null
          id?: string
          implementation_included?: boolean | null
          included_features?: string[] | null
          max_agents?: number
          max_monthly_hours?: number | null
          monthly_price?: number | null
          pack_id?: string | null
          priority_support?: boolean | null
          support_level?: string | null
          tier_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_pack_pricing_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "agent_packs"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_packs: {
        Row: {
          agents: Json
          cost: number
          created_at: string | null
          id: string
          name: string
          reuse_score: number
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          agents: Json
          cost: number
          created_at?: string | null
          id?: string
          name: string
          reuse_score: number
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          agents?: Json
          cost?: number
          created_at?: string | null
          id?: string
          name?: string
          reuse_score?: number
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_performance: {
        Row: {
          agent_code: string
          created_at: string | null
          feedback_notes: string | null
          human_override: boolean | null
          labor_model: string | null
          logged_at: string | null
          perf_id: string
          reviewer_score: number | null
          rft_id: string
          section: string
          updated_at: string | null
          usage_time: number | null
          win_loss: boolean | null
        }
        Insert: {
          agent_code: string
          created_at?: string | null
          feedback_notes?: string | null
          human_override?: boolean | null
          labor_model?: string | null
          logged_at?: string | null
          perf_id?: string
          reviewer_score?: number | null
          rft_id: string
          section: string
          updated_at?: string | null
          usage_time?: number | null
          win_loss?: boolean | null
        }
        Update: {
          agent_code?: string
          created_at?: string | null
          feedback_notes?: string | null
          human_override?: boolean | null
          labor_model?: string | null
          logged_at?: string | null
          perf_id?: string
          reviewer_score?: number | null
          rft_id?: string
          section?: string
          updated_at?: string | null
          usage_time?: number | null
          win_loss?: boolean | null
        }
        Relationships: []
      }
      agent_performance_analytics: {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: number | null
          auth_method: string | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: number | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: number | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: number | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: number | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: string | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: string | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": number | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: string | null
          personality_c: number | null
          personality_e: number | null
          personality_n: string | null
          personality_o: number | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: number | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: number | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: number | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: number | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      agent_prices: {
        Row: {
          agent_code: string
          price_monthly: number
          updated_at: string | null
        }
        Insert: {
          agent_code: string
          price_monthly: number
          updated_at?: string | null
        }
        Update: {
          agent_code?: string
          price_monthly?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_prices_temp: {
        Row: {
          agent_count: number | null
          bundle_id: number | null
          bundle_name: string | null
          department: string | null
          description: string | null
          discount_pct: number | null
          lead_agent_code: string | null
          lead_agent_name: string | null
        }
        Insert: {
          agent_count?: number | null
          bundle_id?: number | null
          bundle_name?: string | null
          department?: string | null
          description?: string | null
          discount_pct?: number | null
          lead_agent_code?: string | null
          lead_agent_name?: string | null
        }
        Update: {
          agent_count?: number | null
          bundle_id?: number | null
          bundle_name?: string | null
          department?: string | null
          description?: string | null
          discount_pct?: number | null
          lead_agent_code?: string | null
          lead_agent_name?: string | null
        }
        Relationships: []
      }
      agent_pricing_tiers: {
        Row: {
          agent_code: string
          api_rate_limit: number | null
          created_at: string | null
          deployment_type: string | null
          id: string
          includes_source_code: boolean | null
          max_executions_per_month: number | null
          monthly_price: number
          pricing_tier: string | null
          setup_cost: number | null
          sla_uptime_pct: number | null
          support_level: string | null
          updated_at: string | null
          white_label_available: boolean | null
        }
        Insert: {
          agent_code: string
          api_rate_limit?: number | null
          created_at?: string | null
          deployment_type?: string | null
          id?: string
          includes_source_code?: boolean | null
          max_executions_per_month?: number | null
          monthly_price: number
          pricing_tier?: string | null
          setup_cost?: number | null
          sla_uptime_pct?: number | null
          support_level?: string | null
          updated_at?: string | null
          white_label_available?: boolean | null
        }
        Update: {
          agent_code?: string
          api_rate_limit?: number | null
          created_at?: string | null
          deployment_type?: string | null
          id?: string
          includes_source_code?: boolean | null
          max_executions_per_month?: number | null
          monthly_price?: number
          pricing_tier?: string | null
          setup_cost?: number | null
          sla_uptime_pct?: number | null
          support_level?: string | null
          updated_at?: string | null
          white_label_available?: boolean | null
        }
        Relationships: []
      }
      agent_registry: {
        Row: {
          agent_type: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          name: string
          parameters: Json | null
          status: string
          updated_at: string
        }
        Insert: {
          agent_type: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name: string
          parameters?: Json | null
          status?: string
          updated_at?: string
        }
        Update: {
          agent_type?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name?: string
          parameters?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      agent_runs: {
        Row: {
          agent_id: string | null
          completed_at: string | null
          error: string | null
          id: string
          input_data: Json | null
          output_data: Json | null
          started_at: string | null
          status: string
          task_id: string | null
          user_id: string | null
        }
        Insert: {
          agent_id?: string | null
          completed_at?: string | null
          error?: string | null
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string | null
          status?: string
          task_id?: string | null
          user_id?: string | null
        }
        Update: {
          agent_id?: string | null
          completed_at?: string | null
          error?: string | null
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string | null
          status?: string
          task_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_runs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agent_registry"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_states: {
        Row: {
          active: boolean
          agent_key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          active?: boolean
          agent_key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          active?: boolean
          agent_key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      agent_technical_specs: {
        Row: {
          agent_code: string
          api_endpoint_pattern: string | null
          auto_scaling_enabled: boolean | null
          backup_frequency: string | null
          compliance_standards: string[] | null
          cpu_requirements_cores: number | null
          created_at: string | null
          docker_image: string | null
          github_repo_url: string | null
          id: string
          kubernetes_ready: boolean | null
          memory_requirements_mb: number | null
          monitoring_included: boolean | null
          network_requirements: string | null
          performance_benchmark_ops_per_sec: number | null
          security_certifications: string[] | null
          self_hosting_complexity: string | null
          storage_requirements_gb: number | null
          supported_integrations: string[] | null
          updated_at: string | null
        }
        Insert: {
          agent_code: string
          api_endpoint_pattern?: string | null
          auto_scaling_enabled?: boolean | null
          backup_frequency?: string | null
          compliance_standards?: string[] | null
          cpu_requirements_cores?: number | null
          created_at?: string | null
          docker_image?: string | null
          github_repo_url?: string | null
          id?: string
          kubernetes_ready?: boolean | null
          memory_requirements_mb?: number | null
          monitoring_included?: boolean | null
          network_requirements?: string | null
          performance_benchmark_ops_per_sec?: number | null
          security_certifications?: string[] | null
          self_hosting_complexity?: string | null
          storage_requirements_gb?: number | null
          supported_integrations?: string[] | null
          updated_at?: string | null
        }
        Update: {
          agent_code?: string
          api_endpoint_pattern?: string | null
          auto_scaling_enabled?: boolean | null
          backup_frequency?: string | null
          compliance_standards?: string[] | null
          cpu_requirements_cores?: number | null
          created_at?: string | null
          docker_image?: string | null
          github_repo_url?: string | null
          id?: string
          kubernetes_ready?: boolean | null
          memory_requirements_mb?: number | null
          monitoring_included?: boolean | null
          network_requirements?: string | null
          performance_benchmark_ops_per_sec?: number | null
          security_certifications?: string[] | null
          self_hosting_complexity?: string | null
          storage_requirements_gb?: number | null
          supported_integrations?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_templates: {
        Row: {
          category: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_public: boolean | null
          name: string
          template_data: Json
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          template_data: Json
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          template_data?: Json
          updated_at?: string
        }
        Relationships: []
      }
      agent_variations: {
        Row: {
          agent_code: string
          consultant_hourly_rate: number | null
          core_skills: string | null
          created_at: string | null
          delivery_model: string | null
          domain: string | null
          final_cost: number | null
          function: string | null
          id: string
          integration_patterns: string | null
          parent_agent_code: string | null
          persona: string | null
          primary_cloud_environments: string | null
          sfia_level: string | null
          strategic_impact_score: number | null
          summary_bio: string | null
          task_coverage_pct: number | null
          tech_stack: string | null
          technical_complexity_score: number | null
          time_to_deploy: number | null
          updated_at: string | null
          variation_id: string | null
          variation_name: string | null
          weighted_score: number | null
        }
        Insert: {
          agent_code: string
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          function?: string | null
          id?: string
          integration_patterns?: string | null
          parent_agent_code?: string | null
          persona?: string | null
          primary_cloud_environments?: string | null
          sfia_level?: string | null
          strategic_impact_score?: number | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          technical_complexity_score?: number | null
          time_to_deploy?: number | null
          updated_at?: string | null
          variation_id?: string | null
          variation_name?: string | null
          weighted_score?: number | null
        }
        Update: {
          agent_code?: string
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          function?: string | null
          id?: string
          integration_patterns?: string | null
          parent_agent_code?: string | null
          persona?: string | null
          primary_cloud_environments?: string | null
          sfia_level?: string | null
          strategic_impact_score?: number | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          technical_complexity_score?: number | null
          time_to_deploy?: number | null
          updated_at?: string | null
          variation_id?: string | null
          variation_name?: string | null
          weighted_score?: number | null
        }
        Relationships: []
      }
      agent_variations_catalog: {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: string | null
          Estimated_Price: string | null
          Estimated_Profit: string | null
          Integration_Pattern: string | null
          Variation_ID: string | null
          Variation_Name: string | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Relationships: []
      }
      agentpackages: {
        Row: {
          agents_count: number | null
          description: string | null
          device_limit: string | null
          name: string | null
          package_id: string
          price_per_month: number | null
        }
        Insert: {
          agents_count?: number | null
          description?: string | null
          device_limit?: string | null
          name?: string | null
          package_id: string
          price_per_month?: number | null
        }
        Update: {
          agents_count?: number | null
          description?: string | null
          device_limit?: string | null
          name?: string | null
          package_id?: string
          price_per_month?: number | null
        }
        Relationships: []
      }
      agentpacks: {
        Row: {
          agents_included: number | null
          category: string | null
          description: string | null
          fte_replaced: number | null
          human_name: string | null
          name: string | null
          pack_id: string
          price_per_month: number | null
          savings_pct: number | null
        }
        Insert: {
          agents_included?: number | null
          category?: string | null
          description?: string | null
          fte_replaced?: number | null
          human_name?: string | null
          name?: string | null
          pack_id: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Update: {
          agents_included?: number | null
          category?: string | null
          description?: string | null
          fte_replaced?: number | null
          human_name?: string | null
          name?: string | null
          pack_id?: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Relationships: []
      }
      agents: {
        Row: {
          "12mo_TCO": number | null
          agent_coverage_score: number | null
          agent_id: string
          agent_intelligence_type: string | null
          agent_rank_score: number | null
          ai_summary: string | null
          aps_hourly_rate: number | null
          augmented_delivery_cost: number | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          certifications: string | null
          clearance_required: string | null
          cloud: string | null
          compliance_gap_flag: boolean | null
          consultant_hourly_rate: number | null
          contractor_hourly_rate: number | null
          deployment_rank: number | null
          estimated_cost: number | null
          estimated_price: number | null
          estimated_profit: number | null
          estimated_total_hours: number | null
          function: string | null
          hourly_rate: number | null
          human_delivery_cost: number | null
          industry: string | null
          integration_pattern: string | null
          location: string | null
          output_rate: number | null
          output_unit_cost: number | null
          performance_efficiency_ratio: number | null
          persona: string | null
          recommended_clearance: string | null
          recommended_delivery_model: string | null
          region_unemployment_rate: number | null
          regulatory_flag: boolean | null
          roi: number | null
          role_name: string | null
          task_coverage_pct: number | null
          tech_stack: string | null
          tool: string | null
          total_years_experience: number | null
          utilization_pct: number | null
          weightedscore: number | null
        }
        Insert: {
          "12mo_TCO"?: number | null
          agent_coverage_score?: number | null
          agent_id: string
          agent_intelligence_type?: string | null
          agent_rank_score?: number | null
          ai_summary?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          certifications?: string | null
          clearance_required?: string | null
          cloud?: string | null
          compliance_gap_flag?: boolean | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          deployment_rank?: number | null
          estimated_cost?: number | null
          estimated_price?: number | null
          estimated_profit?: number | null
          estimated_total_hours?: number | null
          function?: string | null
          hourly_rate?: number | null
          human_delivery_cost?: number | null
          industry?: string | null
          integration_pattern?: string | null
          location?: string | null
          output_rate?: number | null
          output_unit_cost?: number | null
          performance_efficiency_ratio?: number | null
          persona?: string | null
          recommended_clearance?: string | null
          recommended_delivery_model?: string | null
          region_unemployment_rate?: number | null
          regulatory_flag?: boolean | null
          roi?: number | null
          role_name?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          tool?: string | null
          total_years_experience?: number | null
          utilization_pct?: number | null
          weightedscore?: number | null
        }
        Update: {
          "12mo_TCO"?: number | null
          agent_coverage_score?: number | null
          agent_id?: string
          agent_intelligence_type?: string | null
          agent_rank_score?: number | null
          ai_summary?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          certifications?: string | null
          clearance_required?: string | null
          cloud?: string | null
          compliance_gap_flag?: boolean | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          deployment_rank?: number | null
          estimated_cost?: number | null
          estimated_price?: number | null
          estimated_profit?: number | null
          estimated_total_hours?: number | null
          function?: string | null
          hourly_rate?: number | null
          human_delivery_cost?: number | null
          industry?: string | null
          integration_pattern?: string | null
          location?: string | null
          output_rate?: number | null
          output_unit_cost?: number | null
          performance_efficiency_ratio?: number | null
          persona?: string | null
          recommended_clearance?: string | null
          recommended_delivery_model?: string | null
          region_unemployment_rate?: number | null
          regulatory_flag?: boolean | null
          roi?: number | null
          role_name?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          tool?: string | null
          total_years_experience?: number | null
          utilization_pct?: number | null
          weightedscore?: number | null
        }
        Relationships: []
      }
      allowed_domains: {
        Row: {
          created_at: string | null
          description: string | null
          domain: string
          id: string
          is_active: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          domain: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          domain?: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      api_sources: {
        Row: {
          api_endpoint: string
          created_at: string
          failed_imports: number | null
          filters: Json | null
          id: string
          is_active: boolean | null
          last_error: string | null
          last_sync: string | null
          source_name: string
          successful_imports: number | null
          sync_config: Json | null
          sync_frequency: string | null
          total_records_found: number | null
          updated_at: string
        }
        Insert: {
          api_endpoint: string
          created_at?: string
          failed_imports?: number | null
          filters?: Json | null
          id?: string
          is_active?: boolean | null
          last_error?: string | null
          last_sync?: string | null
          source_name: string
          successful_imports?: number | null
          sync_config?: Json | null
          sync_frequency?: string | null
          total_records_found?: number | null
          updated_at?: string
        }
        Update: {
          api_endpoint?: string
          created_at?: string
          failed_imports?: number | null
          filters?: Json | null
          id?: string
          is_active?: boolean | null
          last_error?: string | null
          last_sync?: string | null
          source_name?: string
          successful_imports?: number | null
          sync_config?: Json | null
          sync_frequency?: string | null
          total_records_found?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      apicostfeeds: {
        Row: {
          component_id: string | null
          feed_id: string
          last_fetched: string | null
          notes: string | null
          status: string | null
        }
        Insert: {
          component_id?: string | null
          feed_id: string
          last_fetched?: string | null
          notes?: string | null
          status?: string | null
        }
        Update: {
          component_id?: string | null
          feed_id?: string
          last_fetched?: string | null
          notes?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "apicostfeeds_component_id_fkey"
            columns: ["component_id"]
            isOneToOne: false
            referencedRelation: "costcomponents"
            referencedColumns: ["component_id"]
          },
        ]
      }
      aps_payscale: {
        Row: {
          band_code: string
          currency: string | null
          effective_date: string | null
          salary_max: number | null
          salary_min: number | null
        }
        Insert: {
          band_code: string
          currency?: string | null
          effective_date?: string | null
          salary_max?: number | null
          salary_min?: number | null
        }
        Update: {
          band_code?: string
          currency?: string | null
          effective_date?: string | null
          salary_max?: number | null
          salary_min?: number | null
        }
        Relationships: []
      }
      aps_role_agent_alignment: {
        Row: {
          agent_id: string | null
          agent_name: string | null
          aps_band: string | null
          aps_role_title: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      aps_roles_and_skills: {
        Row: {
          aps_band: string
          aps_role: string
          complexity: string
          id: number
          required_skills: string
          required_tasks: string
        }
        Insert: {
          aps_band: string
          aps_role: string
          complexity: string
          id?: number
          required_skills: string
          required_tasks: string
        }
        Update: {
          aps_band?: string
          aps_role?: string
          complexity?: string
          id?: number
          required_skills?: string
          required_tasks?: string
        }
        Relationships: []
      }
      assessment_campaigns: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          organization_id: string | null
          start_date: string | null
          status: string | null
          target_departments: string[] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          organization_id?: string | null
          start_date?: string | null
          status?: string | null
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          organization_id?: string | null
          start_date?: string | null
          status?: string | null
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_campaigns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_insights: {
        Row: {
          audit_report_id: string | null
          created_at: string
          data_points: Json | null
          description: string
          id: string
          impact_score: number | null
          insight_type: string
          recommendation: string | null
          severity: string
          title: string
        }
        Insert: {
          audit_report_id?: string | null
          created_at?: string
          data_points?: Json | null
          description: string
          id?: string
          impact_score?: number | null
          insight_type: string
          recommendation?: string | null
          severity?: string
          title: string
        }
        Update: {
          audit_report_id?: string | null
          created_at?: string
          data_points?: Json | null
          description?: string
          id?: string
          impact_score?: number | null
          insight_type?: string
          recommendation?: string | null
          severity?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_insights_audit_report_id_fkey"
            columns: ["audit_report_id"]
            isOneToOne: false
            referencedRelation: "site_audit_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_progress: {
        Row: {
          audit_id: string | null
          completed_steps: number
          created_at: string
          current_step: string
          id: string
          status_message: string | null
          total_steps: number
          updated_at: string
        }
        Insert: {
          audit_id?: string | null
          completed_steps?: number
          created_at?: string
          current_step: string
          id?: string
          status_message?: string | null
          total_steps?: number
          updated_at?: string
        }
        Update: {
          audit_id?: string | null
          completed_steps?: number
          created_at?: string
          current_step?: string
          id?: string
          status_message?: string | null
          total_steps?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_progress_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "platform_audit_results"
            referencedColumns: ["id"]
          },
        ]
      }
      auditlog: {
        Row: {
          action: string | null
          audit_id: number
          entity_id: string | null
          entity_type: string | null
          metadata: Json | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          action?: string | null
          audit_id?: number
          entity_id?: string | null
          entity_type?: string | null
          metadata?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string | null
          audit_id?: number
          entity_id?: string | null
          entity_type?: string | null
          metadata?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      augmented_deployment_priorities: {
        Row: {
          function: string | null
          why_augmented_first: string | null
        }
        Insert: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Update: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Relationships: []
      }
      auto_parse_log: {
        Row: {
          confidence_score: number | null
          created_at: string
          document_size_kb: number | null
          error_message: string | null
          external_id: string | null
          fields_extracted: number | null
          fields_total: number | null
          id: string
          parsed_fields: Json | null
          parsing_status: string
          processing_time_ms: number | null
          raw_data: Json | null
          retry_count: number | null
          rft_id: string | null
          source_api: string
          validation_errors: string[] | null
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string
          document_size_kb?: number | null
          error_message?: string | null
          external_id?: string | null
          fields_extracted?: number | null
          fields_total?: number | null
          id?: string
          parsed_fields?: Json | null
          parsing_status: string
          processing_time_ms?: number | null
          raw_data?: Json | null
          retry_count?: number | null
          rft_id?: string | null
          source_api: string
          validation_errors?: string[] | null
        }
        Update: {
          confidence_score?: number | null
          created_at?: string
          document_size_kb?: number | null
          error_message?: string | null
          external_id?: string | null
          fields_extracted?: number | null
          fields_total?: number | null
          id?: string
          parsed_fields?: Json | null
          parsing_status?: string
          processing_time_ms?: number | null
          raw_data?: Json | null
          retry_count?: number | null
          rft_id?: string | null
          source_api?: string
          validation_errors?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "auto_parse_log_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_assessments: {
        Row: {
          additional_details: string | null
          assessment_name: string
          created_at: string
          custom_tasks: Json
          estimated_timeline_months: number | null
          id: string
          matrix_results: Json
          roi_estimate: number | null
          selected_tasks: Json
          total_effort_score: number | null
          total_impact_score: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          additional_details?: string | null
          assessment_name: string
          created_at?: string
          custom_tasks?: Json
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json
          roi_estimate?: number | null
          selected_tasks?: Json
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          additional_details?: string | null
          assessment_name?: string
          created_at?: string
          custom_tasks?: Json
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json
          roi_estimate?: number | null
          selected_tasks?: Json
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      automation_initiatives: {
        Row: {
          actual_completion_date: string | null
          actual_start_date: string | null
          assessment_id: string | null
          category: string
          created_at: string
          effort_score: number
          estimated_completion_date: string | null
          estimated_start_date: string | null
          id: string
          impact_score: number
          initiative_name: string
          priority_level: string
          resources_required: Json | null
          roi_actual: number | null
          roi_projected: number | null
          status: string
          success_metrics: Json | null
          task_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_completion_date?: string | null
          actual_start_date?: string | null
          assessment_id?: string | null
          category: string
          created_at?: string
          effort_score: number
          estimated_completion_date?: string | null
          estimated_start_date?: string | null
          id?: string
          impact_score: number
          initiative_name: string
          priority_level?: string
          resources_required?: Json | null
          roi_actual?: number | null
          roi_projected?: number | null
          status?: string
          success_metrics?: Json | null
          task_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_completion_date?: string | null
          actual_start_date?: string | null
          assessment_id?: string | null
          category?: string
          created_at?: string
          effort_score?: number
          estimated_completion_date?: string | null
          estimated_start_date?: string | null
          id?: string
          impact_score?: number
          initiative_name?: string
          priority_level?: string
          resources_required?: Json | null
          roi_actual?: number | null
          roi_projected?: number | null
          status?: string
          success_metrics?: Json | null
          task_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_initiatives_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "automation_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      autoparse_orchestrator_log: {
        Row: {
          completed_at: string | null
          failed_parses: number | null
          id: string
          market_insights_generated: number | null
          sources_synced: string[]
          started_at: string | null
          status: string | null
          successful_parses: number | null
          sync_batch_id: string | null
          sync_duration_ms: number | null
          total_records_processed: number | null
        }
        Insert: {
          completed_at?: string | null
          failed_parses?: number | null
          id?: string
          market_insights_generated?: number | null
          sources_synced: string[]
          started_at?: string | null
          status?: string | null
          successful_parses?: number | null
          sync_batch_id?: string | null
          sync_duration_ms?: number | null
          total_records_processed?: number | null
        }
        Update: {
          completed_at?: string | null
          failed_parses?: number | null
          id?: string
          market_insights_generated?: number | null
          sources_synced?: string[]
          started_at?: string | null
          status?: string | null
          successful_parses?: number | null
          sync_batch_id?: string | null
          sync_duration_ms?: number | null
          total_records_processed?: number | null
        }
        Relationships: []
      }
      bd_summaries: {
        Row: {
          created_at: string
          html_content: string
          id: string
          json_data: Json
          report_date: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          html_content: string
          id?: string
          json_data: Json
          report_date?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          html_content?: string
          id?: string
          json_data?: Json
          report_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      billingevents: {
        Row: {
          amount: number | null
          billing_id: string | null
          event_id: number
          timestamp: string | null
          type: string | null
        }
        Insert: {
          amount?: number | null
          billing_id?: string | null
          event_id?: number
          timestamp?: string | null
          type?: string | null
        }
        Update: {
          amount?: number | null
          billing_id?: string | null
          event_id?: number
          timestamp?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "billingevents_billing_id_fkey"
            columns: ["billing_id"]
            isOneToOne: false
            referencedRelation: "billingrecords"
            referencedColumns: ["billing_id"]
          },
        ]
      }
      billingrecords: {
        Row: {
          amount: number | null
          billing_id: string
          currency: string | null
          customer_id: string | null
          period_end: string | null
          period_start: string | null
          status: string | null
        }
        Insert: {
          amount?: number | null
          billing_id: string
          currency?: string | null
          customer_id?: string | null
          period_end?: string | null
          period_start?: string | null
          status?: string | null
        }
        Update: {
          amount?: number | null
          billing_id?: string
          currency?: string | null
          customer_id?: string | null
          period_end?: string | null
          period_start?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "billingrecords_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      boilerplate_library: {
        Row: {
          category: string
          content_template: string
          content_type: string
          created_at: string | null
          delivery_models: string[] | null
          id: string
          is_active: boolean | null
          required_variables: Json | null
          template_code: string
          template_name: string
          updated_at: string | null
          version: number | null
        }
        Insert: {
          category: string
          content_template: string
          content_type: string
          created_at?: string | null
          delivery_models?: string[] | null
          id?: string
          is_active?: boolean | null
          required_variables?: Json | null
          template_code: string
          template_name: string
          updated_at?: string | null
          version?: number | null
        }
        Update: {
          category?: string
          content_template?: string
          content_type?: string
          created_at?: string | null
          delivery_models?: string[] | null
          id?: string
          is_active?: boolean | null
          required_variables?: Json | null
          template_code?: string
          template_name?: string
          updated_at?: string | null
          version?: number | null
        }
        Relationships: []
      }
      boilerplate_templates: {
        Row: {
          content: string
          created_at: string | null
          delivery_model: string | null
          id: string
          is_active: boolean | null
          section_type: string
          template_name: string
          updated_at: string | null
          variables: Json | null
        }
        Insert: {
          content: string
          created_at?: string | null
          delivery_model?: string | null
          id?: string
          is_active?: boolean | null
          section_type: string
          template_name: string
          updated_at?: string | null
          variables?: Json | null
        }
        Update: {
          content?: string
          created_at?: string | null
          delivery_model?: string | null
          id?: string
          is_active?: boolean | null
          section_type?: string
          template_name?: string
          updated_at?: string | null
          variables?: Json | null
        }
        Relationships: []
      }
      budgetallocations: {
        Row: {
          allocated_amount: number | null
          budget_id: number
          cost_center: string | null
          period: string | null
        }
        Insert: {
          allocated_amount?: number | null
          budget_id?: number
          cost_center?: string | null
          period?: string | null
        }
        Update: {
          allocated_amount?: number | null
          budget_id?: number
          cost_center?: string | null
          period?: string | null
        }
        Relationships: []
      }
      bundle_categories: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      bundle_components: {
        Row: {
          bundle_id: string
          created_at: string
          description: string | null
          display_order: number
          id: string
          name: string
          quantity: string | null
          updated_at: string
        }
        Insert: {
          bundle_id: string
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name: string
          quantity?: string | null
          updated_at?: string
        }
        Update: {
          bundle_id?: string
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name?: string
          quantity?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bundle_components_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "bundles"
            referencedColumns: ["id"]
          },
        ]
      }
      bundle_recommendations: {
        Row: {
          bundle_type: string
          confidence_score: number
          cost_savings_percent: number | null
          created_at: string | null
          department_fit: string[] | null
          estimated_synergy_boost: number | null
          id: string
          implementation_complexity: string | null
          primary_agent_code: string
          recommended_agent_codes: string[]
          success_rate_estimate: number | null
          updated_at: string | null
          use_case_description: string | null
        }
        Insert: {
          bundle_type: string
          confidence_score?: number
          cost_savings_percent?: number | null
          created_at?: string | null
          department_fit?: string[] | null
          estimated_synergy_boost?: number | null
          id?: string
          implementation_complexity?: string | null
          primary_agent_code: string
          recommended_agent_codes: string[]
          success_rate_estimate?: number | null
          updated_at?: string | null
          use_case_description?: string | null
        }
        Update: {
          bundle_type?: string
          confidence_score?: number
          cost_savings_percent?: number | null
          created_at?: string | null
          department_fit?: string[] | null
          estimated_synergy_boost?: number | null
          id?: string
          implementation_complexity?: string | null
          primary_agent_code?: string
          recommended_agent_codes?: string[]
          success_rate_estimate?: number | null
          updated_at?: string | null
          use_case_description?: string | null
        }
        Relationships: []
      }
      bundleagents: {
        Row: {
          agent_code: string
          bundle_id: string
        }
        Insert: {
          agent_code: string
          bundle_id: string
        }
        Update: {
          agent_code?: string
          bundle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bundleagents_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
        ]
      }
      bundles: {
        Row: {
          category_id: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          price: number | null
          sku: string
          updated_at: string
        }
        Insert: {
          category_id: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          price?: number | null
          sku: string
          updated_at?: string
        }
        Update: {
          category_id?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          price?: number | null
          sku?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bundles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "bundle_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      business_activities: {
        Row: {
          activity_code: string
          business_value_score: number | null
          category: string
          complexity_level: string | null
          created_at: string
          description: string | null
          estimated_duration_days: number | null
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          activity_code: string
          business_value_score?: number | null
          category: string
          complexity_level?: string | null
          created_at?: string
          description?: string | null
          estimated_duration_days?: number | null
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          activity_code?: string
          business_value_score?: number | null
          category?: string
          complexity_level?: string | null
          created_at?: string
          description?: string | null
          estimated_duration_days?: number | null
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      calculator_results: {
        Row: {
          calculator_type_id: string | null
          created_at: string | null
          id: string
          input_data: Json
          metadata: Json | null
          result_data: Json
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          calculator_type_id?: string | null
          created_at?: string | null
          id?: string
          input_data: Json
          metadata?: Json | null
          result_data: Json
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          calculator_type_id?: string | null
          created_at?: string | null
          id?: string
          input_data?: Json
          metadata?: Json | null
          result_data?: Json
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calculator_results_calculator_type_id_fkey"
            columns: ["calculator_type_id"]
            isOneToOne: false
            referencedRelation: "calculator_types"
            referencedColumns: ["id"]
          },
        ]
      }
      calculator_sessions: {
        Row: {
          approach_question: string | null
          avg_hourly_wage: string | null
          breach_cost: string | null
          breach_risk_percent: string | null
          challenges_question: string | null
          company_name: string
          company_revenue: string | null
          contractor_cost: string | null
          created_at: string | null
          device_replacement_cost: string | null
          downtime_cost_per_hour: string | null
          downtime_hours: string | null
          downtime_last_year: boolean | null
          id: string
          industry: string | null
          it_issues_frequency: string | null
          it_staff_cost: string | null
          name: string | null
          number_of_connected_devices: string | null
          number_of_users: string
          number_of_windows_users: string | null
          priority_question: string | null
          productivity_loss_mins: string | null
          results: Json | null
          revenue_per_employee: string | null
          selected_services: string[] | null
          software_cost: string | null
          timeline_question: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          approach_question?: string | null
          avg_hourly_wage?: string | null
          breach_cost?: string | null
          breach_risk_percent?: string | null
          challenges_question?: string | null
          company_name: string
          company_revenue?: string | null
          contractor_cost?: string | null
          created_at?: string | null
          device_replacement_cost?: string | null
          downtime_cost_per_hour?: string | null
          downtime_hours?: string | null
          downtime_last_year?: boolean | null
          id?: string
          industry?: string | null
          it_issues_frequency?: string | null
          it_staff_cost?: string | null
          name?: string | null
          number_of_connected_devices?: string | null
          number_of_users: string
          number_of_windows_users?: string | null
          priority_question?: string | null
          productivity_loss_mins?: string | null
          results?: Json | null
          revenue_per_employee?: string | null
          selected_services?: string[] | null
          software_cost?: string | null
          timeline_question?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          approach_question?: string | null
          avg_hourly_wage?: string | null
          breach_cost?: string | null
          breach_risk_percent?: string | null
          challenges_question?: string | null
          company_name?: string
          company_revenue?: string | null
          contractor_cost?: string | null
          created_at?: string | null
          device_replacement_cost?: string | null
          downtime_cost_per_hour?: string | null
          downtime_hours?: string | null
          downtime_last_year?: boolean | null
          id?: string
          industry?: string | null
          it_issues_frequency?: string | null
          it_staff_cost?: string | null
          name?: string | null
          number_of_connected_devices?: string | null
          number_of_users?: string
          number_of_windows_users?: string | null
          priority_question?: string | null
          productivity_loss_mins?: string | null
          results?: Json | null
          revenue_per_employee?: string | null
          selected_services?: string[] | null
          software_cost?: string | null
          timeline_question?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      calculator_types: {
        Row: {
          code: string
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      campaign_notifications: {
        Row: {
          campaign_id: string
          content: string
          created_at: string | null
          error_message: string | null
          id: string
          notification_type: string
          participant_id: string | null
          scheduled_for: string | null
          sent_at: string | null
          status: string
          subject: string
          updated_at: string | null
        }
        Insert: {
          campaign_id: string
          content: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          notification_type: string
          participant_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject: string
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string
          content?: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          notification_type?: string
          participant_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_notifications_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "enhanced_assessment_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_notifications_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "campaign_participants"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_participants: {
        Row: {
          campaign_id: string
          completed_at: string | null
          created_at: string | null
          department: string | null
          email: string
          first_name: string | null
          id: string
          invited_at: string | null
          last_name: string | null
          last_reminder_sent: string | null
          reminder_count: number | null
          started_at: string | null
          status: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          campaign_id: string
          completed_at?: string | null
          created_at?: string | null
          department?: string | null
          email: string
          first_name?: string | null
          id?: string
          invited_at?: string | null
          last_name?: string | null
          last_reminder_sent?: string | null
          reminder_count?: number | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          campaign_id?: string
          completed_at?: string | null
          created_at?: string | null
          department?: string | null
          email?: string
          first_name?: string | null
          id?: string
          invited_at?: string | null
          last_name?: string | null
          last_reminder_sent?: string | null
          reminder_count?: number | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_participants_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "enhanced_assessment_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_templates: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_default: boolean | null
          name: string
          organization_id: string
          template_data: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          name: string
          organization_id: string
          template_data?: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
          organization_id?: string
          template_data?: Json
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      candidates: {
        Row: {
          availability: string
          clearance: string
          contract_end: string
          id: number
          location: string
          name: string
          skills: string | null
        }
        Insert: {
          availability: string
          clearance: string
          contract_end: string
          id: number
          location: string
          name: string
          skills?: string | null
        }
        Update: {
          availability?: string
          clearance?: string
          contract_end?: string
          id?: number
          location?: string
          name?: string
          skills?: string | null
        }
        Relationships: []
      }
      capability_heatmap: {
        Row: {
          domain: string
          id: string
          losses: number | null
          updated_at: string | null
          wins: number | null
        }
        Insert: {
          domain: string
          id?: string
          losses?: number | null
          updated_at?: string | null
          wins?: number | null
        }
        Update: {
          domain?: string
          id?: string
          losses?: number | null
          updated_at?: string | null
          wins?: number | null
        }
        Relationships: []
      }
      capability_profile_overlays: {
        Row: {
          agent_code: string | null
          cv_overlay_required: boolean | null
          function: string | null
          overlay_reason: string | null
          overlay_suggested_roles: string | null
          persona: string | null
          sfia_level: string | null
        }
        Insert: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Update: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Relationships: []
      }
      capability_requirements_matrix: {
        Row: {
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      capacity: {
        Row: {
          availability_pct: number
          candidate_id: string
          created_at: string | null
          current_assignments: Json
          labor_model: string | null
          last_synced: string | null
          max_onboard_time: number
          timezone: string
          updated_at: string | null
        }
        Insert: {
          availability_pct?: number
          candidate_id: string
          created_at?: string | null
          current_assignments?: Json
          labor_model?: string | null
          last_synced?: string | null
          max_onboard_time?: number
          timezone: string
          updated_at?: string | null
        }
        Update: {
          availability_pct?: number
          candidate_id?: string
          created_at?: string | null
          current_assignments?: Json
          labor_model?: string | null
          last_synced?: string | null
          max_onboard_time?: number
          timezone?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      capacity_optimization_engine: {
        Row: {
          agent_code: string | null
          assigned_hours: number | null
          delivery_model: string | null
          function: string | null
          residual_capacity_pct: number | null
          reuse_recommendation: string | null
          total_capacity: number | null
        }
        Insert: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Update: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Relationships: []
      }
      capacity_utilization_tracking: {
        Row: {
          agent_code: string
          baseline_capacity_hours: number
          client_satisfaction_score: number | null
          created_at: string | null
          efficiency_score: number | null
          excess_hours: number
          id: string
          monetized_hours: number | null
          reuse_count: number | null
          revenue_generated: number | null
          tracking_period_end: string
          tracking_period_start: string
          updated_at: string | null
          utilization_percent: number
          utilized_hours: number
        }
        Insert: {
          agent_code: string
          baseline_capacity_hours: number
          client_satisfaction_score?: number | null
          created_at?: string | null
          efficiency_score?: number | null
          excess_hours: number
          id?: string
          monetized_hours?: number | null
          reuse_count?: number | null
          revenue_generated?: number | null
          tracking_period_end: string
          tracking_period_start: string
          updated_at?: string | null
          utilization_percent: number
          utilized_hours: number
        }
        Update: {
          agent_code?: string
          baseline_capacity_hours?: number
          client_satisfaction_score?: number | null
          created_at?: string | null
          efficiency_score?: number | null
          excess_hours?: number
          id?: string
          monetized_hours?: number | null
          reuse_count?: number | null
          revenue_generated?: number | null
          tracking_period_end?: string
          tracking_period_start?: string
          updated_at?: string | null
          utilization_percent?: number
          utilized_hours?: number
        }
        Relationships: []
      }
      catalogversions: {
        Row: {
          change_type: string | null
          changed_at: string | null
          changed_by: string | null
          entity_id: string | null
          entity_type: string | null
          notes: string | null
          version_id: number
        }
        Insert: {
          change_type?: string | null
          changed_at?: string | null
          changed_by?: string | null
          entity_id?: string | null
          entity_type?: string | null
          notes?: string | null
          version_id?: number
        }
        Update: {
          change_type?: string | null
          changed_at?: string | null
          changed_by?: string | null
          entity_id?: string | null
          entity_type?: string | null
          notes?: string | null
          version_id?: number
        }
        Relationships: []
      }
      changerequests: {
        Row: {
          customer_id: string | null
          entity_id: string | null
          entity_type: string | null
          request_id: number
          requested_changes: string | null
          status: string | null
        }
        Insert: {
          customer_id?: string | null
          entity_id?: string | null
          entity_type?: string | null
          request_id?: number
          requested_changes?: string | null
          status?: string | null
        }
        Update: {
          customer_id?: string | null
          entity_id?: string | null
          entity_type?: string | null
          request_id?: number
          requested_changes?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "changerequests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      collaboration_sessions: {
        Row: {
          completed_at: string | null
          conversation_history: Json | null
          created_at: string
          id: string
          insights_generated: Json | null
          participating_agents: string[]
          session_name: string
          session_type: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          conversation_history?: Json | null
          created_at?: string
          id?: string
          insights_generated?: Json | null
          participating_agents: string[]
          session_name: string
          session_type: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          conversation_history?: Json | null
          created_at?: string
          id?: string
          insights_generated?: Json | null
          participating_agents?: string[]
          session_name?: string
          session_type?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      company_templates: {
        Row: {
          company_code: string
          company_name: string
          created_at: string
          id: string
          is_active: boolean
          sample_file_path: string | null
          template_config: Json
          updated_at: string
        }
        Insert: {
          company_code: string
          company_name: string
          created_at?: string
          id?: string
          is_active?: boolean
          sample_file_path?: string | null
          template_config: Json
          updated_at?: string
        }
        Update: {
          company_code?: string
          company_name?: string
          created_at?: string
          id?: string
          is_active?: boolean
          sample_file_path?: string | null
          template_config?: Json
          updated_at?: string
        }
        Relationships: []
      }
      computeresources: {
        Row: {
          resource_id: string
          resource_name: string | null
          unit: string | null
          unit_cost: number | null
        }
        Insert: {
          resource_id: string
          resource_name?: string | null
          unit?: string | null
          unit_cost?: number | null
        }
        Update: {
          resource_id?: string
          resource_name?: string | null
          unit?: string | null
          unit_cost?: number | null
        }
        Relationships: []
      }
      consultant_performance_metrics: {
        Row: {
          activity_score: number | null
          average_cycle_length_days: number | null
          average_deal_size: number | null
          consultant_id: string | null
          created_at: string | null
          id: string
          ladder_tier: Database["public"]["Enums"]["ladder_tier"] | null
          period_end: string
          period_start: string
          rank_position: number | null
          total_deal_value: number | null
          total_opportunities: number | null
          total_score: number | null
          updated_at: string | null
          win_rate: number | null
          won_deal_value: number | null
          won_opportunities: number | null
        }
        Insert: {
          activity_score?: number | null
          average_cycle_length_days?: number | null
          average_deal_size?: number | null
          consultant_id?: string | null
          created_at?: string | null
          id?: string
          ladder_tier?: Database["public"]["Enums"]["ladder_tier"] | null
          period_end: string
          period_start: string
          rank_position?: number | null
          total_deal_value?: number | null
          total_opportunities?: number | null
          total_score?: number | null
          updated_at?: string | null
          win_rate?: number | null
          won_deal_value?: number | null
          won_opportunities?: number | null
        }
        Update: {
          activity_score?: number | null
          average_cycle_length_days?: number | null
          average_deal_size?: number | null
          consultant_id?: string | null
          created_at?: string | null
          id?: string
          ladder_tier?: Database["public"]["Enums"]["ladder_tier"] | null
          period_end?: string
          period_start?: string
          rank_position?: number | null
          total_deal_value?: number | null
          total_opportunities?: number | null
          total_score?: number | null
          updated_at?: string | null
          win_rate?: number | null
          won_deal_value?: number | null
          won_opportunities?: number | null
        }
        Relationships: []
      }
      content_tags: {
        Row: {
          category: string
          color: string | null
          created_at: string
          id: string
          name: string
        }
        Insert: {
          category: string
          color?: string | null
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          category?: string
          color?: string | null
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      contracts: {
        Row: {
          contract_id: string
          customer_id: string | null
          discount_pct: number | null
          end_date: string | null
          sla_id: string | null
          start_date: string | null
          terms: string | null
        }
        Insert: {
          contract_id: string
          customer_id?: string | null
          discount_pct?: number | null
          end_date?: string | null
          sla_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Update: {
          contract_id?: string
          customer_id?: string | null
          discount_pct?: number | null
          end_date?: string | null
          sla_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      conversation_logs: {
        Row: {
          content: string
          created_at: string
          id: string
          processed: boolean | null
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          processed?: boolean | null
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          processed?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      core_agent_catalog: {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: string | null
          auth_method: string | null
          automated_delivery_cost: string | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: string | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: string | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: string | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: string | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: string | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: string | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: number | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: number | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": string | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: number | null
          personality_c: number | null
          personality_e: string | null
          personality_n: number | null
          personality_o: string | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: string | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: string | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: string | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: string | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: string | null
          task_cluster_tags: string | null
          task_coverage_pct: string | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: string | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: string | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      corporate_documents: {
        Row: {
          created_at: string | null
          document_name: string
          document_type: string
          expires_at: string | null
          file_path: string | null
          id: string
          is_active: boolean | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          created_at?: string | null
          document_name: string
          document_type: string
          expires_at?: string | null
          file_path?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          created_at?: string | null
          document_name?: string
          document_type?: string
          expires_at?: string | null
          file_path?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: []
      }
      corporate_policies: {
        Row: {
          category: string
          content: string
          content_type: string
          created_at: string
          id: string
          is_active: boolean
          policy_code: string
          policy_name: string
          updated_at: string
          version: number
        }
        Insert: {
          category: string
          content: string
          content_type?: string
          created_at?: string
          id?: string
          is_active?: boolean
          policy_code: string
          policy_name: string
          updated_at?: string
          version?: number
        }
        Update: {
          category?: string
          content?: string
          content_type?: string
          created_at?: string
          id?: string
          is_active?: boolean
          policy_code?: string
          policy_name?: string
          updated_at?: string
          version?: number
        }
        Relationships: []
      }
      cost_comparison_cache: {
        Row: {
          agent_code: string
          base_rate_usd: number
          calculation_date: string
          country_code: string
          expires_at: string
          id: string
          purchasing_power_equivalent: number
          sfia_level: number
          skill_tags: string[] | null
          total_cost_usd: number
        }
        Insert: {
          agent_code: string
          base_rate_usd: number
          calculation_date?: string
          country_code: string
          expires_at?: string
          id?: string
          purchasing_power_equivalent: number
          sfia_level: number
          skill_tags?: string[] | null
          total_cost_usd: number
        }
        Update: {
          agent_code?: string
          base_rate_usd?: number
          calculation_date?: string
          country_code?: string
          expires_at?: string
          id?: string
          purchasing_power_equivalent?: number
          sfia_level?: number
          skill_tags?: string[] | null
          total_cost_usd?: number
        }
        Relationships: []
      }
      costcomponents: {
        Row: {
          api_source: string | null
          component_id: string
          current_rate: number | null
          name: string | null
          unit: string | null
        }
        Insert: {
          api_source?: string | null
          component_id: string
          current_rate?: number | null
          name?: string | null
          unit?: string | null
        }
        Update: {
          api_source?: string | null
          component_id?: string
          current_rate?: number | null
          name?: string | null
          unit?: string | null
        }
        Relationships: []
      }
      cultural_profiles: {
        Row: {
          analyzed_at: string | null
          created_at: string | null
          labor_model: string | null
          rft_id: string
          tone_profile: Json
          updated_at: string | null
        }
        Insert: {
          analyzed_at?: string | null
          created_at?: string | null
          labor_model?: string | null
          rft_id: string
          tone_profile?: Json
          updated_at?: string | null
        }
        Update: {
          analyzed_at?: string | null
          created_at?: string | null
          labor_model?: string | null
          rft_id?: string
          tone_profile?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      currency_exchange_rates: {
        Row: {
          created_at: string
          data_source: string | null
          exchange_rate: number
          from_currency: string
          id: string
          rate_date: string
          to_currency: string
        }
        Insert: {
          created_at?: string
          data_source?: string | null
          exchange_rate: number
          from_currency: string
          id?: string
          rate_date?: string
          to_currency?: string
        }
        Update: {
          created_at?: string
          data_source?: string | null
          exchange_rate?: number
          from_currency?: string
          id?: string
          rate_date?: string
          to_currency?: string
        }
        Relationships: []
      }
      currencyrates: {
        Row: {
          currency: string
          date: string
          rate_to_base: number | null
        }
        Insert: {
          currency: string
          date: string
          rate_to_base?: number | null
        }
        Update: {
          currency?: string
          date?: string
          rate_to_base?: number | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          contact_info: string | null
          currency: string | null
          customer_id: string
          industry: string | null
          name: string | null
          tier: string | null
        }
        Insert: {
          contact_info?: string | null
          currency?: string | null
          customer_id: string
          industry?: string | null
          name?: string | null
          tier?: string | null
        }
        Update: {
          contact_info?: string | null
          currency?: string | null
          customer_id?: string
          industry?: string | null
          name?: string | null
          tier?: string | null
        }
        Relationships: []
      }
      cv_analyses: {
        Row: {
          created_at: string
          cv_id: string
          id: string
          overall_score: number | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          cv_id: string
          id?: string
          overall_score?: number | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          cv_id?: string
          id?: string
          overall_score?: number | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      cv_documents: {
        Row: {
          candidate_name: string | null
          created_at: string | null
          extracted_data: Json | null
          file_name: string
          file_path: string | null
          file_size: number | null
          file_type: string | null
          formatted_content: string | null
          id: string
          original_content: string | null
          page_count: number | null
          processing_status: string | null
          template_applied: string | null
          updated_at: string | null
        }
        Insert: {
          candidate_name?: string | null
          created_at?: string | null
          extracted_data?: Json | null
          file_name: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          formatted_content?: string | null
          id?: string
          original_content?: string | null
          page_count?: number | null
          processing_status?: string | null
          template_applied?: string | null
          updated_at?: string | null
        }
        Update: {
          candidate_name?: string | null
          created_at?: string | null
          extracted_data?: Json | null
          file_name?: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          formatted_content?: string | null
          id?: string
          original_content?: string | null
          page_count?: number | null
          processing_status?: string | null
          template_applied?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      cv_metric_definitions: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          type?: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Relationships: []
      }
      cv_metric_values: {
        Row: {
          analysis_id: string | null
          created_at: string
          id: string
          metric_id: string | null
          reason: string | null
          updated_at: string
          value_boolean: boolean | null
          value_date: string | null
          value_numeric: number | null
          value_text: string | null
        }
        Insert: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Update: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cv_metric_values_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "cv_analyses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cv_metric_values_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "cv_metric_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      cv_processing_history: {
        Row: {
          company_template: string
          compliance_report: Json | null
          created_at: string
          id: string
          original_filename: string | null
          pdf_file_url: string | null
          processing_status: string
          updated_at: string
          user_id: string | null
          word_file_url: string | null
        }
        Insert: {
          company_template?: string
          compliance_report?: Json | null
          created_at?: string
          id?: string
          original_filename?: string | null
          pdf_file_url?: string | null
          processing_status?: string
          updated_at?: string
          user_id?: string | null
          word_file_url?: string | null
        }
        Update: {
          company_template?: string
          compliance_report?: Json | null
          created_at?: string
          id?: string
          original_filename?: string | null
          pdf_file_url?: string | null
          processing_status?: string
          updated_at?: string
          user_id?: string | null
          word_file_url?: string | null
        }
        Relationships: []
      }
      cv_profiles: {
        Row: {
          candidate_name: string
          certification_scores: Json | null
          clearance_level: string | null
          created_at: string | null
          cv_id: string
          labor_model: string | null
          methodology_expertise: string[] | null
          project_size_scores: Json | null
          sectors_experience: Json | null
          soft_skill_tags: string[] | null
          team_size_led: number | null
          updated_at: string | null
        }
        Insert: {
          candidate_name: string
          certification_scores?: Json | null
          clearance_level?: string | null
          created_at?: string | null
          cv_id?: string
          labor_model?: string | null
          methodology_expertise?: string[] | null
          project_size_scores?: Json | null
          sectors_experience?: Json | null
          soft_skill_tags?: string[] | null
          team_size_led?: number | null
          updated_at?: string | null
        }
        Update: {
          candidate_name?: string
          certification_scores?: Json | null
          clearance_level?: string | null
          created_at?: string | null
          cv_id?: string
          labor_model?: string | null
          methodology_expertise?: string[] | null
          project_size_scores?: Json | null
          sectors_experience?: Json | null
          soft_skill_tags?: string[] | null
          team_size_led?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      cv_template_transformations: {
        Row: {
          created_at: string
          cv_id: string
          id: string
          original_content: Json | null
          template_type: string
          transformation_metadata: Json | null
          transformed_content: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          cv_id: string
          id?: string
          original_content?: Json | null
          template_type: string
          transformation_metadata?: Json | null
          transformed_content: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          cv_id?: string
          id?: string
          original_content?: Json | null
          template_type?: string
          transformation_metadata?: Json | null
          transformed_content?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cv_template_transformations_cv_id_fkey"
            columns: ["cv_id"]
            isOneToOne: false
            referencedRelation: "cvs"
            referencedColumns: ["id"]
          },
        ]
      }
      cvs: {
        Row: {
          cluster: string | null
          created_at: string
          id: string
          metrics: Json | null
          parsed_data: Json
          quality: number | null
          raw_text: string
          updated_at: string
          user_id: string
        }
        Insert: {
          cluster?: string | null
          created_at?: string
          id?: string
          metrics?: Json | null
          parsed_data: Json
          quality?: number | null
          raw_text: string
          updated_at?: string
          user_id: string
        }
        Update: {
          cluster?: string | null
          created_at?: string
          id?: string
          metrics?: Json | null
          parsed_data?: Json
          quality?: number | null
          raw_text?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      defense_capability_matches: {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      defense_partner_analytics: {
        Row: {
          agent_code: string | null
          cost: number | null
          coverage_pct: number | null
          cv_overlay: string | null
          delivery_model: string | null
          fit_for_defence: string | null
          function: string | null
          partner: string | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Relationships: []
      }
      deliverables: {
        Row: {
          bundle_id: string | null
          deliverable_id: string
          description: string | null
          name: string | null
          sla_id: string | null
        }
        Insert: {
          bundle_id?: string | null
          deliverable_id: string
          description?: string | null
          name?: string | null
          sla_id?: string | null
        }
        Update: {
          bundle_id?: string | null
          deliverable_id?: string
          description?: string | null
          name?: string | null
          sla_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deliverables_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
        ]
      }
      demand_forecast: {
        Row: {
          agent_code: string
          created_at: string
          forecast_month: string
          forecast_util_pct: number
          id: string
          lower_bound: number | null
          updated_at: string
          upper_bound: number | null
        }
        Insert: {
          agent_code: string
          created_at?: string
          forecast_month: string
          forecast_util_pct: number
          id?: string
          lower_bound?: number | null
          updated_at?: string
          upper_bound?: number | null
        }
        Update: {
          agent_code?: string
          created_at?: string
          forecast_month?: string
          forecast_util_pct?: number
          id?: string
          lower_bound?: number | null
          updated_at?: string
          upper_bound?: number | null
        }
        Relationships: []
      }
      department_team_agents: {
        Row: {
          agent_code: string
          created_at: string | null
          id: string
          role: string | null
          team_id: string
        }
        Insert: {
          agent_code: string
          created_at?: string | null
          id?: string
          role?: string | null
          team_id: string
        }
        Update: {
          agent_code?: string
          created_at?: string | null
          id?: string
          role?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "department_team_agents_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "department_teams"
            referencedColumns: ["team_id"]
          },
        ]
      }
      department_teams: {
        Row: {
          agent_count: number
          created_at: string | null
          department: string
          description: string | null
          team_id: string
          team_name: string
          team_size: string
          updated_at: string | null
        }
        Insert: {
          agent_count?: number
          created_at?: string | null
          department: string
          description?: string | null
          team_id?: string
          team_name: string
          team_size: string
          updated_at?: string | null
        }
        Update: {
          agent_count?: number
          created_at?: string | null
          department?: string
          description?: string | null
          team_id?: string
          team_name?: string
          team_size?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      departmental_knowledge: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          cross_functional_relevance: string[] | null
          department_id: string
          expertise_level: string | null
          id: string
          knowledge_tags: string[] | null
          knowledge_type: string
          last_validated: string | null
          title: string
          updated_at: string
          validation_status: string | null
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          cross_functional_relevance?: string[] | null
          department_id: string
          expertise_level?: string | null
          id?: string
          knowledge_tags?: string[] | null
          knowledge_type: string
          last_validated?: string | null
          title: string
          updated_at?: string
          validation_status?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          cross_functional_relevance?: string[] | null
          department_id?: string
          expertise_level?: string | null
          id?: string
          knowledge_tags?: string[] | null
          knowledge_type?: string
          last_validated?: string | null
          title?: string
          updated_at?: string
          validation_status?: string | null
        }
        Relationships: []
      }
      deployments: {
        Row: {
          bundle_id: string | null
          deployed_at: string | null
          deployment_id: string
          environment: string | null
          team_id: string | null
          version: string | null
        }
        Insert: {
          bundle_id?: string | null
          deployed_at?: string | null
          deployment_id: string
          environment?: string | null
          team_id?: string | null
          version?: string | null
        }
        Update: {
          bundle_id?: string | null
          deployed_at?: string | null
          deployment_id?: string
          environment?: string | null
          team_id?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deployments_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
          {
            foreignKeyName: "deployments_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
        ]
      }
      detailed_use_case_templates: {
        Row: {
          business_problem: string
          case_study_url: string | null
          category: string
          created_at: string | null
          demo_video_url: string | null
          documentation_url: string | null
          expected_roi_percentage: number | null
          id: string
          implementation_timeline_weeks: number | null
          industry_focus: string[] | null
          integration_partners: string[] | null
          is_featured: boolean | null
          optional_agents: string[] | null
          payback_period_months: number | null
          popularity_score: number | null
          pricing_starting_at: number | null
          required_agents: string[]
          setup_steps: Json | null
          solution_approach: string
          success_metrics: Json | null
          technical_requirements: Json | null
          template_name: string
          updated_at: string | null
        }
        Insert: {
          business_problem: string
          case_study_url?: string | null
          category: string
          created_at?: string | null
          demo_video_url?: string | null
          documentation_url?: string | null
          expected_roi_percentage?: number | null
          id?: string
          implementation_timeline_weeks?: number | null
          industry_focus?: string[] | null
          integration_partners?: string[] | null
          is_featured?: boolean | null
          optional_agents?: string[] | null
          payback_period_months?: number | null
          popularity_score?: number | null
          pricing_starting_at?: number | null
          required_agents: string[]
          setup_steps?: Json | null
          solution_approach: string
          success_metrics?: Json | null
          technical_requirements?: Json | null
          template_name: string
          updated_at?: string | null
        }
        Update: {
          business_problem?: string
          case_study_url?: string | null
          category?: string
          created_at?: string | null
          demo_video_url?: string | null
          documentation_url?: string | null
          expected_roi_percentage?: number | null
          id?: string
          implementation_timeline_weeks?: number | null
          industry_focus?: string[] | null
          integration_partners?: string[] | null
          is_featured?: boolean | null
          optional_agents?: string[] | null
          payback_period_months?: number | null
          popularity_score?: number | null
          pricing_starting_at?: number | null
          required_agents?: string[]
          setup_steps?: Json | null
          solution_approach?: string
          success_metrics?: Json | null
          technical_requirements?: Json | null
          template_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      document_outputs: {
        Row: {
          created_at: string | null
          document_type: string
          file_format: string
          file_path: string
          file_size: number | null
          generation_model: string
          id: string
          is_final: boolean | null
          source_document_id: string
        }
        Insert: {
          created_at?: string | null
          document_type: string
          file_format: string
          file_path: string
          file_size?: number | null
          generation_model: string
          id?: string
          is_final?: boolean | null
          source_document_id: string
        }
        Update: {
          created_at?: string | null
          document_type?: string
          file_format?: string
          file_path?: string
          file_size?: number | null
          generation_model?: string
          id?: string
          is_final?: boolean | null
          source_document_id?: string
        }
        Relationships: []
      }
      document_shares: {
        Row: {
          created_at: string
          document_id: string
          expires_at: string | null
          id: string
          permission_level: string
          share_token: string
          shared_by: string
          shared_with_email: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          document_id: string
          expires_at?: string | null
          id?: string
          permission_level?: string
          share_token?: string
          shared_by: string
          shared_with_email: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          document_id?: string
          expires_at?: string | null
          id?: string
          permission_level?: string
          share_token?: string
          shared_by?: string
          shared_with_email?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_shares_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_storage"
            referencedColumns: ["id"]
          },
        ]
      }
      document_storage: {
        Row: {
          bucket_name: string
          created_at: string
          delivery_mode: string
          document_type: string
          file_name: string
          file_path: string
          file_size: number
          id: string
          is_current_version: boolean
          mime_type: string
          original_content: string | null
          parent_document_id: string | null
          quality_metrics: Json | null
          shared_with: Json | null
          tags: string[] | null
          updated_at: string
          user_id: string
          version: number
        }
        Insert: {
          bucket_name: string
          created_at?: string
          delivery_mode: string
          document_type: string
          file_name: string
          file_path: string
          file_size: number
          id?: string
          is_current_version?: boolean
          mime_type: string
          original_content?: string | null
          parent_document_id?: string | null
          quality_metrics?: Json | null
          shared_with?: Json | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
          version?: number
        }
        Update: {
          bucket_name?: string
          created_at?: string
          delivery_mode?: string
          document_type?: string
          file_name?: string
          file_path?: string
          file_size?: number
          id?: string
          is_current_version?: boolean
          mime_type?: string
          original_content?: string | null
          parent_document_id?: string | null
          quality_metrics?: Json | null
          shared_with?: Json | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "document_storage_parent_document_id_fkey"
            columns: ["parent_document_id"]
            isOneToOne: false
            referencedRelation: "document_storage"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          file_type: string
          filename: string
          id: string
          original_content: string | null
          updated_at: string
          upload_source: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          file_type: string
          filename: string
          id?: string
          original_content?: string | null
          updated_at?: string
          upload_source?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          file_type?: string
          filename?: string
          id?: string
          original_content?: string | null
          updated_at?: string
          upload_source?: string | null
          user_id?: string
        }
        Relationships: []
      }
      domain_tenant_mappings: {
        Row: {
          created_at: string | null
          domain: string
          id: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          domain: string
          id?: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          domain?: string
          id?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "domain_tenant_mappings_domain_fkey"
            columns: ["domain"]
            isOneToOne: true
            referencedRelation: "allowed_domains"
            referencedColumns: ["domain"]
          },
          {
            foreignKeyName: "domain_tenant_mappings_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      ecosystem_items: {
        Row: {
          business: string
          created_at: string
          feeds_into: string | null
          id: string
          monetization_model: string | null
          partners: string | null
          products: string | null
          status: string | null
          type: string | null
          updated_at: string
        }
        Insert: {
          business: string
          created_at?: string
          feeds_into?: string | null
          id?: string
          monetization_model?: string | null
          partners?: string | null
          products?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string
        }
        Update: {
          business?: string
          created_at?: string
          feeds_into?: string | null
          id?: string
          monetization_model?: string | null
          partners?: string | null
          products?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      email_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          is_active: boolean
          name: string | null
          preferences: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_active?: boolean
          name?: string | null
          preferences?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean
          name?: string | null
          preferences?: Json
          updated_at?: string
        }
        Relationships: []
      }
      "enhanced agent match": {
        Row: {
          Agent_ID: string | null
          agent_name: string | null
          aps_band: string | null
          MatchPct: string | null
          Role_Name: string | null
          Task_Alignment_Pct: string | null
          Weighted_Raw_Match: string | null
        }
        Insert: {
          Agent_ID?: string | null
          agent_name?: string | null
          aps_band?: string | null
          MatchPct?: string | null
          Role_Name?: string | null
          Task_Alignment_Pct?: string | null
          Weighted_Raw_Match?: string | null
        }
        Update: {
          Agent_ID?: string | null
          agent_name?: string | null
          aps_band?: string | null
          MatchPct?: string | null
          Role_Name?: string | null
          Task_Alignment_Pct?: string | null
          Weighted_Raw_Match?: string | null
        }
        Relationships: []
      }
      "enhanced APS Skills": {
        Row: {
          Skill: string | null
        }
        Insert: {
          Skill?: string | null
        }
        Update: {
          Skill?: string | null
        }
        Relationships: []
      }
      enhanced_assessment_campaigns: {
        Row: {
          assessment_template: Json | null
          completion_count: number | null
          completion_rate: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          notification_preferences: Json | null
          objectives: string | null
          organization_id: string
          participant_count: number | null
          start_date: string | null
          status: string
          target_departments: string[] | null
          updated_at: string | null
        }
        Insert: {
          assessment_template?: Json | null
          completion_count?: number | null
          completion_rate?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          notification_preferences?: Json | null
          objectives?: string | null
          organization_id: string
          participant_count?: number | null
          start_date?: string | null
          status?: string
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Update: {
          assessment_template?: Json | null
          completion_count?: number | null
          completion_rate?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          notification_preferences?: Json | null
          objectives?: string | null
          organization_id?: string
          participant_count?: number | null
          start_date?: string | null
          status?: string
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "enhanced_assessment_campaigns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      entitytags: {
        Row: {
          entity_id: string
          entity_type: string
          tag_id: string
        }
        Insert: {
          entity_id: string
          entity_type: string
          tag_id: string
        }
        Update: {
          entity_id?: string
          entity_type?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entitytags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["tag_id"]
          },
        ]
      }
      excess_capacity_marketplace: {
        Row: {
          agent_code: string
          agent_name: string
          ai_readiness_level: number
          available_hours_per_week: number
          certifications: string[] | null
          created_at: string | null
          excess_capacity_percent: number
          function_cluster: string
          hourly_rate: number
          id: string
          last_updated: string | null
          max_engagement_hours: number | null
          min_engagement_hours: number | null
          pricing_tier: string
          skills_tags: string[] | null
          status: string
          updated_at: string | null
          value_score: string
        }
        Insert: {
          agent_code: string
          agent_name: string
          ai_readiness_level: number
          available_hours_per_week: number
          certifications?: string[] | null
          created_at?: string | null
          excess_capacity_percent: number
          function_cluster: string
          hourly_rate: number
          id?: string
          last_updated?: string | null
          max_engagement_hours?: number | null
          min_engagement_hours?: number | null
          pricing_tier?: string
          skills_tags?: string[] | null
          status?: string
          updated_at?: string | null
          value_score: string
        }
        Update: {
          agent_code?: string
          agent_name?: string
          ai_readiness_level?: number
          available_hours_per_week?: number
          certifications?: string[] | null
          created_at?: string | null
          excess_capacity_percent?: number
          function_cluster?: string
          hourly_rate?: number
          id?: string
          last_updated?: string | null
          max_engagement_hours?: number | null
          min_engagement_hours?: number | null
          pricing_tier?: string
          skills_tags?: string[] | null
          status?: string
          updated_at?: string | null
          value_score?: string
        }
        Relationships: []
      }
      family_agents: {
        Row: {
          achievement: string | null
          agent_code: string
          background: string | null
          consultant_hourly_rate: number | null
          core_skills: string | null
          created_at: string | null
          cultural_expertise: string | null
          delivery_type: string | null
          division_name: string
          domain: string
          family_member_id: string
          final_cost: number | null
          function: string
          id: string
          persona: string
          sfia_level: string
          signature_method: string | null
          specialization: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
          tech_stack: string | null
          updated_at: string | null
        }
        Insert: {
          achievement?: string | null
          agent_code: string
          background?: string | null
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          cultural_expertise?: string | null
          delivery_type?: string | null
          division_name: string
          domain: string
          family_member_id: string
          final_cost?: number | null
          function: string
          id?: string
          persona: string
          sfia_level: string
          signature_method?: string | null
          specialization?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          updated_at?: string | null
        }
        Update: {
          achievement?: string | null
          agent_code?: string
          background?: string | null
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          cultural_expertise?: string | null
          delivery_type?: string | null
          division_name?: string
          domain?: string
          family_member_id?: string
          final_cost?: number | null
          function?: string
          id?: string
          persona?: string
          sfia_level?: string
          signature_method?: string | null
          specialization?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      featureflags: {
        Row: {
          created_at: string | null
          description: string | null
          enabled: boolean | null
          flag_id: string
          name: string | null
          rollout_pct: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          enabled?: boolean | null
          flag_id: string
          name?: string | null
          rollout_pct?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          enabled?: boolean | null
          flag_id?: string
          name?: string | null
          rollout_pct?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      featureusage: {
        Row: {
          customer_id: string | null
          flag_id: string | null
          timestamp: string | null
          usage_count: number | null
          usage_id: number
        }
        Insert: {
          customer_id?: string | null
          flag_id?: string | null
          timestamp?: string | null
          usage_count?: number | null
          usage_id?: number
        }
        Update: {
          customer_id?: string | null
          flag_id?: string | null
          timestamp?: string | null
          usage_count?: number | null
          usage_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "featureusage_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "featureusage_flag_id_fkey"
            columns: ["flag_id"]
            isOneToOne: false
            referencedRelation: "featureflags"
            referencedColumns: ["flag_id"]
          },
        ]
      }
      function_performance_metrics: {
        Row: {
          agent_count: number | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_value_score: number | null
          job_function: string | null
          price_rank_pct: number | null
        }
        Insert: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Update: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Relationships: []
      }
      global_labor_rates: {
        Row: {
          base_hourly_rate: number
          benefits_overhead_pct: number
          city: string | null
          compliance_cost_pct: number
          cost_of_living_index: number
          country_code: string
          country_name: string
          created_at: string
          currency_code: string
          data_source: string | null
          effective_date: string
          id: string
          is_active: boolean
          market_demand_multiplier: number
          ppp_adjustment_factor: number
          region: string | null
          remote_work_adjustment: number
          sfia_level: number
          tax_overhead_pct: number
          updated_at: string
        }
        Insert: {
          base_hourly_rate: number
          benefits_overhead_pct?: number
          city?: string | null
          compliance_cost_pct?: number
          cost_of_living_index?: number
          country_code: string
          country_name: string
          created_at?: string
          currency_code?: string
          data_source?: string | null
          effective_date?: string
          id?: string
          is_active?: boolean
          market_demand_multiplier?: number
          ppp_adjustment_factor?: number
          region?: string | null
          remote_work_adjustment?: number
          sfia_level: number
          tax_overhead_pct?: number
          updated_at?: string
        }
        Update: {
          base_hourly_rate?: number
          benefits_overhead_pct?: number
          city?: string | null
          compliance_cost_pct?: number
          cost_of_living_index?: number
          country_code?: string
          country_name?: string
          created_at?: string
          currency_code?: string
          data_source?: string | null
          effective_date?: string
          id?: string
          is_active?: boolean
          market_demand_multiplier?: number
          ppp_adjustment_factor?: number
          region?: string | null
          remote_work_adjustment?: number
          sfia_level?: number
          tax_overhead_pct?: number
          updated_at?: string
        }
        Relationships: []
      }
      holoorg_agent_capabilities: {
        Row: {
          agent_code: string
          capability_id: string
          created_at: string | null
          proficiency_level: number
        }
        Insert: {
          agent_code: string
          capability_id: string
          created_at?: string | null
          proficiency_level?: number
        }
        Update: {
          agent_code?: string
          capability_id?: string
          created_at?: string | null
          proficiency_level?: number
        }
        Relationships: [
          {
            foreignKeyName: "holoorg_agent_capabilities_capability_id_fkey"
            columns: ["capability_id"]
            isOneToOne: false
            referencedRelation: "holoorg_capabilities"
            referencedColumns: ["id"]
          },
        ]
      }
      holoorg_agents: {
        Row: {
          created_at: string
          deployments: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deployments?: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deployments?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      holoorg_capabilities: {
        Row: {
          category: string | null
          code: string
          complexity: number
          created_at: string | null
          description: string | null
          id: string
          name: string
          personality_id: string | null
          updated_at: string | null
          value_score: number
        }
        Insert: {
          category?: string | null
          code: string
          complexity?: number
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          personality_id?: string | null
          updated_at?: string | null
          value_score?: number
        }
        Update: {
          category?: string | null
          code?: string
          complexity?: number
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          personality_id?: string | null
          updated_at?: string | null
          value_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "holoorg_capabilities_personality_id_fkey"
            columns: ["personality_id"]
            isOneToOne: false
            referencedRelation: "holoorg_personalities"
            referencedColumns: ["id"]
          },
        ]
      }
      holoorg_personalities: {
        Row: {
          core_principle: string | null
          created_at: string | null
          description: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          core_principle?: string | null
          created_at?: string | null
          description: string
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          core_principle?: string | null
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      holoorg_teams: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          personality_distribution: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          personality_distribution?: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          personality_distribution?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      huge: {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: number | null
          Estimated_Price: number | null
          Estimated_Profit: number | null
          Role_Name: string | null
          Tool: string | null
          WeightedScore: number | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Relationships: []
      }
      idea_clusters: {
        Row: {
          cognitivepattern: string | null
          created_at: string
          id: string
          ideatype: string
          lines: string[] | null
          linkedprojects: string | null
          status: string
          summary: string | null
          theme: string
          updated_at: string
        }
        Insert: {
          cognitivepattern?: string | null
          created_at?: string
          id?: string
          ideatype: string
          lines?: string[] | null
          linkedprojects?: string | null
          status?: string
          summary?: string | null
          theme: string
          updated_at?: string
        }
        Update: {
          cognitivepattern?: string | null
          created_at?: string
          id?: string
          ideatype?: string
          lines?: string[] | null
          linkedprojects?: string | null
          status?: string
          summary?: string | null
          theme?: string
          updated_at?: string
        }
        Relationships: []
      }
      institutional_memory: {
        Row: {
          accessibility_level: string | null
          content: string
          context_tags: string[] | null
          created_at: string
          id: string
          importance_score: number | null
          last_referenced: string | null
          memory_type: string
          preservation_priority: string | null
          reference_count: number | null
          related_entities: string[] | null
          time_period: string | null
          title: string
          updated_at: string
        }
        Insert: {
          accessibility_level?: string | null
          content: string
          context_tags?: string[] | null
          created_at?: string
          id?: string
          importance_score?: number | null
          last_referenced?: string | null
          memory_type: string
          preservation_priority?: string | null
          reference_count?: number | null
          related_entities?: string[] | null
          time_period?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          accessibility_level?: string | null
          content?: string
          context_tags?: string[] | null
          created_at?: string
          id?: string
          importance_score?: number | null
          last_referenced?: string | null
          memory_type?: string
          preservation_priority?: string | null
          reference_count?: number | null
          related_entities?: string[] | null
          time_period?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      integration_templates: {
        Row: {
          agent_codes: string[]
          base_price: number | null
          category: string
          created_at: string | null
          deployment_options: string[] | null
          description: string | null
          docker_command: string | null
          estimated_setup_time_hours: number | null
          github_repo_url: string | null
          id: string
          is_trending: boolean | null
          monthly_executions_estimate: number | null
          pricing_tier: string | null
          setup_complexity: string | null
          setup_cost: number | null
          template_name: string
          updated_at: string | null
          use_case_example: string | null
        }
        Insert: {
          agent_codes: string[]
          base_price?: number | null
          category: string
          created_at?: string | null
          deployment_options?: string[] | null
          description?: string | null
          docker_command?: string | null
          estimated_setup_time_hours?: number | null
          github_repo_url?: string | null
          id?: string
          is_trending?: boolean | null
          monthly_executions_estimate?: number | null
          pricing_tier?: string | null
          setup_complexity?: string | null
          setup_cost?: number | null
          template_name: string
          updated_at?: string | null
          use_case_example?: string | null
        }
        Update: {
          agent_codes?: string[]
          base_price?: number | null
          category?: string
          created_at?: string | null
          deployment_options?: string[] | null
          description?: string | null
          docker_command?: string | null
          estimated_setup_time_hours?: number | null
          github_repo_url?: string | null
          id?: string
          is_trending?: boolean | null
          monthly_executions_estimate?: number | null
          pricing_tier?: string | null
          setup_complexity?: string | null
          setup_cost?: number | null
          template_name?: string
          updated_at?: string | null
          use_case_example?: string | null
        }
        Relationships: []
      }
      integration_usage: {
        Row: {
          api_endpoint: string
          created_at: string | null
          date: string | null
          id: string
          usage_count: number | null
          user_id: string
        }
        Insert: {
          api_endpoint: string
          created_at?: string | null
          date?: string | null
          id?: string
          usage_count?: number | null
          user_id: string
        }
        Update: {
          api_endpoint?: string
          created_at?: string | null
          date?: string | null
          id?: string
          usage_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      integrations: {
        Row: {
          config: Json | null
          integration_id: string
          last_synced: string | null
          name: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          config?: Json | null
          integration_id: string
          last_synced?: string | null
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          config?: Json | null
          integration_id?: string
          last_synced?: string | null
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      involvement_levels: {
        Row: {
          color_code: string | null
          created_at: string
          description: string | null
          id: string
          intensity_score: number | null
          level_code: string
          level_name: string
        }
        Insert: {
          color_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          intensity_score?: number | null
          level_code: string
          level_name: string
        }
        Update: {
          color_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          intensity_score?: number | null
          level_code?: string
          level_name?: string
        }
        Relationships: []
      }
      job_analysis_results: {
        Row: {
          capacity_utilization: number | null
          checklist: Json | null
          cost_savings: number | null
          created_at: string
          excess_capacity: number
          id: string
          requester_ip: string | null
          results: Json
          roles: Json
          total_agents: number
          total_cost: number
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          capacity_utilization?: number | null
          checklist?: Json | null
          cost_savings?: number | null
          created_at?: string
          excess_capacity: number
          id?: string
          requester_ip?: string | null
          results: Json
          roles: Json
          total_agents: number
          total_cost: number
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          capacity_utilization?: number | null
          checklist?: Json | null
          cost_savings?: number | null
          created_at?: string
          excess_capacity?: number
          id?: string
          requester_ip?: string | null
          results?: Json
          roles?: Json
          total_agents?: number
          total_cost?: number
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      knowledge_graph_relationships: {
        Row: {
          concept: string
          context: string | null
          created_at: string
          id: string
          relationship_type: string
          source_agent: string
          strength: number | null
          target_agent: string | null
          updated_at: string
        }
        Insert: {
          concept: string
          context?: string | null
          created_at?: string
          id?: string
          relationship_type: string
          source_agent: string
          strength?: number | null
          target_agent?: string | null
          updated_at?: string
        }
        Update: {
          concept?: string
          context?: string | null
          created_at?: string
          id?: string
          relationship_type?: string
          source_agent?: string
          strength?: number | null
          target_agent?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      knowledge_transfers: {
        Row: {
          completed_date: string | null
          completion_percentage: number | null
          created_at: string
          follow_up_actions: string[] | null
          from_entity: string | null
          gaps_identified: string[] | null
          id: string
          knowledge_assets: Json | null
          knowledge_domains: string[] | null
          quality_assessment: number | null
          scheduled_date: string | null
          to_entity: string
          transfer_method: string[] | null
          transfer_status: string | null
          transfer_type: string
          updated_at: string
        }
        Insert: {
          completed_date?: string | null
          completion_percentage?: number | null
          created_at?: string
          follow_up_actions?: string[] | null
          from_entity?: string | null
          gaps_identified?: string[] | null
          id?: string
          knowledge_assets?: Json | null
          knowledge_domains?: string[] | null
          quality_assessment?: number | null
          scheduled_date?: string | null
          to_entity: string
          transfer_method?: string[] | null
          transfer_status?: string | null
          transfer_type: string
          updated_at?: string
        }
        Update: {
          completed_date?: string | null
          completion_percentage?: number | null
          created_at?: string
          follow_up_actions?: string[] | null
          from_entity?: string | null
          gaps_identified?: string[] | null
          id?: string
          knowledge_assets?: Json | null
          knowledge_domains?: string[] | null
          quality_assessment?: number | null
          scheduled_date?: string | null
          to_entity?: string
          transfer_method?: string[] | null
          transfer_status?: string | null
          transfer_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      leadership_team: {
        Row: {
          agent_count: number | null
          bio: string
          created_at: string
          department: string
          enneagram_type: string
          id: string
          image_url: string | null
          name: string
          personality_type: string
          title: string
          updated_at: string
        }
        Insert: {
          agent_count?: number | null
          bio: string
          created_at?: string
          department: string
          enneagram_type: string
          id?: string
          image_url?: string | null
          name: string
          personality_type: string
          title: string
          updated_at?: string
        }
        Update: {
          agent_count?: number | null
          bio?: string
          created_at?: string
          department?: string
          enneagram_type?: string
          id?: string
          image_url?: string | null
          name?: string
          personality_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      learning_events: {
        Row: {
          agent_name: string
          created_at: string
          event_type: string
          id: string
          impact_score: number | null
          knowledge_category: string | null
          knowledge_gained: string
          source_session_id: string | null
        }
        Insert: {
          agent_name: string
          created_at?: string
          event_type: string
          id?: string
          impact_score?: number | null
          knowledge_category?: string | null
          knowledge_gained: string
          source_session_id?: string | null
        }
        Update: {
          agent_name?: string
          created_at?: string
          event_type?: string
          id?: string
          impact_score?: number | null
          knowledge_category?: string | null
          knowledge_gained?: string
          source_session_id?: string | null
        }
        Relationships: []
      }
      legal_documents: {
        Row: {
          content: string
          created_at: string
          document_type: string
          effective_date: string
          id: string
          is_active: boolean
          title: string
          updated_at: string
          version: string
        }
        Insert: {
          content: string
          created_at?: string
          document_type: string
          effective_date?: string
          id?: string
          is_active?: boolean
          title: string
          updated_at?: string
          version?: string
        }
        Update: {
          content?: string
          created_at?: string
          document_type?: string
          effective_date?: string
          id?: string
          is_active?: boolean
          title?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
      lens_scores: {
        Row: {
          agency: string | null
          due_date: string | null
          id: string
          lens: string | null
          matches: Json | null
          score: number | null
          timestamp: string | null
          title: string | null
        }
        Insert: {
          agency?: string | null
          due_date?: string | null
          id?: string
          lens?: string | null
          matches?: Json | null
          score?: number | null
          timestamp?: string | null
          title?: string | null
        }
        Update: {
          agency?: string | null
          due_date?: string | null
          id?: string
          lens?: string | null
          matches?: Json | null
          score?: number | null
          timestamp?: string | null
          title?: string | null
        }
        Relationships: []
      }
      license_tiers: {
        Row: {
          annual_price: number
          created_at: string
          description: string | null
          features: Json
          id: string
          is_active: boolean
          max_assessments: number | null
          max_templates: number | null
          max_users: number | null
          monthly_price: number
          name: string
          updated_at: string
        }
        Insert: {
          annual_price: number
          created_at?: string
          description?: string | null
          features?: Json
          id?: string
          is_active?: boolean
          max_assessments?: number | null
          max_templates?: number | null
          max_users?: number | null
          monthly_price: number
          name: string
          updated_at?: string
        }
        Update: {
          annual_price?: number
          created_at?: string
          description?: string | null
          features?: Json
          id?: string
          is_active?: boolean
          max_assessments?: number | null
          max_templates?: number | null
          max_users?: number | null
          monthly_price?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      managerbundles: {
        Row: {
          aug_price: number | null
          auto_price: number | null
          bundle_id: string
          category: string | null
          human_price: number | null
          name: string | null
          type: string | null
        }
        Insert: {
          aug_price?: number | null
          auto_price?: number | null
          bundle_id: string
          category?: string | null
          human_price?: number | null
          name?: string | null
          type?: string | null
        }
        Update: {
          aug_price?: number | null
          auto_price?: number | null
          bundle_id?: string
          category?: string | null
          human_price?: number | null
          name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      market_intelligence: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          data_points: Json | null
          description: string | null
          expires_at: string | null
          id: string
          impact_level: string | null
          intelligence_type: string
          is_active: boolean | null
          source_apis: string[]
          title: string
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          data_points?: Json | null
          description?: string | null
          expires_at?: string | null
          id?: string
          impact_level?: string | null
          intelligence_type: string
          is_active?: boolean | null
          source_apis: string[]
          title: string
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          data_points?: Json | null
          description?: string | null
          expires_at?: string | null
          id?: string
          impact_level?: string | null
          intelligence_type?: string
          is_active?: boolean | null
          source_apis?: string[]
          title?: string
        }
        Relationships: []
      }
      marketing_campaigns: {
        Row: {
          automation_config: Json | null
          campaign_type: string
          created_at: string
          id: string
          n8n_workflow_id: string | null
          name: string
          performance_metrics: Json | null
          status: string
          target_audience: Json | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          automation_config?: Json | null
          campaign_type: string
          created_at?: string
          id?: string
          n8n_workflow_id?: string | null
          name: string
          performance_metrics?: Json | null
          status?: string
          target_audience?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          automation_config?: Json | null
          campaign_type?: string
          created_at?: string
          id?: string
          n8n_workflow_id?: string | null
          name?: string
          performance_metrics?: Json | null
          status?: string
          target_audience?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      marketing_content: {
        Row: {
          agent_categories: Json | null
          auto_generated: boolean | null
          content: string | null
          content_type: string
          created_at: string
          id: string
          performance_metrics: Json | null
          published: boolean | null
          seo_keywords: Json | null
          target_functions: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          agent_categories?: Json | null
          auto_generated?: boolean | null
          content?: string | null
          content_type: string
          created_at?: string
          id?: string
          performance_metrics?: Json | null
          published?: boolean | null
          seo_keywords?: Json | null
          target_functions?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          agent_categories?: Json | null
          auto_generated?: boolean | null
          content?: string | null
          content_type?: string
          created_at?: string
          id?: string
          performance_metrics?: Json | null
          published?: boolean | null
          seo_keywords?: Json | null
          target_functions?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      marketing_leads: {
        Row: {
          agent_function_preferences: Json | null
          budget_range: string | null
          campaign_id: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          interested_agents: Json | null
          job_title: string | null
          last_activity: string | null
          lead_score: number | null
          lead_source: string | null
          name: string | null
          notes: string | null
          phone: string | null
          status: string
          timeline: string | null
          updated_at: string
        }
        Insert: {
          agent_function_preferences?: Json | null
          budget_range?: string | null
          campaign_id?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          interested_agents?: Json | null
          job_title?: string | null
          last_activity?: string | null
          lead_score?: number | null
          lead_source?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Update: {
          agent_function_preferences?: Json | null
          budget_range?: string | null
          campaign_id?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          interested_agents?: Json | null
          job_title?: string | null
          last_activity?: string | null
          lead_score?: number | null
          lead_source?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketing_leads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "marketing_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_agent_directory: {
        Row: {
          Agent_Name: string | null
          Category: string | null
          Description: string | null
          Pricing: string | null
          Use_Cases: string | null
        }
        Insert: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Update: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      marketplace_transactions: {
        Row: {
          client_organization: string
          contract_reference: string | null
          created_at: string | null
          end_date: string | null
          hours_purchased: number | null
          id: string
          marketplace_listing_id: string | null
          pack_id: string | null
          payment_terms: string | null
          start_date: string
          status: string
          total_amount: number
          transaction_type: string
          updated_at: string | null
        }
        Insert: {
          client_organization: string
          contract_reference?: string | null
          created_at?: string | null
          end_date?: string | null
          hours_purchased?: number | null
          id?: string
          marketplace_listing_id?: string | null
          pack_id?: string | null
          payment_terms?: string | null
          start_date: string
          status?: string
          total_amount: number
          transaction_type: string
          updated_at?: string | null
        }
        Update: {
          client_organization?: string
          contract_reference?: string | null
          created_at?: string | null
          end_date?: string | null
          hours_purchased?: number | null
          id?: string
          marketplace_listing_id?: string | null
          pack_id?: string | null
          payment_terms?: string | null
          start_date?: string
          status?: string
          total_amount?: number
          transaction_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_transactions_marketplace_listing_id_fkey"
            columns: ["marketplace_listing_id"]
            isOneToOne: false
            referencedRelation: "excess_capacity_marketplace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_transactions_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "agent_packs"
            referencedColumns: ["id"]
          },
        ]
      }
      matrix_config: {
        Row: {
          created_at: string
          id: string
          updated_at: string
          weights: Json
        }
        Insert: {
          created_at?: string
          id?: string
          updated_at?: string
          weights?: Json
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
          weights?: Json
        }
        Relationships: []
      }
      matrix_response_mappings: {
        Row: {
          created_at: string
          id: string
          matrix_category: string
          reasoning_template: string
          response_template: string
          score_range: string
          updated_at: string
          variable_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          matrix_category: string
          reasoning_template: string
          response_template: string
          score_range: string
          updated_at?: string
          variable_name: string
        }
        Update: {
          created_at?: string
          id?: string
          matrix_category?: string
          reasoning_template?: string
          response_template?: string
          score_range?: string
          updated_at?: string
          variable_name?: string
        }
        Relationships: []
      }
      "merger ecosystem": {
        Row: {
          ai_specializations: string | null
          avg_deal_size: number | null
          avg_joint_win_rate: number | null
          Category: string | null
          certification_count: string | null
          certifications: string | null
          channel_type: string | null
          compliance_standards: string | null
          data_platforms: string | null
          Data_Quality_Rating: string | null
          data_sovereignty_guarantee: string | null
          Description: string | null
          devops_capabilities: string | null
          diversity_supplier: string | null
          employee_count: number | null
          Engagement_Model: string | null
          Entity_ID: string | null
          Entity_Name: string | null
          escalation_path: string | null
          global_office_count: number | null
          headquarters_city: string | null
          headquarters_country: string | null
          id: string
          industry_vertical_focus: string | null
          insurances: string | null
          integration_platforms: string | null
          joint_proposals_count: number | null
          joint_win_count: number | null
          last_engagement_date: string | null
          local_presence_scale: string | null
          logo_url: string | null
          low_code_platforms: string | null
          Merged_Date: string | null
          msp_certifications: string | null
          nps_score: number | null
          office_count_au: string | null
          office_locations_au: string | null
          partner_contact_email: string | null
          partner_cost_model: string | null
          partner_id: string | null
          partner_maturity_level: string | null
          partner_NRR: number | null
          partner_phone: string | null
          partner_rating_overall: number | null
          partner_reference_customers: string | null
          partner_scorecard: string | null
          partner_segment: string | null
          partner_social_profiles: string | null
          partner_tier: string | null
          partner_training_capabilities: string | null
          partner_website: string | null
          partnership_duration_years: number | null
          partnership_start_date: string | null
          preferred_partner: boolean | null
          Pricing: string | null
          primary_technologies: string | null
          Primary_Technologies_List: string | null
          regions_supported: string | null
          relationship_score: number | null
          revenue_shared_pct: number | null
          risk_flags: string | null
          score_ranking: number | null
          security_clearance_levels: string | null
          security_specializations: string | null
          services_offered: string | null
          sla_levels: string | null
          solution_areas: string | null
          Source: string | null
          specialist_domains: string | null
          strategic_priority: string | null
          support_hours_au: string | null
          trend_last_6m: number | null
          updated_at: string | null
          Use_Cases: string | null
        }
        Insert: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          id?: string
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          updated_at?: string | null
          Use_Cases?: string | null
        }
        Update: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          id?: string
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          updated_at?: string | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      merger_ecosystem_backup: {
        Row: {
          ai_specializations: string | null
          avg_deal_size: number | null
          avg_joint_win_rate: number | null
          Category: string | null
          certification_count: string | null
          certifications: string | null
          channel_type: string | null
          compliance_standards: string | null
          data_platforms: string | null
          Data_Quality_Rating: string | null
          data_sovereignty_guarantee: string | null
          Description: string | null
          devops_capabilities: string | null
          diversity_supplier: string | null
          employee_count: number | null
          Engagement_Model: string | null
          Entity_ID: string | null
          Entity_Name: string | null
          escalation_path: string | null
          global_office_count: number | null
          headquarters_city: string | null
          headquarters_country: string | null
          industry_vertical_focus: string | null
          insurances: string | null
          integration_platforms: string | null
          joint_proposals_count: number | null
          joint_win_count: number | null
          last_engagement_date: string | null
          local_presence_scale: string | null
          logo_url: string | null
          low_code_platforms: string | null
          Merged_Date: string | null
          msp_certifications: string | null
          nps_score: number | null
          office_count_au: string | null
          office_locations_au: string | null
          partner_contact_email: string | null
          partner_cost_model: string | null
          partner_id: string | null
          partner_maturity_level: string | null
          partner_NRR: number | null
          partner_phone: string | null
          partner_rating_overall: number | null
          partner_reference_customers: string | null
          partner_scorecard: string | null
          partner_segment: string | null
          partner_social_profiles: string | null
          partner_tier: string | null
          partner_training_capabilities: string | null
          partner_website: string | null
          partnership_duration_years: number | null
          partnership_start_date: string | null
          preferred_partner: boolean | null
          Pricing: string | null
          primary_technologies: string | null
          Primary_Technologies_List: string | null
          regions_supported: string | null
          relationship_score: number | null
          revenue_shared_pct: number | null
          risk_flags: string | null
          score_ranking: number | null
          security_clearance_levels: string | null
          security_specializations: string | null
          services_offered: string | null
          sla_levels: string | null
          solution_areas: string | null
          Source: string | null
          specialist_domains: string | null
          strategic_priority: string | null
          support_hours_au: string | null
          trend_last_6m: number | null
          Use_Cases: string | null
        }
        Insert: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          Use_Cases?: string | null
        }
        Update: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      n8n_automation_logs: {
        Row: {
          created_at: string
          error_message: string | null
          execution_id: string | null
          execution_time_ms: number | null
          id: string
          result_data: Json | null
          status: string
          trigger_data: Json | null
          trigger_type: string
          workflow_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          execution_id?: string | null
          execution_time_ms?: number | null
          id?: string
          result_data?: Json | null
          status: string
          trigger_data?: Json | null
          trigger_type: string
          workflow_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          execution_id?: string | null
          execution_time_ms?: number | null
          id?: string
          result_data?: Json | null
          status?: string
          trigger_data?: Json | null
          trigger_type?: string
          workflow_id?: string
        }
        Relationships: []
      }
      n8n_node_catalog: {
        Row: {
          category: string
          complexity_level: string | null
          created_at: string | null
          description: string | null
          documentation_url: string | null
          example_workflows: string[] | null
          id: string
          integration_platforms: string[] | null
          is_premium: boolean | null
          node_name: string
          popularity_score: number | null
          subcategory: string | null
          use_cases: string[] | null
        }
        Insert: {
          category: string
          complexity_level?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          example_workflows?: string[] | null
          id?: string
          integration_platforms?: string[] | null
          is_premium?: boolean | null
          node_name: string
          popularity_score?: number | null
          subcategory?: string | null
          use_cases?: string[] | null
        }
        Update: {
          category?: string
          complexity_level?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          example_workflows?: string[] | null
          id?: string
          integration_platforms?: string[] | null
          is_premium?: boolean | null
          node_name?: string
          popularity_score?: number | null
          subcategory?: string | null
          use_cases?: string[] | null
        }
        Relationships: []
      }
      n8n_workflow_templates: {
        Row: {
          category: string
          created_at: string | null
          customer_success_story: string | null
          description: string | null
          difficulty_level: string
          estimated_setup_time: string | null
          id: string
          is_featured: boolean | null
          node_count: number
          platforms: string[] | null
          roi_estimate: string | null
          template_name: string
          updated_at: string | null
          use_cases: string[] | null
          workflow_json: Json | null
        }
        Insert: {
          category: string
          created_at?: string | null
          customer_success_story?: string | null
          description?: string | null
          difficulty_level: string
          estimated_setup_time?: string | null
          id?: string
          is_featured?: boolean | null
          node_count?: number
          platforms?: string[] | null
          roi_estimate?: string | null
          template_name: string
          updated_at?: string | null
          use_cases?: string[] | null
          workflow_json?: Json | null
        }
        Update: {
          category?: string
          created_at?: string | null
          customer_success_story?: string | null
          description?: string | null
          difficulty_level?: string
          estimated_setup_time?: string | null
          id?: string
          is_featured?: boolean | null
          node_count?: number
          platforms?: string[] | null
          roi_estimate?: string | null
          template_name?: string
          updated_at?: string | null
          use_cases?: string[] | null
          workflow_json?: Json | null
        }
        Relationships: []
      }
      onboarding_metrics: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          id: string
          organization_profile_id: string | null
          started_at: string | null
          step_reached: number
          time_spent_seconds: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          organization_profile_id?: string | null
          started_at?: string | null
          step_reached: number
          time_spent_seconds?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          organization_profile_id?: string | null
          started_at?: string | null
          step_reached?: number
          time_spent_seconds?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_metrics_organization_profile_id_fkey"
            columns: ["organization_profile_id"]
            isOneToOne: false
            referencedRelation: "organization_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      operational_performance_metrics: {
        Row: {
          created_at: string | null
          id: string
          measurement_date: string | null
          metric_data: Json | null
          metric_type: string
          metric_value: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          measurement_date?: string | null
          metric_data?: Json | null
          metric_type: string
          metric_value?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          measurement_date?: string | null
          metric_data?: Json | null
          metric_type?: string
          metric_value?: number | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          amount: number | null
          created_at: string
          currency: string | null
          id: string
          status: string | null
          stripe_session_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          id?: string
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          id?: string
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      organization_profiles: {
        Row: {
          abn: string
          acn: string | null
          certifications: Json | null
          corporate_sla: Json
          corporate_structure: string | null
          coverage_capacity: Json
          created_at: string | null
          gst_registered: boolean | null
          head_office_address: string
          id: string
          legal_name: string
          onboarding_completed: boolean | null
          onboarding_progress: number | null
          reference_data: Json | null
          service_portfolio: Json | null
          trading_name: string | null
          type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          abn: string
          acn?: string | null
          certifications?: Json | null
          corporate_sla?: Json
          corporate_structure?: string | null
          coverage_capacity?: Json
          created_at?: string | null
          gst_registered?: boolean | null
          head_office_address: string
          id?: string
          legal_name: string
          onboarding_completed?: boolean | null
          onboarding_progress?: number | null
          reference_data?: Json | null
          service_portfolio?: Json | null
          trading_name?: string | null
          type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          abn?: string
          acn?: string | null
          certifications?: Json | null
          corporate_sla?: Json
          corporate_structure?: string | null
          coverage_capacity?: Json
          created_at?: string | null
          gst_registered?: boolean | null
          head_office_address?: string
          id?: string
          legal_name?: string
          onboarding_completed?: boolean | null
          onboarding_progress?: number | null
          reference_data?: Json | null
          service_portfolio?: Json | null
          trading_name?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      organization_usage: {
        Row: {
          assessments_count: number
          created_at: string
          id: string
          month: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          assessments_count?: number
          created_at?: string
          id?: string
          month: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          assessments_count?: number
          created_at?: string
          id?: string
          month?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_usage_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_users: {
        Row: {
          created_at: string
          id: string
          organization_id: string
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          organization_id: string
          role?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          organization_id?: string
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_users_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizational_change_agents: {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      organizational_changes: {
        Row: {
          actual_completion_date: string | null
          actual_impact: Json | null
          affected_entities: string[] | null
          change_description: string
          change_stage: string | null
          change_title: string
          change_type: string
          communication_plan: Json | null
          created_at: string
          id: string
          initiator: string
          knowledge_impact_assessment: Json | null
          lessons_learned: string | null
          required_training: string[] | null
          rollback_plan: string | null
          start_date: string | null
          success_criteria: string[] | null
          target_completion_date: string | null
          updated_at: string
        }
        Insert: {
          actual_completion_date?: string | null
          actual_impact?: Json | null
          affected_entities?: string[] | null
          change_description: string
          change_stage?: string | null
          change_title: string
          change_type: string
          communication_plan?: Json | null
          created_at?: string
          id?: string
          initiator: string
          knowledge_impact_assessment?: Json | null
          lessons_learned?: string | null
          required_training?: string[] | null
          rollback_plan?: string | null
          start_date?: string | null
          success_criteria?: string[] | null
          target_completion_date?: string | null
          updated_at?: string
        }
        Update: {
          actual_completion_date?: string | null
          actual_impact?: Json | null
          affected_entities?: string[] | null
          change_description?: string
          change_stage?: string | null
          change_title?: string
          change_type?: string
          communication_plan?: Json | null
          created_at?: string
          id?: string
          initiator?: string
          knowledge_impact_assessment?: Json | null
          lessons_learned?: string | null
          required_training?: string[] | null
          rollback_plan?: string | null
          start_date?: string | null
          success_criteria?: string[] | null
          target_completion_date?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      organizational_health_metrics: {
        Row: {
          created_at: string
          department_id: string | null
          id: string
          impact_level: string | null
          measured_at: string
          metadata: Json | null
          metric_category: string
          metric_name: string
          metric_value: number
          trend_direction: string | null
        }
        Insert: {
          created_at?: string
          department_id?: string | null
          id?: string
          impact_level?: string | null
          measured_at?: string
          metadata?: Json | null
          metric_category: string
          metric_name: string
          metric_value: number
          trend_direction?: string | null
        }
        Update: {
          created_at?: string
          department_id?: string | null
          id?: string
          impact_level?: string | null
          measured_at?: string
          metadata?: Json | null
          metric_category?: string
          metric_name?: string
          metric_value?: number
          trend_direction?: string | null
        }
        Relationships: []
      }
      organizations: {
        Row: {
          created_at: string | null
          domain: string
          id: string
          name: string
          settings: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          domain: string
          id?: string
          name: string
          settings?: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          domain?: string
          id?: string
          name?: string
          settings?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      overagerules: {
        Row: {
          overage_rate: number | null
          overage_unit: string | null
          pricing_plan_id: string | null
          rule_id: string
          threshold: number | null
        }
        Insert: {
          overage_rate?: number | null
          overage_unit?: string | null
          pricing_plan_id?: string | null
          rule_id: string
          threshold?: number | null
        }
        Update: {
          overage_rate?: number | null
          overage_unit?: string | null
          pricing_plan_id?: string | null
          rule_id?: string
          threshold?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "overagerules_pricing_plan_id_fkey"
            columns: ["pricing_plan_id"]
            isOneToOne: false
            referencedRelation: "pricingplans"
            referencedColumns: ["plan_id"]
          },
        ]
      }
      overheadallocations: {
        Row: {
          allocation_id: string
          allocation_pct: number | null
          applies_to: string | null
          cost_center: string | null
          notes: string | null
        }
        Insert: {
          allocation_id: string
          allocation_pct?: number | null
          applies_to?: string | null
          cost_center?: string | null
          notes?: string | null
        }
        Update: {
          allocation_id?: string
          allocation_pct?: number | null
          applies_to?: string | null
          cost_center?: string | null
          notes?: string | null
        }
        Relationships: []
      }
      pack_definitions: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          labor_model_split: Json | null
          name: string
          pack_id: string
          price: number | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          labor_model_split?: Json | null
          name: string
          pack_id?: string
          price?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          labor_model_split?: Json | null
          name?: string
          pack_id?: string
          price?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      "partner qualtrics defence": {
        Row: {
          agent_code: string | null
          delivery_model: string | null
          domain: string | null
          final_cost: number | null
          fit_for_partner_solutions: string | null
          function: string | null
          partner_match_confidence: number | null
          persona: string | null
          preferred_partners: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      partner_agent_combinations: {
        Row: {
          agent_codes: string[]
          certification_required: boolean | null
          combination_name: string
          created_at: string | null
          id: string
          integration_complexity: string | null
          joint_pricing: number | null
          joint_sla_available: boolean | null
          partner_name: string
          preferred_deployment: string | null
          revenue_share_pct: number | null
          setup_assistance_included: boolean | null
          success_stories_count: number | null
          time_to_market_days: number | null
          updated_at: string | null
        }
        Insert: {
          agent_codes: string[]
          certification_required?: boolean | null
          combination_name: string
          created_at?: string | null
          id?: string
          integration_complexity?: string | null
          joint_pricing?: number | null
          joint_sla_available?: boolean | null
          partner_name: string
          preferred_deployment?: string | null
          revenue_share_pct?: number | null
          setup_assistance_included?: boolean | null
          success_stories_count?: number | null
          time_to_market_days?: number | null
          updated_at?: string | null
        }
        Update: {
          agent_codes?: string[]
          certification_required?: boolean | null
          combination_name?: string
          created_at?: string | null
          id?: string
          integration_complexity?: string | null
          joint_pricing?: number | null
          joint_sla_available?: boolean | null
          partner_name?: string
          preferred_deployment?: string | null
          revenue_share_pct?: number | null
          setup_assistance_included?: boolean | null
          success_stories_count?: number | null
          time_to_market_days?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      partner_bundles: {
        Row: {
          bundle_id: string
          created_at: string
          id: string
          partner_id: string
          relationship_type: string
          updated_at: string
        }
        Insert: {
          bundle_id: string
          created_at?: string
          id?: string
          partner_id: string
          relationship_type?: string
          updated_at?: string
        }
        Update: {
          bundle_id?: string
          created_at?: string
          id?: string
          partner_id?: string
          relationship_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_bundles_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "bundles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_bundles_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_capability_overlays: {
        Row: {
          agent_code: string | null
          delivery_model: string | null
          final_cost: number | null
          fit_for_partner_solutions: string | null
          function: string | null
          partner_match_confidence: number | null
          persona: string | null
          preferred_partners: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      partnercommissions: {
        Row: {
          commission_id: string
          commission_pct: number | null
          entity_id: string | null
          entity_type: string | null
          partner_id: string | null
        }
        Insert: {
          commission_id: string
          commission_pct?: number | null
          entity_id?: string | null
          entity_type?: string | null
          partner_id?: string | null
        }
        Update: {
          commission_id?: string
          commission_pct?: number | null
          entity_id?: string | null
          entity_type?: string | null
          partner_id?: string | null
        }
        Relationships: []
      }
      partners: {
        Row: {
          category: string
          created_at: string
          description: string | null
          featured: boolean | null
          id: string
          industry_focus: string[] | null
          logo_url: string | null
          name: string
          regions: string[] | null
          slug: string
          status: string
          tier: string
          updated_at: string
          use_case: string | null
          website_url: string | null
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          industry_focus?: string[] | null
          logo_url?: string | null
          name: string
          regions?: string[] | null
          slug: string
          status?: string
          tier?: string
          updated_at?: string
          use_case?: string | null
          website_url?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          industry_focus?: string[] | null
          logo_url?: string | null
          name?: string
          regions?: string[] | null
          slug?: string
          status?: string
          tier?: string
          updated_at?: string
          use_case?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      personality_types: {
        Row: {
          agent_count: number | null
          capabilities: string[] | null
          created_at: string
          description: string
          id: string
          key_traits: string[] | null
          name: string
        }
        Insert: {
          agent_count?: number | null
          capabilities?: string[] | null
          created_at?: string
          description: string
          id?: string
          key_traits?: string[] | null
          name: string
        }
        Update: {
          agent_count?: number | null
          capabilities?: string[] | null
          created_at?: string
          description?: string
          id?: string
          key_traits?: string[] | null
          name?: string
        }
        Relationships: []
      }
      platform_audit_results: {
        Row: {
          audit_date: string
          audit_status: string
          average_load_time: number
          base_url: string
          business_critical_issues: number
          created_at: string
          detailed_results: Json | null
          error_log: Json | null
          health_score: number
          id: string
          mobile_compatibility_score: number
          platform_name: string
          recommendations: Json | null
          routes_failing: number
          routes_over_5s: number
          routes_working: number
          total_routes: number
          updated_at: string
        }
        Insert: {
          audit_date?: string
          audit_status?: string
          average_load_time?: number
          base_url: string
          business_critical_issues?: number
          created_at?: string
          detailed_results?: Json | null
          error_log?: Json | null
          health_score?: number
          id?: string
          mobile_compatibility_score?: number
          platform_name?: string
          recommendations?: Json | null
          routes_failing?: number
          routes_over_5s?: number
          routes_working?: number
          total_routes?: number
          updated_at?: string
        }
        Update: {
          audit_date?: string
          audit_status?: string
          average_load_time?: number
          base_url?: string
          business_critical_issues?: number
          created_at?: string
          detailed_results?: Json | null
          error_log?: Json | null
          health_score?: number
          id?: string
          mobile_compatibility_score?: number
          platform_name?: string
          recommendations?: Json | null
          routes_failing?: number
          routes_over_5s?: number
          routes_working?: number
          total_routes?: number
          updated_at?: string
        }
        Relationships: []
      }
      portfolio_selections: {
        Row: {
          created_at: string
          framework_used: string
          id: string
          microsoft_license: string
          notes: string | null
          selected_ideas: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          framework_used?: string
          id?: string
          microsoft_license?: string
          notes?: string | null
          selected_ideas?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          framework_used?: string
          id?: string
          microsoft_license?: string
          notes?: string | null
          selected_ideas?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      preconfigpacks: {
        Row: {
          agents_count: number | null
          category: string | null
          fte_replaced: number | null
          name: string | null
          preconfig_id: string
          price_per_month: number | null
          savings_pct: number | null
        }
        Insert: {
          agents_count?: number | null
          category?: string | null
          fte_replaced?: number | null
          name?: string | null
          preconfig_id: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Update: {
          agents_count?: number | null
          category?: string | null
          fte_replaced?: number | null
          name?: string | null
          preconfig_id?: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Relationships: []
      }
      pricing_tiers: {
        Row: {
          base_monthly_cost: number
          complexity_tier: string
          cost_per_hour: number | null
          created_at: string | null
          delivery_model: string
          id: string
          max_monthly_hours: number | null
          setup_cost: number
          tier_name: string
        }
        Insert: {
          base_monthly_cost: number
          complexity_tier: string
          cost_per_hour?: number | null
          created_at?: string | null
          delivery_model: string
          id?: string
          max_monthly_hours?: number | null
          setup_cost: number
          tier_name: string
        }
        Update: {
          base_monthly_cost?: number
          complexity_tier?: string
          cost_per_hour?: number | null
          created_at?: string | null
          delivery_model?: string
          id?: string
          max_monthly_hours?: number | null
          setup_cost?: number
          tier_name?: string
        }
        Relationships: []
      }
      pricingplans: {
        Row: {
          included_agents: number | null
          name: string | null
          plan_id: string
          price: number | null
          support_level: string | null
          unit: string | null
          usage_limit: string | null
        }
        Insert: {
          included_agents?: number | null
          name?: string | null
          plan_id: string
          price?: number | null
          support_level?: string | null
          unit?: string | null
          usage_limit?: string | null
        }
        Update: {
          included_agents?: number | null
          name?: string | null
          plan_id?: string
          price?: number | null
          support_level?: string | null
          unit?: string | null
          usage_limit?: string | null
        }
        Relationships: []
      }
      pricingrules: {
        Row: {
          discount_pct: number | null
          end_date: string | null
          entity_id: string | null
          entity_type: string | null
          min_qty: number | null
          rule_id: string
          start_date: string | null
        }
        Insert: {
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          rule_id: string
          start_date?: string | null
        }
        Update: {
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          rule_id?: string
          start_date?: string | null
        }
        Relationships: []
      }
      processing_jobs: {
        Row: {
          assessment_id: string | null
          completed_at: string | null
          created_at: string | null
          document_id: string
          error_message: string | null
          id: string
          job_type: string
          priority: number | null
          processing_options: Json | null
          started_at: string | null
          status: string | null
        }
        Insert: {
          assessment_id?: string | null
          completed_at?: string | null
          created_at?: string | null
          document_id: string
          error_message?: string | null
          id?: string
          job_type: string
          priority?: number | null
          processing_options?: Json | null
          started_at?: string | null
          status?: string | null
        }
        Update: {
          assessment_id?: string | null
          completed_at?: string | null
          created_at?: string | null
          document_id?: string
          error_message?: string | null
          id?: string
          job_type?: string
          priority?: number | null
          processing_options?: Json | null
          started_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "processing_jobs_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "automation_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      procurement_evaluation_metrics: {
        Row: {
          "Current Value": string | null
          Data_Source: string | null
          Default_Weight: number | null
          Dimension: string | null
          Labor_Model: string | null
          Metric: string | null
          Reason: string | null
          Weight_Gov_Federal: number | null
          Weight_Gov_State: number | null
          Weight_Nonprofit: number | null
          Weight_Private_Enterprise: number | null
          Weight_SMB: number | null
          WhyItMatters: string | null
        }
        Insert: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Update: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Relationships: []
      }
      productcosts: {
        Row: {
          gross_profit: number | null
          markup_pct: number | null
          overhead_cost: number | null
          product_id: string
          retail_cost: number | null
          total_cost: number | null
          wholesale_cost: number | null
        }
        Insert: {
          gross_profit?: number | null
          markup_pct?: number | null
          overhead_cost?: number | null
          product_id: string
          retail_cost?: number | null
          total_cost?: number | null
          wholesale_cost?: number | null
        }
        Update: {
          gross_profit?: number | null
          markup_pct?: number | null
          overhead_cost?: number | null
          product_id?: string
          retail_cost?: number | null
          total_cost?: number | null
          wholesale_cost?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          billing_period: string
          category: string
          contract_length: number | null
          created_at: string | null
          currency: string
          description: string | null
          display_order: number | null
          features: Json | null
          id: string
          is_featured: boolean | null
          min_price: number | null
          name: string
          price: number
          price_description: string | null
          price_suffix_custom: string | null
          pricing_model: string
          stripe_price_id: string | null
          updated_at: string | null
        }
        Insert: {
          billing_period: string
          category: string
          contract_length?: number | null
          created_at?: string | null
          currency?: string
          description?: string | null
          display_order?: number | null
          features?: Json | null
          id?: string
          is_featured?: boolean | null
          min_price?: number | null
          name: string
          price: number
          price_description?: string | null
          price_suffix_custom?: string | null
          pricing_model?: string
          stripe_price_id?: string | null
          updated_at?: string | null
        }
        Update: {
          billing_period?: string
          category?: string
          contract_length?: number | null
          created_at?: string | null
          currency?: string
          description?: string | null
          display_order?: number | null
          features?: Json | null
          id?: string
          is_featured?: boolean | null
          min_price?: number | null
          name?: string
          price?: number
          price_description?: string | null
          price_suffix_custom?: string | null
          pricing_model?: string
          stripe_price_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      project_catalog: {
        Row: {
          category: string | null
          description: string | null
          id: string
          linked_brands: string | null
          status: string | null
          title: string | null
        }
        Insert: {
          category?: string | null
          description?: string | null
          id?: string
          linked_brands?: string | null
          status?: string | null
          title?: string | null
        }
        Update: {
          category?: string | null
          description?: string | null
          id?: string
          linked_brands?: string | null
          status?: string | null
          title?: string | null
        }
        Relationships: []
      }
      project_executive_questions: {
        Row: {
          answer_text: string | null
          answered_by: string | null
          asked_by: string | null
          created_at: string | null
          id: string
          priority: number | null
          project_id: string | null
          question_text: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          answer_text?: string | null
          answered_by?: string | null
          asked_by?: string | null
          created_at?: string | null
          id?: string
          priority?: number | null
          project_id?: string | null
          question_text: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          answer_text?: string | null
          answered_by?: string | null
          asked_by?: string | null
          created_at?: string | null
          id?: string
          priority?: number | null
          project_id?: string | null
          question_text?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_executive_questions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_management_matches: {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      project_stakeholder_comments: {
        Row: {
          comment_text: string
          comment_type: string | null
          created_at: string | null
          id: string
          is_question: boolean | null
          parent_comment_id: string | null
          project_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment_text: string
          comment_type?: string | null
          created_at?: string | null
          id?: string
          is_question?: boolean | null
          parent_comment_id?: string | null
          project_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment_text?: string
          comment_type?: string | null
          created_at?: string | null
          id?: string
          is_question?: boolean | null
          parent_comment_id?: string | null
          project_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_stakeholder_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "project_stakeholder_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_stakeholder_comments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_strategic_info: {
        Row: {
          created_at: string | null
          estimated_roi: string | null
          project_id: string
          strategic_objectives: string[] | null
          strategic_tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          estimated_roi?: string | null
          project_id: string
          strategic_objectives?: string[] | null
          strategic_tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          estimated_roi?: string | null
          project_id?: string
          strategic_objectives?: string[] | null
          strategic_tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_strategic_info_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_tasks: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          project_id: string | null
          quantity: number
          rate: number
          subtotal: number
          unit: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          project_id?: string | null
          quantity?: number
          rate?: number
          subtotal?: number
          unit?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          project_id?: string | null
          quantity?: number
          rate?: number
          subtotal?: number
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          approval_comments: string | null
          approval_date: string | null
          approval_status: string | null
          approved: boolean | null
          approved_by: string | null
          category: string | null
          channels: string | null
          client: string
          competitive_urgency: number | null
          complexity: string | null
          content_source: string | null
          content_type: string | null
          content_url: string | null
          cost_estimate: number | null
          cost_structure: string | null
          created_at: string
          csat: number | null
          customer_impact_score: number | null
          customer_segments: string | null
          deliverables: string[] | null
          estimated_effort: number | null
          executive_brief: string | null
          financial_analysis: Json | null
          id: string
          implementation_confidence: number | null
          implementation_timeline: Json | null
          is_content_derived: boolean | null
          key_metrics: string | null
          market_size: number | null
          name: string
          nps: number | null
          owner: string
          payment_milestones: string | null
          pillar: string | null
          pillar_effort: number | null
          pillar_readiness: number | null
          pillar_scope: number | null
          pillar_value: number | null
          priority: string | null
          problem: string | null
          problem_statement: string | null
          project_brief: string | null
          quote_id: string | null
          rate_multiplier: number | null
          reference_links: string[] | null
          response_time: string | null
          revenue_streams: string | null
          service_offering: string | null
          shared_content: Json | null
          solution: string | null
          solution_summary: string | null
          sow_id: string | null
          status: string
          strategic_alignment: number | null
          tech_count: number | null
          tenant_id: string | null
          total_estimate: number | null
          trigger_process: string | null
          unfair_advantage: string | null
          unique_value: string | null
          updated_at: string
          user_journey_flow: Json | null
          user_stories: Json | null
          value_statement: string | null
        }
        Insert: {
          approval_comments?: string | null
          approval_date?: string | null
          approval_status?: string | null
          approved?: boolean | null
          approved_by?: string | null
          category?: string | null
          channels?: string | null
          client: string
          competitive_urgency?: number | null
          complexity?: string | null
          content_source?: string | null
          content_type?: string | null
          content_url?: string | null
          cost_estimate?: number | null
          cost_structure?: string | null
          created_at?: string
          csat?: number | null
          customer_impact_score?: number | null
          customer_segments?: string | null
          deliverables?: string[] | null
          estimated_effort?: number | null
          executive_brief?: string | null
          financial_analysis?: Json | null
          id?: string
          implementation_confidence?: number | null
          implementation_timeline?: Json | null
          is_content_derived?: boolean | null
          key_metrics?: string | null
          market_size?: number | null
          name: string
          nps?: number | null
          owner: string
          payment_milestones?: string | null
          pillar?: string | null
          pillar_effort?: number | null
          pillar_readiness?: number | null
          pillar_scope?: number | null
          pillar_value?: number | null
          priority?: string | null
          problem?: string | null
          problem_statement?: string | null
          project_brief?: string | null
          quote_id?: string | null
          rate_multiplier?: number | null
          reference_links?: string[] | null
          response_time?: string | null
          revenue_streams?: string | null
          service_offering?: string | null
          shared_content?: Json | null
          solution?: string | null
          solution_summary?: string | null
          sow_id?: string | null
          status?: string
          strategic_alignment?: number | null
          tech_count?: number | null
          tenant_id?: string | null
          total_estimate?: number | null
          trigger_process?: string | null
          unfair_advantage?: string | null
          unique_value?: string | null
          updated_at?: string
          user_journey_flow?: Json | null
          user_stories?: Json | null
          value_statement?: string | null
        }
        Update: {
          approval_comments?: string | null
          approval_date?: string | null
          approval_status?: string | null
          approved?: boolean | null
          approved_by?: string | null
          category?: string | null
          channels?: string | null
          client?: string
          competitive_urgency?: number | null
          complexity?: string | null
          content_source?: string | null
          content_type?: string | null
          content_url?: string | null
          cost_estimate?: number | null
          cost_structure?: string | null
          created_at?: string
          csat?: number | null
          customer_impact_score?: number | null
          customer_segments?: string | null
          deliverables?: string[] | null
          estimated_effort?: number | null
          executive_brief?: string | null
          financial_analysis?: Json | null
          id?: string
          implementation_confidence?: number | null
          implementation_timeline?: Json | null
          is_content_derived?: boolean | null
          key_metrics?: string | null
          market_size?: number | null
          name?: string
          nps?: number | null
          owner?: string
          payment_milestones?: string | null
          pillar?: string | null
          pillar_effort?: number | null
          pillar_readiness?: number | null
          pillar_scope?: number | null
          pillar_value?: number | null
          priority?: string | null
          problem?: string | null
          problem_statement?: string | null
          project_brief?: string | null
          quote_id?: string | null
          rate_multiplier?: number | null
          reference_links?: string[] | null
          response_time?: string | null
          revenue_streams?: string | null
          service_offering?: string | null
          shared_content?: Json | null
          solution?: string | null
          solution_summary?: string | null
          sow_id?: string | null
          status?: string
          strategic_alignment?: number | null
          tech_count?: number | null
          tenant_id?: string | null
          total_estimate?: number | null
          trigger_process?: string | null
          unfair_advantage?: string | null
          unique_value?: string | null
          updated_at?: string
          user_journey_flow?: Json | null
          user_stories?: Json | null
          value_statement?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      promocodes: {
        Row: {
          applies_to: string | null
          code: string | null
          discount_pct: number | null
          fixed_amount: number | null
          promo_id: string
          valid_from: string | null
          valid_to: string | null
        }
        Insert: {
          applies_to?: string | null
          code?: string | null
          discount_pct?: number | null
          fixed_amount?: number | null
          promo_id: string
          valid_from?: string | null
          valid_to?: string | null
        }
        Update: {
          applies_to?: string | null
          code?: string | null
          discount_pct?: number | null
          fixed_amount?: number | null
          promo_id?: string
          valid_from?: string | null
          valid_to?: string | null
        }
        Relationships: []
      }
      proposal_asset_generator: {
        Row: {
          agent_code: string | null
          cost: number | null
          cv_overlay_required: boolean | null
          delivery_model: string | null
          function: string | null
          role: string | null
          sfia_level: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      quote_items: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          project_id: string | null
          quantity: number
          rate: number
          total: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          project_id?: string | null
          quantity?: number
          rate: number
          total?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          project_id?: string | null
          quantity?: number
          rate?: number
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quote_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      regionalpricingoverrides: {
        Row: {
          entity_id: string | null
          entity_type: string | null
          override_id: string
          override_price: number | null
          region: string | null
        }
        Insert: {
          entity_id?: string | null
          entity_type?: string | null
          override_id: string
          override_price?: number | null
          region?: string | null
        }
        Update: {
          entity_id?: string | null
          entity_type?: string | null
          override_id?: string
          override_price?: number | null
          region?: string | null
        }
        Relationships: []
      }
      report_deliveries: {
        Row: {
          created_at: string
          delivery_attempts: number
          delivery_status: string
          email_id: string | null
          error_message: string | null
          id: string
          last_attempt_at: string | null
          report_date: string
          report_type: string
          subscriber_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          delivery_attempts?: number
          delivery_status?: string
          email_id?: string | null
          error_message?: string | null
          id?: string
          last_attempt_at?: string | null
          report_date: string
          report_type: string
          subscriber_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          delivery_attempts?: number
          delivery_status?: string
          email_id?: string | null
          error_message?: string | null
          id?: string
          last_attempt_at?: string | null
          report_date?: string
          report_type?: string
          subscriber_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_deliveries_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "email_subscribers"
            referencedColumns: ["id"]
          },
        ]
      }
      requirements: {
        Row: {
          created_at: string | null
          deliverable_formats: string[] | null
          description: string | null
          kpi_targets: Json | null
          labor_model: string | null
          must_haves: Json | null
          nice_to_haves: Json | null
          question_deadline: string | null
          rft_id: string
          risk_tolerances: Json | null
          submission_deadline: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deliverable_formats?: string[] | null
          description?: string | null
          kpi_targets?: Json | null
          labor_model?: string | null
          must_haves?: Json | null
          nice_to_haves?: Json | null
          question_deadline?: string | null
          rft_id?: string
          risk_tolerances?: Json | null
          submission_deadline?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deliverable_formats?: string[] | null
          description?: string | null
          kpi_targets?: Json | null
          labor_model?: string | null
          must_haves?: Json | null
          nice_to_haves?: Json | null
          question_deadline?: string | null
          rft_id?: string
          risk_tolerances?: Json | null
          submission_deadline?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      reselleragreements: {
        Row: {
          agreement_id: string
          end_date: string | null
          partner_id: string | null
          start_date: string | null
          terms: string | null
        }
        Insert: {
          agreement_id: string
          end_date?: string | null
          partner_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Update: {
          agreement_id?: string
          end_date?: string | null
          partner_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Relationships: []
      }
      response_templates: {
        Row: {
          content_template: string
          created_at: string
          delivery_model: string
          id: string
          is_mandatory: boolean
          required_variables: Json | null
          rft_section_mapping: string[] | null
          section_name: string
          section_order: number
          template_code: string
          updated_at: string
        }
        Insert: {
          content_template: string
          created_at?: string
          delivery_model?: string
          id?: string
          is_mandatory?: boolean
          required_variables?: Json | null
          rft_section_mapping?: string[] | null
          section_name: string
          section_order?: number
          template_code: string
          updated_at?: string
        }
        Update: {
          content_template?: string
          created_at?: string
          delivery_model?: string
          id?: string
          is_mandatory?: boolean
          required_variables?: Json | null
          rft_section_mapping?: string[] | null
          section_name?: string
          section_order?: number
          template_code?: string
          updated_at?: string
        }
        Relationships: []
      }
      revenueforecasts: {
        Row: {
          forecast_id: number
          period: string | null
          product_id: string | null
          projected_qty: number | null
          projected_revenue: number | null
        }
        Insert: {
          forecast_id?: number
          period?: string | null
          product_id?: string | null
          projected_qty?: number | null
          projected_revenue?: number | null
        }
        Update: {
          forecast_id?: number
          period?: string | null
          product_id?: string | null
          projected_qty?: number | null
          projected_revenue?: number | null
        }
        Relationships: []
      }
      rft_agent_history: {
        Row: {
          actual_performance_rating: number | null
          agent_code: string
          budget_adherence_score: number | null
          client_satisfaction_score: number | null
          created_at: string
          delivery_timeliness_score: number | null
          id: string
          improvement_areas: string[] | null
          lessons_learned: string | null
          match_score: number
          rft_id: string
          updated_at: string
          was_selected: boolean
          win_outcome: boolean | null
        }
        Insert: {
          actual_performance_rating?: number | null
          agent_code: string
          budget_adherence_score?: number | null
          client_satisfaction_score?: number | null
          created_at?: string
          delivery_timeliness_score?: number | null
          id?: string
          improvement_areas?: string[] | null
          lessons_learned?: string | null
          match_score?: number
          rft_id: string
          updated_at?: string
          was_selected?: boolean
          win_outcome?: boolean | null
        }
        Update: {
          actual_performance_rating?: number | null
          agent_code?: string
          budget_adherence_score?: number | null
          client_satisfaction_score?: number | null
          created_at?: string
          delivery_timeliness_score?: number | null
          id?: string
          improvement_areas?: string[] | null
          lessons_learned?: string | null
          match_score?: number
          rft_id?: string
          updated_at?: string
          was_selected?: boolean
          win_outcome?: boolean | null
        }
        Relationships: []
      }
      rft_analyses: {
        Row: {
          created_at: string
          id: string
          overall_score: number | null
          rft_id: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          overall_score?: number | null
          rft_id: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          overall_score?: number | null
          rft_id?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      rft_analysis_results: {
        Row: {
          agency: string | null
          auto_responses: Json
          category_scores: Json
          content_generated: string | null
          created_at: string
          decision_reasoning: string | null
          delivery_models_analysis: Json | null
          due_date: string | null
          go_no_go_decision: string
          id: string
          overall_score: number
          rft_title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          agency?: string | null
          auto_responses?: Json
          category_scores?: Json
          content_generated?: string | null
          created_at?: string
          decision_reasoning?: string | null
          delivery_models_analysis?: Json | null
          due_date?: string | null
          go_no_go_decision: string
          id?: string
          overall_score: number
          rft_title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          agency?: string | null
          auto_responses?: Json
          category_scores?: Json
          content_generated?: string | null
          created_at?: string
          decision_reasoning?: string | null
          delivery_models_analysis?: Json | null
          due_date?: string | null
          go_no_go_decision?: string
          id?: string
          overall_score?: number
          rft_title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      rft_audit_logs: {
        Row: {
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          rft_id: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          rft_id?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          rft_id?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_audit_logs_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_criteria: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          keywords: string[] | null
          name: string
          pass_threshold: number | null
          required_for_go: boolean | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          name: string
          pass_threshold?: number | null
          required_for_go?: boolean | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          name?: string
          pass_threshold?: number | null
          required_for_go?: boolean | null
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      rft_decision_analytics: {
        Row: {
          accuracy_score: number | null
          bid_amount: number | null
          bid_submission_date: string | null
          bid_submitted: boolean | null
          created_at: string
          decision_change_reason: string | null
          feedback_received: string | null
          final_decision: string | null
          id: string
          initial_decision: string | null
          lessons_learned: string | null
          outcome: string | null
          rft_id: string
          winning_amount: number | null
          winning_vendor: string | null
          would_bid_again: boolean | null
        }
        Insert: {
          accuracy_score?: number | null
          bid_amount?: number | null
          bid_submission_date?: string | null
          bid_submitted?: boolean | null
          created_at?: string
          decision_change_reason?: string | null
          feedback_received?: string | null
          final_decision?: string | null
          id?: string
          initial_decision?: string | null
          lessons_learned?: string | null
          outcome?: string | null
          rft_id: string
          winning_amount?: number | null
          winning_vendor?: string | null
          would_bid_again?: boolean | null
        }
        Update: {
          accuracy_score?: number | null
          bid_amount?: number | null
          bid_submission_date?: string | null
          bid_submitted?: boolean | null
          created_at?: string
          decision_change_reason?: string | null
          feedback_received?: string | null
          final_decision?: string | null
          id?: string
          initial_decision?: string | null
          lessons_learned?: string | null
          outcome?: string | null
          rft_id?: string
          winning_amount?: number | null
          winning_vendor?: string | null
          would_bid_again?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_decision_analytics_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_documents: {
        Row: {
          content_text: string | null
          created_at: string | null
          decision_confidence: number | null
          decision_timestamp: string | null
          extracted_metadata: Json | null
          file_name: string
          file_path: string | null
          file_size: number | null
          file_type: string | null
          go_no_go_decision: string | null
          id: string
          processing_status: string | null
          updated_at: string | null
        }
        Insert: {
          content_text?: string | null
          created_at?: string | null
          decision_confidence?: number | null
          decision_timestamp?: string | null
          extracted_metadata?: Json | null
          file_name: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          go_no_go_decision?: string | null
          id?: string
          processing_status?: string | null
          updated_at?: string | null
        }
        Update: {
          content_text?: string | null
          created_at?: string | null
          decision_confidence?: number | null
          decision_timestamp?: string | null
          extracted_metadata?: Json | null
          file_name?: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          go_no_go_decision?: string | null
          id?: string
          processing_status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      rft_draft_responses: {
        Row: {
          boilerplate_references: Json | null
          content_template: string | null
          created_at: string | null
          final_content: string | null
          id: string
          is_complete: boolean | null
          requires_review: boolean | null
          rft_document_id: string
          section_name: string
          section_order: number | null
          section_type: string
          updated_at: string | null
          variables_used: Json | null
        }
        Insert: {
          boilerplate_references?: Json | null
          content_template?: string | null
          created_at?: string | null
          final_content?: string | null
          id?: string
          is_complete?: boolean | null
          requires_review?: boolean | null
          rft_document_id: string
          section_name: string
          section_order?: number | null
          section_type: string
          updated_at?: string | null
          variables_used?: Json | null
        }
        Update: {
          boilerplate_references?: Json | null
          content_template?: string | null
          created_at?: string | null
          final_content?: string | null
          id?: string
          is_complete?: boolean | null
          requires_review?: boolean | null
          rft_document_id?: string
          section_name?: string
          section_order?: number | null
          section_type?: string
          updated_at?: string | null
          variables_used?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_draft_responses_rft_document_id_fkey"
            columns: ["rft_document_id"]
            isOneToOne: false
            referencedRelation: "rft_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_evaluation_criteria: {
        Row: {
          category: string
          created_at: string | null
          criterion_code: string
          criterion_name: string
          description: string | null
          evaluation_type: string
          id: string
          is_active: boolean | null
          is_mandatory: boolean | null
          pass_condition: Json
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          criterion_code: string
          criterion_name: string
          description?: string | null
          evaluation_type: string
          id?: string
          is_active?: boolean | null
          is_mandatory?: boolean | null
          pass_condition: Json
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          criterion_code?: string
          criterion_name?: string
          description?: string | null
          evaluation_type?: string
          id?: string
          is_active?: boolean | null
          is_mandatory?: boolean | null
          pass_condition?: Json
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      rft_evaluation_results: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          criterion_id: string
          evaluation_result: string
          extracted_snippet: string | null
          extracted_value: string | null
          id: string
          reasoning: string | null
          rft_document_id: string
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          criterion_id: string
          evaluation_result: string
          extracted_snippet?: string | null
          extracted_value?: string | null
          id?: string
          reasoning?: string | null
          rft_document_id: string
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          criterion_id?: string
          evaluation_result?: string
          extracted_snippet?: string | null
          extracted_value?: string | null
          id?: string
          reasoning?: string | null
          rft_document_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rft_evaluation_results_criterion_id_fkey"
            columns: ["criterion_id"]
            isOneToOne: false
            referencedRelation: "rft_evaluation_criteria"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rft_evaluation_results_rft_document_id_fkey"
            columns: ["rft_document_id"]
            isOneToOne: false
            referencedRelation: "rft_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_extracted_evidence: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          criteria_id: string | null
          decision: string
          extracted_text: string
          id: string
          page_number: number | null
          rft_id: string | null
          source_section: string | null
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          criteria_id?: string | null
          decision: string
          extracted_text: string
          id?: string
          page_number?: number | null
          rft_id?: string | null
          source_section?: string | null
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          criteria_id?: string | null
          decision?: string
          extracted_text?: string
          id?: string
          page_number?: number | null
          rft_id?: string | null
          source_section?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_extracted_evidence_criteria_id_fkey"
            columns: ["criteria_id"]
            isOneToOne: false
            referencedRelation: "rft_criteria"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rft_extracted_evidence_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_metric_definitions: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          type?: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Relationships: []
      }
      rft_metric_values: {
        Row: {
          analysis_id: string | null
          created_at: string
          id: string
          metric_id: string | null
          reason: string | null
          updated_at: string
          value_boolean: boolean | null
          value_date: string | null
          value_numeric: number | null
          value_text: string | null
        }
        Insert: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Update: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_metric_values_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "rft_analyses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rft_metric_values_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "rft_metric_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_pipeline_decisions: {
        Row: {
          automated: boolean | null
          created_at: string | null
          decision_maker_id: string | null
          decision_reasoning: string | null
          decision_score: number | null
          decision_timestamp: string | null
          decision_triggers: Json | null
          decision_type: string
          id: string
          override_applied: boolean | null
          override_reason: string | null
          rft_id: string | null
          scoring_breakdown: Json | null
          updated_at: string | null
        }
        Insert: {
          automated?: boolean | null
          created_at?: string | null
          decision_maker_id?: string | null
          decision_reasoning?: string | null
          decision_score?: number | null
          decision_timestamp?: string | null
          decision_triggers?: Json | null
          decision_type: string
          id?: string
          override_applied?: boolean | null
          override_reason?: string | null
          rft_id?: string | null
          scoring_breakdown?: Json | null
          updated_at?: string | null
        }
        Update: {
          automated?: boolean | null
          created_at?: string | null
          decision_maker_id?: string | null
          decision_reasoning?: string | null
          decision_score?: number | null
          decision_timestamp?: string | null
          decision_triggers?: Json | null
          decision_type?: string
          id?: string
          override_applied?: boolean | null
          override_reason?: string | null
          rft_id?: string | null
          scoring_breakdown?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_pipeline_decisions_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_requirements: {
        Row: {
          compliance_level: string | null
          created_at: string
          id: string
          is_mandatory: boolean | null
          notes: string | null
          our_capability_rating: number | null
          requirement_description: string | null
          requirement_title: string
          requirement_type: string
          rft_id: string
        }
        Insert: {
          compliance_level?: string | null
          created_at?: string
          id?: string
          is_mandatory?: boolean | null
          notes?: string | null
          our_capability_rating?: number | null
          requirement_description?: string | null
          requirement_title: string
          requirement_type: string
          rft_id: string
        }
        Update: {
          compliance_level?: string | null
          created_at?: string
          id?: string
          is_mandatory?: boolean | null
          notes?: string | null
          our_capability_rating?: number | null
          requirement_description?: string | null
          requirement_title?: string
          requirement_type?: string
          rft_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rft_requirements_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_scores: {
        Row: {
          agency: string | null
          calculated_score: number | null
          created_at: string | null
          due_date: string | null
          final_decision: string | null
          id: string
          override: string | null
          reason: string | null
          scores: Json | null
          tender_title: string | null
        }
        Insert: {
          agency?: string | null
          calculated_score?: number | null
          created_at?: string | null
          due_date?: string | null
          final_decision?: string | null
          id?: string
          override?: string | null
          reason?: string | null
          scores?: Json | null
          tender_title?: string | null
        }
        Update: {
          agency?: string | null
          calculated_score?: number | null
          created_at?: string | null
          due_date?: string | null
          final_decision?: string | null
          id?: string
          override?: string | null
          reason?: string | null
          scores?: Json | null
          tender_title?: string | null
        }
        Relationships: []
      }
      rft_scoring_details: {
        Row: {
          auto_calculated: boolean | null
          capability_match_scores: Json | null
          category_weights: Json | null
          competitive_position_scores: Json | null
          created_at: string
          created_by: string | null
          financial_scores: Json | null
          id: string
          manual_override: boolean | null
          override_by: string | null
          override_date: string | null
          override_reason: string | null
          rft_id: string
          risk_compliance_scores: Json | null
          scoring_version: string | null
          strategic_fit_scores: Json | null
          total_score: number | null
          updated_at: string
          updated_by: string | null
          weighted_score: number | null
        }
        Insert: {
          auto_calculated?: boolean | null
          capability_match_scores?: Json | null
          category_weights?: Json | null
          competitive_position_scores?: Json | null
          created_at?: string
          created_by?: string | null
          financial_scores?: Json | null
          id?: string
          manual_override?: boolean | null
          override_by?: string | null
          override_date?: string | null
          override_reason?: string | null
          rft_id: string
          risk_compliance_scores?: Json | null
          scoring_version?: string | null
          strategic_fit_scores?: Json | null
          total_score?: number | null
          updated_at?: string
          updated_by?: string | null
          weighted_score?: number | null
        }
        Update: {
          auto_calculated?: boolean | null
          capability_match_scores?: Json | null
          category_weights?: Json | null
          competitive_position_scores?: Json | null
          created_at?: string
          created_by?: string | null
          financial_scores?: Json | null
          id?: string
          manual_override?: boolean | null
          override_by?: string | null
          override_date?: string | null
          override_reason?: string | null
          rft_id?: string
          risk_compliance_scores?: Json | null
          scoring_version?: string | null
          strategic_fit_scores?: Json | null
          total_score?: number | null
          updated_at?: string
          updated_by?: string | null
          weighted_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_scoring_details_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rfts: {
        Row: {
          agency: string
          architecture_requirements: string[] | null
          assigned_team_lead: string | null
          assigned_team_members: string[] | null
          augmented_cost_estimate: number | null
          auto_parsed: boolean | null
          automated_cost_estimate: number | null
          certifications: string[] | null
          competitor_analysis: string | null
          compliance_requirements: string[] | null
          contract_duration: string | null
          contract_end_date: string | null
          contract_model: string | null
          contract_start_date: string | null
          created_at: string
          created_by: string | null
          data_sovereignty_requirements: string | null
          decision_by: string | null
          decision_date: string | null
          decision_reason: string | null
          department: string | null
          document_urls: string[] | null
          due_date: string
          esg_clauses: string[] | null
          estimated_effort_hours: number | null
          estimated_value: number | null
          estimated_value_currency: string | null
          evaluation_criteria: string | null
          external_id: string | null
          framework_panel: string | null
          go_no_go_decision: string | null
          hosting_requirement: string | null
          human_cost_estimate: number | null
          id: string
          known_incumbent: string | null
          last_sync_date: string | null
          legal_red_flags: string | null
          mandatory_criteria: string | null
          market_size_estimate: number | null
          opportunity_score: number | null
          panel_required: boolean | null
          parsed_content: string | null
          parsing_confidence: number | null
          parsing_notes: string | null
          payment_terms: string | null
          procurement_method: string | null
          procurement_platform: string | null
          published_date: string | null
          question_deadline: string | null
          recommended_labor_model: string | null
          reference_links: string[] | null
          required_roles: string[] | null
          response_format: string | null
          security_clearance: string | null
          source: string
          status: string
          strategic_fit_score: number | null
          submission_requirements: string | null
          tech_stack: string[] | null
          tender_title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          agency: string
          architecture_requirements?: string[] | null
          assigned_team_lead?: string | null
          assigned_team_members?: string[] | null
          augmented_cost_estimate?: number | null
          auto_parsed?: boolean | null
          automated_cost_estimate?: number | null
          certifications?: string[] | null
          competitor_analysis?: string | null
          compliance_requirements?: string[] | null
          contract_duration?: string | null
          contract_end_date?: string | null
          contract_model?: string | null
          contract_start_date?: string | null
          created_at?: string
          created_by?: string | null
          data_sovereignty_requirements?: string | null
          decision_by?: string | null
          decision_date?: string | null
          decision_reason?: string | null
          department?: string | null
          document_urls?: string[] | null
          due_date: string
          esg_clauses?: string[] | null
          estimated_effort_hours?: number | null
          estimated_value?: number | null
          estimated_value_currency?: string | null
          evaluation_criteria?: string | null
          external_id?: string | null
          framework_panel?: string | null
          go_no_go_decision?: string | null
          hosting_requirement?: string | null
          human_cost_estimate?: number | null
          id?: string
          known_incumbent?: string | null
          last_sync_date?: string | null
          legal_red_flags?: string | null
          mandatory_criteria?: string | null
          market_size_estimate?: number | null
          opportunity_score?: number | null
          panel_required?: boolean | null
          parsed_content?: string | null
          parsing_confidence?: number | null
          parsing_notes?: string | null
          payment_terms?: string | null
          procurement_method?: string | null
          procurement_platform?: string | null
          published_date?: string | null
          question_deadline?: string | null
          recommended_labor_model?: string | null
          reference_links?: string[] | null
          required_roles?: string[] | null
          response_format?: string | null
          security_clearance?: string | null
          source?: string
          status?: string
          strategic_fit_score?: number | null
          submission_requirements?: string | null
          tech_stack?: string[] | null
          tender_title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          agency?: string
          architecture_requirements?: string[] | null
          assigned_team_lead?: string | null
          assigned_team_members?: string[] | null
          augmented_cost_estimate?: number | null
          auto_parsed?: boolean | null
          automated_cost_estimate?: number | null
          certifications?: string[] | null
          competitor_analysis?: string | null
          compliance_requirements?: string[] | null
          contract_duration?: string | null
          contract_end_date?: string | null
          contract_model?: string | null
          contract_start_date?: string | null
          created_at?: string
          created_by?: string | null
          data_sovereignty_requirements?: string | null
          decision_by?: string | null
          decision_date?: string | null
          decision_reason?: string | null
          department?: string | null
          document_urls?: string[] | null
          due_date?: string
          esg_clauses?: string[] | null
          estimated_effort_hours?: number | null
          estimated_value?: number | null
          estimated_value_currency?: string | null
          evaluation_criteria?: string | null
          external_id?: string | null
          framework_panel?: string | null
          go_no_go_decision?: string | null
          hosting_requirement?: string | null
          human_cost_estimate?: number | null
          id?: string
          known_incumbent?: string | null
          last_sync_date?: string | null
          legal_red_flags?: string | null
          mandatory_criteria?: string | null
          market_size_estimate?: number | null
          opportunity_score?: number | null
          panel_required?: boolean | null
          parsed_content?: string | null
          parsing_confidence?: number | null
          parsing_notes?: string | null
          payment_terms?: string | null
          procurement_method?: string | null
          procurement_platform?: string | null
          published_date?: string | null
          question_deadline?: string | null
          recommended_labor_model?: string | null
          reference_links?: string[] | null
          required_roles?: string[] | null
          response_format?: string | null
          security_clearance?: string | null
          source?: string
          status?: string
          strategic_fit_score?: number | null
          submission_requirements?: string | null
          tech_stack?: string[] | null
          tender_title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      roi_activity_types: {
        Row: {
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_global: boolean | null
          name: string
          organization_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_global?: boolean | null
          name: string
          organization_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_global?: boolean | null
          name?: string
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_activity_types_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_assessment_activities: {
        Row: {
          activity_type_id: string
          assessment_id: string
          created_at: string | null
          hours_per_week: number
          id: string
          improvement_expected_pct: number
          notes: string | null
        }
        Insert: {
          activity_type_id: string
          assessment_id: string
          created_at?: string | null
          hours_per_week: number
          id?: string
          improvement_expected_pct: number
          notes?: string | null
        }
        Update: {
          activity_type_id?: string
          assessment_id?: string
          created_at?: string | null
          hours_per_week?: number
          id?: string
          improvement_expected_pct?: number
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_assessment_activities_activity_type_id_fkey"
            columns: ["activity_type_id"]
            isOneToOne: false
            referencedRelation: "roi_activity_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_assessment_activities_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "roi_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_assessments: {
        Row: {
          annual_cost: number | null
          annual_hours: number | null
          created_at: string | null
          department: string | null
          expected_improvement_percent: number | null
          hourly_rate: number | null
          id: string
          organization_id: string
          role_template_id: string | null
          stakeholder_name: string
          time_spent_percent: number | null
          total_estimated_savings: number | null
          total_hours_per_week: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          annual_cost?: number | null
          annual_hours?: number | null
          created_at?: string | null
          department?: string | null
          expected_improvement_percent?: number | null
          hourly_rate?: number | null
          id?: string
          organization_id: string
          role_template_id?: string | null
          stakeholder_name: string
          time_spent_percent?: number | null
          total_estimated_savings?: number | null
          total_hours_per_week: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          annual_cost?: number | null
          annual_hours?: number | null
          created_at?: string | null
          department?: string | null
          expected_improvement_percent?: number | null
          hourly_rate?: number | null
          id?: string
          organization_id?: string
          role_template_id?: string | null
          stakeholder_name?: string
          time_spent_percent?: number | null
          total_estimated_savings?: number | null
          total_hours_per_week?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_assessments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_assessments_role_template_id_fkey"
            columns: ["role_template_id"]
            isOneToOne: false
            referencedRelation: "roi_role_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_organizations: {
        Row: {
          active: boolean | null
          created_at: string | null
          custom_domain: string | null
          features: Json | null
          id: string
          is_white_labeled: boolean | null
          license_expires_at: string | null
          license_starts_at: string | null
          license_tier: string | null
          license_tier_id: string | null
          logo_url: string | null
          max_assessments: number | null
          max_users: number | null
          name: string
          owner_user_id: string | null
          primary_color: string | null
          secondary_color: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          custom_domain?: string | null
          features?: Json | null
          id?: string
          is_white_labeled?: boolean | null
          license_expires_at?: string | null
          license_starts_at?: string | null
          license_tier?: string | null
          license_tier_id?: string | null
          logo_url?: string | null
          max_assessments?: number | null
          max_users?: number | null
          name: string
          owner_user_id?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          custom_domain?: string | null
          features?: Json | null
          id?: string
          is_white_labeled?: boolean | null
          license_expires_at?: string | null
          license_starts_at?: string | null
          license_tier?: string | null
          license_tier_id?: string | null
          logo_url?: string | null
          max_assessments?: number | null
          max_users?: number | null
          name?: string
          owner_user_id?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_organizations_license_tier_id_fkey"
            columns: ["license_tier_id"]
            isOneToOne: false
            referencedRelation: "license_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_role_activities: {
        Row: {
          activity_type_id: string | null
          created_at: string | null
          id: string
          improvement_potential_pct: number
          role_template_id: string | null
          typical_hours_per_week: number
          updated_at: string | null
        }
        Insert: {
          activity_type_id?: string | null
          created_at?: string | null
          id?: string
          improvement_potential_pct?: number
          role_template_id?: string | null
          typical_hours_per_week?: number
          updated_at?: string | null
        }
        Update: {
          activity_type_id?: string | null
          created_at?: string | null
          id?: string
          improvement_potential_pct?: number
          role_template_id?: string | null
          typical_hours_per_week?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_role_activities_activity_type_id_fkey"
            columns: ["activity_type_id"]
            isOneToOne: false
            referencedRelation: "roi_activity_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_role_activities_role_template_id_fkey"
            columns: ["role_template_id"]
            isOneToOne: false
            referencedRelation: "roi_role_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_role_templates: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_global: boolean | null
          organization_id: string | null
          standard_cost_per_hour: number
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_global?: boolean | null
          organization_id?: string | null
          standard_cost_per_hour: number
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_global?: boolean | null
          organization_id?: string | null
          standard_cost_per_hour?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_role_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_stakeholder_activities: {
        Row: {
          activity_name: string
          created_at: string | null
          hours_per_week: number
          id: string
          improvement_expected_pct: number
          role_slug: string
          updated_at: string | null
        }
        Insert: {
          activity_name: string
          created_at?: string | null
          hours_per_week?: number
          id?: string
          improvement_expected_pct?: number
          role_slug: string
          updated_at?: string | null
        }
        Update: {
          activity_name?: string
          created_at?: string | null
          hours_per_week?: number
          id?: string
          improvement_expected_pct?: number
          role_slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_stakeholder_activities_role_slug_fkey"
            columns: ["role_slug"]
            isOneToOne: false
            referencedRelation: "roi_stakeholder_templates"
            referencedColumns: ["role_slug"]
          },
        ]
      }
      roi_stakeholder_templates: {
        Row: {
          created_at: string | null
          department: string
          hourly_rate: number
          id: string
          role_slug: string
          role_title: string
          stakeholder_name: string
          updated_at: string | null
          weekly_hours: number
        }
        Insert: {
          created_at?: string | null
          department: string
          hourly_rate?: number
          id?: string
          role_slug: string
          role_title: string
          stakeholder_name: string
          updated_at?: string | null
          weekly_hours?: number
        }
        Update: {
          created_at?: string | null
          department?: string
          hourly_rate?: number
          id?: string
          role_slug?: string
          role_title?: string
          stakeholder_name?: string
          updated_at?: string | null
          weekly_hours?: number
        }
        Relationships: []
      }
      roi_team_members: {
        Row: {
          assessment_id: string
          created_at: string
          id: string
          team_id: string
        }
        Insert: {
          assessment_id: string
          created_at?: string
          id?: string
          team_id: string
        }
        Update: {
          assessment_id?: string
          created_at?: string
          id?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "roi_team_members_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "roi_assessments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "roi_team_summaries"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "roi_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "roi_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_teams: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "roi_teams_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      role_aps: {
        Row: {
          aps_level: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          aps_level: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          aps_level?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_aps_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_aps_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_autoscore: {
        Row: {
          automation_score: number | null
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          automation_score?: number | null
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          automation_score?: number | null
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_autoscore_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: true
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_autoscore_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: true
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_capability_mapping: {
        Row: {
          agent_code: string | null
          aps_role: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      role_certification: {
        Row: {
          cert_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          cert_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          cert_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_certification_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_certification_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_clearance: {
        Row: {
          clearance_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          clearance_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          clearance_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_clearance_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_clearance_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_education: {
        Row: {
          education_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          education_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          education_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_education_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_education_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_experience: {
        Row: {
          experience_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          experience_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          experience_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_experience_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_experience_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_hardskill: {
        Row: {
          hardskill_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          hardskill_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          hardskill_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_hardskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_hardskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_industry: {
        Row: {
          industry_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          industry_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          industry_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_industry_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_industry_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_language: {
        Row: {
          language_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          language_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          language_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_language_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_language_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_master: {
        Row: {
          created_at: string | null
          description: string | null
          role_code: string
          role_name: string
          source_taxonomy: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          role_code: string
          role_name: string
          source_taxonomy?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          role_code?: string
          role_name?: string
          source_taxonomy?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      role_orgsize: {
        Row: {
          loaded_at: string | null
          org_size_code: string
          role_code: string
        }
        Insert: {
          loaded_at?: string | null
          org_size_code: string
          role_code: string
        }
        Update: {
          loaded_at?: string | null
          org_size_code?: string
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_orgsize_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_orgsize_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_process: {
        Row: {
          loaded_at: string | null
          process_code: string
          role_code: string
        }
        Insert: {
          loaded_at?: string | null
          process_code: string
          role_code: string
        }
        Update: {
          loaded_at?: string | null
          process_code?: string
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_process_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_process_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_region: {
        Row: {
          loaded_at: string | null
          region_code: string
          role_code: string
        }
        Insert: {
          loaded_at?: string | null
          region_code: string
          role_code: string
        }
        Update: {
          loaded_at?: string | null
          region_code?: string
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_region_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_region_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_salaryband: {
        Row: {
          band_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          band_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          band_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_salaryband_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_salaryband_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_sector: {
        Row: {
          loaded_at: string | null
          role_code: string
          sector_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          sector_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          sector_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_sector_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_sector_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_skill: {
        Row: {
          loaded_at: string | null
          role_code: string
          skill_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          skill_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          skill_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_skill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_skill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_softskill: {
        Row: {
          loaded_at: string | null
          role_code: string
          softskill_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          softskill_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          softskill_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_softskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_softskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_task: {
        Row: {
          loaded_at: string | null
          role_code: string
          task_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          task_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          task_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_task_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_task_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_task_scores: {
        Row: {
          agency: string
          augmentable_percent: number | null
          automatable_percent: number | null
          id: string
          role: string
          updated_at: string | null
        }
        Insert: {
          agency: string
          augmentable_percent?: number | null
          automatable_percent?: number | null
          id?: string
          role: string
          updated_at?: string | null
        }
        Update: {
          agency?: string
          augmentable_percent?: number | null
          automatable_percent?: number | null
          id?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      role_technology: {
        Row: {
          loaded_at: string | null
          role_code: string
          tech_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          tech_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          tech_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_technology_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_technology_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_workpattern: {
        Row: {
          loaded_at: string | null
          role_code: string
          workpattern_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          workpattern_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          workpattern_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_workpattern_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_workpattern_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      salary_estimates: {
        Row: {
          annual_salary: number | null
          created_at: string
          department: string | null
          hourly_rate: number
          id: string
          industry: string | null
          role_title: string
          updated_at: string
        }
        Insert: {
          annual_salary?: number | null
          created_at?: string
          department?: string | null
          hourly_rate?: number
          id?: string
          industry?: string | null
          role_title: string
          updated_at?: string
        }
        Update: {
          annual_salary?: number | null
          created_at?: string
          department?: string | null
          hourly_rate?: number
          id?: string
          industry?: string | null
          role_title?: string
          updated_at?: string
        }
        Relationships: []
      }
      sales_achievements: {
        Row: {
          achievement_name: string
          achievement_type: string
          consultant_id: string | null
          description: string | null
          earned_at: string | null
          id: string
          period_month: string | null
          points_awarded: number | null
        }
        Insert: {
          achievement_name: string
          achievement_type: string
          consultant_id?: string | null
          description?: string | null
          earned_at?: string | null
          id?: string
          period_month?: string | null
          points_awarded?: number | null
        }
        Update: {
          achievement_name?: string
          achievement_type?: string
          consultant_id?: string | null
          description?: string | null
          earned_at?: string | null
          id?: string
          period_month?: string | null
          points_awarded?: number | null
        }
        Relationships: []
      }
      sales_activities: {
        Row: {
          activity_date: string
          activity_type: string
          consultant_id: string | null
          created_at: string | null
          duration_minutes: number | null
          id: string
          notes: string | null
          opportunity_id: string | null
        }
        Insert: {
          activity_date?: string
          activity_type: string
          consultant_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
        }
        Update: {
          activity_date?: string
          activity_type?: string
          consultant_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_activities_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "sales_opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_opportunities: {
        Row: {
          actual_close_date: string | null
          company_name: string
          consultant_id: string | null
          created_at: string | null
          current_stage: Database["public"]["Enums"]["sales_stage"]
          deal_value: number | null
          expected_close_date: string | null
          id: string
          is_active: boolean | null
          probability: number | null
          updated_at: string | null
        }
        Insert: {
          actual_close_date?: string | null
          company_name: string
          consultant_id?: string | null
          created_at?: string | null
          current_stage?: Database["public"]["Enums"]["sales_stage"]
          deal_value?: number | null
          expected_close_date?: string | null
          id?: string
          is_active?: boolean | null
          probability?: number | null
          updated_at?: string | null
        }
        Update: {
          actual_close_date?: string | null
          company_name?: string
          consultant_id?: string | null
          created_at?: string | null
          current_stage?: Database["public"]["Enums"]["sales_stage"]
          deal_value?: number | null
          expected_close_date?: string | null
          id?: string
          is_active?: boolean | null
          probability?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sales_stage_history: {
        Row: {
          changed_at: string | null
          from_stage: Database["public"]["Enums"]["sales_stage"] | null
          id: string
          notes: string | null
          opportunity_id: string | null
          time_in_previous_stage_days: number | null
          to_stage: Database["public"]["Enums"]["sales_stage"]
        }
        Insert: {
          changed_at?: string | null
          from_stage?: Database["public"]["Enums"]["sales_stage"] | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
          time_in_previous_stage_days?: number | null
          to_stage: Database["public"]["Enums"]["sales_stage"]
        }
        Update: {
          changed_at?: string | null
          from_stage?: Database["public"]["Enums"]["sales_stage"] | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
          time_in_previous_stage_days?: number | null
          to_stage?: Database["public"]["Enums"]["sales_stage"]
        }
        Relationships: [
          {
            foreignKeyName: "sales_stage_history_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "sales_opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      samples: {
        Row: {
          agent_code: string | null
          agent_name: string | null
          agent_usage_tags: string | null
          ai_readiness_level: number | null
          aps_band: string | null
          category: string | null
          clearance_level_required: string | null
          complexity: string | null
          compute_power_per_task: number | null
          deployment_mode: string | null
          estimated_monthly_cost_aud: number | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          human_name: string | null
          integration_complexity: string | null
          org_chart_position: string | null
          partner_network: string | null
          pillar: string | null
          pillar_index: number | null
          row_id: number | null
          sfia_code: string | null
          systems_used: string | null
          task_output_format: string | null
          task_usage_minutes: number | null
          team_type: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          category?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team_type?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          category?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team_type?: string | null
        }
        Relationships: []
      }
      scheduled_jobs: {
        Row: {
          created_at: string
          failure_count: number
          id: string
          is_active: boolean
          job_name: string
          job_type: string
          last_error: string | null
          last_run_at: string | null
          next_run_at: string | null
          schedule_expression: string
          success_count: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          failure_count?: number
          id?: string
          is_active?: boolean
          job_name: string
          job_type: string
          last_error?: string | null
          last_run_at?: string | null
          next_run_at?: string | null
          schedule_expression: string
          success_count?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          failure_count?: number
          id?: string
          is_active?: boolean
          job_name?: string
          job_type?: string
          last_error?: string | null
          last_run_at?: string | null
          next_run_at?: string | null
          schedule_expression?: string
          success_count?: number
          updated_at?: string
        }
        Relationships: []
      }
      scheduled_reminders: {
        Row: {
          created_at: string | null
          id: string
          is_sent: boolean | null
          message: string
          recurrence: string | null
          scheduled_for: string
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_sent?: boolean | null
          message: string
          recurrence?: string | null
          scheduled_for: string
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_sent?: boolean | null
          message?: string
          recurrence?: string | null
          scheduled_for?: string
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      scoring_weights_config: {
        Row: {
          capability_match_weight: number | null
          client_type: string
          competitive_position_weight: number | null
          config_name: string
          created_at: string
          created_by: string | null
          financial_weight: number | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          risk_compliance_weight: number | null
          strategic_fit_weight: number | null
          updated_at: string
          updated_by: string | null
          weight_overrides: Json | null
        }
        Insert: {
          capability_match_weight?: number | null
          client_type: string
          competitive_position_weight?: number | null
          config_name: string
          created_at?: string
          created_by?: string | null
          financial_weight?: number | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          risk_compliance_weight?: number | null
          strategic_fit_weight?: number | null
          updated_at?: string
          updated_by?: string | null
          weight_overrides?: Json | null
        }
        Update: {
          capability_match_weight?: number | null
          client_type?: string
          competitive_position_weight?: number | null
          config_name?: string
          created_at?: string
          created_by?: string | null
          financial_weight?: number | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          risk_compliance_weight?: number | null
          strategic_fit_weight?: number | null
          updated_at?: string
          updated_by?: string | null
          weight_overrides?: Json | null
        }
        Relationships: []
      }
      service_catalog_master: {
        Row: {
          A: string | null
          Active: boolean | null
          "Allow Multi-Currency": boolean | null
          Billable: boolean | null
          "Billing Frequency": string | null
          "Bundle Name": string | null
          C: string | null
          Category: string | null
          "Cost to Company (AUD)": number | null
          "Currency Code": string | null
          Description: string | null
          "Early Payment Discount": string | null
          "Exchange Rate to AUD": number | null
          "GL Account": string | null
          I: string | null
          "Is Agentic AI": boolean | null
          "Is Consulting": boolean | null
          "Is Premium": boolean | null
          "Is Recurring": boolean | null
          "Lead Time (Days)": number | null
          "Max Qty": string | null
          "Min Contract Term (Months)": string | null
          "Min Qty": number | null
          "Partner Price": string | null
          "Payment Terms": string | null
          Phase: string | null
          "Phase Code": string | null
          "Price (AUD)": string | null
          "Price Raw": string | null
          "Price Unit": string | null
          "Price Value": number | null
          "Profit Margin Target (%)": number | null
          R: string | null
          "Retail Price": number | null
          "Seasonal Discount": string | null
          "Service Duration": string | null
          "Service Level Tier": string | null
          SKU: string | null
          "SKU Grouping": string | null
          "SOW Code": string | null
          Subcategory: string | null
          "Subscription Billing Cycle": string | null
          "Supplier Code": string | null
          "Supplier Name": string | null
          "Supplier SKU": string | null
          "Tax Category": string | null
          "Unit of Measure": string | null
          "Volume Discount": string | null
          "Warranty Terms": string | null
          "White Label Price": number | null
          "Wholesale Price": number | null
        }
        Insert: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Update: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Relationships: []
      }
      services: {
        Row: {
          description: string | null
          name: string | null
          rate: number | null
          service_id: string
          unit: string | null
        }
        Insert: {
          description?: string | null
          name?: string | null
          rate?: number | null
          service_id: string
          unit?: string | null
        }
        Update: {
          description?: string | null
          name?: string | null
          rate?: number | null
          service_id?: string
          unit?: string | null
        }
        Relationships: []
      }
      site_audit_reports: {
        Row: {
          audit_type: string
          base_url: string
          broken_links: Json | null
          completed_at: string | null
          created_at: string
          id: string
          missing_handlers: Json | null
          pages_crawled: Json | null
          performance_metrics: Json | null
          started_at: string
          status: string
          updated_at: string
        }
        Insert: {
          audit_type?: string
          base_url: string
          broken_links?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          missing_handlers?: Json | null
          pages_crawled?: Json | null
          performance_metrics?: Json | null
          started_at?: string
          status?: string
          updated_at?: string
        }
        Update: {
          audit_type?: string
          base_url?: string
          broken_links?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          missing_handlers?: Json | null
          pages_crawled?: Json | null
          performance_metrics?: Json | null
          started_at?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      skill_performance_analytics: {
        Row: {
          agent_count: number | null
          associated_functions: string | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          avg_popularity_score: string | null
          avg_trust_score: number | null
          cost_ratio_agent_to_auto: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_count: number | null
          skill: string | null
          skill_value_score: number | null
        }
        Insert: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Update: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Relationships: []
      }
      skill_premium_matrix: {
        Row: {
          certification_premium: number
          created_at: string
          demand_level: string | null
          effective_date: string
          id: string
          industry_premium: number
          industry_specialization: string | null
          is_active: boolean
          premium_multiplier: number
          security_clearance_premium: number
          skill_category: string
          skill_name: string
          updated_at: string
        }
        Insert: {
          certification_premium?: number
          created_at?: string
          demand_level?: string | null
          effective_date?: string
          id?: string
          industry_premium?: number
          industry_specialization?: string | null
          is_active?: boolean
          premium_multiplier?: number
          security_clearance_premium?: number
          skill_category: string
          skill_name: string
          updated_at?: string
        }
        Update: {
          certification_premium?: number
          created_at?: string
          demand_level?: string | null
          effective_date?: string
          id?: string
          industry_premium?: number
          industry_specialization?: string | null
          is_active?: boolean
          premium_multiplier?: number
          security_clearance_premium?: number
          skill_category?: string
          skill_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      sladefinitions: {
        Row: {
          name: string | null
          penalty_terms: string | null
          remediation_time_h: number | null
          response_time_h: number | null
          sla_id: string
          uptime_pct: number | null
        }
        Insert: {
          name?: string | null
          penalty_terms?: string | null
          remediation_time_h?: number | null
          response_time_h?: number | null
          sla_id: string
          uptime_pct?: number | null
        }
        Update: {
          name?: string | null
          penalty_terms?: string | null
          remediation_time_h?: number | null
          response_time_h?: number | null
          sla_id?: string
          uptime_pct?: number | null
        }
        Relationships: []
      }
      slaincidents: {
        Row: {
          closed_at: string | null
          customer_id: string | null
          incident_id: number
          opened_at: string | null
          outcome: string | null
          resolution_time_h: number | null
          sla_id: string | null
        }
        Insert: {
          closed_at?: string | null
          customer_id?: string | null
          incident_id?: number
          opened_at?: string | null
          outcome?: string | null
          resolution_time_h?: number | null
          sla_id?: string | null
        }
        Update: {
          closed_at?: string | null
          customer_id?: string | null
          incident_id?: number
          opened_at?: string | null
          outcome?: string | null
          resolution_time_h?: number | null
          sla_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "slaincidents_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "slaincidents_sla_id_fkey"
            columns: ["sla_id"]
            isOneToOne: false
            referencedRelation: "sladefinitions"
            referencedColumns: ["sla_id"]
          },
        ]
      }
      sow_documents: {
        Row: {
          benefits: string | null
          cost_estimate: number | null
          created_at: string | null
          id: string
          objectives: string | null
          project_id: string | null
          risks: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          benefits?: string | null
          cost_estimate?: number | null
          created_at?: string | null
          id?: string
          objectives?: string | null
          project_id?: string | null
          risks?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          benefits?: string | null
          cost_estimate?: number | null
          created_at?: string | null
          id?: string
          objectives?: string | null
          project_id?: string | null
          risks?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sow_documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      sow_shares: {
        Row: {
          cover_letter: string | null
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          project_id: string | null
          share_token: string
          shared_by: string
          shared_with: string[]
          updated_at: string
          view_count: number
        }
        Insert: {
          cover_letter?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          project_id?: string | null
          share_token: string
          shared_by: string
          shared_with?: string[]
          updated_at?: string
          view_count?: number
        }
        Update: {
          cover_letter?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          project_id?: string | null
          share_token?: string
          shared_by?: string
          shared_with?: string[]
          updated_at?: string
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "sow_shares_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      specialized_agent_configurations: {
        Row: {
          agent_code: string | null
          aligned_roles: string | null
          aps_hourly_rate: number | null
          augmented_delivery_cost: number | null
          automated_delivery_cost: number | null
          base_agent_cost: number | null
          bundle_pairings: string | null
          certifications: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          consultant_hourly_rate: number | null
          contractor_hourly_rate: number | null
          core_skills: string | null
          delivery_type: string | null
          domain: string | null
          domain_trust_score: number | null
          final_cost: number | null
          fit_for_defence: boolean | null
          fit_for_partner_solutions: string | null
          function: string | null
          highlight_quote: string | null
          human_cost_equiv: number | null
          human_delivery_cost: number | null
          human_effort_hours: number | null
          industry_fit: string | null
          job_title_matches: string | null
          markup_model: string | null
          max_parallel_roles: number | null
          micro_role_fragments: string | null
          persona: string | null
          preferred_partners: string | null
          proposal_strength_score: number | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          sfia_category: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          tech_stack: string | null
          value_to_cost_ratio: number | null
        }
        Insert: {
          agent_code?: string | null
          aligned_roles?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          base_agent_cost?: number | null
          bundle_pairings?: string | null
          certifications?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          delivery_type?: string | null
          domain?: string | null
          domain_trust_score?: number | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          industry_fit?: string | null
          job_title_matches?: string | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          persona?: string | null
          preferred_partners?: string | null
          proposal_strength_score?: number | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          tech_stack?: string | null
          value_to_cost_ratio?: number | null
        }
        Update: {
          agent_code?: string | null
          aligned_roles?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          base_agent_cost?: number | null
          bundle_pairings?: string | null
          certifications?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          delivery_type?: string | null
          domain?: string | null
          domain_trust_score?: number | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          industry_fit?: string | null
          job_title_matches?: string | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          persona?: string | null
          preferred_partners?: string | null
          proposal_strength_score?: number | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          tech_stack?: string | null
          value_to_cost_ratio?: number | null
        }
        Relationships: []
      }
      stat_cards: {
        Row: {
          category: string | null
          color: string | null
          created_at: string | null
          data_source: string | null
          description: string
          icon: string
          id: string
          is_featured: boolean | null
          refresh_frequency: string | null
          show_trend: boolean | null
          sort_order: number | null
          title: string
          trend_period: string | null
          trend_value: number | null
          type: string | null
          updated_at: string | null
          value: string
        }
        Insert: {
          category?: string | null
          color?: string | null
          created_at?: string | null
          data_source?: string | null
          description: string
          icon: string
          id?: string
          is_featured?: boolean | null
          refresh_frequency?: string | null
          show_trend?: boolean | null
          sort_order?: number | null
          title: string
          trend_period?: string | null
          trend_value?: number | null
          type?: string | null
          updated_at?: string | null
          value: string
        }
        Update: {
          category?: string | null
          color?: string | null
          created_at?: string | null
          data_source?: string | null
          description?: string
          icon?: string
          id?: string
          is_featured?: boolean | null
          refresh_frequency?: string | null
          show_trend?: boolean | null
          sort_order?: number | null
          title?: string
          trend_period?: string | null
          trend_value?: number | null
          type?: string | null
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      stg_project_demand: {
        Row: {
          created_at: string
          department: string | null
          id: string
          industry: string | null
          project_month: string
          requests: number
        }
        Insert: {
          created_at?: string
          department?: string | null
          id?: string
          industry?: string | null
          project_month: string
          requests: number
        }
        Update: {
          created_at?: string
          department?: string | null
          id?: string
          industry?: string | null
          project_month?: string
          requests?: number
        }
        Relationships: []
      }
      stg_utilization_history: {
        Row: {
          agent_code: string
          capacity_hours: number | null
          created_at: string
          id: string
          month: string
          processed: boolean | null
          project_requests: number | null
          utilization_pct: number
        }
        Insert: {
          agent_code: string
          capacity_hours?: number | null
          created_at?: string
          id?: string
          month: string
          processed?: boolean | null
          project_requests?: number | null
          utilization_pct: number
        }
        Update: {
          agent_code?: string
          capacity_hours?: number | null
          created_at?: string
          id?: string
          month?: string
          processed?: boolean | null
          project_requests?: number | null
          utilization_pct?: number
        }
        Relationships: []
      }
      strategic_decisions: {
        Row: {
          affected_departments: string[] | null
          approval_status: string | null
          created_at: string
          decision_context: string
          decision_maker: string
          decision_title: string
          decision_type: string
          follow_up_required: boolean | null
          id: string
          impact_assessment: Json | null
          implementation_date: string | null
          knowledge_sources: string[] | null
          updated_at: string
        }
        Insert: {
          affected_departments?: string[] | null
          approval_status?: string | null
          created_at?: string
          decision_context: string
          decision_maker: string
          decision_title: string
          decision_type: string
          follow_up_required?: boolean | null
          id?: string
          impact_assessment?: Json | null
          implementation_date?: string | null
          knowledge_sources?: string[] | null
          updated_at?: string
        }
        Update: {
          affected_departments?: string[] | null
          approval_status?: string | null
          created_at?: string
          decision_context?: string
          decision_maker?: string
          decision_title?: string
          decision_type?: string
          follow_up_required?: boolean | null
          id?: string
          impact_assessment?: Json | null
          implementation_date?: string | null
          knowledge_sources?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      strategic_intelligence_reports: {
        Row: {
          created_at: string | null
          generated_at: string | null
          generated_by: string | null
          id: string
          report_data: Json
          report_period_end: string | null
          report_period_start: string | null
          report_type: string
          status: string | null
        }
        Insert: {
          created_at?: string | null
          generated_at?: string | null
          generated_by?: string | null
          id?: string
          report_data?: Json
          report_period_end?: string | null
          report_period_start?: string | null
          report_type: string
          status?: string | null
        }
        Update: {
          created_at?: string | null
          generated_at?: string | null
          generated_by?: string | null
          id?: string
          report_data?: Json
          report_period_end?: string | null
          report_period_start?: string | null
          report_type?: string
          status?: string | null
        }
        Relationships: []
      }
      strategic_partner_ecosystem: {
        Row: {
          ai_specializations: string | null
          avg_deal_size: number | null
          avg_joint_win_rate: number | null
          certification_count: number | null
          certifications: string | null
          channel_type: string | null
          compliance_standards: Json | null
          data_platforms: string | null
          data_sovereignty_guarantee: boolean | null
          devops_capabilities: Json | null
          diversity_supplier: boolean | null
          employee_count: number | null
          escalation_path: string | null
          global_office_count: number | null
          headquarters_city: string | null
          headquarters_country: string | null
          industry_vertical_focus: string | null
          insurances: string | null
          integration_platforms: string | null
          joint_proposals_count: number | null
          joint_win_count: number | null
          last_engagement_date: string | null
          local_presence_scale: string | null
          logo_url: string | null
          low_code_platforms: string | null
          msp_certifications: string | null
          nps_score: number | null
          office_count_au: string | null
          office_locations_au: Json | null
          partner_contact_email: string | null
          partner_cost_model: string | null
          partner_id: string | null
          partner_maturity_level: string | null
          partner_name: string | null
          partner_NRR: number | null
          partner_phone: number | null
          partner_rating_overall: number | null
          partner_reference_customers: string | null
          partner_scorecard: string | null
          partner_segment: string | null
          partner_social_profiles: string | null
          partner_tier: string | null
          partner_training_capabilities: string | null
          partner_type: string | null
          partner_website: string | null
          partnership_duration_years: number | null
          partnership_start_date: string | null
          primary_technologies: string | null
          regions_supported: string | null
          relationship_score: number | null
          revenue_shared_pct: number | null
          risk_flags: Json | null
          score_ranking: number | null
          security_clearance_levels: string | null
          security_specializations: string | null
          services_offered: string | null
          sla_levels: string | null
          solution_areas: string | null
          specialist_domains: string | null
          strategic_priority: string | null
          support_hours_au: string | null
          trend_last_6m: string | null
        }
        Insert: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          certification_count?: number | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: Json | null
          data_platforms?: string | null
          data_sovereignty_guarantee?: boolean | null
          devops_capabilities?: Json | null
          diversity_supplier?: boolean | null
          employee_count?: number | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: Json | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_name?: string | null
          partner_NRR?: number | null
          partner_phone?: number | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_type?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          primary_technologies?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: Json | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: string | null
        }
        Update: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          certification_count?: number | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: Json | null
          data_platforms?: string | null
          data_sovereignty_guarantee?: boolean | null
          devops_capabilities?: Json | null
          diversity_supplier?: boolean | null
          employee_count?: number | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: Json | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_name?: string | null
          partner_NRR?: number | null
          partner_phone?: number | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_type?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          primary_technologies?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: Json | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: string | null
        }
        Relationships: []
      }
      stripe_products_catalog: {
        Row: {
          agent_codes: string[] | null
          agent_count: number | null
          billing_interval: string | null
          billing_interval_count: number | null
          bundle_name: string | null
          bundle_type: string | null
          capacity_hours: number | null
          category: string
          compliance_level: string | null
          cost_basis: number | null
          created_at: string | null
          function_cluster: string | null
          id: string
          included_products: string[] | null
          industry_focus: string | null
          is_active: boolean | null
          is_featured: boolean | null
          markup_percentage: number | null
          partner_id: string | null
          partner_tier: string | null
          price_amount: number
          price_currency: string
          product_description: string | null
          product_name: string
          revenue_share_percentage: number | null
          sla_level: string | null
          sort_order: number | null
          stripe_price_id: string
          stripe_product_id: string | null
          subcategory: string | null
          target_market: string | null
          updated_at: string | null
          volume_tier_max: number | null
          volume_tier_min: number | null
        }
        Insert: {
          agent_codes?: string[] | null
          agent_count?: number | null
          billing_interval?: string | null
          billing_interval_count?: number | null
          bundle_name?: string | null
          bundle_type?: string | null
          capacity_hours?: number | null
          category: string
          compliance_level?: string | null
          cost_basis?: number | null
          created_at?: string | null
          function_cluster?: string | null
          id?: string
          included_products?: string[] | null
          industry_focus?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          markup_percentage?: number | null
          partner_id?: string | null
          partner_tier?: string | null
          price_amount: number
          price_currency?: string
          product_description?: string | null
          product_name: string
          revenue_share_percentage?: number | null
          sla_level?: string | null
          sort_order?: number | null
          stripe_price_id: string
          stripe_product_id?: string | null
          subcategory?: string | null
          target_market?: string | null
          updated_at?: string | null
          volume_tier_max?: number | null
          volume_tier_min?: number | null
        }
        Update: {
          agent_codes?: string[] | null
          agent_count?: number | null
          billing_interval?: string | null
          billing_interval_count?: number | null
          bundle_name?: string | null
          bundle_type?: string | null
          capacity_hours?: number | null
          category?: string
          compliance_level?: string | null
          cost_basis?: number | null
          created_at?: string | null
          function_cluster?: string | null
          id?: string
          included_products?: string[] | null
          industry_focus?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          markup_percentage?: number | null
          partner_id?: string | null
          partner_tier?: string | null
          price_amount?: number
          price_currency?: string
          product_description?: string | null
          product_name?: string
          revenue_share_percentage?: number | null
          sla_level?: string | null
          sort_order?: number | null
          stripe_price_id?: string
          stripe_product_id?: string | null
          subcategory?: string | null
          target_market?: string | null
          updated_at?: string | null
          volume_tier_max?: number | null
          volume_tier_min?: number | null
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      subscription_tiers: {
        Row: {
          billing_interval: string
          created_at: string | null
          description: string | null
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          updated_at: string | null
        }
        Insert: {
          billing_interval?: string
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          price: number
          updated_at?: string | null
        }
        Update: {
          billing_interval?: string
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      supplier_subscriptions: {
        Row: {
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tier_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "supplier_subscriptions_tier_id_fkey"
            columns: ["tier_id"]
            isOneToOne: false
            referencedRelation: "subscription_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      supporttickets: {
        Row: {
          assigned_to: string | null
          bundle_id: string | null
          created_at: string | null
          customer_id: string | null
          priority: string | null
          status: string | null
          ticket_id: number
        }
        Insert: {
          assigned_to?: string | null
          bundle_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          priority?: string | null
          status?: string | null
          ticket_id?: number
        }
        Update: {
          assigned_to?: string | null
          bundle_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          priority?: string | null
          status?: string | null
          ticket_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "supporttickets_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
          {
            foreignKeyName: "supporttickets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      tags: {
        Row: {
          name: string | null
          tag_id: string
        }
        Insert: {
          name?: string | null
          tag_id: string
        }
        Update: {
          name?: string | null
          tag_id?: string
        }
        Relationships: []
      }
      taxrates: {
        Row: {
          effective_date: string | null
          jurisdiction: string | null
          rate_pct: number | null
          tax_id: string
        }
        Insert: {
          effective_date?: string | null
          jurisdiction?: string | null
          rate_pct?: number | null
          tax_id: string
        }
        Update: {
          effective_date?: string | null
          jurisdiction?: string | null
          rate_pct?: number | null
          tax_id?: string
        }
        Relationships: []
      }
      taxrules: {
        Row: {
          applies_on: string | null
          entity_id: string | null
          entity_type: string | null
          rule_id: string
          tax_id: string | null
        }
        Insert: {
          applies_on?: string | null
          entity_id?: string | null
          entity_type?: string | null
          rule_id: string
          tax_id?: string | null
        }
        Update: {
          applies_on?: string | null
          entity_id?: string | null
          entity_type?: string | null
          rule_id?: string
          tax_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "taxrules_tax_id_fkey"
            columns: ["tax_id"]
            isOneToOne: false
            referencedRelation: "taxrates"
            referencedColumns: ["tax_id"]
          },
        ]
      }
      team: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      team_assessments: {
        Row: {
          additional_details: string | null
          approved_at: string | null
          approved_by: string | null
          assessment_name: string
          campaign_id: string | null
          created_at: string | null
          custom_tasks: Json | null
          department: string
          estimated_timeline_months: number | null
          id: string
          matrix_results: Json | null
          organization_id: string | null
          roi_estimate: number | null
          selected_tasks: Json | null
          status: string | null
          submitted_at: string | null
          total_effort_score: number | null
          total_impact_score: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          additional_details?: string | null
          approved_at?: string | null
          approved_by?: string | null
          assessment_name: string
          campaign_id?: string | null
          created_at?: string | null
          custom_tasks?: Json | null
          department: string
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json | null
          organization_id?: string | null
          roi_estimate?: number | null
          selected_tasks?: Json | null
          status?: string | null
          submitted_at?: string | null
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          additional_details?: string | null
          approved_at?: string | null
          approved_by?: string | null
          assessment_name?: string
          campaign_id?: string | null
          created_at?: string | null
          custom_tasks?: Json | null
          department?: string
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json | null
          organization_id?: string | null
          roi_estimate?: number | null
          selected_tasks?: Json | null
          status?: string | null
          submitted_at?: string | null
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_assessments_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "assessment_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_assessments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string | null
          department: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          organization_id: string | null
          role: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          department: string
          email: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization_id?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization_id?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          customer_id: string | null
          description: string | null
          name: string | null
          region: string | null
          team_id: string
        }
        Insert: {
          customer_id?: string | null
          description?: string | null
          name?: string | null
          region?: string | null
          team_id: string
        }
        Update: {
          customer_id?: string | null
          description?: string | null
          name?: string | null
          region?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teams_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      teamsamples: {
        Row: {
          agent_code: string | null
          agent_name: string | null
          agent_usage_tags: string | null
          ai_readiness_level: number | null
          aps_band: string | null
          clearance_level_required: string | null
          complexity: string | null
          compute_power_per_task: number | null
          deployment_mode: string | null
          estimated_monthly_cost_aud: number | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          human_name: string | null
          integration_complexity: string | null
          org_chart_position: string | null
          partner_network: string | null
          pillar: string | null
          pillar_index: number | null
          row_id: number | null
          sfia_code: string | null
          systems_used: string | null
          task_output_format: string | null
          task_usage_minutes: number | null
          team: string | null
          team_type: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team?: string | null
          team_type?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team?: string | null
          team_type?: string | null
        }
        Relationships: []
      }
      tenant_api_usage: {
        Row: {
          business_volume: number | null
          created_at: string
          data_volume: number
          endpoint: string
          id: string
          request_count: number
          tenant_id: string
          usage_date: string
        }
        Insert: {
          business_volume?: number | null
          created_at?: string
          data_volume?: number
          endpoint: string
          id?: string
          request_count?: number
          tenant_id: string
          usage_date?: string
        }
        Update: {
          business_volume?: number | null
          created_at?: string
          data_volume?: number
          endpoint?: string
          id?: string
          request_count?: number
          tenant_id?: string
          usage_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_api_usage_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_memberships: {
        Row: {
          created_at: string | null
          id: string
          is_primary: boolean | null
          role: string
          tenant_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          role?: string
          tenant_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          role?: string
          tenant_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_memberships_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_pricing_plans: {
        Row: {
          api_base_price: number | null
          api_volume_multiplier: number | null
          billing_interval: string
          created_at: string
          id: string
          intro_expires_at: string | null
          is_intro_price: boolean | null
          plan_name: string
          seat_price: number
          tenant_id: string
          updated_at: string
        }
        Insert: {
          api_base_price?: number | null
          api_volume_multiplier?: number | null
          billing_interval: string
          created_at?: string
          id?: string
          intro_expires_at?: string | null
          is_intro_price?: boolean | null
          plan_name: string
          seat_price: number
          tenant_id: string
          updated_at?: string
        }
        Update: {
          api_base_price?: number | null
          api_volume_multiplier?: number | null
          billing_interval?: string
          created_at?: string
          id?: string
          intro_expires_at?: string | null
          is_intro_price?: boolean | null
          plan_name?: string
          seat_price?: number
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_pricing_plans_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_seat_allocations: {
        Row: {
          allocated_seats: number
          created_at: string
          id: string
          tenant_id: string
          updated_at: string
          used_seats: number
        }
        Insert: {
          allocated_seats?: number
          created_at?: string
          id?: string
          tenant_id: string
          updated_at?: string
          used_seats?: number
        }
        Update: {
          allocated_seats?: number
          created_at?: string
          id?: string
          tenant_id?: string
          updated_at?: string
          used_seats?: number
        }
        Relationships: [
          {
            foreignKeyName: "tenant_seat_allocations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          logo_url: string | null
          name: string
          primary_color: string | null
          secondary_color: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name: string
          primary_color?: string | null
          secondary_color?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name?: string
          primary_color?: string | null
          secondary_color?: string | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tender_clusters: {
        Row: {
          created_at: string | null
          id: string
          tenders: Json
          topic: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          tenders: Json
          topic: string
        }
        Update: {
          created_at?: string | null
          id?: string
          tenders?: Json
          topic?: string
        }
        Relationships: []
      }
      tender_data_cache: {
        Row: {
          company_data: Json
          expiry: string | null
          id: string
          metadata: Json | null
          source: string | null
          tender_data: Json
          timestamp: string
        }
        Insert: {
          company_data?: Json
          expiry?: string | null
          id?: string
          metadata?: Json | null
          source?: string | null
          tender_data?: Json
          timestamp?: string
        }
        Update: {
          company_data?: Json
          expiry?: string | null
          id?: string
          metadata?: Json | null
          source?: string | null
          tender_data?: Json
          timestamp?: string
        }
        Relationships: []
      }
      tender_replays: {
        Row: {
          coaching_notes: Json | null
          created_at: string | null
          id: string
          new_team: Json
          original_outcome: string
          re_recommended: boolean | null
          tender_id: string
        }
        Insert: {
          coaching_notes?: Json | null
          created_at?: string | null
          id?: string
          new_team: Json
          original_outcome: string
          re_recommended?: boolean | null
          tender_id: string
        }
        Update: {
          coaching_notes?: Json | null
          created_at?: string | null
          id?: string
          new_team?: Json
          original_outcome?: string
          re_recommended?: boolean | null
          tender_id?: string
        }
        Relationships: []
      }
      "top 100": {
        Row: {
          "12mo_TCO": number | null
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          agent_coverage_score: number | null
          Agent_Intelligence_Type: string | null
          agent_rank_score: number | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: number | null
          attrition_risk_score: number | null
          augmented_delivery_cost: number | null
          auth_method: string | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: number | null
          backup_available: boolean | null
          base_agent_cost: number | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: number | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          compliance_requirements: Json | null
          consultant_hourly_rate: number | null
          contractor_hourly_rate: number | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: number | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          Deployment_Rank: number | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: number | null
          domain_maturity_level: number | null
          domain_trust_score: number | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: number | null
          fit_for_defence: boolean | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: number | null
          human_delivery_cost: number | null
          human_effort_hours: number | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: number | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: number | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: number | null
          micro_role_fragments: string | null
          "Monthly Cost": number | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": number | null
          output_rate: number | null
          output_type: string | null
          Output_Unit_Cost: number | null
          overall_match_score: number | null
          Performance_Efficiency_Ratio: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: number | null
          personality_c: number | null
          personality_e: number | null
          personality_n: number | null
          personality_o: number | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: number | null
          quality_error_rate: number | null
          recommended_clearance: string | null
          recommended_configuration: string | null
          Recommended_Delivery_Model: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          regulatory_flag: number | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: number | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: number | null
          "Setup Cost": number | null
          sfia_category: string | null
          sfia_level: number | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: number | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: number | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: number | null
        }
        Insert: {
          "12mo_TCO"?: number | null
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          agent_coverage_score?: number | null
          Agent_Intelligence_Type?: string | null
          agent_rank_score?: number | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: number | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: number | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: number | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: Json | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: number | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          Deployment_Rank?: number | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: number | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: number | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          Output_Unit_Cost?: number | null
          overall_match_score?: number | null
          Performance_Efficiency_Ratio?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: number | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_clearance?: string | null
          recommended_configuration?: string | null
          Recommended_Delivery_Model?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          regulatory_flag?: number | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: number | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: number | null
          sfia_category?: string | null
          sfia_level?: number | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: number | null
        }
        Update: {
          "12mo_TCO"?: number | null
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          agent_coverage_score?: number | null
          Agent_Intelligence_Type?: string | null
          agent_rank_score?: number | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: number | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: number | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: number | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: Json | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: number | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          Deployment_Rank?: number | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: number | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: number | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          Output_Unit_Cost?: number | null
          overall_match_score?: number | null
          Performance_Efficiency_Ratio?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: number | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_clearance?: string | null
          recommended_configuration?: string | null
          Recommended_Delivery_Model?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          regulatory_flag?: number | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: number | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: number | null
          sfia_category?: string | null
          sfia_level?: number | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: number | null
        }
        Relationships: []
      }
      training_modules: {
        Row: {
          category: string
          content_url: string | null
          created_at: string
          description: string | null
          difficulty_level: string | null
          duration_minutes: number
          id: string
          is_active: boolean | null
          learning_objectives: string[] | null
          module_code: string
          prerequisites: string[] | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          content_url?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean | null
          learning_objectives?: string[] | null
          module_code: string
          prerequisites?: string[] | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content_url?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean | null
          learning_objectives?: string[] | null
          module_code?: string
          prerequisites?: string[] | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      training_progress: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          module_id: string
          progress_percent: number
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          module_id: string
          progress_percent?: number
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          module_id?: string
          progress_percent?: number
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      usagemetrics: {
        Row: {
          agent_code: string | null
          hours_used: number | null
          period_end: string | null
          period_start: string | null
          tasks_processed: number | null
          team_id: string | null
          usage_id: number
        }
        Insert: {
          agent_code?: string | null
          hours_used?: number | null
          period_end?: string | null
          period_start?: string | null
          tasks_processed?: number | null
          team_id?: string | null
          usage_id?: number
        }
        Update: {
          agent_code?: string | null
          hours_used?: number | null
          period_end?: string | null
          period_start?: string | null
          tasks_processed?: number | null
          team_id?: string | null
          usage_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "usagemetrics_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
        ]
      }
      use_case_agent_mapping: {
        Row: {
          agent_code: string
          coverage_percentage: number | null
          created_at: string | null
          id: string
          primary_agent: boolean | null
          required_customization: string | null
          use_case_id: string | null
        }
        Insert: {
          agent_code: string
          coverage_percentage?: number | null
          created_at?: string | null
          id?: string
          primary_agent?: boolean | null
          required_customization?: string | null
          use_case_id?: string | null
        }
        Update: {
          agent_code?: string
          coverage_percentage?: number | null
          created_at?: string | null
          id?: string
          primary_agent?: boolean | null
          required_customization?: string | null
          use_case_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "use_case_agent_mapping_use_case_id_fkey"
            columns: ["use_case_id"]
            isOneToOne: false
            referencedRelation: "use_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      use_cases: {
        Row: {
          category: string
          complexity_tier: string
          created_at: string | null
          description: string
          estimated_monthly_hours: number
          estimated_setup_time: string
          id: string
          industry_tags: string[] | null
          name: string
          required_integrations: string[] | null
          updated_at: string | null
        }
        Insert: {
          category: string
          complexity_tier: string
          created_at?: string | null
          description: string
          estimated_monthly_hours: number
          estimated_setup_time: string
          id?: string
          industry_tags?: string[] | null
          name: string
          required_integrations?: string[] | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          complexity_tier?: string
          created_at?: string | null
          description?: string
          estimated_monthly_hours?: number
          estimated_setup_time?: string
          id?: string
          industry_tags?: string[] | null
          name?: string
          required_integrations?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_bundle_selections: {
        Row: {
          bundle_ids: Json
          created_at: string | null
          id: string
          metadata: Json | null
          selection_name: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          bundle_ids: Json
          created_at?: string | null
          id?: string
          metadata?: Json | null
          selection_name: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          bundle_ids?: Json
          created_at?: string | null
          id?: string
          metadata?: Json | null
          selection_name?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_interaction_analytics: {
        Row: {
          agent_involved: string | null
          created_at: string
          duration_seconds: number | null
          id: string
          interaction_type: string
          knowledge_topics: string[] | null
          satisfaction_score: number | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          agent_involved?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          interaction_type: string
          knowledge_topics?: string[] | null
          satisfaction_score?: number | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          agent_involved?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          interaction_type?: string
          knowledge_topics?: string[] | null
          satisfaction_score?: number | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_notification_preferences: {
        Row: {
          created_at: string
          email_notifications: boolean | null
          high_value_alerts: boolean | null
          id: string
          processing_updates: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_notifications?: boolean | null
          high_value_alerts?: boolean | null
          id?: string
          processing_updates?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_notifications?: boolean | null
          high_value_alerts?: boolean | null
          id?: string
          processing_updates?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          created_at: string
          favorite_categories: string[] | null
          id: string
          learning_path: string | null
          notifications_enabled: boolean | null
          preferred_difficulty: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          favorite_categories?: string[] | null
          id?: string
          learning_path?: string | null
          notifications_enabled?: boolean | null
          preferred_difficulty?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          favorite_categories?: string[] | null
          id?: string
          learning_path?: string | null
          notifications_enabled?: boolean | null
          preferred_difficulty?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_training_progress: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          last_accessed: string | null
          module_id: string
          progress_percentage: number | null
          score: number | null
          status: string | null
          time_spent_minutes: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          last_accessed?: string | null
          module_id: string
          progress_percentage?: number | null
          score?: number | null
          status?: string | null
          time_spent_minutes?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          last_accessed?: string | null
          module_id?: string
          progress_percentage?: number | null
          score?: number | null
          status?: string | null
          time_spent_minutes?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_training_progress_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "training_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      utilization_fact: {
        Row: {
          agent_code: string
          created_at: string
          id: string
          month: string
          project_requests: number | null
          utilization_pct: number
        }
        Insert: {
          agent_code: string
          created_at?: string
          id?: string
          month: string
          project_requests?: number | null
          utilization_pct: number
        }
        Update: {
          agent_code?: string
          created_at?: string
          id?: string
          month?: string
          project_requests?: number | null
          utilization_pct?: number
        }
        Relationships: []
      }
      variations: {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: number | null
          Estimated_Price: number | null
          Estimated_Profit: number | null
          Role_Name: string | null
          Tool: string | null
          WeightedScore: number | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Relationships: []
      }
      vignettes: {
        Row: {
          author: string
          compliance_score: number | null
          content: string
          created_at: string
          excerpt: string
          external_api_id: string | null
          id: string
          impact_score: number | null
          key_drivers: string[] | null
          last_synced: string | null
          leader_avatar_url: string | null
          leader_bio: string | null
          leader_department: string | null
          leader_name: string | null
          leader_title: string | null
          read_time: number
          risk_factors: string[] | null
          seo_description: string | null
          slug: string
          status: string
          strategic_recommendations: string[] | null
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          compliance_score?: number | null
          content: string
          created_at?: string
          excerpt: string
          external_api_id?: string | null
          id?: string
          impact_score?: number | null
          key_drivers?: string[] | null
          last_synced?: string | null
          leader_avatar_url?: string | null
          leader_bio?: string | null
          leader_department?: string | null
          leader_name?: string | null
          leader_title?: string | null
          read_time?: number
          risk_factors?: string[] | null
          seo_description?: string | null
          slug: string
          status?: string
          strategic_recommendations?: string[] | null
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          compliance_score?: number | null
          content?: string
          created_at?: string
          excerpt?: string
          external_api_id?: string | null
          id?: string
          impact_score?: number | null
          key_drivers?: string[] | null
          last_synced?: string | null
          leader_avatar_url?: string | null
          leader_bio?: string | null
          leader_department?: string | null
          leader_name?: string | null
          leader_title?: string | null
          read_time?: number
          risk_factors?: string[] | null
          seo_description?: string | null
          slug?: string
          status?: string
          strategic_recommendations?: string[] | null
          tags?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      volumediscounts: {
        Row: {
          discount_id: string
          discount_pct: number | null
          end_date: string | null
          entity_id: string | null
          entity_type: string | null
          min_qty: number | null
          start_date: string | null
        }
        Insert: {
          discount_id: string
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          start_date?: string | null
        }
        Update: {
          discount_id?: string
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          start_date?: string | null
        }
        Relationships: []
      }
      webhooksubscriptions: {
        Row: {
          entity_id: string | null
          entity_type: string | null
          events_list: string[] | null
          url: string | null
          webhook_id: string
        }
        Insert: {
          entity_id?: string | null
          entity_type?: string | null
          events_list?: string[] | null
          url?: string | null
          webhook_id: string
        }
        Update: {
          entity_id?: string | null
          entity_type?: string | null
          events_list?: string[] | null
          url?: string | null
          webhook_id?: string
        }
        Relationships: []
      }
      workforcemodels: {
        Row: {
          ai_coverage_pct: number | null
          features: string | null
          human_pct: number | null
          model_id: string
          name: string | null
          price: number | null
          unit: string | null
        }
        Insert: {
          ai_coverage_pct?: number | null
          features?: string | null
          human_pct?: number | null
          model_id: string
          name?: string | null
          price?: number | null
          unit?: string | null
        }
        Update: {
          ai_coverage_pct?: number | null
          features?: string | null
          human_pct?: number | null
          model_id?: string
          name?: string | null
          price?: number | null
          unit?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      "10,000 agents": {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: string | null
          auth_method: string | null
          automated_delivery_cost: string | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: string | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: string | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: string | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: string | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: string | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: string | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: number | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: number | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": string | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: number | null
          personality_c: number | null
          personality_e: string | null
          personality_n: number | null
          personality_o: string | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: string | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: string | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: string | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: string | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: string | null
          task_cluster_tags: string | null
          task_coverage_pct: string | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: string | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: string | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      "10000 bigint": {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: number | null
          auth_method: string | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: number | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: number | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: number | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: number | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: string | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: string | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": number | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: string | null
          personality_c: number | null
          personality_e: number | null
          personality_n: string | null
          personality_o: number | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: number | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: number | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: number | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: number | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      "40k variations": {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: string | null
          Estimated_Price: string | null
          Estimated_Profit: string | null
          Integration_Pattern: string | null
          Variation_ID: string | null
          Variation_Name: string | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Relationships: []
      }
      "Agent reuse optimiser": {
        Row: {
          agent_code: string | null
          assigned_hours: number | null
          delivery_model: string | null
          function: string | null
          residual_capacity_pct: number | null
          reuse_recommendation: string | null
          total_capacity: number | null
        }
        Insert: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Update: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Relationships: []
      }
      "AI Agents by categories and agent names": {
        Row: {
          Agent_Name: string | null
          Category: string | null
          Description: string | null
          Pricing: string | null
          Use_Cases: string | null
        }
        Insert: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Update: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      "AI Directory Display": {
        Row: {
          agent_display_name: string | null
          summary: string | null
          title: string | null
        }
        Insert: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Update: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Relationships: []
      }
      "Augmented first roles": {
        Row: {
          function: string | null
          why_augmented_first: string | null
        }
        Insert: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Update: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Relationships: []
      }
      automation_analytics: {
        Row: {
          active_initiatives: number | null
          avg_actual_roi: number | null
          avg_effort_score: number | null
          avg_impact_score: number | null
          avg_roi_estimate: number | null
          completed_initiatives: number | null
          month: string | null
          total_assessments: number | null
          total_initiatives: number | null
        }
        Relationships: []
      }
      calculator_analytics: {
        Row: {
          all_selected_services: string[] | null
          avg_revenue: number | null
          avg_users: number | null
          industry: string | null
          industry_distribution: Json | null
          session_count: number | null
        }
        Relationships: []
      }
      "Core roster": {
        Row: {
          agent_code: string | null
          agent_id: number | null
          agent_name: string | null
          ai_readiness_level: number | null
          core_team_label: string | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          task_usage_minutes: number | null
          value_score: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Relationships: []
      }
      "CV overlay": {
        Row: {
          agent_code: string | null
          cv_overlay_required: boolean | null
          function: string | null
          overlay_reason: string | null
          overlay_suggested_roles: string | null
          persona: string | null
          sfia_level: string | null
        }
        Insert: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Update: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Relationships: []
      }
      "Defebce Matches": {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      "Defence Partner Dashboard": {
        Row: {
          agent_code: string | null
          cost: number | null
          coverage_pct: number | null
          cv_overlay: string | null
          delivery_model: string | null
          fit_for_defence: string | null
          function: string | null
          partner: string | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Relationships: []
      }
      "Full role agent match": {
        Row: {
          agent_id: string | null
          agent_name: string | null
          aps_band: string | null
          aps_role_title: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      "Full Role to table match": {
        Row: {
          agent_code: string | null
          aps_role: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      "Function Metrics": {
        Row: {
          agent_count: number | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_value_score: number | null
          job_function: string | null
          price_rank_pct: number | null
        }
        Insert: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Update: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Relationships: []
      }
      "G2U Full Catalogue": {
        Row: {
          A: string | null
          Active: boolean | null
          "Allow Multi-Currency": boolean | null
          Billable: boolean | null
          "Billing Frequency": string | null
          "Bundle Name": string | null
          C: string | null
          Category: string | null
          "Cost to Company (AUD)": number | null
          "Currency Code": string | null
          Description: string | null
          "Early Payment Discount": string | null
          "Exchange Rate to AUD": number | null
          "GL Account": string | null
          I: string | null
          "Is Agentic AI": boolean | null
          "Is Consulting": boolean | null
          "Is Premium": boolean | null
          "Is Recurring": boolean | null
          "Lead Time (Days)": number | null
          "Max Qty": string | null
          "Min Contract Term (Months)": string | null
          "Min Qty": number | null
          "Partner Price": string | null
          "Payment Terms": string | null
          Phase: string | null
          "Phase Code": string | null
          "Price (AUD)": string | null
          "Price Raw": string | null
          "Price Unit": string | null
          "Price Value": number | null
          "Profit Margin Target (%)": number | null
          R: string | null
          "Retail Price": number | null
          "Seasonal Discount": string | null
          "Service Duration": string | null
          "Service Level Tier": string | null
          SKU: string | null
          "SKU Grouping": string | null
          "SOW Code": string | null
          Subcategory: string | null
          "Subscription Billing Cycle": string | null
          "Supplier Code": string | null
          "Supplier Name": string | null
          "Supplier SKU": string | null
          "Tax Category": string | null
          "Unit of Measure": string | null
          "Volume Discount": string | null
          "Warranty Terms": string | null
          "White Label Price": number | null
          "Wholesale Price": number | null
        }
        Insert: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Update: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Relationships: []
      }
      "Generate proposal assets": {
        Row: {
          agent_code: string | null
          cost: number | null
          cv_overlay_required: boolean | null
          delivery_model: string | null
          function: string | null
          role: string | null
          sfia_level: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      "Nuix overlay": {
        Row: {
          agent_code: string | null
          delivery_model: string | null
          final_cost: number | null
          fit_for_partner_solutions: string | null
          function: string | null
          partner_match_confidence: number | null
          persona: string | null
          preferred_partners: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      "Org change agents": {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      partner_ecosystem_view: {
        Row: {
          avg_deal_size: number | null
          certifications: string | null
          description: string | null
          joint_win_count: number | null
          logo_url: string | null
          partner_name: string | null
          partner_tier: string | null
          partner_type: string | null
          source_table: string | null
        }
        Insert: {
          avg_deal_size?: number | null
          certifications?: string | null
          description?: string | null
          joint_win_count?: number | null
          logo_url?: string | null
          partner_name?: string | null
          partner_tier?: string | null
          partner_type?: string | null
          source_table?: never
        }
        Update: {
          avg_deal_size?: number | null
          certifications?: string | null
          description?: string | null
          joint_win_count?: number | null
          logo_url?: string | null
          partner_name?: string | null
          partner_tier?: string | null
          partner_type?: string | null
          source_table?: never
        }
        Relationships: []
      }
      "PMO match": {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      "RFT Metrics Final": {
        Row: {
          "Current Value": string | null
          Data_Source: string | null
          Default_Weight: number | null
          Dimension: string | null
          Labor_Model: string | null
          Metric: string | null
          Reason: string | null
          Weight_Gov_Federal: number | null
          Weight_Gov_State: number | null
          Weight_Nonprofit: number | null
          Weight_Private_Enterprise: number | null
          Weight_SMB: number | null
          WhyItMatters: string | null
        }
        Insert: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Update: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Relationships: []
      }
      roi_team_summaries: {
        Row: {
          assessments_count: number | null
          organization_id: string | null
          roi_percentage: number | null
          team_id: string | null
          team_name: string | null
          total_annual_cost: number | null
          total_estimated_savings: number | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_teams_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      role_instance: {
        Row: {
          aps_level: string | null
          automation_score: number | null
          band_code: string | null
          currency: string | null
          description: string | null
          industry_code: string | null
          instance_id: number | null
          org_size_code: string | null
          role_code: string | null
          role_name: string | null
          salary_max: number | null
          salary_min: number | null
        }
        Relationships: []
      }
      "Skills Metrics": {
        Row: {
          agent_count: number | null
          associated_functions: string | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          avg_popularity_score: string | null
          avg_trust_score: number | null
          cost_ratio_agent_to_auto: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_count: number | null
          skill: string | null
          skill_value_score: number | null
        }
        Insert: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Update: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Relationships: []
      }
      "Skills Roles Tasks": {
        Row: {
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_excess_capacity_value: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_excess_hours: number
          potential_weekly_revenue: number
          annual_revenue_opportunity: number
          top_available_functions: string[]
        }[]
      }
      calculate_performance_metrics: {
        Args: { consultant_uuid: string; start_date: string; end_date: string }
        Returns: {
          total_opps: number
          total_value: number
          won_opps: number
          won_value: number
          avg_deal_size: number
          avg_cycle_days: number
          win_rate: number
          activity_count: number
        }[]
      }
      calculate_total_hourly_cost: {
        Args: {
          p_country_code: string
          p_sfia_level: number
          p_skills?: string[]
          p_has_security_clearance?: boolean
          p_has_certifications?: boolean
          p_target_currency?: string
        }
        Returns: {
          base_rate_local: number
          base_rate_usd: number
          total_cost_usd: number
          purchasing_power_equivalent: number
          cost_breakdown: Json
        }[]
      }
      create_weekly_project_review_reminders: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      generate_agent_variation: {
        Args: {
          parent_agent_code_param: string
          variation_name_param: string
          delivery_model_param: string
          sfia_level_param?: string
          cost_multiplier?: number
        }
        Returns: Json
      }
      generate_function_cluster_bundles: {
        Args: Record<PropertyKey, never>
        Returns: {
          cluster_name: string
          agent_codes: string[]
          estimated_cost: number
          synergy_score: number
        }[]
      }
      generate_market_insights: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      generate_partner_slug: {
        Args: { name: string }
        Returns: string
      }
      get_agent_variations_count: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_count: number
          automated_count: number
          augmented_count: number
          human_count: number
          unique_parent_agents: number
        }[]
      }
      get_agent_with_variations: {
        Args: { agent_code_param: string }
        Returns: {
          agent_details: Json
          variations: Json
        }[]
      }
      get_ecosystem_overview: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_partners: number
          total_value: number
          strategic_partners: number
          enterprise_partners: number
          certified_partners: number
          avg_deal_size: number
          total_joint_wins: number
        }[]
      }
      get_expiring_certifications: {
        Args: { user_id: string }
        Returns: Json
      }
      get_merged_ecosystem_partner: {
        Args: { entity_name_param: string }
        Returns: {
          entity_name: string
          description: string
          category: string
          logo_url: string
          avg_deal_size: number
          joint_win_count: number
          partner_tier: string
          certifications: string
        }[]
      }
      get_primary_tenant_for_user: {
        Args: { user_id: string }
        Returns: string
      }
      get_tenant_id_from_email: {
        Args: { email: string }
        Returns: string
      }
      has_role: {
        Args: { _role: Database["public"]["Enums"]["app_role"] }
        Returns: boolean
      }
      has_valid_acma_license: {
        Args: { profile_id: string }
        Returns: boolean
      }
      is_email_domain_allowed: {
        Args: { email: string }
        Returns: boolean
      }
      is_license_valid: {
        Args: { org_id: string }
        Returns: boolean
      }
      migrate_partner_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      next_monday_9am: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      populate_excess_capacity_marketplace: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      refresh_automation_analytics: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      seed_actual_projects: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      sync_ses_conversations_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_records: number
          last_sync_date: string
          sync_needed: boolean
        }[]
      }
      validate_share_email_domain: {
        Args: { email: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      ladder_tier: "bronze" | "silver" | "gold" | "platinum" | "elite"
      metric_type: "numeric" | "text" | "boolean" | "date"
      sales_stage:
        | "lead"
        | "qualification"
        | "discovery"
        | "proposal"
        | "negotiation"
        | "closed_won"
        | "closed_lost"
      value_tier: "high" | "medium" | "low"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      ladder_tier: ["bronze", "silver", "gold", "platinum", "elite"],
      metric_type: ["numeric", "text", "boolean", "date"],
      sales_stage: [
        "lead",
        "qualification",
        "discovery",
        "proposal",
        "negotiation",
        "closed_won",
        "closed_lost",
      ],
      value_tier: ["high", "medium", "low"],
    },
  },
} as const
