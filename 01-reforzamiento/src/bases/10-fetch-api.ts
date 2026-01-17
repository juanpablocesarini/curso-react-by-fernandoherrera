

const  API_KEY = 'Kf1dg0GwYfzmY9MstNNeVmQrvv2TEZb5';

const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);

myRequest
.then((response)=> response.json())
.then((data)=> {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement);
})
.catch((err)=>{
    console.error(err);
})