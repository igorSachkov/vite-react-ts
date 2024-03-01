import {ISliderCustomerProps} from '@models/customer-review-models.ts';
import {
  CustomerReviewCard
} from '@components/organisms/CustomerReviewCard/CustomerReviewCard.tsx';
import style from './CustomerReviewSlider.module.scss';
import React, {useState} from 'react';


export const CustomerReviewSlider = ({comments}: ISliderCustomerProps) => {
  const [activeSlider, setActiveSlider] = useState(0);
  const slicedArray = comments.slice(activeSlider, -1);

  return (
    <div className={style.sliderContainer}>
      <div>
        <div className={style.comment}><CustomerReviewCard {...comments[activeSlider]} isActive={true}/></div>
      </div>
      <div className={style.activeArea}>
        <div className={style.slides}>
          {slicedArray.map(item => <div className={style.comment} key={item.id}><CustomerReviewCard {...item}/></div>)}
        </div>

        <div className={style.progressContainer}>
          {/*заглушка*/}
          <div className={style.progress}></div>
          <div className={style.progressDone}></div>
        </div>
      </div>

    </div>

  );
};
