import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();

  const data = useLoaderData();


  // console.log(data)

  useEffect(() => {

    if (id == 0) {
      return setCategoryNews(data)
    }
    else if (id == 1) {
      const filteredNews = data.filter(news => news.others.is_today_pick == true)
      return setCategoryNews(filteredNews)
    }

    else {
      // ei khane equal duita  dichi karon duitar type alada 
      const filteredNews = data.filter(news => news.category_id == id)

      // console.log(filteredNews)
      setCategoryNews(filteredNews)
    }
    // karon data and id duitai antechi baire theke 
  }, [data, id])

  return (

    <div>
      <p>Total {categoryNews.length} news found</p>
    </div>
  );
};

export default CategoryNews;
    




