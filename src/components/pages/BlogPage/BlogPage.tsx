import {IPost, IBlogServerAnswer} from '@models/dummy-rest-model.ts';
import {useEffect, useState} from 'react';
import style from './BlogPage.module.scss';
import {BlogItem} from '@components/organisms/BlogItem/BlogItem.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {cachedRestBlogService} from '@services/cache-service.ts';
import {ErrorMessage} from '@components/molecules/ErrorMessage/ErrorMessage.tsx';


interface IBlogPagination {
  total: number;
  perPage: number;
  pages: number; // кол- во страниц в общем
  currentPage: number;
  skip: number;
}

export const BlogPage = () => {
  const [pagination, setPagination] = useState<IBlogPagination>({
    currentPage: 1,
    pages: 0,
    total: 0,
    perPage: 12,
    skip: 0
  });

  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isError, setError] = useState<boolean>(false);

  function loadData(limit: number, skip: number) {
    setLoading(true);
    cachedRestBlogService.getAll(limit, skip)
      .then((answer: IBlogServerAnswer) => {
        setPagination((blogNav) => ({
          ...blogNav,
          total: answer.total,
          pages: Math.max(answer.total / blogNav.perPage),
        }));
        setPosts(answer.posts);
        setError(false);
      })
      .catch(((err: string) => {
        console.warn(err, 'err');
        setError(true);
      }))
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    const skip = pagination.currentPage === 1 ? 0 : (pagination.currentPage - 1) * pagination.perPage;
    loadData(pagination.perPage, skip);
  }, [pagination.currentPage]);

  function backClick() {
    setPagination(obj => ({...obj, currentPage: obj.currentPage - 1}));
  }

  function forwardClick() {
    setPagination(obj => ({...obj, currentPage: obj.currentPage + 1}));
  }

  function isBackDisabled(): boolean {
    return (isLoading || pagination.currentPage <= 1);
  }

  function isForwardDisabled(): boolean {
    return (isLoading || pagination.currentPage >= pagination.pages);
  }

  return (
    <div className={style.sectionContainer}>
      <h2 className={`poppins-600 ${style.title}`}>Latest <span className={'primary-text'}>Articles</span></h2>
      {isError ? <ErrorMessage/> :
        <div className={style.blogContainer}>
          {posts.map(item => <BlogItem {...item} key={item.id} isLoading={isLoading}/>)}
        </div>}

      <div className={style.pagination}>
        <button className={isBackDisabled() ? '' : 'pointer'} disabled={isBackDisabled()} onClick={() => backClick()}>
          <ArrowBackIcon/>
        </button>
        <button className={isForwardDisabled() ? '' : 'pointer'} disabled={isForwardDisabled()} onClick={() => forwardClick()}>
          <ArrowForwardIcon/>
        </button>
      </div>
    </div>
  );
};
