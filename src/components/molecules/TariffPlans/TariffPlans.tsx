import style from './TarrifPlans.module.scss';
import {CustomSelect} from '../CustomSelect/CustomSelect.tsx';
import {ISelectOption, ITariff} from '@models/purchase-models.ts';
import walletIcon from '@assets/purchaseSection/wallet.png';
import cameraIcon from '@assets/purchaseSection/camera.png';
import {TariffConditions} from '@components/molecules/TariffConditions/TariffConditions.tsx';


export const TariffPlans = () => {
  const options: ISelectOption[] = [
    {
      label: 'This Month',
      value: 'this_month',
      key: 0
    }
  ];

  const tariffs: ITariff[] = [
    {
      label: 'Expense',
      text: 'Increased By 10%',
      price: '409.00',
      icon: walletIcon,
      progress: 72,
      key: 0,
      iconBG: '#F4F0FF'
    },
    {
      label: 'Vocher Usage',
      text: 'Increased By 5%',
      price: '45.78',
      icon: cameraIcon,
      progress: 60,
      key: 1,
      iconBG: '#F2FDF6'
    },
  ];

  return (
    <div className={style.tariffContainer}>
      <div className={style.selectTariff}>
        <h4 className={'manrope'}>Purchases</h4>
        <CustomSelect options={options}/>
      </div>
      <div className={style.conditionsContainer}>
        {tariffs.map(item => <TariffConditions {...item}/>)}
      </div>
    </div>
  );
};
