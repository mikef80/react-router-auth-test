import { createClient } from "~/utils/supabase.server";
import { redirect, type ActionFunctionArgs } from "react-router";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { supabase, headers } = createClient(request);
  const { error } = await supabase.auth.signOut();

  if (error) {
    return new Response("Sign out failed", { status: 401 });
  }

  return redirect("/", { headers });
};
