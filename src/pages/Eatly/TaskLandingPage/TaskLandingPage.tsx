import {TaskLandingMain} from '@pages/Eatly/TaskLandingPage/TaskLandingMain/TaskLandingMain.tsx';
import {InfoPanel} from '@pages/Eatly/TaskLandingPage/InfoPanel/InfoPanel.tsx';
import {DownloadAppSection} from '@pages/Eatly/TaskLandingPage/DownloadAppSection/DownloadAppSection.tsx';
import style from './TaskLandingPage.module.scss';
import {RecipesSection} from '@pages/Eatly/TaskLandingPage/RecipesSection/RecipesSection.tsx';
import {PurchaseSection} from '@pages/Eatly/TaskLandingPage/PurchaseSection/PurchaseSection.tsx';
import {CustomerReviewsSection} from '@pages/Eatly/TaskLandingPage/CustomerReviewsSection/CustomerReviewsSection.tsx';
import {FAQSection} from '@pages/Eatly/TaskLandingPage/FAQSection/FAQSection.tsx';

export const TaskLandingPage = () => {
  return (
    <>

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
        <div style={{marginTop: '11rem'}}>
          <PurchaseSection/>
        </div>
        <div className='container' style={{marginTop: '11rem'}}>
          <div className={style.divider}></div>
        </div>
        <div style={{marginTop: '8rem'}}>
          <CustomerReviewsSection/>
        </div>
        <div className='container' style={{marginTop: '19.1rem'}}>
          <FAQSection/>
        </div>
      </main>
    </>
  );
};
