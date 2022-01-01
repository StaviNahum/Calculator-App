import {setTheme} from './theme-change.js';
import {showKey, equal, actionHandle} from './calculator.js'

function addListenerToList(className, event, func) {
    var objs = document.querySelectorAll(`.${className}`);
    objs.forEach((obj) => {
        obj.addEventListener(event, func);
    });
}

async function fetchSWAPi() {
    var id = Math.floor(Math.random()*5) + 1;
    let urlReq = `https://swapi.dev/api/species/${id}`;

    // Fetch the request
    const response = await fetch(urlReq);
    if(!response.ok) {
        return {"name": "Error, can't get data from SWAPI"};
    }
    const resContent = await response.json();
    return resContent;
}

function main() {
    // Add listener for the toggle change
    document.querySelector(".toggle__slider").addEventListener('change', (e) => setTheme(e));

    // Add listener for the number keys
    addListenerToList("num", "click", (e) => showKey(e));

    // Add listener for the operator keys
    addListenerToList("op", "click", (e) => showKey(e));

    // Add listener for the solve key
    addListenerToList("solve", "click", (e) => {
        equal(e);
        // Genarate starwars data from SWAPI
        fetchSWAPi()
        .then((resContent) => {
            document.querySelector(".starwars--text").innerHTML = resContent.name;
        })
        .catch(() => {
            document.querySelector(".starwars--text").innerHTML = "Error, can't get data from SWAPI";
        });
    });

    // Add listener for the action keys
    addListenerToList("btn--action", "click", (e) => actionHandle(e));    
}

main();
