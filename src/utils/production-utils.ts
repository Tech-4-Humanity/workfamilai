// Production utility functions for optimizing performance

// Debounce function for search inputs
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Chunk array for batch processing
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

// Memory-efficient agent search
export const filterAgents = (
  agents: any[],
  searchTerm: string,
  maxResults: number = 50
) => {
  if (!searchTerm.trim()) return agents.slice(0, maxResults);
  
  const lowerSearchTerm = searchTerm.toLowerCase();
  let matches = 0;
  const results = [];
  
  for (const agent of agents) {
    if (matches >= maxResults) break;
    
    const searchableText = `${agent.agentName || ''} ${agent.specialization || ''} ${agent.division || ''}`.toLowerCase();
    if (searchableText.includes(lowerSearchTerm)) {
      results.push(agent);
      matches++;
    }
  }
  
  return results;
};

// Production error logging
export const logProductionError = (error: Error, context: string) => {
  // In production, this would send to monitoring service
  console.error(`[${context}] Production Error:`, {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  });
};