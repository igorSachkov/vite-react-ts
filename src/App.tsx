import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '@redux/store/store.ts';
import ScrollToAnchor from '@components/molecules/ScrollToAnchor/ScrollToAnchor.tsx';
import {ErrorPage} from '@components/pages/ErrorPage/ErrorPage.tsx';
import {Header} from '@components/organisms/Header/Header.tsx';
import {MainPage} from '@components/pages/TaskLandingPage/MainPage.tsx';
import {BlogPage} from '@components/pages/BlogPage/BlogPage.tsx';
import {BlogItemPage} from '@components/pages/BlogItemPage/BlogItemPage.tsx';
import {Footer} from '@components/organisms/Footer/Footer.tsx';
import {MarginDivider} from '@components/atoms/margin-divider/MarginDivider.tsx';


export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToAnchor/>
        <Header/>

        <main>
          <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/blog'} element={<BlogPage/>}/>
            <Route path={'/blog-item/:id'} element={<BlogItemPage/>}/>
            <Route path={'/*'} element={<ErrorPage/>}/>
          </Routes>
        </main>

        <MarginDivider $marginTop={'12rem'}>
          <Footer/>
        </MarginDivider>
      </Provider>
    </BrowserRouter>
  );
}
