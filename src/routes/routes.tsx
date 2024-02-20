import {createBrowserRouter, redirect} from 'react-router-dom';

import MainPage from '@pages/MainPage/MainPage.tsx';
import AuthPage, {AuthAction} from '@pages/AuthPage/AuthPage.tsx';
import React from 'react';
import {Eatly} from '@pages/Eatly/Eatly.tsx';
import {TaskLandingPage} from '@pages/Eatly/TaskLandingPage/TaskLandingPage.tsx';
import {Blog} from '@pages/Eatly/BlogPage/Blog.tsx';
import {BlogItemPage} from '@pages/Eatly/BlogPage/BlogItemPage/BlogItemPage.tsx';

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    loader: authLoader
  },
  {
    path: '/auth',
    element: <AuthPage/>,
    action: AuthAction
  },
  {
    path: '/second-task',
    element: <Eatly/>,
    children: [
      {
        path: '/second-task',
        element: <TaskLandingPage/>
      },
      {
        path: '/second-task/blog',
        element: <Blog/>,
      },
      {
        path: '/second-task/blog-item/:id',
        element: <BlogItemPage/>
      },
    ]
  }
]);


async function authLoader(): Promise<true | Response> {
  const isUserAuth = true;
  return isUserAuth ? true : redirect('/auth');
}
