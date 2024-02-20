import style from './BlogItem.module.scss';
import {IPost} from '@models/dummy-rest-model.ts';
import {useNavigate} from 'react-router-dom';
import {Rating} from '@pages/Eatly/components/Rating/Rating.tsx';
import {Tags} from '@pages/Eatly/components/Tags/Tags.tsx';

export const BlogItem = ({title, tags, reactions, body, id}: IPost) => {
  const navigate = useNavigate();
  function openItem() {
    navigate('/second-task/blog-item' + `/${id}`);
  }

  return (
    <div className={style.blog} onClick={() => openItem()}>
      <h3 className={'poppins-600'}>{title}</h3>
      <div className={style.info}>
        <Tags tags={tags}/>
        <div>
          <Rating reactions={reactions}/>
        </div>
      </div>
      <div className={style.body}>
        <p className={'poppins-400'}>{body}</p>
      </div>
    </div>
  );
};
