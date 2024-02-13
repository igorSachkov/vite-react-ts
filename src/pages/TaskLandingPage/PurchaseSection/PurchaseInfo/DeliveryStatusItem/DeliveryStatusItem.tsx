import {DeliveryStatus, IDeliveryStatus} from '@models/purchase-models.ts';
import style from './DeliveryStatusItem.module.scss';
import {ReactNode} from 'react';


export const DeliveryStatusItem = ({title, time, status, image}: IDeliveryStatus) => {
  const deliveryStatus: ReactNode = <p className={`poppins-600 ${style.status} ${status === DeliveryStatus.CANCELLED && style.alert}`}>{getStatus(status)}</p>;

  function getStatus(status: DeliveryStatus): string {
    switch (status) {
      case DeliveryStatus.ON_THE_WAY: {
        return 'On The Way';
      }
      case DeliveryStatus.DELIVERED: {
        return 'Delivered';
      }
      case DeliveryStatus.CANCELLED: {
        return 'Cancelled';
      }
      default: {
        return '';
      }
    }
  }

  return (
    <div className={`d-flex ${style.deliveryItem}`}>
      <div className={style.imgContainer}>
        {image}
      </div>
      <div className={style.textContainer}>
        <h4 className={'poppins-600'}>{title}</h4>
        {deliveryStatus}
      </div>
      <div className={style.timeContainer}>
        <p className={'poppins-400'}>{time}</p>
      </div>

    </div>
  );
};
