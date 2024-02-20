import {IComment} from '@models/dummy-rest-model.ts';


export interface ICustomerReviewProps extends Pick<IComment, 'body' | 'user'> {
  isActive?: boolean;
}

export interface ISliderCustomerProps {
  comments: IComment[];
}
