class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _itensPedidos: ItemPedido[];
  private _formaPagamento: string;
  private _desconto: number = 0;

  constructor(client: Cliente, itensPedidos: ItemPedido[], formaPagamento: string, desconto: number) {
    this._cliente = client;
    this._itensPedidos = itensPedidos;
    this._formaPagamento = formaPagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  get itensPedidos(): ItemPedido[] {
    return this._itensPedidos;
  }

  get formaPagamento(): string {
    return this._formaPagamento;
  }

  get desconto(): number {
    return this._desconto;
  }

  set cliente(value: Cliente) {
    this._cliente = value;
  }
  
  set itensPedidos(value: ItemPedido[]) {
    this._itensPedidos = value;
  }

  set formaPagamento(value: string) {
    this._formaPagamento = value;
  }
  
  set desconto(value: number) {
    this._desconto = value;
  }

  calcularTotalPedido(): number {
    return this.itensPedidos.reduce((cur, acc) => cur + acc.preco, 0);
  }

  calcularTotalPedidoComDesconto(): number {
    const total = this.itensPedidos.reduce((cur, acc) => cur + acc.preco, 0)
    return total - (total * this._desconto);
  }
}

class ItemPedido {
  private _nomeItem: string;
  private _preco: number;

  constructor(nomeItem: string, preco: number) {
    this._nomeItem = nomeItem;
    this._preco = preco;
  }

  get nomeItem(): string {
    return this._nomeItem;
  }

  get preco(): number {
    return this._preco;
  }
}

const client = new Cliente('João');
const sandwich = new ItemPedido('Sanduíche Natural', 5.00);
const juice = new ItemPedido('Suco de Abacaxi', 5.00);
const dessert = new ItemPedido('Gelatina de Uva', 2.50);
const order = new Pedido(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);

console.log(order.calcularTotalPedido());
console.log(order.calcularTotalPedidoComDesconto());