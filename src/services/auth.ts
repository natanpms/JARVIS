import { supabase } from "@/src/lib/supabase";
import { AuthResponse } from "@supabase/supabase-js";
import { formUser } from "../types/form";

export async function createUser(data: formUser): Promise<AuthResponse> {
  return supabase.auth.signUp({
    ...data,
    options: {
      data: {
        name: data?.name,
      },
    },
  });
}

export async function loginUser(data: formUser): Promise<AuthResponse> {
  return supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
}

export async function logoutUser(): Promise<{ error: Error | null }> {
  return supabase.auth.signOut();
}
