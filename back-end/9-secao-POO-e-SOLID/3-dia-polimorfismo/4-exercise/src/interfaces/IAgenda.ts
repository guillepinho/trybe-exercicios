export default interface IAgenda<T> {
  protocolo: String;
  data: Date;
  regras: T;
}