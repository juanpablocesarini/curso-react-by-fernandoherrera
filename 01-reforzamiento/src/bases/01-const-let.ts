const firstName: string = "Juan Pablo";
let lastName: string = "Cesarini";

//! const : no se puede reasignar
//! let : se puede reasignar

console.log(firstName, lastName);

const FULLNAME = `${firstName} ${lastName}`;
const conteinPablo = FULLNAME.includes("Pablo");

let numberAge: number = 30;

console.log({ FULLNAME, conteinPablo, numberAge });
lastName = "Gonzalez";