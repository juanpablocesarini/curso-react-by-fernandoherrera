import { describe, expect, test } from "vitest";
import axiosMockAdapter from 'axios-mock-adapter';
import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from '../../../tests/mocks/giphy.response.data';


describe('getGifsByQuery', ()=>{
    const mock = new axiosMockAdapter(giphyApi);

 /*    test('should returns a list of gifs', async ()=>{
        const gifs = await getGifsByQuery('pikachu');
        const [gif1] = gifs
        
        expect(gif1).toStrictEqual({
            id: expect.any(String),
            title: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            url: expect.any(String),
        })
    }) */
   test('should returns a list of gifs', async () =>{
        mock.onGet('/search').reply(200,giphySearchResponseMock);

        const gifs = await getGifsByQuery('pikachu');

    expect(gifs.length).toBe(10);

    gifs.forEach(gif =>{
        expect(typeof gif.id).toBe('string');
        expect(typeof gif.title).toBe('string');
        expect(typeof gif.url).toBe('string');
        expect(typeof gif.height).toBe('number');
        expect(typeof gif.width).toBe('number');

    })
   })
})