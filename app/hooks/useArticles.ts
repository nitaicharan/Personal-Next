import { env } from "@/lib/env";

export async function useArticles() {
  const result = await fetch(env.API_URL, {});
  return result.json();
}
