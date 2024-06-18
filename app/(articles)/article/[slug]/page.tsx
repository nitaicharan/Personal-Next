"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useArticles } from "@/lib/hooks/useArticles";
import { Article } from "@/@types/article";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { get } = useArticles();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    (async () => {
      const { article: response } = await get(slug);
      setArticle(response);
    })();
  }, []);

  return (
    <div className="article-page">
      <Head>
        <title>{article?.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
        />
      </Head>
      <div className="banner">
        <div className="container">
          <h1>{article?.title}</h1>

          <div className="article-meta">
            <a href={`/profile/${article?.author?.username}`}>
              <img
                src={article?.author?.image}
                alt={article?.author?.username}
              />
            </a>
            <div className="info">
              <a
                href={`/profile/${article?.author?.username}`}
                className="author"
              >
                {article?.author?.username}
              </a>
              <span className="date">
                {new Date(article?.createdAt || "").toLocaleDateString()}
              </span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article?.author?.username}{" "}
              <span className="counter">
                ({article?.author?.following ? "Unfollow" : "Follow"})
              </span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post{" "}
              <span className="counter">({article?.favoritesCount})</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-edit"></i> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article?.body}</p>
            <ul className="tag-list">
              {article?.tagList?.map((tag) => (
                <li key={tag} className="tag-default tag-pill tag-outline">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href={`/profile/${article?.author?.username}`}>
              <img
                src={article?.author?.image}
                alt={article?.author?.username}
              />
            </a>
            <div className="info">
              <a
                href={`/profile/${article?.author?.username}`}
                className="author"
              >
                {article?.author?.username}
              </a>
              <span className="date">{article?.createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article?.author?.username}
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Article{" "}
              <span className="counter">({article?.favoritesCount})</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-edit"></i> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={3}
                ></textarea>
              </div>
              <div className="card-footer">
                <img
                  src={article?.author?.image}
                  className="comment-author-img"
                  alt="Author"
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            {/* Example comment, this should be dynamically loaded */}
            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                    alt="Author"
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
            {/* End of example comment */}
          </div>
        </div>
      </div>
    </div>
  );
}
