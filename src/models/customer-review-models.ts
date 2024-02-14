import {IIterableProps} from '@models/app-models.ts';


export interface ICustomerReviewProps extends IIterableProps {
  photo: string;
  name: string;
  subtitle: string;
  review: string;
  rating: number;
}

export interface ISliderCustomerProps {
  sliders: ICustomerReviewProps[];
}
