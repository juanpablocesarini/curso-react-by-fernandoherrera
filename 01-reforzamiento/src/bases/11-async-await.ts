import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = "Kf1dg0GwYfzmY9MstNNeVmQrvv2TEZb5";

const myRequest = fetch(
  `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`,
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};
/* myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((err) => {
    console.error(err);
  }); */

const getRandomGifUrl = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`,
  );

  const {data} = (await response.json()) as GiphyRandomResponse;
  console.log(data.images.original.url)
  return data.images.original.url;
}

getRandomGifUrl().then((url)=>createImageInsideDOM(url))