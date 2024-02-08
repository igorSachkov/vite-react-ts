import {createBrowserRouter, redirect} from 'react-router-dom';

import MainPage from '@pages/MainPage/MainPage.tsx';
import AuthPage, {AuthAction} from '@pages/AuthPage/AuthPage.tsx';
import React from 'react';
import {TaskLandingPage} from '@pages/TaskLandingPage/TaskLandingPage.tsx';

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
    element: <TaskLandingPage/>
  }
]);


async function authLoader(): Promise<true | Response> {
  const isUserAuth = true;
  return isUserAuth ? true : redirect('/auth');
}
