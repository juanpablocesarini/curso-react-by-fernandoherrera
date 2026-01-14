interface Person {
  firstName: string;
  lastName: string;
  age: number;
    adress: Address;
}

interface Address {
  street: string;
  number: number;
}
const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  adress: {
    street: "Malibu",
    number: 1,
  },
};


const spiderman: Person = {
  firstName: "Peter",
  lastName: "Parker",
  age: 21,
  adress: {
    street: "New York",
    number: 20,
  },
};
/* const spiderman = { ...ironman }; //! no es una copia profunda

const spiderman2 = structuredClone(ironman); //! si

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 21;

//! con structuredClone si se modifica solo spiderman2

spiderman2.firstName = "Peter";
spiderman2.lastName = "Parker";
spiderman2.age = 21;
spiderman2.adress.street = "New York";
spiderman2.adress.number = 20;
 */
console.log(ironman, spiderman);
