import { createBrowserRouter } from 'react-router';

import HomeLayout from '../layout/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
       loader:()=>fetch('/news.json')
        
      }
    ],
  },
]);

export default router;