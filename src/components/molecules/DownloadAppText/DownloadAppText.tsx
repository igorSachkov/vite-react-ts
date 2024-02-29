import style from './DownloadAppText.module.scss';
import {LandingButton} from '../LandingButton/LandingButton.tsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import vectorImg from '@assets/downloadSection/Vector 14.png';

export const DownloadAppText = () => {
  return (
    <div className={style.sectionContainer}>
      <h2 className={'poppins-700'}>Premium <span className={'primary-text'}>Quality</span><br/>For Your Health</h2>
      <ul>
        <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
        <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
      </ul>

      <div className={style.buttonContainer}>
        <LandingButton isPrimary={true}><span>Download</span><ArrowForwardIcon className={style.icon}></ArrowForwardIcon></LandingButton>
        <img className={style.arrowImg} src={vectorImg} alt="arrow"/>
      </div>

    </div>
  );
};
