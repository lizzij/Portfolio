import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const nameInHeader = screen.getByText(/Zijin Huang/);
  expect(nameInHeader).toBeInTheDocument();
});
