import style from './CustomerReviewCard.module.scss';
import {ICustomerReviewProps} from '@models/customer-review-models.ts';
import {
  ReviewRating
} from '@pages/Eatly/TaskLandingPage/CustomerReviewsSection/CustomerReviewSlider/CustomerReviewCard/ReviewRating/ReviewRating.tsx';
import quoteImg from '@assets/customerReviews/quotes.png';


export const CustomerReviewCard = ({body, user, isActive = false}: ICustomerReviewProps) => {
  return (
    <div className={style.cardContainer}>
      {isActive &&
        <div className={style.customerInfo}>
          {/*<img className={style.photo} src={photo} alt="Customer photo"/>*/}
          <div className={style.mainIfo}>
            <h5 className={'poppins-500'}>{user.username}</h5>
            {/*<p className={'quicksand'}>{subtitle}</p>*/}
          </div>
          <div>
            <img className={style.quoutes} src={quoteImg} alt="quotes"/>
          </div>
        </div>}

      <div className={style.paragraphContainer}>
        <p className={`poppins-italic ${style.paragraph}`}>&ldquo;&nbsp;{body}&nbsp;&rdquo;</p>
      </div>
      <div className={style.ratingContainer}>
        {/*<ReviewRating rating={rating}/>*/}
      </div>
    </div>
  );
};
