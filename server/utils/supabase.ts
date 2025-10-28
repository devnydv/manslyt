import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ltsuvxczpjfoldcykhop.supabase.co";
const supabaseKey = 'sb_publishable_Gj9LBEufTa3YT7_xbcbyNw_aTwEQwOg';

export const supabase = createClient(supabaseUrl, supabaseKey);