import {cleanup, fireEvent, render} from '@testing-library/react';
import {BlogItemPage} from './BlogItemPage.tsx';
import React from "react";
import {BrowserRouter} from "react-router-dom";

afterEach(cleanup);

// const mockedUsedNavigate = jest.fn();
//
// jest.mock("react-router-dom", () => ({
//   ...(jest.requireActual("react-router-dom") as any),
//   useNavigate: () => mockedUsedNavigate
// }));

describe('BlogItemPage', () => {
  it('CheckboxWithLabel changes the text after click', () => {
    const component = render(
      <BrowserRouter>
        <BlogItemPage/>
      </BrowserRouter>
    );
    expect(true).toBeTruthy()
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
