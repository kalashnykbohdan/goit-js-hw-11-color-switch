'use strict';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let flagStatus = false;
let timerId = null;

const body = document.querySelector('body');

const start = document.querySelector('button[data-action="start"]');
start.addEventListener('click', startInterval);

const stop = document.querySelector('button[data-action="stop"]');
stop.addEventListener('click', stopInterval);


function startInterval(){
    if(flagStatus == false){
        timerId = setInterval(changeColor, 1000);
        flagStatus = true;
    }
}


function stopInterval(){
    if(flagStatus == true){
        clearInterval(timerId);
        flagStatus = false;
    }
}

function changeColor(){
    const colorId = randomIntegerFromInterval(0, 5);
    body.style.backgroundColor = colors[colorId];

}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };



