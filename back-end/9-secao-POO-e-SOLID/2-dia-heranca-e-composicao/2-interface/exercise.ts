interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;
    return sum.toString();
  }
}

const obj = new MyClass(10);

console.log(obj.myNumber);
console.log(obj.myFunc(1));

