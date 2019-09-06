import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('Containes all neccesary text', () => {
  const container = render(<App />);
  
  container.getByText(/women/i);
  container.getByText(/world/i);
  container.getByText(/cup/i);
  container.getByText(/players/i);
  container.getByText(/ranked/i);
  container.getByText(/search/i);
  container.getByText(/google/i);

});