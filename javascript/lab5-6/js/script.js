var container = document.createElement('div');
container.classList.add('container');
var parentForContainer = document.body;
parentForContainer.appendChild(container);
container.style.width = '100%';
container.style.margin = '0 auto';
container.style.marginTop = '140px';

var timerDisplay = document.createElement('p');
timerDisplay.classList.add('timer-display');
var parentForContent = document.querySelector('.container');
parentForContent.appendChild(timerDisplay);
timerDisplay.innerHTML = "00:00:00";
timerDisplay.style.border = '5px solid #000';
timerDisplay.style.width = '415px';
timerDisplay.style.fontSize = '60px';
timerDisplay.style.fontWeight = 'bold';
timerDisplay.style.borderRadius = '15px';

var timerDisplayMilliseconds = document.createElement('span');
timerDisplayMilliseconds.classList.add('timer-display__milliseconds');
var parentForSpan = document.querySelector('.timer-display');
parentForSpan.appendChild(timerDisplayMilliseconds);
timerDisplayMilliseconds.innerHTML = '  000';

var startPause = document.createElement('button');
startPause.classList.add('btn');
startPause.classList.add('btn-success');
startPause.classList.add('btn-lg');
startPause.innerHTML = 'Start';
startPause.setAttribute('onclick', 'startStopTimer()');
parentForContent.appendChild(startPause);

var clear = document.createElement('button');
clear.classList.add('btn');
clear.classList.add('btn-danger');
clear.classList.add('btn-lg');
clear.innerHTML = 'Clear';
clear.setAttribute('onclick', 'clearTimer()');
parentForContent.appendChild(clear);

var flag = 0;
var time = 0;

function startStopTimer(){
	if(flag == 0){
		startPause.innerHTML = "Pause";
		flag = 1;
		calculTime();
	}else{
		flag = 0;
		startPause.innerHTML = "Cont..";
	}
}function clearTimer() {
	time = 0;
	flag = 0;
	startPause.innerHTML = "Start";
	timerDisplay.innerHTML = "00:00:00";
}

function calculTime(){
	if(flag == 1){
		setTimeout(function(){
			time++;
			var hours = Math.floor(time / 10 / 60 / 60);
			var mins = Math.floor(time / 10 / 60);
			var secs = Math.floor(time / 10 % 60);
			var millsecs = Math.floor(time % 10);
			 if (hours < 10){
			 	hours = "0" + hours;
			 }
			 if (mins < 10){
			 	mins = "0" + mins;
			 }
			 if (secs < 10){
			 	secs = "0" + secs;
			 }
			timerDisplay.innerHTML = hours + ":" + mins + ":" + secs + ":" + millsecs;
			timerDisplayMilliseconds.innerHTML = "  " + millsecs + "0";
			calculTime();
		}, 100)
	}
	
}