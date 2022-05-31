const sendButton = document.querySelector('#send');
const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');
const inputTrips = document.querySelectorAll('.trip');
const inputText = document.querySelector('#inputText');
const inputDate = document.querySelector('#inputDate');
const inputNews = document.querySelector('#inputNews');
const inputConditions = document.querySelector('#inputConditions');
const infos = document.querySelector('#infos');

const errorList = [];

function checker() {
    alert('Dados inválidos.');
    document.location.reload();
}

function checkName() {
    const name = inputName.value;
    if (name.length < 10 || name.length > 50) {
        errorList.push('erro');
        return;
    }
    const newP = document.createElement('p');
    newP.innerText = name;
    newP.classList.add('data');
    infos.appendChild(newP);
}

function checkEmail() {
    const email = inputEmail.value;
    if (email.length < 10 || email.length > 50 || !email.includes('@')) {
        errorList.push('erro');
        return;
    }
    const newP = document.createElement('p');
    newP.innerText = email;
    newP.classList.add('data');
    infos.appendChild(newP);
}

function checkTrip() {
    if (!document.querySelector('.selected')) {
        errorList.push('erro');
        return;
    }
    const trip = document.querySelector('.selected');
    const newP = document.createElement('p');
    newP.innerText = trip.id;
    newP.classList.add('data');
    infos.appendChild(newP);
}

function checkTextArea() {
    const text = inputText.value;
    if (text.length > 500 || text.length === 0 || text === '') {
        errorList.push('erro');
        return;
    }
    const newP = document.createElement('p');
    newP.innerText = text;
    newP.classList.add('data');
    infos.appendChild(newP);
}

function checkDate() {
    let date = inputDate.value;
    if (date === '') {
        errorList.push('erro');
        return;
    }
    date = date.split('-');
    const year = date[0];
    const month = date[1];

    let today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    if (year < yyyy || month <= mm) {
        errorList.push('erro');
        return;
    }
    const newP = document.createElement('p');
    newP.innerText = date.join('-');
    newP.classList.add('data');
    infos.appendChild(newP);
}

function getInfo(event) {
    event.preventDefault();
    checkName();
    checkEmail();
    checkTrip();
    checkTextArea();
    checkDate();
    if (errorList.length > 0) {
        checker();
    } else {
        alert('Cadastro feito com sucesso!')
    }
}

function changeTrip(event) {
    if (document.querySelector('.selected')) {
        const actual = document.querySelector('.selected');
        actual.classList.remove('selected');
    }
    event.target.classList.add('selected');
}

sendButton.addEventListener('click', getInfo);
inputTrips.forEach((element) => {
    element.addEventListener('click', changeTrip);
});
