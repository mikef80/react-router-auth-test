import { createServerClient, serializeCookieHeader, parseCookieHeader } from "@supabase/ssr";

export function createClient(request: Request) {
  const headers = new Headers();

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  return createServerClient(supabaseUrl!, supabaseKey!, {
    cookies: {
      getAll() {
        const cookies = parseCookieHeader(request.headers.get("Cookie") ?? "");

        return parseCookieHeader(request.headers.get("Cookie") ?? "").map((cookie) => ({
          name: cookie.name,
          value: cookie.value || "",
        }));
      },
      setAll(cookies) {
        cookies.forEach(({ name, value, options }) =>
          headers.append("Set-Cookie", serializeCookieHeader(name, value, options))
        );
      },
    },
  });
}
