var container = document.createElement('div');
container.classList.add('container');
var parentForContainer = document.body;
parentForContainer.appendChild(container);


var timerDisplay = document.createElement('p');
timerDisplay.classList.add('timer-display');
var parentForContent = document.querySelector('.container');
parentForContent.appendChild(timerDisplay);
timerDisplay.innerHTML = "00:00:00";

var timerDisplayMilliseconds = document.createElement('span');
timerDisplayMilliseconds.classList.add('timer-display__milliseconds');
var parentForSpan = document.querySelector('.timer-display');
parentForSpan.appendChild(timerDisplayMilliseconds);
timerDisplayMilliseconds.innerHTML = '  000';

var startPause = document.createElement('button');
startPause.classList.add('btn');
startPause.classList.add('btn-success');
startPause.classList.add('btn-primary');
startPause.innerHTML = 'Start';
parentForContent.appendChild(startPause);

var clear = document.createElement('button');
clear.classList.add('btn');
clear.classList.add('btn-danger');
clear.innerHTML = 'Clear';
parentForContent.appendChild(clear);

