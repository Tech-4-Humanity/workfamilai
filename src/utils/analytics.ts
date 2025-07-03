// Google Analytics 4 utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const analytics = {
  // Track page views (handled automatically by GA4)
  pageView: (path: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
      });
    }
  },

  // Track custom events
  track: (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  },

  // Specific tracking methods for common actions
  trackLeaderClick: (leaderName: string, department: string) => {
    analytics.track('leader_clicked', {
      leader_name: leaderName,
      department: department,
      event_category: 'engagement',
    });
  },

  trackChatStart: (agentName: string, chatType: 'basic' | 'enhanced' = 'basic') => {
    analytics.track('chat_started', {
      agent_name: agentName,
      chat_type: chatType,
      event_category: 'engagement',
    });
  },

  trackLanguageSwitch: (fromLanguage: string, toLanguage: string) => {
    analytics.track('language_changed', {
      from_language: fromLanguage,
      to_language: toLanguage,
      event_category: 'user_preference',
    });
  },

  trackVoiceFeature: (action: 'start_recording' | 'stop_recording' | 'play_audio', context?: string) => {
    analytics.track('voice_interaction', {
      voice_action: action,
      context: context,
      event_category: 'voice_features',
    });
  },

  trackNavigation: (fromSection: string, toSection: string) => {
    analytics.track('navigation', {
      from_section: fromSection,
      to_section: toSection,
      event_category: 'navigation',
    });
  },

  trackTourAction: (action: 'start_tour' | 'complete_tour' | 'close_tour') => {
    analytics.track('tour_interaction', {
      tour_action: action,
      event_category: 'onboarding',
    });
  },

  trackSearchQuery: (query: string, resultCount: number) => {
    analytics.track('search', {
      search_term: query,
      result_count: resultCount,
      event_category: 'search',
    });
  },
};