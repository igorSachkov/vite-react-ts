import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '@redux/store/store.ts';
import ScrollToAnchor from './molecules/ScrollToAnchor/ScrollToAnchor.tsx';
import {ErrorPage} from '@pages/ErrorPage/ErrorPage.tsx';
import {Header} from './organisms/Header/Header.tsx';
import {MainPage} from '@pages/TaskLandingPage/MainPage.tsx';
import {BlogPage} from '@pages/BlogPage/BlogPage.tsx';
import {BlogItemPage} from '@pages/BlogItemPage/BlogItemPage.tsx';
import {Footer} from './organisms/Footer/Footer.tsx';


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

        <div style={{marginTop: '12rem'}}>
          <Footer/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}
