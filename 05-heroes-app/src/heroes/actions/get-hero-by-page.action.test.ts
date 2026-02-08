import { beforeEach, describe, expect, test } from "vitest";
import axiosMockAdapter from "axios-mock-adapter";
import { getHeroesByPageAction } from "./get-heroes-by-page.action";
import { heroApi } from "../api/hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

describe("getHeroByPageAction", () => {
  const heroesApiMock = new axiosMockAdapter(heroApi);
  beforeEach(()=>{
    heroesApiMock.reset()
  })

  test("should return default heroes", async () => {
    heroesApiMock.onGet("/").reply(200, {
      total: 10,
      pagas: 2,
      heroes: [
        {
          image: "1.jpg",
        },
      ],
    });
    const response = await getHeroesByPageAction(1);
    expect(response).toStrictEqual({
      total: 10,
      pagas: 2,
      heroes: [{ image: `${BASE_URL}/images/1.jpg` }],
    });
  });

  test('should return the correct heroes when page is not a number', async()=>{

    const responseObj = {
        total:10,
        pages:2,
        heroes:[]
    }

    heroesApiMock.onGet('/').reply(200, responseObj)
    heroesApiMock.resetHistory()

   await getHeroesByPageAction('abc' as unknown as number);

   const params= heroesApiMock.history.get[0].params;
   expect(params).toStrictEqual({limit:6,offset:0, category:'all'})
  })

  test('should call the api whith correct params', async()=>{

    const responseObj = {
        total:10,
        pages:2,
        heroes:[]
    }

    heroesApiMock.onGet('/').reply(200, responseObj)
    heroesApiMock.resetHistory()

   await getHeroesByPageAction(2,10,'heroes');

   const params= heroesApiMock.history.get[0].params;
   expect(params).toStrictEqual({limit:10,offset:10, category:'heroes'})
  })
});
