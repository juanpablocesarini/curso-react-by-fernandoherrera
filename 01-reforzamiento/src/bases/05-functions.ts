
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

const user: User = {
  id: 1,
  username: "john_doe",
};

const mostrarUsuario = (user: User): string => {
  return `User ID: ${user.id}, Username: ${user.username}`;
}

const greeting = greet("World");
console.log(greeting, greetArrow("Buddy"));

console.log(mostrarUsuario(user));