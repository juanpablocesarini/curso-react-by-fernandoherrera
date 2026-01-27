import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";


describe('getGifsByQuery', ()=>{
    test('should returns a list of gifs', async ()=>{
        const gifs = await getGifsByQuery('pikachu');
        const [gif1] = gifs
        
        expect(gif1).toStrictEqual({
            id: expect.any(String),
            title: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            url: expect.any(String),
        })
    })
})