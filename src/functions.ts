// Função contendo dois parêmtros tipados(number)
const sum = (x: number, y: number): number => {
  return x + y;
};

console.log(sum(5, 7));

// void  =  É uma função que não retorna nada. Não tem return
const log = (message: string): void => {
  console.log(message);
};

// Funções com Interface

interface MathFunction {
  (num1: number, num2: number): number;
}

const sum2: MathFunction = (x: number, y: number): number => {
  return x + y;
};

const valueSum2 = sum2(3, 9);

console.log(valueSum2);

const sub: MathFunction = (x: number, y: number): number => {
  return x - y;
};

// const valueSub = sub(8,2)
console.log(sub(6, 3));
