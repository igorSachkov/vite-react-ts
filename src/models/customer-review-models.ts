import {IComment} from '@models/dummy-rest-model.ts';


export interface ICustomerReviewProps extends IComment {
  isActive?: boolean;
}

export interface ISliderCustomerProps {
  comments: IComment[];
}
