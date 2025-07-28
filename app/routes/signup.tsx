import type { Route } from "../+types/root";
import { createClient } from "~/utils/supabase.server";

export const action = async ({ request }: Route.ClientActionArgs) => {
  const { supabase, headers } = createClient(request);

  let formData = await request.formData();
  let email = formData.get("signupemail") as string;
  let password = formData.get("signuppassword") as string;

  const { data, error } = await supabase.auth.signUp({ email, password });
  console.log(data, "<--signup.tsx data");
};
