import Employee from "./Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    subject: Subject) {
    super(name, birthDate);

    if (_salary < 1) throw new Error('Salary cannot be 0 or less');
    
    this._subject = subject;
    this._salary = _salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }

  get registration(): string { return this._registration };
  get admissionDate(): Date { return this._admissionDate };
  get salary(): number { return this._salary };
  get subject(): Subject { return this._subject };
  
  set registration(value: string) { 
    if (value.length < 16) throw new Error('Invalid registration number');
    else this._registration = value
  };
  set admissionDate(value: Date) {
    if (value > new Date()) throw new Error('Date cannot be in the future');
    else this._admissionDate = value
  };
  set salary(value: number) {
    console.log(value);
    
    if (value < 1) throw new Error('Salary cannot be 0 or less');
    else this._salary = value
  };
  set subject(value: Subject) { this._subject = value };

}