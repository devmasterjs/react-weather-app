import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Page Title', () => {
  render(<App />);
  const titlePage = screen.getByText(/TEMPO AGORA EM/i);
  expect(titlePage).toBeInTheDocument();
});
