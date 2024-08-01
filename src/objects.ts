// Type   =   É um  objeto que deficine quias propriedades ele tem e quias são seus tipos.
type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string; // "?" Indica que não será obrigatório
};

// Para criar um objetos de User
// Const user tipada com o objeto User
const user: User = {
  // Todos os parêmetros devem ser preenchidos, do contrário , apresentará um erro.
  firstName: "Guilherme",
  age: 1,
  email: "guilherme@email.com",
  password: "",
};

// Quando a "?" foi passada em password, o valor retornado passou a ser ou uma String ou undefined.
const printLog = (message: string) => {};

printLog(user.password!); // "!" Pede para o typescript tirar a opção undefined(quee é adicionada quando usado ?)


// Unions   =  Permite unir types

type Author = {
    books: string[]
}
    // Author possui todas as propriedades de Author e User
const author: Author & User = {
    firstName: "John",
    age: 30,
    email: "john@email.com",
    books: ["The blue Sky"]
}