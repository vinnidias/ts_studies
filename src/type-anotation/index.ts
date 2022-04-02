/* eslint-disable */

//tipos básicos (aqui ocorre inferência de tipos):

let myName: string = 'Vini';
let age: number = 29;
let bool: boolean = true;
let symbol: symbol = Symbol('any-symbol');
// let big: bigint = 10n //bigint

// Arrays

let numberArray: Array<number> = [1, 3, 4, 2];
let stringArray: Array<string> = ['oi', 'mundo'];
let anotherNumberArray: number[] = [1, 8, 0];
let anotherStringArray: string[] = ['s', 't', 'r', 'i', 'n', 'g'];


// objects

let object: { name: string, age: number, boolean?: boolean } = {
  name: 'vini', age: 23
}; // ? torna o dado não obrigatório


//Functions

function sum(x: number, y: number): number {
  return x + y
};

sum(2, 9);

const arrowSum: (x: number, y: number) => number = (x, y) => x + y;


arrowSum(4, 0)
