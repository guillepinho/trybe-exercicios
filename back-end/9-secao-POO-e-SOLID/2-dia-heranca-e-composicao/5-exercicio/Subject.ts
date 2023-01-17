export default class Subject {
  constructor (private _name: string) { }

  get name() { return this._name };
  set name(n: string) {
    if (n.length < 3) throw new Error('Invalid length');
    else this._name = n;
  };
}