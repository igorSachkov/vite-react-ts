import style from './BlogItem.module.scss';
import {IPost} from '@models/dummy-rest-model.ts';
import star from '@assets/star.png';

export const BlogItem = ({title, tags, reactions, body}: IPost) => {

  return (
    <div className={style.blog}>
      <h3 className={'poppins-600'}>{title}</h3>
      <div className={style.info}>
        <div className={style.tags}>
          {tags.map((tag, i) => {
            return <span className={'poppins-400'} key={i + `${tag}`}>#{tag}{i + 1 < tags.length && ','} </span>;
          })}
        </div>
        <div>
          <div className={`manrope ${style.rating}`}>{reactions}&nbsp;<img src={star} alt="star"/></div>
        </div>
      </div>
      <div className={style.body}>
        <p className={'poppins-400'}>{body}</p>
      </div>
    </div>
  );
};
