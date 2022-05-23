function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 🚀 Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidays = [24, 25, 31];
const dezFridays = [4, 11, 18, 25];

function addDays(days, holidays, fridays) {
    const dayList = document.querySelector('#days');

    for (let day of days) {
        const newDay = document.createElement('li');
        newDay.innerText = day;
        newDay.classList.add('day');
    
        if (holidays.includes(day)) {
            newDay.classList.add('holiday');
        }
        if (fridays.includes(day)) {
            newDay.classList.add('friday');
        }
    
        dayList.appendChild(newDay);
    }
}

addDays(dezDaysList, dezHolidays, dezFridays);


//🚀 Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function holidays(string) {
    const containerButton = document.querySelector('.buttons-container');

    const newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerText = string;

    containerButton.appendChild(newButton);
}

holidays('Feriados');

// 🚀 Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
function addEvent(elementId, functioName) {
    const targetElement = document.querySelector(elementId);
    targetElement.addEventListener('click', functioName);
}

addEvent('#btn-holiday', highlightHolidays);
let coloredHoliday = false;

function highlightHolidays() {
    const holidays = document.querySelectorAll('.holiday');
    if (coloredHoliday === false) {
        for (let holiday of holidays) {
            holiday.style.backgroundColor = 'rgb(217, 237, 146)';
        }
        coloredHoliday = true;
        return;
    }
    
    if (coloredHoliday === true) {
        for (let holiday of holidays) {
            holiday.style.backgroundColor = 'rgb(238,238,238)';
        }
        coloredHoliday = false;
        return;
    }
}

// 🚀 Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function fridays(string) {
    const containerButton = document.querySelector('.buttons-container');

    const newButton = document.createElement('button');
    newButton.id = 'btn-friday';
    newButton.innerText = string;

    containerButton.appendChild(newButton);
}

fridays('Sexta-feira');

// 🚀 Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
addEvent('#btn-friday', highlighFridays);
let coloredFriday = false;

function highlighFridays() {
    const fridays = document.querySelectorAll('.friday');
    if (coloredFriday === false) {
        for (let friday of fridays) {
            friday.style.backgroundColor = 'rgb(217, 237, 146)';
        }
        coloredFriday = true;
        return;
    }
    if (coloredFriday === true && coloredHoliday === false) {
        for (let friday of fridays) {
            friday.style.backgroundColor = 'rgb(238,238,238)';
        }
        coloredFriday = false;
        return;
    }
}

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
const allDays = document.querySelectorAll('.day');
for (let day of allDays) {
    day.addEventListener('mouseover', zoomIn);
    day.addEventListener('mouseout', zoomOut);
}

function zoomIn(event) {
    event.target.style.setProperty('font-size', '24px');
}

function zoomOut(event) {
    event.target.style.setProperty('font-size', '20px');
}

// 🚀 Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function addTask(task) {
    const myTasks = document.querySelector('.my-tasks');
    const newTask = document.createElement('span');
    newTask.innerText = task;
    myTasks.appendChild(newTask);
}

addTask('cozinhar');

// 🚀 Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function addSubtitleColor(cor) {
    const myTasks = document.querySelector('.my-tasks');
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = cor;
    newDiv.classList.add('task');
    myTasks.appendChild(newDiv);
}

addSubtitleColor('rgb(255, 255, 136)');