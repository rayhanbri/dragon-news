import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
  const {id} = useParams();

  const  data = useLoaderData();

  console.log(data)
  return (
  
    <div>
      CategoryNews--{id}
    </div>
  );
};

export default CategoryNews;