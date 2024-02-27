import {createBrowserRouter} from 'react-router-dom';
import React from 'react';
import {Eatly} from '@pages/Eatly/Eatly.tsx';
import {TaskLandingPage} from '@pages/Eatly/TaskLandingPage/TaskLandingPage.tsx';
import {Blog} from '@pages/Eatly/BlogPage/Blog.tsx';
import {BlogItemPage} from '@pages/Eatly/BlogPage/BlogItemPage/BlogItemPage.tsx';


export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Eatly/>,
    children: [
      {
        path: '/',
        element: <TaskLandingPage/>
      },
      {
        path: '/blog',
        element: <Blog/>,
      },
      {
        path: '/blog-item/:id',
        element: <BlogItemPage/>
      },
    ]
  }
]);
