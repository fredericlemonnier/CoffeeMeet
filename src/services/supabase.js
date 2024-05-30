import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fdfmiquqqmnsshnxdmfk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZm1pcXVxcW1uc3NobnhkbWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3NjY3MjcsImV4cCI6MjAzMjM0MjcyN30.5CpLhXcd5sufMb8Is7dltEWvVGwPVP0Bjmloy9Tbgaw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase