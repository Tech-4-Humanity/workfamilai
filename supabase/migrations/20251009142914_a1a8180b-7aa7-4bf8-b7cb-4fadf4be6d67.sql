-- Create RPC functions for course engagement tracking
-- These allow frontend to increment view/click counts safely

CREATE OR REPLACE FUNCTION public.increment_resource_clicks(resource_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.external_learning_resources
  SET click_count = click_count + 1, updated_at = now()
  WHERE id = resource_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.increment_resource_views(resource_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.external_learning_resources
  SET view_count = view_count + 1, updated_at = now()
  WHERE id = resource_id;
END;
$$;

-- Grant execute permissions to authenticated and anonymous users
GRANT EXECUTE ON FUNCTION public.increment_resource_clicks(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.increment_resource_views(uuid) TO anon, authenticated;