document.querySelector('#header-container').style.backgroundColor = 'green';

document.querySelector('body').style.backgroundColor = 'grey';

document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(216, 216, 114)';

const h3Urgent = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < h3Urgent.length; i += 1) {
    document.querySelectorAll('.emergency-tasks h3')[i].style.backgroundColor = 'purple';
}

const h3NotUrgent = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < h3NotUrgent.length; i += 1) {
    document.querySelectorAll('.no-emergency-tasks h3')[i].style.backgroundColor = 'black';
}

document.querySelector('#footer-container').style.backgroundColor = 'green';

    // background-color: black;
