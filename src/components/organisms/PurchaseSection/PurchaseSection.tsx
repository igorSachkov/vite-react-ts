import style from './PurchaseSection.module.scss';
import {PurchaseInfo} from '@components/molecules/PurchaseInfo/PurchaseInfo.tsx';
import {TariffPlans} from '@components/molecules/TariffPlans/TariffPlans.tsx';


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
