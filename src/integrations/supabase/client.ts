// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hkjeigqrgjfmyzdqcyzh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhramVpZ3FyZ2pmbXl6ZHFjeXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NDkzMTYsImV4cCI6MjA1ODEyNTMxNn0.s4WmBhuxLQSVp-ThhaMtgnQEdOIOZFRONFw60NPxhvY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);