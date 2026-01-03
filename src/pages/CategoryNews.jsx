import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
  const[news,setNews]=useState([])
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    if (id == '0') {
      setNews(data);
      return
    } else if (id == '1') {
      const categoryNews = data.filter(news => news.others.is_today_pick == true);
      setNews(categoryNews);
    } else {
      const categoryNews = data.filter(news => news.category_id == id);
      setNews(categoryNews);
    }
    
  
  },[id,data])
  return (
    <div>
      <p>categories news-{id}</p>
      <p>total news-{news.length}</p>
    </div>
  );
};

export default CategoryNews;