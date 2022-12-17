type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

const Calabresa: Pizza = { flavor: 'calabresa', slices: 8 };

const Marguerita: Pizza = { flavor: 'marguerita', slices: 6 };

const Nutela: Pizza = { flavor: 'nutela', slices: 4 };

console.log(Calabresa);
console.log(Marguerita);
console.log(Nutela);

type CommonFlavours = 'Calabresa' | 'Frango' | 'Pepperoni';
type VegetarianFlavours = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetFlavours = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface CommonPizza extends Pizza {
  flavor: CommonFlavours;
}

interface VegetarianPizza extends Pizza {
  flavor: VegetarianFlavours;
}

interface SweetPizza extends Pizza {
  flavor: SweetFlavours;
}

const pizza1: CommonPizza = {
  flavor: 'Calabresa',
  slices: 4,
}

const pizza2: CommonPizza = {
  flavor: 'Frango',
  slices: 8,
}

const pizza3: CommonPizza = {
  flavor: 'Pepperoni',
  slices: 6,
}

console.log(pizza1, pizza2, pizza3);

const pizza4: VegetarianPizza = {
  flavor: 'Marguerita',
  slices: 6,
}

const pizza5: VegetarianPizza = {
  flavor: 'Cogumelo',
  slices: 4,
}

console.log(pizza4, pizza5);

const pizza6: SweetPizza = {
  flavor: 'Goiabada com Queijo',
  slices: 8,
}

console.log(pizza6);

