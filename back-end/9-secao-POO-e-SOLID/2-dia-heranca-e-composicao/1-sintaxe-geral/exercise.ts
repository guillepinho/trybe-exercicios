class Superclass {
  constructor(public isSuper: boolean = true) { }

  sayHello() { console.log('Olá mundo!') }
}

class Subclass extends Superclass {
  constructor(public isSuper: boolean = false) {
    super(isSuper);
  }
}

function myFunc(obj: Superclass) {
  obj.sayHello();
  if (obj.isSuper) console.log('SUPER');
  else console.log('Sub');
}

const first = new Superclass();
const second = new Subclass();

myFunc(first);
myFunc(second);