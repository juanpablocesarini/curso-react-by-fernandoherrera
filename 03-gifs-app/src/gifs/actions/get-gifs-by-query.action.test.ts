import { beforeEach, describe, expect, test, vi } from "vitest";
import axiosMockAdapter from "axios-mock-adapter";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../../tests/mocks/giphy.response.data";

describe("getGifsByQuery", () => {
  let mock = new axiosMockAdapter(giphyApi);

  beforeEach(()=>{
    mock = new axiosMockAdapter(giphyApi);
  });

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
  test("should returns a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery("pikachu");

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.height).toBe("number");
      expect(typeof gif.width).toBe("number");
    });
  });

  test("should returns an empty list of gifs if query is empty", async () => {
   // mock.onGet("/search").reply(200, giphySearchResponseMock);
   mock.restore();

    const gifs = await getGifsByQuery("");

    expect(gifs.length).toBe(0);
  });

  test('should handle error when API return an error',async()=>{

    const consoleErrorSpy = vi.spyOn(console, 'error')
        .mockImplementation(()=>{});

    mock.onGet('/search').reply(400, {
        data:{
            message: 'Bad request'
        }
    });


    const gifs = await getGifsByQuery('pikachu');

    
    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything())
  })
});
