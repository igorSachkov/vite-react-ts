import {ICustomerReviewProps} from '@models/customer-review-models.ts';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import style from './ReviewRating.module.scss';

export const ReviewRating = ({rating}: Pick<ICustomerReviewProps, 'rating'>) => {
  const starRating = [false, false, false, false, false];

  function getRating() {
    for (let i = 0; i < rating; i++) {
      starRating[i] = true;
    }
  }
  getRating();

  return (
    <>
      {starRating.map((rating, i) => <StarRoundedIcon style={{fontSize: '2.7rem', marginRight: '-.3rem'}} key={i} className={rating ? style.ratingStar : style.defaultStar}/>)}
    </>
  );
};
