import style from './TarrifPlans.module.scss';
import {CustomSelect} from '@components/CustomSelect/CustomSelect.tsx';
import {ISelectOption} from '@models/purchase-models.ts';


export const TariffPlans = () => {
  const options: ISelectOption[] = [
    {
      label: 'This Month',
      value: 'this_month',
      key: 0
    }
  ];
  return (
    <div className={style.tariffContainer}>
      <div className={style.selectTariff}>
        <h4 className={'manrope'}>Purchases</h4>
        <CustomSelect options={options}/>
      </div>
      <div className={style.conditionsContainer}>

      </div>
    </div>
  );
};
