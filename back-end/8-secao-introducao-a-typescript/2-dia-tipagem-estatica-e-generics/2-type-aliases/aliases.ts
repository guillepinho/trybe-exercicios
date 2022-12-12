type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100

type Bird = {
  color: string,
  fly: boolean,
  wingspan: number,
};

type Sum = (value1: number, value2: number) => number;

type Address = {
  street: string,
  number: number,
  floor: number,
  apt: number,
  cep: string,
  city: string,
  state: string,
};