import {act, cleanup, render} from '@testing-library/react';
import {BlogItemPage} from './BlogItemPage.tsx';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from 'react-router-dom';
import {restCommentsService, restPostService, restUserService} from '@services/rest-service.ts';
import {IBlogItemParams} from '@models/blog-models.ts';
import {IComment, ICommentsServerAnswer, IPost, IUser} from '@models/dummy-rest-model.ts';
import style from './BlogItemPage.module.scss';

afterEach(cleanup);


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const createWrapper = () => {
  return render(
    <BrowserRouter>
      <BlogItemPage/>
    </BrowserRouter>);
};

const mockId = 'test_id';
const mockBlogItemParams: Partial<IBlogItemParams> = {id: mockId};

const mockPost: IPost = {
  userId: 4,
  id: 4,
  body: 'test_body',
  reactions: 4,
  tags: [],
  title: 'test_title'
};
const mockPostServiceAnswer: Promise<IPost> = new Promise(resolve => resolve(mockPost));

const mockUserForBlog = {
  firstName: 'test_first_name',
  id: 4,
  image: 'test_img_url',
  lastName: 'test_last_name'
} as IUser;
const mockUserServiceAnswer: Promise<IUser> = new Promise(resolve => resolve(mockUserForBlog));

const mockComments: IComment[] = [
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
const mockCommentsServiceAnswer: Promise<ICommentsServerAnswer> = new Promise(resolve => resolve(mockCommentsAnswer));


describe('BlogItemPage', () => {
  it('The component rendered correctly', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue(mockBlogItemParams);
    jest.spyOn(restPostService, 'getItem').mockReturnValue(mockPostServiceAnswer);
    jest.spyOn(restUserService, 'getItem').mockReturnValue(mockUserServiceAnswer);
    jest.spyOn(restCommentsService, 'getAllCommentsByPostId').mockReturnValue(mockCommentsServiceAnswer);
    const wrapper = await act(async () => createWrapper());
    const commentElements = wrapper.container.getElementsByClassName(style.commentsContainer);

    expect(commentElements.length).toBe(mockComments.length);


    // expect(fetch).toHaveBeenCalledTimes(3);
    // expect(fetch).toHaveBeenCalledWith('https://website.com/users', {
    //   method: 'POST',
    // });


    // const {queryByLabelText, getByLabelText, } = render(
    //   <CheckboxWithLabel labelOn="On" labelOff="Off" />,
    // );
    //
    // expect(queryByLabelText(/off/i)).toBeTruthy();
    //
    // fireEvent.click(getByLabelText(/off/i));
    //
    // expect(queryByLabelText(/on/i)).toBeTruthy();
  });
});
