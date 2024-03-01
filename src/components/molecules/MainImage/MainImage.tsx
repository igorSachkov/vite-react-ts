import style from './MainImage.module.scss';
import mainImg from '@assets/mainSectionImages/Group 427320327.png';
import illustration2 from '@assets/mainSectionImages/Illustration 02.png';
import illustration1 from '@assets/mainSectionImages/Illustration 01.png';
import graphic from '@assets/mainSectionImages/Graph.png';
import {DeliveryStatus, IDeliveryStatus} from '@models/purchase-models.ts';
import chickenHellImg from '@assets/purchaseSection/chicken-hell.png';
import {DeliveryStatusItem} from '@components/molecules/DeliveryStatusItem/DeliveryStatusItem.tsx';

export const MainImage = () => {
  const deliveryItem: IDeliveryStatus = {
    title: 'Chicken Hell',
    status: DeliveryStatus.ON_THE_WAY,
    time: '3:09 PM',
    image: <img src={chickenHellImg} alt='Chicken hell dish'/>,
    key: 100
  };

  return (
    <div className={style.imageContainer}>
      <img className={style.rightIllustration} src={illustration1} alt="illustation"/>
      <img className={style.leftIllustration} src={illustration2} alt="illustation"/>
      <div className={style.mainImgContainer}>
        <img className={style.mainImg} src={mainImg} alt="Pure Flavour"/>
        <img className={style.graphicImg} src={graphic} alt="Graphic"/>
        <div className={style.commentImg}>
          <DeliveryStatusItem {...deliveryItem}/>
        </div>

      </div>
    </div>
  );
};
