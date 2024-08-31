
// Arrow Function Simples
const add = (a: number, b: number): number => {
    return a + b;
  };
  
  const result = add(5, 7);


//   Arrow Function com Tipo de Retorno Implícito
const multiply = (a: number, b: number) => a * b;

const result02 = multiply(4, 7);


// Arrow Function com Parâmetro Opcional
const greet = (name: string, greeting?: string): string => {
    return `${greeting || 'Hello'}, ${name}!`;
  };
  
  const message1 = greet("Alice"); 
  const message2 = greet("Bob", "Good morning");


// Arrow Function com Tipo de Objeto como Parâmetro
interface User02 {
    name: string;
    age: number;
  }
  
  const describeUser = (user: User): string => {
    return `${user.firstName} is ${user.age} years old.`;
  };
  
  const user02 = { name: "Pedro", age: 30 };
  const description = describeUser(user)

