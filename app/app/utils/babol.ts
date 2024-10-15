import { supabase } from "./supabase";
import { getLoggedUserProfile } from "./user";

export const getPartecipantBabols = async () => {
  try {
    // Get logged user
    console.log('GetPartecipant')
    const { data: loggedUser } = await getLoggedUserProfile();
    console.log('loggedUser', loggedUser)
    if (!loggedUser) {
      return [];
    }

    // Get bubbles
    const { data, error } = await supabase
      .from("babol_partecipants")
      .select("babols(*, category(*))")
      .eq("profileID", loggedUser?.id)
      .neq("babols.status", "deleted")
      .not("babols", "is", null);
    if (error) return [];

    return data;
  } catch (e) {
    console.log('catch')
    return [];
  }
};

export const getBabolExtrInfo = async (babolId: number) => {
  return supabase
    .from("babols")
    .select("name,description,invite_code,configs,creator_id(*),category(*)")
    .eq("id", babolId)
    .single();
};

export const joinBabol = async (babolId: number) => {
  const { data: loggedUser } = await getLoggedUserProfile();
  // Check if already in babol
  const { data: partecipant, error: errorPartecipants } = await supabase
    .from("babol_partecipants")
    .select("*")
    .eq("profileID", loggedUser.id)
    .eq("babolID", babolId);
  if (partecipant?.length || errorPartecipants) return "already_joined";

  const { data, error } = await supabase.from("babol_partecipants").insert({
    babolID: babolId,
    profileID: loggedUser.id,
  });
  // If error return 0
  if (error) return "error";
  if (data) return "success";
};
