function hydrate(string) {
    let checkArray = string.replace(/[^1-9]/g, '').split('');
    for (let index = 0; index < checkArray.length; index += 1) {
        checkArray[index] = parseInt(checkArray[index], 10);
    }
    let sum = 0;
    checkArray.forEach((number) => { sum += number; });
    if (sum === 1) {
        return `${sum} copo de água`;
    }
    return `${sum} copos de água`;
}

module.exports = hydrate;