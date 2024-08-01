// Função contendo dois parêmtros tipados(number)
const sum = (x: number, y: number): number => {
    return x + y;
}

console.log(sum(5, 7));

// void  =  É uma função que não retorna nada. Não tem return
 const log = (message: string): void => {
    console.log(message);
 }