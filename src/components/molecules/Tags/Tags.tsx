import style from './Tags.module.scss';
import {ITagsModels} from '@models/tags-models.ts';


export const Tags = ({tags}: ITagsModels) => {
  return (
    <div className={style.tags}>
      {tags.map((tag, i) => {
        return <span className={'poppins-400'} key={i + `${tag}`}>#{tag}{i + 1 < tags.length && ','} </span>;
      })}
    </div>
  );
};
