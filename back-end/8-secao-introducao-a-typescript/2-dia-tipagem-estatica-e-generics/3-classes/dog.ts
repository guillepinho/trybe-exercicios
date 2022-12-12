class Dog {
  name: string;
  owner: string;
  race: string;
  age: number;
  birthDate?: Date;
  color: string;

  constructor(name: string, owner: string, race: string, age: number, color: string, birthDate?: Date) {
    this.name = name;
    this.owner = owner;
    this.race = race;
    this.age = age;
    this.birthDate = birthDate;
    this.color = color;
  }

  eat(): void {
    console.log(`${this.name} is such a good boy and is eating`);
  }

  sleep(): void {
    console.log(`${this.name} is sleeping`);
  }
}