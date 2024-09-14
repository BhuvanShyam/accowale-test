
import React from 'react';

const Header = ({ setCategory }) => {
  const categories = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];

  return (
    <header className="p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">FlashBriefs</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          {categories.map(category => (
            <li key={category}>
              <button
                onClick={() => setCategory(category)} 
                className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded transition duration-200"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
