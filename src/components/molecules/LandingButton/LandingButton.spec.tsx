import {act, cleanup, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import React from 'react';
import {LandingButton} from './LandingButton.tsx';
import '@testing-library/jest-dom';
import style from './LandingButton.module.scss';

const onClick = jest.fn();

const createWrapper = (isDisabled = false, isPrimary = false) => {
  return render(<LandingButton onClick={onClick} isDisabled={isDisabled} isPrimary={isPrimary}>Test click</LandingButton>);
};

let button: HTMLButtonElement;
let wrapper: RenderResult;

const renderComponent = async (isDisabled = false, isPrimary = false) => {
  wrapper = await act(async () => createWrapper(isDisabled, isPrimary));
  button = screen.getByRole('button');
};


describe('LandingButton', () => {
  afterEach(cleanup);

  it('Button should be rendered', async () => {
    await renderComponent();
    expect(button).toBeInTheDocument();
  });

  it('Should handle click on button', async () => {
    await renderComponent();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    onClick.mockClear();
  });

  it('Button must be disabled', async () => {
    await renderComponent(true);
    expect(button).toBeDisabled();
  });

  it('Button is primary', async () => {
    await renderComponent(false, true);
    const isPrimaryClass = button.classList.contains(style.primary);
    expect(isPrimaryClass).toBeTruthy();
  });
});
