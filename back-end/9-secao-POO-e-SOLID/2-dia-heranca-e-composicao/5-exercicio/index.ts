import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

// Person

const maria = new Person('Maria', new Date(2000, 0, 15));
console.log(maria.getBirthDate);

// maria.setBirthDate = new Date(3002, 0, 15); // Joga erro, birthdate in the future

const joao = new Person('Joao', new Date(1992, 5, 2));
console.log(joao.getName);
console.log(joao.getBirthDate);

// Student

// Para testar!

const studentOne = new Student('Maria da Silva', new Date(1992, 0, 10));
const studentTwo = new Student('João da Silva', new Date(1991, 11, 12));
console.log(studentOne);
console.log(studentTwo);

// Para testar!

studentOne.setExamsGrades = [25, 20, 23, 23];
studentOne.setAssignmentsGrades = [45, 45];

// personTwo.setExamsGrades = [1, 2, 3, 4, 5, 6] // Só pode possuir 4 notas

console.log('Soma de todas as notas: ', studentOne.sumGrades());
console.log('Média de todas as notas: ', studentOne.sumAverageGrade());

studentOne.setEnrollment = 'f04f1547e6550421';
console.log(studentOne.getEnrollment);

// studentOne.setEnrollment = 'f04'; // erro. enrollment must have 16 characters

// Subject

const math = new Subject('Math');
const history = new Subject('History');
const geography = new Subject('');

console.log(math.name);
console.log(history.name);

// geography.name = 'Ge'; // error - invalid length
geography.name = 'Geography';
console.log(geography.name);

// Teacher

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, geography);

console.log(marta);
console.log(lucio);

// const invalidTeacherSalary = new Teacher('Fulana', new Date('1980/03/30'), -2000, math);
// console.log(invalidTeacherSalary);

// marta.admissionDate = new Date('2034')


