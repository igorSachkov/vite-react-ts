import {createBrowserRouter, redirect} from 'react-router-dom';
import React from 'react';
import MainPage from '@pages/MainPage/MainPage.tsx';
import AuthPage, {AuthAction} from '@pages/AuthPage/AuthPage.tsx';

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
  }
]);


async function authLoader(): Promise<true | Response> {
  const isUserAuth = true;
  return isUserAuth ? true : redirect('/auth');
}
