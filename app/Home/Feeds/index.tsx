import { useArticles } from "@/components/hooks/useArticles";
import Feed from "./Feed";

type FeedsProps = {
  articles: any[];
};

export default function Feeds({ articles }: FeedsProps) {
  return articles?.map((i) => <Feed article={i} />);
}
