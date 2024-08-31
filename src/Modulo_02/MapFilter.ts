// Array de números mapeado para seus quadrados,
//  mas apenas os números pares são incluídos no resultado.

const numbers: number[] = [1, 2, 3, 4, 5];

const evenSquares: number[] = numbers
  .map((num: number) => num * num)
  .filter((square: number) => square % 2 === 0);

console.log(evenSquares);