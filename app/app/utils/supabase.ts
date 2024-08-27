import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://uofooaquvefawwmqfren.supabase.co', process.env.NEXT_PUBLIC_SUPABASE || "")