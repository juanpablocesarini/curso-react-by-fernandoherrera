
interface User {
  id: number;
  username: string;
}
// Funcion que recibe un nombre y devuelve un saludo tradicional
function greet(name: string): string {
  return `Hello, ${name}!`;
}


// Funcion flecha que recibe un nombre y devuelve un saludo informal

const greetArrow = (name: string): string => {
    return `Hey, ${name}!`;
}

// Función flecha simplificada que recibe un nombre y devuelve un saludo informal
// sin llaves ni return

const greetArrowSimple = (name: string): string => `Hey, ${name}!`; //

const user: User = {
  id: 1,
  username: "john_doe",
};

const mostrarUsuario = (user: User): string => {
  return `User ID: ${user.id}, Username: ${user.username}`;
}

const mostrarUsuarioSimplificado = (user: User): string => `User ID: ${user.id}, Username: ${user.username}`;
// Función flecha simplificada que recibe un objeto User y devuelve una cadena con su información
const greeting = greet("World");
console.log(greeting, greetArrow("Buddy"), greetArrowSimple("Pal"));

console.log(mostrarUsuario(user), mostrarUsuarioSimplificado(user));

const MyNumbers: number[] = [1, 2, 3, 4, 5];

/* MyNumbers.forEach(function (value) {
  console.log({value}); 
}); */

//! funcion callback con funcion flecha 
MyNumbers.forEach( (value) => console.log({value}) );