import {ISliderCustomerProps} from '@models/customer-review-models.ts';
import {
  CustomerReviewCard
} from '@pages/Eatly/components/CustomerReviewCard/CustomerReviewCard.tsx';
import style from './CustomerReviewSlider.module.scss';
import React, {useState} from 'react';


export const CustomerReviewSlider = ({comments}: ISliderCustomerProps) => {
  const [activeSlider, setActiveSlider] = useState(0);
  const slicedArray = comments.slice(activeSlider, -1);
  /** Не продумал, пока, как это должно работать */
  return (
    <div className={style.sliderContainer}>
      <div>
        <div className={style.comment}><CustomerReviewCard {...comments[activeSlider]} isActive={true}/></div>
      </div>
      <div className={style.activeArea}>
        <div className={style.slides}>
          {slicedArray.map(item => <div className={style.comment}><CustomerReviewCard {...item} key={item.id}/></div>)}
        </div>

        <div className={style.progressContainer}>
          {/*заглушка*/}
          <div className={style.progress} style={{backgroundColor: '#6C5FBC'}}></div>
          <div className={style.progressDone} style={{backgroundColor: '#6C5FBC', width: '28%'}}></div>
        </div>
      </div>

    </div>

  );
};
