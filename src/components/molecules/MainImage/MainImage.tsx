import style from './MainImage.module.scss';
import mainImg from '@assets/Group 427320327.png';
import illustration2 from '@assets/Illustration 02.png';
import illustration1 from '@assets/Illustration 01.png';
import graphic from '@assets/Graph.png';
import info from '@assets/1st.png';

export const MainImage = () => {
  return (
    <div className={style.imageContainer}>
      <img className={style.rightIllustration} src={illustration1} alt="illustation"/>
      <img className={style.leftIllustration} src={illustration2} alt="illustation"/>
      <div className={style.mainImgContainer}>
        <img className={style.mainImg} src={mainImg} alt="Pure Flavour"/>
        <img className={style.graphicImg} src={graphic} alt="Graphic"/>
        <img className={style.commentImg} src={info} alt="On the way"/>

      </div>
    </div>
  );
};
