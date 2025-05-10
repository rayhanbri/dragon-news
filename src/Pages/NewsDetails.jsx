import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';


const NewsDetails = () => {
  
  const data = useLoaderData();
  const {id} = useParams();
  const  [news , setNews] = useState({});

   console.log(id,data, news)

  

  useEffect(()=>{
    const newsDetails = data.find ((singleNews ) => singleNews.id == id)
    console.log(newsDetails)
    
    setNews(newsDetails)

  },[data,id])

 
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className=' w-11/12 mx-auto grid grid-cols-12 gap-5 py-7' >
        <section className='col-span-9'>
         <h1 className=' font-bold'>News Details</h1>
         <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className='col-span-3'>
        <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;