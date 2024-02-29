import '@testing-library/jest-dom';
import {act, cleanup, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import {restCommentsService} from '@services/rest-service.ts';
import {IComment} from '@models/dummy-rest-model.ts';
import {mockComments} from '@mocks/comments-mocks.ts';
import {AddComment} from './AddComment.tsx';


const addCommentMockFn = jest.fn();

const createWrapper = () => {
  return render(<AddComment addComment={addCommentMockFn}/>);
};
const mockComment = mockComments[0];
const mockAddCommentAnswer: Promise<IComment> = new Promise(resolve => resolve(mockComment));


const inputValue = 'value';
let wrapper: RenderResult;
let sendButton: HTMLButtonElement;
let textArea: HTMLTextAreaElement;

describe('AddComment', () => {

  beforeEach(async () => {
    wrapper = await act(async () => createWrapper());
    sendButton = screen.getByRole('button');
    textArea = screen.getByRole('textbox');
    jest.spyOn(restCommentsService, 'addNewComment').mockReturnValue(mockAddCommentAnswer);
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('Component should created', () => {
    expect(wrapper.container).toBeInTheDocument();
  });

  it('Send button should be disabled (because textarea value is empty)', () => {
    expect(sendButton).toBeDisabled();
  });

  it('Send button should be enabled (because textarea value is not empty)', () => {
    expect(textArea).toBeInstanceOf(HTMLTextAreaElement);
    fireEvent.input(textArea, {target: {value: inputValue}});
    expect(textArea.value).toBe(inputValue);
    expect(sendButton).toBeEnabled();
  });

  it('Send button should be disabled (because we send data to server)', async () => {
    fireEvent.input(textArea, {target: {value: inputValue}});
    expect(sendButton).toBeEnabled();
    await act(async () => fireEvent.click(sendButton));
    expect(sendButton).toBeDisabled();

  });

  it('The data that is sent to the server must be correct', async () => {
    fireEvent.input(textArea, {target: {value: inputValue}});
    await act(async () => fireEvent.click(sendButton));
    expect(addCommentMockFn).toHaveBeenCalledTimes(1);
    expect(addCommentMockFn).toHaveBeenCalledWith(mockComment);
  });
});
