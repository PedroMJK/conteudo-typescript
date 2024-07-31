let welcome: string = "Hello World";

// Tipos básicos

const firstName: string = "Pedro";
let age: number =30;
const isValid: boolean = true;
let idk: any = 7     // Any pode receber qualquer coisa.

idk = "25";
idk = true;

// Lista de números
const arrayList: number[] = [1, 2, 3, 4, 5]
const namesList: string[] = ["Cosme", "Junior", "Alice"]
const booleanList: boolean[] = [true, false, true]

// Tupla  = Deve seguir a ordem do que foi passado
const person: [string, number] = ["Maria", 27]; 

// Lista de Tuplas
const people:  [string, number][] = [
    ["Arthur", 10],
    ["Gabriel", 3],
]

// Intersections   =  Para que a variável possua um tipo ou outro.
const productId: string | number | boolean = 9;

//Enum   =  Para atribuir um valor a um outro valor.
enum Direction {
    Up = "Para cima",
    Down = "Para baixo",
    Left = "Esquerda",
    Right = "Direita"
}

//Type Assertions   =   Para mudar o tipo de uma variável
const productName: any = "Violão";

// primeira forma 
let itemIdUm = productName as string;
// segunda forma
let itemIdDois = <String>productName


console.log(welcome);
console.log(age);
console.log(people);