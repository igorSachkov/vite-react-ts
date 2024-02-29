import {TaskLandingMain} from '@components/organisms/TaskLandingMain/TaskLandingMain.tsx';
import {InfoPanel} from '@components/organisms/InfoPanel/InfoPanel.tsx';
import {DownloadAppSection} from '@components/organisms/DownloadAppSection/DownloadAppSection.tsx';
import style from './MainPage.module.scss';
import {RecipesSection} from '@components/organisms/RecipesSection/RecipesSection.tsx';
import {PurchaseSection} from '@components/organisms/PurchaseSection/PurchaseSection.tsx';
import {CustomerReviewsSection} from '@components/organisms/CustomerReviewsSection/CustomerReviewsSection.tsx';
import {FAQSection} from '@components/organisms/FAQSection/FAQSection.tsx';


export const MainPage = () => {
  return (
    <>
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
    </>
  );
};
