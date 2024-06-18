import { Article } from "@/@types/article";

type ResponseType = {
  articles: Article[];
  articlesCount: number;
};

export async function useArticles(): Promise<ResponseType> {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {});
  return result.json();
}
