// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinJ title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinJ/i);
    expect(titleElement).toBeInTheDocument();
});
