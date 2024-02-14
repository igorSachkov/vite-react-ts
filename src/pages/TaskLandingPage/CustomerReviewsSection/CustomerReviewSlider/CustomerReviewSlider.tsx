import {ISliderCustomerProps} from '@models/customer-review-models.ts';
import {
  CustomerReviewCard
} from '@pages/TaskLandingPage/CustomerReviewsSection/CustomerReviewSlider/CustomerReviewCard/CustomerReviewCard.tsx';


export const CustomerReviewSlider = ({sliders}: ISliderCustomerProps) => {
  return (
    <div>
      <CustomerReviewCard {...sliders[0]}/>
    </div>
  );
};
