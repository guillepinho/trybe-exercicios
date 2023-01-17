import Quadra from './Quadra';
import normas from './normas/normasDeUso';
import IFutebol from './interfaces/IFutebol';
import IAgenda from './interfaces/IAgenda';

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;
  public reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      // protocolo é o 'id' da reserva, gere de forma aleatória
      protocolo,
      data: data,
      regras: this.futebolData as unknown as IFutebol,
    }
  }
}