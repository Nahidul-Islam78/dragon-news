import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import News from '../component/News';

const CategoryNews = () => {
  const[news,setNews]=useState([])
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    if (id == '0') {
      setNews(data);
      return;
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
      <p>Dragon News </p>

      <div>
        {news.map(singleNews => (
          <News key={singleNews.id} singleNews={singleNews}></News>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;