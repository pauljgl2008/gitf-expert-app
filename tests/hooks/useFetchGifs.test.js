import { render, renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    test('debe de regresar el estado inicial', () => { 
        const category = 'OnePunch'
        const {result} = renderHook(()=> useFetchGifs(category));
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        // const {images, isLoading} = useFetchGifs();
     })
     test('debe de retornar un arreglo de imágenes y isLoading en false', async () => { 
        const {result}=renderHook(()=>useFetchGifs('One Punch'));

        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0),
        )

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
      })
 })