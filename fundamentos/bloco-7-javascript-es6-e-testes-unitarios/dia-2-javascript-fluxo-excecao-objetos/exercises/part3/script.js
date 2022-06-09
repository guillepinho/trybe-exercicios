const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addShift(object, key, value) {
    object[key] = value;
}

addShift(lesson2, 'turno', 'noite');

function listKeys(object) {
    console.log(Object.keys(object));
}

listKeys(lesson2);

function objectSize(object) {
    console.log(Object.keys(object).length);
}

objectSize(lesson2);

function listValues(object) {
    console.log(Object.values(object));
}

listValues(lesson2);

const allLessons = [Object.assign({}, lesson1), Object.assign({}, lesson2), Object.assign({}, lesson3)];

const studentQtd = (object) => {
    let qtd = 0;
    for (const lesson of object) {
        qtd += lesson.numeroEstudantes;
    }
    return qtd;
}

console.log(studentQtd(allLessons));

function getValueByNumber(object, index) {
    const result = Object.values(object);
    return result[index];
}

console.log(getValueByNumber(lesson1, 0));

function verifyPair(object, key, value) {
    if (object[key] === value) {
        return true;
    } else {
        return false;
    }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

function countMathStudents(object) {
    let qtd = 0;
    for (const lesson of object) {
        if (lesson.materia === 'Matemática') {
            qtd += lesson.numeroEstudantes;
        }
    }
    console.log(qtd);
}

countMathStudents(allLessons);

function createReport(object, professor) {
    const newObj = {
        professor: professor,
        aulas: [],
        estudantes: 0,
    };
    for (const lesson of object) {
        if (lesson.professor === professor) {
            newObj.aulas.push(lesson.materia);
            newObj.estudantes += lesson.numeroEstudantes;
        }
    }
    console.log(newObj);
}

createReport(allLessons, 'Maria Clara');
