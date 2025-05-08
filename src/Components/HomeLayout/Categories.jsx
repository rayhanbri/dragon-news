import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
.then(res => res.json())

const Categories = () => {
  const allCategory = use (categoryPromise)
  console.log(allCategory)
  return (
    <div>
      <h1 className='font-bold'>All Categories({allCategory.length})</h1>
      <div  className='grid grid-cols-1 gap-3 mt-5'>
        {
          allCategory.map(category => <NavLink 
            key={category.id}
             className={'btn bg-base-100 border-none hover:bg-base-200 font-semibold text-accent'}
             to={`/category/${category.id}`} > {category.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default Categories;