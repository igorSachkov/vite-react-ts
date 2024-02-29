import style from './Rating.module.scss';
import star from '@assets/star.png';
import {IRatingModels} from '@models/rating-models.ts';


export const Rating = ({reactions}: IRatingModels) => {
  return (
    <div className={`manrope ${style.rating}`}>{reactions}&nbsp;<img src={star} alt="star"/></div>
  );
};
