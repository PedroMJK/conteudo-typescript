// Interfaces   =  para definir a estrutura que um objeto deve seguir,
//                 incluindo quais propriedades e métodos ele deve ter.
interface UserInterface {
  firstName: string;
  age: number;
  email: string;
}

const UserInterfaceInformation: UserInterface = {
  firstName: "Pedro",
  age: 30,
  email: "Pedro@email.com",
};

// Interface com Unions
interface UserHobbies {
  // readonly = Marca como somente leitura , o valor atribuido não pode ser modificado posteriormente
  readonly hobbies: string;
}

const newUserInterface: UserInterface & UserHobbies = {
  firstName: "Junior",
  age: 27,
  email: "Junior@emial.com",
  hobbies: "Jogar video game",
};

// Outro exemplo
interface Usuario {
  nome: string;
  idade: number;
  email: string;
  saudar(): void;
}

const usuario: Usuario = {
  nome: "john",
  idade: 30,
  email: "john@example.com",
  saudar() {
    console.log("Olá, meu nome é " + this.nome);
  },
};
