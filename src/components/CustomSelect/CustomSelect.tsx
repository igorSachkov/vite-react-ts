import style from './CystomSelect.module.scss';
import {ICustomSelectProps} from '@models/purchase-models.ts';

export const CustomSelect = ({options}: ICustomSelectProps) => {
  return (
    <div className={style.selectContainer}>
      <select name="tariff" id="tariff" className={`manrope`}>
        {options.map(item => <option value={item.value} key={item.key}>{item.label}</option>)}
      </select>
    </div>
  );
};
