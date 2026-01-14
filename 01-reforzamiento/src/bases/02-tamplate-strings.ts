const firstName = "Juan Pablo";
const lastName = "Cesarini";

// concatenación tradicional
const FULLNAME_TRADITIONAL = firstName + " " + lastName;
console.log({ FULLNAME_TRADITIONAL });

// template strings
const FULLNAME = `${firstName} ${lastName}`;
console.log({ FULLNAME });

// caracteres especiales -> uso de backtick `
const MULTILINEA = `Hola
${firstName}
¿Cómo estás?`; 
console.log( MULTILINEA );

// expresiones
const EXPRESION = `2 + 2 = ${2 + 2}`;
console.log({ EXPRESION });