import style from './DownloadAppImage.module.scss';
import phoneImg from '@assets/downloadSection/phone.png';
import illustrationRight from '@assets/downloadSection/Group 427320333.png';

export const DownloadAppImage = () => {
  return (
    <div className={style.sectionContainer}>
      <div className={style.imgContainer}>
        <img className={style.sectionImg} src={phoneImg} alt="Phone image"/>
        <img className={style.illustrationRight} src={illustrationRight} alt="illustration"/>
      </div>

    </div>
  );
};
