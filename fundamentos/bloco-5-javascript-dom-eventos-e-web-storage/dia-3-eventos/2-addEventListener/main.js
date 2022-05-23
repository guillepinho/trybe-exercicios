const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Porque o primeiro botão possui a classe "tech", que transforma a posição da caixa para 20px acima de onde estava.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener('click', addTech);
secondLi.addEventListener('click', addTech);
thirdLi.addEventListener('click', addTech);

function addTech() {
    removeTech();
    this.className = 'tech';
}

function removeTech() {
    const all = document.querySelectorAll('li');
    for (let li of all) {
        if (li.className === 'tech') {
            li.classList.remove('tech');
        }
    }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', changeTech);

function changeTech() {
    const texto = document.getElementById('input').value;
    const all = document.querySelectorAll('li');
    for (let li of all) {
        if (li.className === 'tech') {
            li.innerText = texto;
        }
    }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', openPortfolio);

function openPortfolio() {
    window.open("https://guillepinho.github.io/portfolio/", '_blank').focus();
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', changeBack);

function changeColor(event) {
    event.target.style.color = 'grey';
}

function changeBack(event) {
    event.target.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.