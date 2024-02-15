import {Outlet} from 'react-router-dom';
import {TaskLandingHeader} from '@pages/Eatly/components/TaskLandingHeader/TaskLandingHeader.tsx';
import {Footer} from '@pages/Eatly/components/Footer/Footer.tsx';

export const Eatly = () => {
  return (
    <>
      <TaskLandingHeader/>
      <Outlet/>
      <div style={{marginTop: '12rem'}}>
        <Footer/>
      </div>
    </>

  );
};
