// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
        const myObject = {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        };

        fetch(API_URL, myObject)
            .then((response) => response.json())
            .then(({ joke }) => joke)
            .then((jokeToAdd) => {
                const jokeDiv = document.querySelector('#jokeContainer');
                const newDiv = document.createElement('div');
                newDiv.innerText = jokeToAdd;
                jokeDiv.appendChild(newDiv);
            })
            .catch(error => console.log(error));
};

window.onload = () => fetchJoke();