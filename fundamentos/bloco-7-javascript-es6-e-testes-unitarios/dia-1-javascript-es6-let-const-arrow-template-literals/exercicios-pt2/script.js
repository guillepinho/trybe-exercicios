// Exercicio 1
const factorial = (number) => number === 0 ? 1 : number * factorial(number - 1);

console.log(factorial(4));

// Exercicio 2
const longestWord = (phrase) => {
    phrase = phrase.split(' ');
    phrase.sort((a, b) => b.length - a.length);
    return phrase[0];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Exercicio 4
const skillList = ['JavaScript', 'HTML', 'CSS', 'Bulma', 'Git']

const apresentacao = (string, param) => {
    string = string.split('');
    string.forEach((element, index) => {
        if (element === 'x') {
            string[index] = param;
        }
    })
    string = string.join('');
    return string;
}

console.log(apresentacao('Tryber x aqui!', 'Bebeto'));

const skills = (funct, skill) => {
    return `${funct}
Minhas cinco principais habilidades são:
${skill[0]};
${skill[1]};
${skill[2]};
${skill[3]};
${skill[4]};
#goTrybe`
}

console.log(skills(apresentacao('Tryber x aqui!', 'Bebeto'), skillList));