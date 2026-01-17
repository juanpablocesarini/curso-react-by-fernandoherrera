

const myPromise = new Promise<number>((resolve, reject)=>{

    setTimeout(()=>{
        //resolve(100)
        reject('Mi amigo se perdió');
    },2000);//2 segundos
});

myPromise
.then( (myMoney)=>{
    console.log(`Mi dinero regresó:${myMoney}`);
})
.catch((reason)=>{
    console.warn(reason)
})
.finally(()=>{
    console.log("no importa")
});
