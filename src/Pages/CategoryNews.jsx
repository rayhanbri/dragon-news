import React, { useEffect, useState } from 'react';
import { TbCategoryPlus } from 'react-icons/tb';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard/NewsCard';

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
      <p className='font-bold  font-serif'>Total <span className='text-secondary'>{categoryNews.length}</span> news found</p>
      <div className='grid grid-cols-1 gap-5'>

        {
          categoryNews.map(news =>  <NewsCard key={news.id} news={news}></NewsCard>)
        }

      </div>
    </div>
  );
};

export default CategoryNews;
    




