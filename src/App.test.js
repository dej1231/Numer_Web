import { render, screen } from '@testing-library/react';
import App from './App';

test('6104062630042', () => {
  render(<App />);
  const linkElement = screen.getByText('6104062630042');
  expect(linkElement).toBeInTheDocument();
});
