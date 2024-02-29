import '@testing-library/jest-dom';
import {act, cleanup, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import {restBlogService} from '@services/rest-service.ts';
import {BlogPage} from '@pages/BlogPage/BlogPage.tsx';
import {MemoryRouter} from 'react-router-dom';
import {createMockBlogGetAllAnswer} from '@mocks/blog-mocks.ts';


const createWrapper = () => {
  return render(
    <MemoryRouter>
      <BlogPage/>
    </MemoryRouter>
  );
};

let wrapper: RenderResult;

let backButton: HTMLButtonElement;
let forwardButton: HTMLButtonElement;
const mockBlogGetAllAnswer = createMockBlogGetAllAnswer(15);

describe('Blog', () => {
  beforeEach(async () => {
    wrapper = await act(async () => createWrapper());
    [backButton, forwardButton] = screen.getAllByRole('button');
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  jest.spyOn(restBlogService, 'getAll').mockReturnValue(mockBlogGetAllAnswer);


  it('BlogPage component was rendered', () => {
    expect(wrapper.container).toBeInTheDocument();
  });

  it('Back pagination button must be disabled', () => {
    expect(backButton).toBeDisabled();
  });

  it('Forward pagination button must be enabled', () => {
    expect(forwardButton).toBeEnabled();
  });

  it('After reaching the page limit forward button must be disabled', async () => {
    await act(async () => fireEvent.click(forwardButton));
    expect(backButton).toBeEnabled();
    expect(forwardButton).toBeDisabled();
  });
});
