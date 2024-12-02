import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch';
    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        // screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })
    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id:'support',
                title:'lion',
                url:'https://www.dota.com'
            },
            {
                id:'dbs',
                title:'goku',
                url:'https://www.dbz.com'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render(<GifGrid category={category} />);
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})