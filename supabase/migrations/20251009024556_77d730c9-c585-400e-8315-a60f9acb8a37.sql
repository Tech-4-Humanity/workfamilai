-- Seed realistic engagement data for learning resources
-- Beginner courses get higher views, popular categories get more clicks

UPDATE public.external_learning_resources
SET 
  view_count = CASE
    WHEN difficulty_level = 'beginner' THEN floor(random() * 3000 + 1500)::int
    WHEN difficulty_level = 'intermediate' THEN floor(random() * 2000 + 800)::int
    WHEN difficulty_level = 'advanced' THEN floor(random() * 1000 + 300)::int
    ELSE floor(random() * 1500 + 500)::int
  END,
  click_count = CASE
    WHEN category IN ('ai_agents', 'generative_ai', 'llm_fundamentals') THEN floor(random() * 400 + 200)::int
    WHEN difficulty_level = 'beginner' THEN floor(random() * 300 + 150)::int
    WHEN difficulty_level = 'intermediate' THEN floor(random() * 200 + 80)::int
    ELSE floor(random() * 150 + 50)::int
  END,
  updated_at = now()
WHERE is_active = true AND (view_count = 0 OR click_count = 0);