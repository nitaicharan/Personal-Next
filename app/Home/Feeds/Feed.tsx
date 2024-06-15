type FeedProps = {
  article: any;
};

export default function Feed({ article }: FeedProps) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="/profile/eric-simons">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="/profile/eric-simons" className="author">
            {article.name}
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a
        href="/article/how-to-build-webapps-that-scale"
        className="preview-link"
      >
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article?.tagList?.map((tag: string) => (
            <li className="tag-default tag-pill tag-outline">{tag}</li>
          ))}
        </ul>
      </a>
    </div>
  );
}
