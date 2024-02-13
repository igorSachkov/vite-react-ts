import {PurchaseInfo} from '@pages/TaskLandingPage/PurchaseSection/PurchaseInfo/PurchaseInfo.tsx';
import {TariffPlans} from '@pages/TaskLandingPage/PurchaseSection/TariffPlans/TariffPlans.tsx';

export const PurchaseSection = () => {
  return (
    <section className={'d-flex container'}>
      <div style={{width: '50%'}}>
        <PurchaseInfo/>
      </div>
      <div style={{width: '50%'}}>
        <TariffPlans/>
      </div>
    </section>
  );
};
