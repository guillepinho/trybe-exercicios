expect(5).toBe("5") // fails, 5 different than "5"

//

let gemeoUm = "Cabelo comprido";
let gemeoDois = gemeoUm;

gemeoUm = "Careca";

console.log(gemeoUm); // Careca
console.log(gemeoDois); // Cabelo comprido

//

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

//

test('array and object equality', () => {
    const arr = [1, 2, 3];
    const obj = { a: 1, b: 2, c: 3 };

    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3 }); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3 }); // OK
});

//

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

//

test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    test('adicionando números de ponto flutuante', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3);     Isso não vai funcionar por causa de um erro de arredondamento
        expect(value).toBeCloseTo(0.3); // Isso funciona.
    });

    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

//

String.toMatch();

//

Array.toContain();
Array.toContainEqual();
Array.toHaveLength();

//

Object.toHaveProperty();

//

const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });

  // usar arrow function no toThrow

  //

  const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});