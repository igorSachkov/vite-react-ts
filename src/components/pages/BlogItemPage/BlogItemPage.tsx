import style from './BlogItemPage.module.scss';
import {useNavigate, useParams} from 'react-router-dom';
import {IBlogItemParams, UserForBlog} from '@models/blog-models.ts';
import {useEffect, useState} from 'react';
import {restCommentsService, restBlogService, restUserService} from '@services/rest-service.ts';
import {IComment, ICommentsServerAnswer, IPost, IUser} from '@models/dummy-rest-model.ts';
import {Rating} from '@components/atoms/Rating/Rating.tsx';
import {Tags} from '@components/molecules/Tags/Tags.tsx';
import {LandingButton} from '@components/molecules/LandingButton/LandingButton.tsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {CustomerReviewCard} from '@components/organisms/CustomerReviewCard/CustomerReviewCard.tsx';
import {AddComment} from '@components/organisms/AddComment/AddComment.tsx';

export const BlogItemPage = () => {
  const params: Readonly<Partial<IBlogItemParams>> = useParams<Partial<IBlogItemParams>>();
  const [blog, setBlog] = useState<IPost>();
  const [user, setUser] = useState<UserForBlog>();
  const [comments, setComments] = useState<IComment[]>([]);
  const navigate = useNavigate();

  function addComment(comment: IComment): void {
    setComments([...comments, comment]);
  }

  async function loadData() {
    if (params.id === null || params.id === undefined) {
      return;
    }

    try {
      const usersField: (keyof IUser)[]= ['firstName', 'lastName', 'image'];
      const post: IPost = await restBlogService.getItem(params.id);
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

  function navBack() {
    navigate(-1);
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
          <LandingButton onClick={navBack}>
            <ArrowBackIcon className={style.icon}></ArrowBackIcon><span>All Articles</span>
          </LandingButton>
        </div>

        <div className={style.commentsContainer}>
          {comments.map(comment => <CustomerReviewCard body={comment.body} user={comment.user} key={comment.id} isActive={true}/>)}
        </div>
        <div className={style.commentContainer}>
          <AddComment addComment={addComment}/>
        </div>

      </div>
    );
  }

};
