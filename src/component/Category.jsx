import React, { use } from 'react';

const categoryPromise = fetch('/categories.json')
    .then(res => res.json())
console.log(categoryPromise)
const Category = () => {
  const category = use(categoryPromise);

  return (
    <div>
      <p>All Category({category.length})</p>
      {category.map(cItem => <p key={cItem.id}>{cItem.name}</p>)}
    </div>
  );
};

export default Category;