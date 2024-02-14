import {ReactNode} from 'react';

/** Небольшое усложнение, для данного лендинга особо не имеет смысла, конечно */
export enum DeliveryStatus {
  ON_THE_WAY = 'ON_THE_WAY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export interface IDeliveryStatus {
  image: ReactNode;
  title: string;
  status: DeliveryStatus;
  time: string;
  key: number;
}

export interface ISelectOption {
  value: string;
  label: string;
  key: number;
}

export interface ICustomSelectProps {
  options: ISelectOption[];
}

export interface ITariff {
  label: string;
  text: string;
  price: string;
  icon: string;
  progress: number;
  key: number;
  iconBG: string;
}
