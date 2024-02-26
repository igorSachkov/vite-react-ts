import {act, cleanup, render, screen, RenderResult, fireEvent, waitFor} from '@testing-library/react';
import {BlogItemPage} from './BlogItemPage.tsx';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from 'react-router-dom';
import {restCommentsService, restPostService, restUserService} from '@services/rest-service.ts';
import style from './BlogItemPage.module.scss';
import {
  mockBlogItemParams, mockComments,
  mockCommentsServiceAnswer, mockBlogItem,
  mockPostServiceAnswer,
  mockUserServiceAnswer, mockUserForBlog
} from '@mocks/test-blog.ts';
import '@testing-library/jest-dom';
import * as router from 'react-router';

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

let wrapper: RenderResult;
beforeEach(async () => wrapper = await act(async () => createWrapper()));
afterEach(cleanup);


describe('BlogItemPage', () => {
  jest.spyOn(Router, 'useParams').mockReturnValue(mockBlogItemParams);
  jest.spyOn(restPostService, 'getItem').mockReturnValue(mockPostServiceAnswer);
  jest.spyOn(restUserService, 'getItem').mockReturnValue(mockUserServiceAnswer);
  jest.spyOn(restCommentsService, 'getAllCommentsByPostId').mockReturnValue(mockCommentsServiceAnswer);

  it('Render correct blog title', async () => {
    expect(screen.getByText(mockBlogItem.title)).toBeInTheDocument();
  });

  it('Comments must be rendered in the template', async () => {
    const commentElements = wrapper.container.getElementsByClassName(style.commentsContainer);
    expect(commentElements.length).toBe(mockComments.length);
  });

  it('State should contain mock user data', async () => {
    const userFullNameHeading = screen.getByRole('heading', {name: `${mockUserForBlog?.firstName} ${mockUserForBlog?.lastName}`});
    expect(userFullNameHeading).toBeInTheDocument();
  });


  // it('All Articles button click should return to previously path', async () => {
  //   const button: HTMLButtonElement = screen.getByRole('button', {name: 'All Articles'});
  //   const navigate = jest.fn();
  //   jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  //   fireEvent.click(button)
  //
  //   await waitFor(() => expect(navigate).toHaveBeenCalledTimes(1));
  //
  //
  //   //expect(navigate).toHaveBeenCalledWith('/home');
  //   // const mockedNavigate = jest.fn();
  //   //
  //   // jest.mock('react-router-dom', () => ({
  //   //   ...jest.requireActual('react-router-dom'),
  //   //   useNavigate: () => mockedNavigate
  //   // }));
  //   //
  //   // const button: HTMLButtonElement = screen.getByRole('button', {name: 'All Articles'});
  //   // expect(button).toBeInstanceOf(HTMLButtonElement);
  //   // act(() => fireEvent.click(button));
  //   // expect(mockedNavigate).toHaveBeenCalledTimes(1)
  //   // // expect(mockedNavigate).toHaveBeenCalledWith(-1);
  //
  // });

});
