import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aduroqgbzwanvcrxuhvj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkdXJvcWdiendhbnZjcnh1aHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4NTY2MTQsImV4cCI6MjAzNzQzMjYxNH0.SXQxkF7H6apDJGZHFclKqzFr6dcy6JibdbVR7qDyjhI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
