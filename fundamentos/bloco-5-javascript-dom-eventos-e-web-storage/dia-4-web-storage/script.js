const li = document.querySelectorAll('li');
const body = document.body;
const p = document.querySelectorAll('p');
const h3 = document.querySelectorAll('h3');

function addEvent(type, func, selected) {
    const query = document.querySelectorAll(selected);
    for (let index of query) {
        index.addEventListener(type, func);
    }
}

addEvent('click', changeBgColor, '#bg-color ul li');
addEvent('click', changeFontColor, '#font-color ul li');
addEvent('click', changeFontSize, '#font-size ul li');
addEvent('click', changeLineHeight, '#line-height ul li');
addEvent('click', fontType, '#font-type ul li');

if (typeof (Storage) === "undefined") {
    alert('Sorry, this page wont exactly work for you...');
}

if (localStorage.length !== 0) {
    const bgColor = localStorage.getItem('bgColor');
    const fontColor = localStorage.getItem('fontColor');
    const fontSize = localStorage.getItem('fontSize');
    const lineHeight = localStorage.getItem('lineHeight');
    const fontType = localStorage.getItem('fontType');
    body.classList.add(bgColor);
    for (let each of p) {
        each.classList.add(fontColor, fontSize, lineHeight, fontType);
    }
    for (let each of h3) {
        each.classList.add(fontColor, fontSize, lineHeight, fontType);
    }
}

function changeBgColor(event) {
    const target = event.target;
    body.classList.remove('whiteBG', 'yellowBG', 'darkModeBG');
    body.classList.add(target.id);
    localStorage.setItem('bgColor', target.id);
}

function changeFontColor(event) {
    const target = event.target;
    for (let each of p) {
        each.classList.remove('whiteFT', 'darkBlueFT', 'blackFT');
        each.classList.add(target.id);
    }
    for (let each of h3) {
        each.classList.remove('whiteFT', 'darkBlueFT', 'blackFT');
        each.classList.add(target.id);
    }
    localStorage.setItem('fontColor', target.id);
}

function changeFontSize(event) {
    const target = event.target;
    for (let each of p) {
        each.classList.remove('sixteen', 'eighteen', 'twenty');
        each.classList.add(target.id);
    }
    for (let each of h3) {
        each.classList.remove('sixteen', 'eighteen', 'twenty');
        each.classList.add(target.id);
    }
    localStorage.setItem('fontSize', target.id);
}

function changeLineHeight(event) {
    const target = event.target;
    for (let each of p) {
        each.classList.remove('lt16', 'lt20', 'lt24');
        each.classList.add(target.id);
    }
    for (let each of h3) {
        each.classList.remove('lt16', 'lt20', 'lt24');
        each.classList.add(target.id);
    }
    localStorage.setItem('lineHeight', target.id);
}

function fontType(event) {
    const target = event.target;
    for (let each of p) {
        each.classList.remove('roboto', 'montserrat', 'monospace');
        each.classList.add(target.id);
    }
    for (let each of h3) {
        each.classList.remove('roboto', 'montserrat', 'monospace');
        each.classList.add(target.id);
    }
    localStorage.setItem('fontType', target.id);
}