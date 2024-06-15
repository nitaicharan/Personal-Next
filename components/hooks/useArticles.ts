export async function useArticles() {
  const result = await fetch("https://api.realworld.io/api/articles");
  return result.json();
}
