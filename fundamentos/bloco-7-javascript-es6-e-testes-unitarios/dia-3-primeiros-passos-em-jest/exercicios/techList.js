function techList(array, name) {
    if (array.length === 0) {
        return 'Vazio!';
    }
    array = array.sort();
    let objectList = [];
    for (let index = 0; index < array.length; index += 1) {
        objectList[index] = {
            tech: array[index],
            name,
        };
    }
    return objectList;
}

module.exports = techList;