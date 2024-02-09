import style from './LandingButton.module.scss';
import {IButtonProps} from '@models/button-models.ts';


export const LandingButton = ({text, isPrimary}: IButtonProps) => {
  return (
    <button className={`poppins-500 ${style.button} ${isPrimary && style.primary}`}>{text}</button>
  );
};
