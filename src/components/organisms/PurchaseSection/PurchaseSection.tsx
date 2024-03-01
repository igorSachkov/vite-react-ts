import style from './PurchaseSection.module.scss';
import {PurchaseInfo} from '@components/molecules/PurchaseInfo/PurchaseInfo.tsx';
import {TariffPlans} from '@components/molecules/TariffPlans/TariffPlans.tsx';
import {MarginDivider} from '@components/atoms/margin-divider/MarginDivider.tsx';


export const PurchaseSection = () => {
  return (
    <section className={`d-flex ${style.sectionContainer}`}>
      <MarginDivider className={'w-50'} $marginTop={'.2rem'}>
        <PurchaseInfo/>
      </MarginDivider>
      <div className={'w-50'}>
        <TariffPlans/>
      </div>
    </section>
  );
};
