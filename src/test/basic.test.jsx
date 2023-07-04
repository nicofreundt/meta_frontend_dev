import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '../components/Booking/BookingForm';
import { describe, expect, test, vi } from 'vitest';

describe('Booking form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const submitData = vi.fn();

    test('should correctly render all fields', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} />
        );

        const dateInput = screen.getByLabelText("Choose date");
        const timeSelect = screen.getByLabelText("Choose time");
        const timeOptions = await screen.findAllByTestId('booking-time-option');
        const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
        const occasionSelect = screen.getByLabelText(/Occasion/);
        const occasionOptions = await screen.findAllByTestId(`booking-occasion-option`);
        const submitButton = screen.getByRole('button');

        expect(dateInput).toBeDefined();
        expect(new Date(dateInput.attributes.getNamedItem('value').value).toISOString().split('T')[0]).toBe(today);

        expect(timeSelect).toBeDefined();
        expect(timeSelect.attributes.getNamedItem('id').value).toBe('res-time');
        expect(timeOptions).toHaveLength(2);

        expect(numberOfGuestsInput).toBeDefined();
        expect(numberOfGuestsInput.attributes.getNamedItem('id').value).toBe('guests');
        expect(numberOfGuestsInput.attributes.getNamedItem('type').value).toBe('number');
        expect(numberOfGuestsInput.attributes.getNamedItem('value').value).toBe('1');

        expect(occasionSelect).toBeDefined();
        expect(occasionSelect.attributes.getNamedItem('id').value).toBe('occasion');
        expect(occasionOptions).toHaveLength(2);

        expect(submitButton).toBeDefined();
        expect(submitButton.attributes.getNamedItem('type').value).toBe('submit');
    });

    test('should successfully submit form with default values', () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(submitData).toHaveBeenCalled();

        expect(submitData).toHaveBeenCalledWith({
            date: new Date(),
            time: availableTimes[0],
            numberOfGuests: 1,
            occasion: 'Birthday',
        });
    });
});