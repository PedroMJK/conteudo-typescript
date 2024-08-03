"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Generics   =  Funcionam com diferentes tipos de dados, mantendo a segurança de tipos
const returnValue = (value) => value;
// Permite que a variável returnValue trabalhe com qualquer tipo, e o tipo específico é determinado quando a função é chamada.
const message = returnValue("Hello world");
const count = returnValue(7);
const isHuman = returnValue(true);
// Generics em Funções
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray([10, 20]);
// Generics co0m Classes
class GenericNumber {
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
// Generics com Promises
const returnPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Monteiro";
});
console.log(myGenericNumber);
// ----------------- CONTEÚDO ADICIONAL ----------------- \\
const dragonBall = (characterName) => characterName;
const sayajin = dragonBall("Goku");
console.log(sayajin);
// DICA:
// Indicado Quando se tem várias funções ou classes que fazem essencialmente a mesma coisa, mas com tipos diferentes.
