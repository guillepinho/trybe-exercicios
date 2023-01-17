export default class Person {
  private name: string;
  private birthDate: Date;

  constructor (n: string, bD: Date) {
    this.name = n;
    this.birthDate = bD;
  };

  get getName(): string { return this.name };
  get getBirthDate(): Date { return this.birthDate };

  set setName(n: string) { 
    if (n.length > 2) {
      this.name = n;
    } else {
      throw new Error('Name has to be at least 3 characters long.');
    }
  };
  set setBirthDate(bD: Date) {
    const limit = new Date(1903, 0, 15);
    if (bD.getTime() > new Date().getTime()) throw new Error('Cannot set a birthdate in the future.');
    else if (bD.getTime() < limit.getTime()) throw new Error('Birthdate cannot be higher than 120 years');
    else this.birthDate = bD;
  };
}