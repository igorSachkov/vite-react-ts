import {Outlet} from 'react-router-dom';
import {TaskLandingHeader} from '@pages/Eatly/components/TaskLandingHeader/TaskLandingHeader.tsx';
import {Footer} from '@pages/Eatly/components/Footer/Footer.tsx';
import React from 'react';
import ScrollToAnchor from '@components/ScrollToAnchor/ScrollToAnchor.tsx';
import {Provider} from 'react-redux';
import store from '@redux/store/store.ts';

export const Eatly = () => {
  return (
    <Provider store={store}>
      <ScrollToAnchor/>
      <TaskLandingHeader/>
      <main>
        <Outlet/>
      </main>
      <div style={{marginTop: '12rem'}}>
        <Footer/>
      </div>
    </Provider>

  );
};
