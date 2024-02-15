import style from './PurchaseInfo.module.scss';
import {
  DeliveryStatusItem
} from '@pages/Eatly/TaskLandingPage/PurchaseSection/PurchaseInfo/DeliveryStatusItem/DeliveryStatusItem.tsx';
import {DeliveryStatus, IDeliveryStatus} from '@models/purchase-models.ts';
import chickenHellImg from '@assets/purchaseSection/chicken-hell.png';
import sweDishImg from '@assets/purchaseSection/swe-dish.png';


export const PurchaseInfo = () => {
  const deliveryItems: IDeliveryStatus[] = [
    {
      title: 'Chicken Hell',
      status: DeliveryStatus.ON_THE_WAY,
      time: '3:09 PM',
      image: <img src={chickenHellImg} alt='Chicken hell dish'/>,
      key: 0
    },
    {
      title: 'Swe Dish',
      status: DeliveryStatus.DELIVERED,
      time: 'Yesterday',
      image: <img src={sweDishImg} alt='Swe dish'/>,
      key: 1
    },
    {
      title: 'Fish Hell Veg',
      status: DeliveryStatus.CANCELLED,
      time: 'Yesterday',
      image: <img src={chickenHellImg} alt='Chicken hell dish'/>,
      key: 2
    },
  ];
  return (
    <div className={style.sectionContainer}>
      <h2 className={'poppins-700'}>Control <span className={'primary-text'}>Purchases</span><br/>Via Dashboard</h2>

      <div className={style.deliveryContainer}>
        {deliveryItems.map(item => <DeliveryStatusItem {...item}/>)}
      </div>
    </div>
  );
};
