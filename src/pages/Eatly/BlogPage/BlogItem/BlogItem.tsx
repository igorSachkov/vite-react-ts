import style from './BlogItem.module.scss';
import {IPost} from '@models/dummy-rest-model.ts';

export const BlogItem = ({title, tags, reactions, body}: IPost) => {
  return (
    <div className={style.blog}>
      <h3 className={'poppins-600'}>{title}</h3>
      <div className={style.info}>
        <div className={style.tags}>
          {tags.map((tag, i) => {
            return <span className={'poppins-400'} key={i}>#{tag}{i + 1 < tags.length && ','} </span>;
          })}
        </div>
        <div>
          <span>star</span>
          <span className={'manrope'}>{reactions}</span>
        </div>
      </div>
      <div className={style.body}>
        <p className={'poppins-400'}>{body}</p>
      </div>
    </div>
  );
};
