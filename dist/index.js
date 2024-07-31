"use strict";
let welcome = "Hello World";
// Tipos básicos
const firstName = "Pedro";
let age = 30;
const isValid = true;
let idk = 7; // Any pode receber qualquer coisa.
idk = "25";
idk = true;
// Lista de números
const arrayList = [1, 2, 3, 4, 5];
const namesList = ["Cosme", "Junior", "Alice"];
const booleanList = [true, false, true];
// Tupla  = Deve seguir a ordem do que foi passado
const person = ["Maria", 27];
// Lista de Tuplas
const people = [
    ["Arthur", 10],
    ["Gabriel", 3],
];
// Intersections   =  Para que a variável possua um tipo ou outro.
const productId = 9;
//Enum   =  Para atribuir um valor a um outro valor.
var Direction;
(function (Direction) {
    Direction["Up"] = "Para cima";
    Direction["Down"] = "Para baixo";
    Direction["Left"] = "Esquerda";
    Direction["Right"] = "Direita";
})(Direction || (Direction = {}));
//Type Assertions   =   Para mudar o tipo de uma variável
const productName = "Violão";
// primeira forma 
let itemIdUm = productName;
// segunda forma
let itemIdDois = productName;
console.log(welcome);
console.log(age);
console.log(people);
