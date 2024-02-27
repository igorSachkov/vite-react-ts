import '@testing-library/jest-dom';
import {act, cleanup, render, RenderResult} from '@testing-library/react';
import {TaskLandingHeader} from '@pages/Eatly/components/TaskLandingHeader/TaskLandingHeader.tsx';
import {MemoryRouter} from 'react-router-dom';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const createWrapper = () => {
  return render(
    <MemoryRouter>
      <TaskLandingHeader/>
    </MemoryRouter>
  );
};

let wrapper: RenderResult;

describe('Header', () => {
  beforeEach(async () => wrapper = await act(async () => createWrapper()));
  afterEach(cleanup);

  it('Header should be created', () => {
    expect(wrapper.container).toBeInTheDocument();
  });

  it('NavLinks are displayed correctly and have the correct attributes.', () => {
    const navLinks = wrapper.getAllByRole('link') as HTMLAnchorElement[];
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].getAttribute('href')).toBe('/#recipes');
    expect(navLinks[1].getAttribute('href')).toBe('/#faq');
    expect(navLinks[2].getAttribute('href')).toBe('/blog');
  });
});

