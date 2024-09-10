import { Tables } from "@/app/types/supabase";
import { supabase } from "./supabase";
import { getLoggedUserProfile } from "./user";

export const getPartecipantBabols = async () => {
    type ReturnType = Tables<'babol_partecipants'> & {
        babols: (Tables<'babols'> & { category: Tables<'babol_categories'> })[]
    }[];

    // Get logged user
    const { data: loggedUser } = await getLoggedUserProfile();
    console.log(loggedUser);
    if(!loggedUser) return [];

    // Get bubbles
    return supabase.from("babol_partecipants")
        .select("babols(*, category(*))")
        .eq("profileID", loggedUser?.id)
        .neq('babols.status', 'deleted')
        .not('babols', 'is', null)
        .returns<ReturnType>()
        .throwOnError();
}



export const getBabolExtrInfo = async (babolId: number) => {
    return supabase.from("babols").select("name,description,invite_code,configs,creator_id(*),category(*)").eq("id", babolId).single();
}