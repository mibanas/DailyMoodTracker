import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders correctly', () => {
    render(<App />);
    const titleElement = screen.getByText('Mood Selector');
    expect(titleElement).toBeInTheDocument();
  });

  test('selects and submits a mood', () => {
    render(<App />);
    fireEvent.click(screen.getByText('😄')); // Select happy mood
    fireEvent.click(screen.getByText('Submit'));
    const confirmationMessage = screen.getByText('You are feeling happy!');
    expect(confirmationMessage).toBeInTheDocument();
  });

  test('returns to reselect', () => {
    render(<App />);
    fireEvent.click(screen.getByText('😄')); // Select happy mood
    fireEvent.click(screen.getByText('Submit'));
    const returnButton = screen.getByText('Return to reselect');
    fireEvent.click(returnButton);
    const moodButtons = screen.getAllByRole('button');
    expect(moodButtons[0]).toHaveTextContent('😄'); // Check if the happy mood button is back
  });
});
