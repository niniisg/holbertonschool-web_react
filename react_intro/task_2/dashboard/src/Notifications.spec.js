import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
    test('renders the notifications title', () => {
        render(<Notifications />);
        const titleElement = screen.getByText(/Here is the list of notifications/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the close button', () => {
        render(<Notifications />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders 3 list items as notifications', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
    });

    test('logs "Close button has been clicked" when the close button is clicked', () => {
        console.log = jest.fn(); // Mock console.log
        render(<Notifications />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
    });
});