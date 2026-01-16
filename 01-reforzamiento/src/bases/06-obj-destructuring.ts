
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const name = person.name;
// const age = person.age;
// const clave = person.clave;  

// Destructuring de objeto
const { name:ironmanName, age, key } = person;
// const { name: nombrePersona, age: edadPersona, clave: clavePersona } = person;

// console.log( name );
// console.log( age );
// console.log( clave );
console.log({ ironmanName, age, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}


const useContext = ({key,name, age, rank ='sin rango'}: Hero) => {
    return {
        keyName: key,
        user:{
            name,
            age,
        },
        rank:rank,
    };
};

const { keyName, user:{name}, rank } = useContext( person ); //! NO SE RECOMIENDA LA DESESTRUCTURACION ANIDADA DE OBJETOS
console.log('CONTEXT: ', { keyName, name, rank });