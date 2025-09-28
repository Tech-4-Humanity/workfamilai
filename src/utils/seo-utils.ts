// SEO utilities for production optimization

export const updatePageTitle = (title: string, suffix = ' | Family Network AI') => {
  document.title = `${title}${suffix}`;
};

export const updateMetaDescription = (description: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }
};

export const updateMetaKeywords = (keywords: string[]) => {
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  const keywordString = keywords.join(', ');
  
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywordString);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = keywordString;
    document.head.appendChild(meta);
  }
};

export const updateCanonicalUrl = (url: string) => {
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', url);
  } else {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
  }
};

export const addStructuredData = (data: Record<string, any>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Common structured data templates
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Family Network AI",
  "description": "Advanced AI agent network for organizational intelligence",
  "url": window.location.origin,
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish", "French", "German", "Japanese", "Korean", "Chinese", "Arabic"]
  }
});

export const getBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});