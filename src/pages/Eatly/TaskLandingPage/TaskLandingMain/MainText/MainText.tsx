import style from './MainText.module.scss';
import {LandingButton} from '@components/LandingButton/LandingButton.tsx';


export const MainText = () => {
  return (
    <div className={style.mainTextContainer}>
      <div className={`d-flex align-items-center ${style.subtitleContainer}`}>
        <div className={style.line}></div>
        <span className={`poppins-600 ${style.subtitle}`}>OVER 1000 USERS</span>
      </div>

      <h1 className={`poppins-600 ${style.mainTitle}`}>Enjoy Foods All Over The <span className={style.secondary}>World</span></h1>
      <p className={style.mainText}>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span style={{color: '#6155AE'}}>$20 bonus</span>.</p>

      <div className={`d-flex ${style.buttonContainer}`}>
        <LandingButton isPrimary={true}><span>Get Started</span></LandingButton>
        <LandingButton><span>Go Pro</span></LandingButton>
      </div>

    </div>
  );
};
