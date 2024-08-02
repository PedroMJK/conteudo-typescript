"use strict";
class Person {
    constructor(id, nome, idade) {
        this.id = id;
        this.name = nome;
        this.age = idade;
    }
    // Método
    myName() {
        return this.name;
    }
}
const pessoa = new Person(1, "Pedro", 30);
console.log(pessoa);
class Person02 {
    // protected e private não permitem serem implementados dentro do interface.
    constructor(id, nome, idade, sobrenome, email) {
        this.id = id;
        this.firstName = nome;
        this.age = idade;
        this.lastName = sobrenome;
        this.email = email;
    }
    // Método
    myName02() {
        return this.firstName;
    }
}
const pessoa02 = new Person02(1, "Pedro", 30, "Monteiro", "peter@email.com");
console.log(pessoa02);
// ----------------- Conteúdo Adicional ----------------- \\
class CharacterAnime {
    constructor(characterName, characterAnimeName) {
        this.name = characterName;
        this.animeName = characterAnimeName;
    }
}
const characterAnime = new CharacterAnime("Goku", "Dragon Ball");
