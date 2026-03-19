-- Create table for uPay card signups
CREATE TABLE public.upay_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT NOT NULL,
  subscribe_newsletter BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.upay_signups ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to insert (edge function uses service role)
CREATE POLICY "Service role can insert signups"
ON public.upay_signups
FOR INSERT
TO service_role
WITH CHECK (true);

-- Create policy for service role to read signups
CREATE POLICY "Service role can read signups"
ON public.upay_signups
FOR SELECT
TO service_role
USING (true);