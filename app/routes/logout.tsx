import { createClient } from "~/utils/supabase.server";
import type { Route } from "../+types/root";
import { redirect } from "react-router";

export const action = async ({ request }: Route.ClientActionArgs) => {
  const { supabase, headers } = createClient(request);
  const { error } = await supabase.auth.signOut();

  if (error) {
    return new Response("Sign out failed", { status: 401 });
  }

  // headers.set("Location", "/");
  // return new Response(null, { status: 302, headers });
  return redirect("/", { headers });
};
