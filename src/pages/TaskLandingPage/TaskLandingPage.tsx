import {TaskLandingHeader} from '@pages/TaskLandingPage/TaskLandingHeader/TaskLandingHeader.tsx';
import {TaskLandingMain} from '@pages/TaskLandingPage/TaskLandingMain/TaskLandingMain.tsx';
import {InfoPanel} from '@pages/TaskLandingPage/InfoPanel/InfoPanel.tsx';
import {DownloadAppSection} from '@pages/TaskLandingPage/DownloadAppSection/DownloadAppSection.tsx';
import style from './TaskLandingPage.module.scss';
import {RecipesSection} from '@pages/TaskLandingPage/RecipesSection/RecipesSection.tsx';
import {PurchaseSection} from '@pages/TaskLandingPage/PurchaseSection/PurchaseSection.tsx';

export const TaskLandingPage = () => {
  return (
    <>
      <TaskLandingHeader/>

      <main>
        <TaskLandingMain/>
        <div style={{marginTop: '6.5rem'}}>
          <InfoPanel/>
        </div>
        <div style={{marginTop: '9rem'}}>
          <DownloadAppSection/>
        </div>
        <div className='container' style={{marginTop: '9.4rem'}}>
          <div className={style.divider}></div>
        </div>
        <div style={{marginTop: '6.8rem'}}>
          <RecipesSection/>
        </div>
        <div className='container' style={{marginTop: '10.4rem'}}>
          <div className={style.divider}></div>
        </div>
        <div className='container' style={{marginTop: '11.2rem'}}>
          <PurchaseSection/>
        </div>
      </main>
    </>
  );
};
