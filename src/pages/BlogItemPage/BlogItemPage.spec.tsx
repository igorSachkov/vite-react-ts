import {act, cleanup, render, screen, RenderResult} from '@testing-library/react';
import {BlogItemPage} from './BlogItemPage.tsx';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Router from 'react-router-dom';
import {restCommentsService, restBlogService, restUserService} from '@services/rest-service.ts';
import style from './BlogItemPage.module.scss';
import '@testing-library/jest-dom';
import {mockBlogGetItemAnswer, mockBlogItem, mockBlogItemParams} from '@mocks/blog-mocks.ts';
import {mockUserForBlog, mockUserServiceAnswer} from '@mocks/user-mocks.ts';
import {mockComments, mockCommentsServiceAnswer} from '@mocks/comments-mocks.ts';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const createWrapper = () => {
  return render(
    <MemoryRouter>
      <BlogItemPage/>
    </MemoryRouter>);
};

let wrapper: RenderResult;


describe('BlogItemPage', () => {
  beforeEach(async () => wrapper = await act(async () => createWrapper()));
  afterEach(cleanup);
  jest.spyOn(Router, 'useParams').mockReturnValue(mockBlogItemParams);
  jest.spyOn(restBlogService, 'getItem').mockReturnValue(mockBlogGetItemAnswer);
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

});
