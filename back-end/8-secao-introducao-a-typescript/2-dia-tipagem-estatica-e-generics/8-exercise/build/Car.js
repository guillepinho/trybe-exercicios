"use strict";
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() { console.log('Honk! Honk!'); }
    ;
    turnOn() { console.log('Carro ligado'); }
    ;
    turnOff() { console.log('Carro desligado'); }
    ;
    speedUp() { console.log('Acelerando...'); }
    ;
    speedDown() { console.log('Freando...'); }
    ;
    stop() { console.log('Carro parado'); }
    ;
    turn(side) { console.log(`Virando à ${side}`); }
    ;
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
