import { Article } from "@/@types/article";
import Image from "next/image";
import Link from "next/link";

type FeedProps = {
  article: Article;
};

export default function Feed({ article }: FeedProps) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link href={`/profile/${article.author.username}`}>
          <Image
            width={32}
            height={32}
            alt="Conduit logo"
            src={article.author.image}
          />
        </Link>
        <div className="info">
          <a href={`/profile/${article.author.username}`} className="author">
            {article.title}
          </a>
          <span className="date">
            {new Date(article?.createdAt || "").toLocaleDateString()}{" "}
          </span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link href={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article?.tagList?.map((tag: string) => (
            <li className="tag-default tag-pill tag-outline">{tag}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}
