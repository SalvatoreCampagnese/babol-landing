import { supabase } from "./supabase";

// get user profile of supabase to get more data
export const getUserByEmail = async (email: string) => {
  // query with supabase that get profiles with the same uuid of the user
  return supabase.from("profiles").select("*").ilike("email", email).eq("deleted", false).single();
};

export const signupWithEmail = async (email: string, password: string) => {
  return supabase.auth.signUp({ email, password });
};

export const verifyUser = async (email: string, token: string) => {
    return supabase.auth.verifyOtp({ email, token, type: 'signup' });
};

export const loginWithEmail = async (email: string, password: string) => {
  return supabase.auth.signInWithPassword({ email, password });
};


// Get logged user profile
export const getLoggedUserProfile = async () => {
  // get supabase logged user
  const { data: logged_user, error: error_user } = await supabase.auth.getUser();
  console.log(logged_user);

  if (!logged_user?.user || error_user?.message) throw {
      status: 401,
      message: 'Unauthorized'
  };

  // get user profile from database
  return supabase.from("profiles").select("*").eq("uuid", logged_user.user.id).eq('deleted',false).order('created_at',{ascending:false}).single();
};

export const logout = async () => {
  return supabase.auth.signOut();
}

export const updateProfile = async (profile: any, avatar:any) => {
  // password change 
  if(profile.password) {
      await supabase.auth.updateUser({ password: profile.password });
  }
  return await supabase.from("profiles").upsert(profile);
}