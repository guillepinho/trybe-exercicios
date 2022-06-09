const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const personToDeliver = order.order.delivery.deliveryPerson;
  const address = order.address;
  return `Olá ${personToDeliver}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${address.street}, nº ${address.number}, AP: ${address.apartment}.`;
}

console.log(customerInfo(order));

function priceGetter(type) {
  const getter = Object.values(order.order[type]);
  let value = 0;
  for (let price of getter) {
    value += price.price;
  }
  return value;
}

function currency(number) {
  return new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(number);
};

order.name = 'Luiz Silva';
order.order.drinks.coke.price = 0;

const orderModifier = (order) => {
  const pizzas = Object.keys(order.order.pizza).join(', ');
  const drinks = Object.values(order.order.drinks.coke);
  const pizzasValue = priceGetter('pizza');
  const drinksValue = priceGetter('drinks');
  const deliveryValue = order.order.delivery.price;
  const totalPrice = pizzasValue + drinksValue + deliveryValue;
  const totalPriceInMoney = currency(totalPrice);
  
  return `Olá ${order.name}, o total do seu pedido de ${pizzas} e ${drinks[0]} é ${totalPriceInMoney}!`
}

console.log(orderModifier(order));