import {ReactNode} from 'react';
import {IIterableProps} from '@models/app-models.ts';

/** Небольшое усложнение, для данного лендинга особо не имеет смысла, конечно */
export enum DeliveryStatus {
  ON_THE_WAY = 'ON_THE_WAY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export interface IDeliveryStatus extends IIterableProps {
  image: ReactNode;
  title: string;
  status: DeliveryStatus;
  time: string;
}

export interface ISelectOption extends IIterableProps {
  value: string;
  label: string;
}

export interface ICustomSelectProps {
  options: ISelectOption[];
}

export interface ITariff extends IIterableProps {
  label: string;
  text: string;
  price: string;
  icon: string;
  progress: number;
  iconBG: string;
}
