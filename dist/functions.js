"use strict";
// Função contendo dois parêmtros tipados(number)
const sum = (x, y) => {
    return x + y;
};
console.log(sum(5, 7));
// void  =  É uma função que não retorna nada. Não tem return
const log = (message) => {
    console.log(message);
};
const sum2 = (x, y) => {
    return x + y;
};
const valueSum2 = sum2(3, 9);
console.log(valueSum2);
const sub = (x, y) => {
    return x - y;
};
// const valueSub = sub(8,2)
console.log(sub(6, 3));
