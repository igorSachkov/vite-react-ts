import style from './BlogItemPage.module.scss';
import {useParams} from 'react-router-dom';
import {IBlogItemParams, UserForBlog} from '@models/blog-models.ts';
import {useEffect, useState} from 'react';
import {restCommentsService, restPostService, restUserService} from '@services/rest-service.ts';
import {IComment, ICommentsServerAnswer, IPost, IUser} from '@models/dummy-rest-model.ts';
import {Rating} from '@pages/Eatly/components/Rating/Rating.tsx';
import {Tags} from '@pages/Eatly/components/Tags/Tags.tsx';
import {LandingButton} from '@components/LandingButton/LandingButton.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const BlogItemPage = () => {
  const params: Readonly<Partial<IBlogItemParams>> = useParams<Partial<IBlogItemParams>>();
  const [blog, setBlog] = useState<IPost>();
  const [user, setUser] = useState<UserForBlog>();
  const [comments, setComments] = useState<IComment[]>([]);

  async function loadData() {
    if (params.id === null || params.id === undefined) {
      return;
    }

    try {
      const usersField: (keyof IUser)[]= ['firstName', 'lastName', 'image'];
      const post: IPost = await restPostService.getItem(params.id);
      const userPromise: Promise<UserForBlog> = restUserService.getItem(`${post.userId}`, usersField);
      const commentPromise: Promise<ICommentsServerAnswer> = restCommentsService.getAllCommentsByPostId(post.id);
      const result = await Promise.allSettled([userPromise, commentPromise] as const);
      const [userResult, commentsResult] = result;
      setBlog(post);
      userResult.status === 'fulfilled' && setUser(userResult.value);
      commentsResult.status === 'fulfilled' && setComments(commentsResult.value?.comments);

    } catch (err) {
      console.warn('Ошибка загрузки данных!', err);
    }

  }

  useEffect(() => {
    loadData();
  }, []);

  if (!blog) {
    return <div className={style.loading}>Loading...</div>;

  } else {
    return (
      <div className={`container ${style.sectionContainer}`}>
        <div className={style.blogItemContainer}>
          <h4 className={`poppins-600 ${style.title}`}>{blog.title}</h4>
          <div className={style.topInfo}>
            <img className={style.avatar} src={user?.image} alt="users avatar"/>
            <div className={style.user}>
              <div className={`poppins-400 ${style.subtitle}`}>Written By</div>
              <h5 className={'poppins-500'}>{user?.firstName} {user?.lastName}</h5>
            </div>
            <div>
              <Rating reactions={blog.reactions}/>
              <Tags tags={blog.tags}/>
            </div>
          </div>
          <p className={`poppins-400 ${style.text}`}>{blog.body}</p>
        </div>

        <div className={style.buttonBlock}>
          <LandingButton>
            <ArrowBackIcon className={style.icon}></ArrowBackIcon><span>All Articles</span>
          </LandingButton>
        </div>

        <div className={style.commentsContainer}></div>

      </div>
    );
  }

};
