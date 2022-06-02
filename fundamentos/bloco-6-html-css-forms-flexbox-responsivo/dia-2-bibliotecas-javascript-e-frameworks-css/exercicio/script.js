const fileInput = document.querySelector('#photo input[type=file]');

function fileChange() {
    if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#photo .file-name');
        fileName.textContent = fileInput.files[0].name;
      }
}

fileInput.addEventListener('change', fileChange);

const sendButton = document.querySelector('#send');
const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');
const inputSenha = document.querySelector('#inputPassword');
const inputDate = document.querySelector('#inputDate');
inputDate.DatePickerX.init({
    mondayFirst: false,
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    format: 'yyyy-mm-dd',
    clearButton: false,
    todayButton: false,
    minDate: function()
    {
        var date = new Date();
        return new Date().setDate(date.getDate() + 7);
    },
});
const inputText = document.querySelector('#inputText');
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

function checkSenhaRN() {
    const senhaFB = document.querySelector('#senhaFB');
    if (senhaFB.classList.contains('help')) {
        senhaFB.classList.remove('help');
        senhaFB.classList.remove('is-warning');
    }
    const senha = inputSenha.value;
    if (senha.length < 6 || senha.length > 20) {
        senhaFB.innerText = 'Opa, senha não atende os requisitos mínimos. Use uma senha de, pelo menos, 6 dígitos.';
        senhaFB.classList.add('help');
        senhaFB.classList.add('is-warning');
        return;
    }
    senhaFB.innerText = '';
}

function checkSenha() {
    const senha = inputSenha.value;
    if (senha.length < 6 || senha.length > 20) {
        errorList.push('erro');
        return;
    }
    const newP = document.createElement('p');
    newP.innerText = senha;
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

function getDate() {
    const date = inputDate.value;
    const newP = document.createElement('p');
    newP.innerText = date;
    newP.classList.add('data');
    infos.appendChild(newP);
}

function checkCheckBox() {
    if (inputConditions.checked) {
        const newP = document.createElement('p');
        newP.innerText = 'checked';
        newP.classList.add('data');
        infos.appendChild(newP);
    } else {
        errorList.push('erro');
    }
}

function getInfo(event) {
    event.preventDefault();
    checkName();
    checkEmail();
    checkSenha();
    getDate();
    checkTextArea();
    checkCheckBox();
    if (errorList.length > 0) {
        checker();
    } else {
        alert('Cadastro feito com sucesso!')
    }
}

sendButton.addEventListener('click', getInfo);

inputSenha.addEventListener('keyup', checkSenhaRN);