import type { Route } from "../+types/root";
import { createClient } from "~/utils/supabase.server";

export const action = async ({ request }: Route.ClientActionArgs) => {
  const { supabase, headers } = createClient(request);

  let formData = await request.formData();
  let email = formData.get("email") as string;
  let password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return new Response("Login failed", { status: 401 });
  }

  headers.set("Location", "/");
  return new Response(null, { status: 302, headers });
};
