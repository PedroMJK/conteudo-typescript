class Person {
    id: number;
    name: string;
    age: number;

    constructor(id: number, nome: string, idade: number) {
        this.id = id;
        this.name = nome;
        this.age = idade;
    }

    // Método
    myName(): string {
        return this.name
    }
}

const pessoa = new Person(1, "Pedro", 30)

console.log(pessoa)

// Classes com Interface
interface IPerson02 {
    id: number;
    firstName: string;
    age: number;
    myName02(): string;
}
 
class Person02 implements IPerson02 {
    readonly id: number;
    readonly firstName: string;
    readonly age: number;
    protected lastName: string;    // Permite a variável ser acessada apenas dentro da sua classe ou sub-classe.
    private email: string;        // Permite a variável ser acessada apenas dentro da sua classe.
                                 // protected e private não permitem serem implementados dentro do interface.

    constructor(id: number, nome: string, idade: number, sobrenome: string, email: string){
        this.id = id;
        this.firstName = nome;
        this.age = idade;
        this.lastName = sobrenome;
        this.email = email;

    }

    // Método
    myName02(): string {
        return this.firstName
    }
}

// Sub-classe - Demostrando sobre private e protected
class Employee extends Person02 {
    constructor(id: number, nome: string, idade: number, sobrenome: string, email: string) {
        super(id, nome, idade, sobrenome, email)
    }

    WhoAmI() {
        return this.firstName  // Protected, Por isso pode ser acessada da classe principal
     // retrun thin.lastName   // Private, não pode ser acessada da classe principal, pois isso é uma sub-classe
    }
}

const pessoa02 = new Person02(1, "Pedro", 30, "Monteiro", "peter@email.com")

console.log(pessoa02)



// ----------------- Conteúdo Adicional ----------------- \\

class CharacterAnime {
    name: string;
    animeName: string;

    constructor(characterName: string, characterAnimeName: string) {
        this.name = characterName;
        this.animeName = characterAnimeName
    }
}

const characterAnime = new CharacterAnime("Goku", "Dragon Ball")