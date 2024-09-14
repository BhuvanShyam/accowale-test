import React from 'react';
import './ArticleCard.css'; 

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
    </div>
  );
}

export default ArticleCard;
