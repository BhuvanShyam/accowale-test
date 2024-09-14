
import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={article.image || 'https://via.placeholder.com/400x250?text=No+Image'}
              alt={article.title}
              className="w-full h-48 object-cover"
              onError={(e) => e.target.src = 'https://via.placeholder.com/400x250?text=No+Image'}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No articles found</p>
      )}
    </div>
  );
};

export default ArticleList;
