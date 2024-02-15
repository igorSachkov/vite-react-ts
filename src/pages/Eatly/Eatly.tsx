import {Outlet} from 'react-router-dom';
import {TaskLandingHeader} from '@pages/Eatly/components/TaskLandingHeader/TaskLandingHeader.tsx';
import {Footer} from '@pages/Eatly/components/Footer/Footer.tsx';
import React from 'react';
import ScrollToAnchor from '@components/ScrollToAnchor/ScrollToAnchor.tsx';

export const Eatly = () => {
  return (
    <>
      <ScrollToAnchor/>
      <TaskLandingHeader/>
      <Outlet/>
      <div style={{marginTop: '12rem'}}>
        <Footer/>
      </div>
    </>

  );
};
