import style from './LandingButton.module.scss';
import {IButtonProps} from '@models/button-models.ts';


export const LandingButton = ({isPrimary, children}: IButtonProps) => {
  return (
    <button className={`poppins-500 ${style.button} ${isPrimary && style.primary}`}>{children}</button>
  );
};
