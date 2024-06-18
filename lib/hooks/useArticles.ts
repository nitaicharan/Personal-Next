export async function useArticles() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {});
  return result.json();
}
