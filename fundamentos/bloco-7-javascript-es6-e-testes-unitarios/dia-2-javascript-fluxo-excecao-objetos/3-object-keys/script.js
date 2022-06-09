const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

console.log(Object.keys(coolestTvShow));

//

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const showGrades = (param) => {
    const properties = Object.keys(param);
    for (const data of properties) {
        console.log(`${data}, Nível: ${param[data]}`);
    }
}

console.log('Estudante 1');
showGrades(student1);
console.log(' ');
console.log('Estudante 2');
showGrades(student1);