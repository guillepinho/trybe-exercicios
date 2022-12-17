class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void { console.log('Honk! Honk!') };
  turnOn(): void { console.log('Carro ligado') };
  turnOff(): void {console.log('Carro desligado') };
  speedUp(): void { console.log('Acelerando...') };
  speedDown(): void { console.log('Freando...') };
  stop(): void { console.log('Carro parado') };
  turn(side: 'direita' | 'esquerda'): void { console.log(`Virando à ${side}`) };
}

const driverCar = new Car('Volkswagen Gol', 'Prata', 4);

console.log(driverCar);

driverCar.turnOn();
driverCar.speedUp();
driverCar.turn('esquerda');
driverCar.speedDown();
driverCar.stop();
driverCar.speedUp();
driverCar.turn('direita');
driverCar.speedUp();
driverCar.speedDown();
driverCar.turn('direita');
driverCar.speedDown();
driverCar.stop();
driverCar.honk();

