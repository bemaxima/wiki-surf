import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  const { getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText(/Enter the page title .../i);
  expect(inputElement).toBeInTheDocument();
});
