const characterNames = ['Goku', 'Vegeta', 'Trunks'];

//const [p1,p2]= characterNames;

const [,,p3] = characterNames;

//console.log({p1,p2});
console.log({p3});

const returnArrayFn = () => {
    return ['ABC', 123] as const; //! con el alias const le decimos a typesctipt que SIEMPRE en la primer posicion viene un string y en la segunda un NUMBRE
}

const [letras, numeros] = returnArrayFn();

console.log(letras);
console.log(numeros + 100);


const useState = (str:string) => {
   
    return [str, (newStr : string)=>{
        console.log(newStr);
    }] as const;
}

const [str,strFn]= useState('prueba');
console.log(str);
strFn('prueba2');