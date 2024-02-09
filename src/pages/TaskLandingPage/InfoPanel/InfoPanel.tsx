import style from './InfoPanel.module.scss';
import {InfoItem} from '@pages/TaskLandingPage/InfoPanel/InfoItem/InfoItem.tsx';

export const InfoPanel = () => {
  return (
    <div className={style.infoPanel}>
      <div className={`d-flex justify-content-center ${style.infoItemContainer}`}>
        <InfoItem title='10K+' children={<><p className={style.text}>Satisfied Costumers</p><p className={style.text}>All Great Over The World</p></>}/>
        <div className={style.divider}></div>
        <InfoItem title='4M' children={<><p className={style.text}>Healthy Dishes Sold</p><p className={style.text}>Including Milk Shakes Smooth</p></>}/>
        <div className={style.divider}></div>
        <InfoItem title='99.99%' children={<><p className={style.text}>Reliable Customer Support</p><p className={style.text}>We Provide Great Experiences</p></>}/>
      </div>
    </div>
  );
};
