import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas de <GifExpertApp/>', () => {
    test('should', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        expect(screen.getByText('Dota')).toBeTruthy(); // Check if the Dota category is rendered
    })

    test('should add a new category when AddCategory is called', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: 'League of Legends' } });
        fireEvent.submit(form);

        expect(screen.getByText('League of Legends')).toBeTruthy();
    });
})