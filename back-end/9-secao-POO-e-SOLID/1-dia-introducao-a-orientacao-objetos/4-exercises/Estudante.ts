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
  private _desconto?: number;

  constructor(client: Cliente, itensPedidos: ItemPedido[], formaPagamento: string, desconto?: number) {
    this._cliente = client;
    this._itensPedidos = itensPedidos;
    this._formaPagamento = formaPagamento;
    this._desconto = desconto;
  }

  calcularTotalPedido(): number {
    soPrecos = this.itensPedidos ;
    return this._notasProva.reduce((cur, acc) => cur + acc, 0) + this._notasTrabalho.reduce((cur, acc) => cur + acc, 0);
  }
}

class ItemPedido {
  private _nomeItem: string;
  private _preco: number;

  constructor(nomeItem: string, preco: number) {
    this._nomeItem = nomeItem;
    this._preco = preco;
  }
}