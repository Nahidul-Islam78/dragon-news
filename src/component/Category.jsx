import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
    .then(res => res.json())
console.log(categoryPromise)
const Category = () => {
  const category = use(categoryPromise);

  return (
    <div>
      <p className='font-semibold text-xl'>All Category({category.length})</p>
      <div className='grid grid-cols-1   gap-3 my-2'>
        {category.map(cItem => (
          <NavLink to={`/category/${cItem.id}`} className='py-2 w-full border-0 bg-base-100 indent-12 hover:bg-base-300 ' key={cItem.id}>{cItem.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;