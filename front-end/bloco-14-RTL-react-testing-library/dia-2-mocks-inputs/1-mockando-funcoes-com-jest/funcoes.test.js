function retornaNAleat() {
  return Math.floor(Math.random() * 100);
}

function divisivelPorDois() {
  return (retornaNAleat() % 2) === 0;
}

function somaDoisNumeros() {
  return retornaNAleat() + retornaNAleat();
}

describe('Aprendendo mocks', () => {
  it('Testa se a função foi chamada', () => {
    
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    expect(somaDoisNumeros).toBeCalled();
  })

  it('Testa o resultado da função', () => {
    somaDoisNumeros = jest.fn().mockReturnValue(8);

    expect(somaDoisNumeros()).toBe(8);
  })

  it('Testa quantas vezes a função foi chamada', () => {
    
    somaDoisNumeros = jest.fn();
    somaDoisNumeros();
    somaDoisNumeros();
    somaDoisNumeros();

    expect(somaDoisNumeros).toHaveBeenCalledTimes(3);
  })

  it('Testa que retorna true quando o número é par e false quando é ímpar', () => {
    
    retornaNAleat = jest.fn().mockReturnValueOnce(2);
    expect(divisivelPorDois()).toBe(true);

    retornaNAleat = jest.fn().mockReturnValueOnce(3);
    expect(divisivelPorDois()).toBe(false);
  })

  it('Testa que retorna false quando o número é ímpar', () => {
    
    retornaNAleat = jest.fn().mockReturnValueOnce(3);

    expect(divisivelPorDois()).toBe(false);
  })
})
