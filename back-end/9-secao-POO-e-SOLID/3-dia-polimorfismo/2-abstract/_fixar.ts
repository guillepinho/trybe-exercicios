// Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.

abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

// Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.

class MeleeCharacter extends Character {
  talk() {
    console.log(`I'm melee!`);
  }

  specialMove(): void {
    console.log('Take this melee special move!');
  }
}

// Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.

class LongRangeCharacter extends Character {
  talk() {
    console.log(`I'm ranged!`);
  }

  specialMove(): void {
    console.log('Take this ranged special move!');
  }
}

// Crie uma função que receba como parâmetro character: Character e chame os métodos talk e specialMove para apresentar o personagem.
function Anon(param: Character) {
  param.talk();
  param.specialMove();
}

Anon(new LongRangeCharacter());
Anon(new MeleeCharacter());
