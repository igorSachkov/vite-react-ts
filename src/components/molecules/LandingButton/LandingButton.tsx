import style from './LandingButton.module.scss';
import {IButtonProps} from '@models/button-models.ts';


export const LandingButton = ({isPrimary, children, onClick, isDisabled}: IButtonProps) => {
  return (
    <button disabled={isDisabled} className={`poppins-500 ${style.button} ${isPrimary && style.primary}`} onClick={onClick}>{children}</button>
  );
};
