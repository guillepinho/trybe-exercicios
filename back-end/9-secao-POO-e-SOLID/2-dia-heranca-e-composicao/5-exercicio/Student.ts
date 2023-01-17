import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string = '';
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, bD: Date) {
    super(name, bD);
  }

  get getEnrollment(): string {
    return this._enrollment;
  }
  get getExamsGrades(): number[] {
    return this._examsGrades;
  }
  get getAssignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set setEnrollment(value: string) {
    if (value.length < 16) throw new Error('Enrollment has to have at least 16 characters')
    this._enrollment = value;
  }
  set setExamsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }
  set setAssignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._assignmentsGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;
        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this._examsGrades.length + this._assignmentsGrades.length;
    return Math.round(sumGrades / divider);
  }
}
