import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LogoutPage from '../LogoutPage/LogoutPage'; // Update the import path as per your file structure

describe('LogoutPage Component', () => {
  it('renders the logout button', () => {
    const mockLogout = jest.fn(); // Create a mock function for onLogout

    const { getByText } = render(<LogoutPage onLogout={mockLogout} />);

    // Assert that the logout button is rendered
    const logoutButton = getByText('Logout');
    expect(logoutButton).toBeInTheDocument();
  });

  it('calls onLogout function when the button is clicked', () => {
    const mockLogout = jest.fn(); // Create a mock function for onLogout

    const { getByText } = render(<LogoutPage onLogout={mockLogout} />);

    // Simulate a click on the logout button
    const logoutButton = getByText('Logout');
    fireEvent.click(logoutButton);

    // Assert that the onLogout function is called
    expect(mockLogout).toHaveBeenCalled();
  });
});
