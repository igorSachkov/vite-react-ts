import {PurchaseInfo} from '@pages/Eatly/TaskLandingPage/PurchaseSection/PurchaseInfo/PurchaseInfo.tsx';
import {TariffPlans} from '@pages/Eatly/TaskLandingPage/PurchaseSection/TariffPlans/TariffPlans.tsx';
import style from './PurchaseSection.module.scss';


export const PurchaseSection = () => {
  return (
    <section className={`d-flex ${style.sectionContainer}`}>
      <div style={{width: '50%', marginTop: '.2rem'}}>
        <PurchaseInfo/>
      </div>
      <div style={{width: '50%'}}>
        <TariffPlans/>
      </div>
    </section>
  );
};
