
const myArray: number[] = [1, 2, 3, 4, 5];

const myArray2 = [...myArray];

myArray2.push(6);

console.log({ myArray, myArray2 });