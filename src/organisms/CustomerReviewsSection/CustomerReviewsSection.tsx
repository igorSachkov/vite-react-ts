import style from './CustomerReviewsSection.module.scss';
import {IComment} from '@models/dummy-rest-model.ts';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {ICommentsSelector, setValue} from '@redux/slices/commentsSlice.ts';
import {restCommentsService} from '@services/rest-service.ts';
import {
  CustomerReviewSlider
} from '@molecules/CustomerReviewSlider/CustomerReviewSlider.tsx';


export const CustomerReviewsSection = () => {
  const comments: IComment[] = useSelector((state: ICommentsSelector) => state.comments.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!comments?.length) {
      restCommentsService.getAll(3)
        .then(({comments}) => {
          dispatch(setValue(comments));
        })
        .catch(((err: string) => {
          console.warn(err, 'err');
        }));
    }
  }, []);
  return (
    <section className={style.sectionContainer}>
      <h2 className={'poppins-700'}><span className={'primary-text'}>Customer</span> Say</h2>
      <div className={style.reviewsContainer}>
        {!comments.length ?
          <h4 style={{textAlign: 'center', fontSize: '3rem'}}>Loading...</h4> :
          <CustomerReviewSlider comments={comments}/>}
      </div>
    </section>
  );
};
