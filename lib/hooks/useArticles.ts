import { Article } from "@/@types/article";

export type ListResponseType = {
  articles: Article[];
  articlesCount: number;
};

async function list(): Promise<ListResponseType> {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {});
  return result.json();
}

async function get(slug: string) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`,
    {
      method: "GET",
    },
  );

  return result.json();
}

// function delete() {
//   // const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {});
// }

function update() {
  // const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {});
}

export function useArticles() {
  return { list, get, update };
}
