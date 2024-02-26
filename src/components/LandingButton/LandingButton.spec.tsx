import {act, cleanup, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import React from 'react';
import {LandingButton} from '@components/LandingButton/LandingButton.tsx';
import '@testing-library/jest-dom';

const onClick = jest.fn();

const createWrapper = (isDisabled = false) => {
  return render(<LandingButton onClick={onClick} isDisabled={isDisabled}>Test click</LandingButton>);
};
let button: HTMLButtonElement;

let wrapper: RenderResult;

afterEach(cleanup);

describe('LandingButton', () => {
  beforeEach(async () => {
    wrapper = await act(async () => createWrapper());
    button = screen.getByRole('button');
  });

  it('Button should be rendered', () => {
    expect(button).toBeInTheDocument();
  });

  it('Should handle click on button', () => {
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    onClick.mockClear();
  });

  it('Button must be disabled', async () => {
    /** todo Найти лучшую практику, без бесполезного beforeEach */
    wrapper.unmount();
    const disabledWrapper = await act(async () => createWrapper(true));
    const disabledButton = disabledWrapper.getByRole('button');
    expect(disabledButton).toBeDisabled();
  });
});
