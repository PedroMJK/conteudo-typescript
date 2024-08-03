// Generics   =  Funcionam com diferentes tipos de dados, mantendo a segurança de tipos
const returnValue = <T>(value: T): T => value;

// Permite que a variável returnValue trabalhe com qualquer tipo, e o tipo específico é determinado quando a função é chamada.
const message = returnValue<string>("Hello world");
const count = returnValue<number>(7);
const isHuman = returnValue<boolean>(true);

// Generics em Funções
function getFirstValueFromArray<type>(array: type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// Generics co0m Classes
class GenericNumber<T> {
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber(0, (x: number, y: number) => {
    return x + y
});



// Generics com Promises
const returnPromise = async (): Promise<string> => {
    return "Monteiro"
}
console.log(myGenericNumber)

// ----------------- CONTEÚDO ADICIONAL ----------------- \\

const dragonBall = (characterName: string) => characterName;

const sayajin = dragonBall("Goku");

console.log(sayajin);


// DICA:
// Indicado Quando se tem várias funções ou classes que fazem essencialmente a mesma coisa, mas com tipos diferentes.