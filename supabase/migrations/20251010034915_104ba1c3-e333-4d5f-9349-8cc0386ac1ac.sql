-- Add the Microsoft AI Agents for Beginners course with correct column name
INSERT INTO public.external_learning_resources (
  title,
  author_name,
  author_url,
  description,
  source_url,
  category,
  difficulty_level,
  estimated_hours,
  tags,
  source_type,
  is_active,
  resource_type,
  is_interactive,
  special_notes
) VALUES (
  'Microsoft AI Agents for Beginners - Complete Course',
  'Microsoft',
  'https://github.com/microsoft',
  'Comprehensive 12-lesson course from Microsoft teaching you to build AI agents from scratch. Covers multi-agent systems, RAG, popular frameworks like LangChain and AutoGen, and includes practical coding exercises.',
  'https://github.com/microsoft/ai-agents-for-beginners',
  'ai_product_management',
  'beginner',
  24,
  ARRAY['AI Agents', 'Microsoft', 'Hands-on', 'Multi-Agent Systems', 'RAG', 'LangChain', 'AutoGen', 'Semantic Kernel', 'GitHub'],
  'official_course',
  true,
  'course',
  true,
  'Official Microsoft curriculum with 12 lessons covering the full agent development spectrum'
);