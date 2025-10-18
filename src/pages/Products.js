import React, { useEffect, useState } from 'react';
import { fetchCSV, dataLinks } from '../dataService';

export default function Products() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCSV(dataLinks.categories).then(setCategories);
  }, []);

  return (
    <div className="products">
      <h2>Product Categories</h2>
      <div className="grid">
        {categories.map(c => (
          <div key={c.Category} className="card">
            <img src={c["Image URL"]} alt={c.Category} />
            <h3>{c.Category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
