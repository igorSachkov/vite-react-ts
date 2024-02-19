import {restPostService} from '@services/rest-service.ts';
import {IPost, IPostsServerAnswer} from '@models/dummy-rest-model.ts';
import {useDispatch, useSelector} from 'react-redux';
import {IBlogSelector, setValue} from '@redux/slices/blogSlice.ts';
import {useEffect, useState} from 'react';
import style from './Blog.module.scss';
import {BlogItem} from '@pages/Eatly/BlogPage/BlogItem/BlogItem.tsx';


export const Blog = () => {
  const [isLoading, setLoading] = useState(false);
  const posts: IPost[] = useSelector((state: IBlogSelector) => state.posts.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!posts?.length) {
      setLoading(true);
      restPostService.getAll(12)
        .then((answer: IPostsServerAnswer) => {
          console.warn(answer);
          dispatch(setValue(answer.posts));
        })
        .catch(((err: string) => {
          console.warn(err, 'err');
        }))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);
  return (
    <div className={style.sectionContainer}>
      <h2 className={`poppins-600 ${style.title}`}>Latest <span className={'primary-text'}>Articles</span></h2>
      <div className={style.blogContainer}>
        {posts.map(item => <BlogItem {...item} key={item.id}/>)}
      </div>
      <div>
        <button disabled={isLoading}>{'<-'}arrowLeft</button>
        <button disabled={isLoading}>arrowRight{'->'}</button>
      </div>
    </div>
  );
};
