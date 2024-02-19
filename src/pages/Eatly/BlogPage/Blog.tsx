import {cachedRestPostService} from '@services/rest-service.ts';
import {IPost, IPostsServerAnswer} from '@models/dummy-rest-model.ts';
import {useDispatch, useSelector} from 'react-redux';
import {IBlogSelector, setValue} from '@redux/slices/blogSlice.ts';
import {useEffect, useState} from 'react';
import style from './Blog.module.scss';
import {BlogItem} from '@pages/Eatly/BlogPage/BlogItem/BlogItem.tsx';

interface IBlogPagination {
  total: number;
  perPage: number;
  pages: number; // кол- во страниц в общем
  currentPage: number;
  skip: number;
}

// todo Переделать кеширование через redux (либо убрать глобальный стейт, он тут теперь не нужен)
export const Blog = () => {
  const [pagination, setPagination] = useState<IBlogPagination>({
    currentPage: 1,
    pages: 0,
    total: 0,
    perPage: 12,
    skip: 0
  });

  const [isLoading, setLoading] = useState(false);
  const posts: IPost[] = useSelector((state: IBlogSelector) => state.posts.value);
  const dispatch = useDispatch();

  function loadData(limit: number, skip: number, isFirst = false) {
    setLoading(true);
    cachedRestPostService.getAll(limit, skip)
      .then((answer: IPostsServerAnswer) => {
        setPagination((blogNav) => ({
          ...blogNav,
          total: answer.total,
          pages: Math.max(answer.total / blogNav.perPage),
        }));
        dispatch(setValue(answer.posts));
      })
      .catch(((err: string) => {
        console.warn(err, 'err');
      }))
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    const skip = pagination.currentPage === 1 ? 0 : (pagination.currentPage - 1) * pagination.perPage;
    loadData(pagination.perPage, skip);
  }, [pagination.currentPage]);

  return (
    <div className={style.sectionContainer}>
      <h2 className={`poppins-600 ${style.title}`}>Latest <span className={'primary-text'}>Articles</span></h2>
      <div className={style.blogContainer}>
        {posts.map(item => <BlogItem {...item} key={item.id}/>)}
      </div>
      <div>
        <button disabled={isLoading || pagination.currentPage <= 1} onClick={() => setPagination(obj => ({...obj, currentPage: obj.currentPage - 1}))}>{'<-'}arrowLeft</button>
        <button disabled={isLoading || pagination.currentPage >= pagination.pages} onClick={() => setPagination(obj => ({...obj, currentPage: obj.currentPage + 1}))}>arrowRight{'->'}</button>
      </div>
    </div>
  );
};
