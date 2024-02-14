import style from './CustomerReviewsSection.module.scss';
import {
  CustomerReviewCard
} from '@pages/TaskLandingPage/CustomerReviewsSection/CustomerReviewSlider/CustomerReviewCard/CustomerReviewCard.tsx';
import {ICustomerReviewProps} from '@models/customer-review-models.ts';
import customerPic from '@assets/customerReviews/Pic.png';
import {
  CustomerReviewSlider
} from '@pages/TaskLandingPage/CustomerReviewsSection/CustomerReviewSlider/CustomerReviewSlider.tsx';

export const CustomerReviewsSection = () => {
  const customerReviews: ICustomerReviewProps[] = [
    {
      photo: customerPic,
      name: 'Alexander R.',
      subtitle: '01 Year With Us',
      review: 'Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time',
      rating: 5,
      key: 0
    },
    // {
    //   photo: customerPic,
    //   name: 'Alexander R.',
    //   subtitle: '01 Year With Us',
    //   review: 'Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time',
    //   rating: 5,
    //   key: 1
    // },
    // {
    //   photo: customerPic,
    //   name: 'Alexander R.',
    //   subtitle: '01 Year With Us',
    //   review: 'Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time',
    //   rating: 5,
    //   key: 2
    // },
  ];
  return (
    <section className={style.sectionContainer}>
      <h2 className={'poppins-700'}><span className={'primary-text'}>Customer</span> Say</h2>
      <div className={style.reviewsContainer}>
        <CustomerReviewSlider sliders={customerReviews}/>
      </div>
    </section>
  );
};
