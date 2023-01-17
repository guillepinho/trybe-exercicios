import Quadra from './Quadra';
import normas from './normas/normasDeUso';
import ITenis from './interfaces/ITenis';
import IAgenda from './interfaces/IAgenda';

export default class QuadraTenis extends Quadra {
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(data: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: data,
      regras: this.tenisData as unknown as ITenis,
    }
  }
}