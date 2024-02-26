import {IBlogItemParams} from '@models/blog-models.ts';
import {IComment, ICommentsServerAnswer, IPost, IUser} from '@models/dummy-rest-model.ts';


const mockId = 'test_id';
export const mockBlogItemParams: Partial<IBlogItemParams> = {id: mockId};


/** Blog Mock  */
export const mockBlogItem: IPost = {
  userId: 4,
  id: 4,
  body: 'test_body',
  reactions: 4,
  tags: [],
  title: 'test_title'
};

export const mockPostServiceAnswer: Promise<IPost> = new Promise(resolve => resolve(mockBlogItem));


/** User (partial, for blog) Mock */
export const mockUserForBlog = {
  firstName: 'test_first_name',
  id: 4,
  image: 'test_img_url',
  lastName: 'test_last_name'
} as IUser;

export const mockUserServiceAnswer: Promise<IUser> = new Promise(resolve => resolve(mockUserForBlog));


/** Comments Mock */
export const mockComments: IComment[] = [
  {
    body: 'test_comment_body',
    postId: 4,
    id: 4,
    user: {
      id: 5,
      username: 'test_user_name'
    }
  }
];

const mockCommentsAnswer: ICommentsServerAnswer = {
  comments: mockComments,
  total: mockComments.length,
  limit: 0,
  skip: 0
};

export const mockCommentsServiceAnswer: Promise<ICommentsServerAnswer> = new Promise(resolve => resolve(mockCommentsAnswer));
