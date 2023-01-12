interface Logger {
  log(p: string): void;
}

class ConsoleLogger implements Logger {
  log(p: string) {
    console.log(p);
  }
}

class ConsoleLogger2 implements Logger {
  log(p: string) {
    console.log(`2 logger: ${p}`);
  }
}

interface Database {
  logger: Logger;

  save(key: string, value: string): void;
}

const firstLogger = new ConsoleLogger();
const secondLogger = new ConsoleLogger2();

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {  }

  save(string1: string, string2: string) {
    this.logger.log(string1);
    this.logger.log(string2);
  }
}

const obj1 = new ExampleDatabase(firstLogger);
const obj2 = new ExampleDatabase(secondLogger);
const obj3 = new ExampleDatabase();

obj1.save('Assunto', 'Demais');
obj2.save('Aleatório', 'Assim');
obj3.save('Qualquer', 'Coisa');