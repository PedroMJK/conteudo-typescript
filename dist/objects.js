"use strict";
// Para criar um objetos de User
// Const user tipada com o objeto User
const user = {
    // Todos os parêmetros devem ser preenchidos, do contrário , apresentará um erro.
    firstName: "Guilherme",
    age: 1,
    email: "guilherme@email.com",
    password: "",
};
// Quando a "?" foi passada em password, o valor retornado passou a ser ou uma String ou undefined.
const printLog = (message) => { };
printLog(user.password); // "!" Pede para o typescript tirar a opção undefined(quee é adicionada quando usado ?)
// Author possui todas as propriedades de Author e User
const author = {
    firstName: "John",
    age: 30,
    email: "john@email.com",
    books: ["The blue Sky"]
};
