import {TaskLandingMain} from '@components/organisms/TaskLandingMain/TaskLandingMain.tsx';
import {InfoPanel} from '@components/organisms/InfoPanel/InfoPanel.tsx';
import {DownloadAppSection} from '@components/organisms/DownloadAppSection/DownloadAppSection.tsx';
import style from './MainPage.module.scss';
import {RecipesSection} from '@components/organisms/RecipesSection/RecipesSection.tsx';
import {PurchaseSection} from '@components/organisms/PurchaseSection/PurchaseSection.tsx';
import {CustomerReviewsSection} from '@components/organisms/CustomerReviewsSection/CustomerReviewsSection.tsx';
import {FAQSection} from '@components/organisms/FAQSection/FAQSection.tsx';
import {MarginDivider} from '@components/atoms/margin-divider/MarginDivider.tsx';


export const MainPage = () => {
  return (
    <>
      <TaskLandingMain/>
      <MarginDivider $marginTop={'6.5rem'}>
        <InfoPanel/>
      </MarginDivider>
      <MarginDivider $marginTop={'9rem'}>
        <DownloadAppSection/>
      </MarginDivider>
      <MarginDivider className='container' $marginTop={'9.4rem'}>
        <div className={style.divider}></div>
      </MarginDivider>
      <MarginDivider $marginTop={'6.8rem'}>
        <RecipesSection/>
      </MarginDivider>
      <MarginDivider className='container' $marginTop={'10.4rem'}>
        <div className={style.divider}></div>
      </MarginDivider>
      <MarginDivider $marginTop={'11rem'}>
        <PurchaseSection/>
      </MarginDivider>
      <MarginDivider className='container' $marginTop={'11rem'}>
        <div className={style.divider}></div>
      </MarginDivider>
      <MarginDivider $marginTop={'8rem'}>
        <CustomerReviewsSection/>
      </MarginDivider>
      <MarginDivider className='container' $marginTop={'19.1rem'}>
        <FAQSection/>
      </MarginDivider>
    </>
  );
};
