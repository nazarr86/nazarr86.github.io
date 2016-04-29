var container = document.createElement('div');
container.classList.add('container');
var parentForContainer = document.body;
parentForContainer.appendChild(container);
container.style.width = '400px';
container.style.margin = '0 auto';
container.style.marginTop = '140px';

var timerDisplay = document.createElement('div');
timerDisplay.classList.add('timer-display');
var parentForContent = document.querySelector('.container');
parentForContent.appendChild(timerDisplay);
timerDisplay.style.width = '100%';
timerDisplay.style.border = '5px solid #000';
timerDisplay.style.background = '#e1e3ff';
timerDisplay.style.borderRadius = '30px';
timerDisplay.style.marginBottom = '20px';	

var timerDisplayHours = document.createElement('p');
timerDisplayHours.classList.add('timer-display-hours');
parentForTimer = document.querySelector('.timer-display');
parentForTimer.appendChild(timerDisplayHours);
timerDisplayHours.innerHTML = "00:00:00";
// timerDisplayHours.style.margin = '0';
timerDisplayHours.style.margin = '0px 0px -20px';
timerDisplayHours.style.fontSize = '70px';
timerDisplayHours.style.fontWeight = 'bold';
timerDisplayHours.style.textAlign = 'center';


var timerDisplayMillis = document.createElement('p');
timerDisplayMillis.classList.add('timer-display__millis');
parentForTimer.appendChild(timerDisplayMillis);
timerDisplayMillis.innerHTML = "0";
timerDisplayMillis.style.textAlign = 'right';
timerDisplayMillis.style.fontSize = '30px';
timerDisplayMillis.style.fontWeight = 'bold';
timerDisplayMillis.style.paddingRight = '50px';
timerDisplayMillis.style.margin = '0px 0px -5px';

var startPause = document.createElement('button');
startPause.classList.add('btn');
startPause.classList.add('btn-success');
startPause.classList.add('btn-lg');
startPause.innerHTML = 'Start';
startPause.setAttribute('onclick', 'startStopTimer()');
parentForContent.appendChild(startPause);
startPause.style.color = '#000';
startPause.style.width = '120px';

var clear = document.createElement('button');
clear.classList.add('btn');
clear.classList.add('btn-danger');
clear.classList.add('btn-lg');
clear.innerHTML = 'Clear';
clear.setAttribute('onclick', 'clearTimer()');
parentForContent.appendChild(clear);
clear.style.color = '#000';
clear.style.float = 'right';
clear.style.width = '120px';


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
	timerDisplayHours.innerHTML = "00:00:00";
	timerDisplayMillis.innerHTML = "0";
}

function calculTime(){
	if(flag == 1){
		setTimeout(function(){
			time++;
			var hours = Math.floor(time / 10 / 60 / 60);
			var mins = Math.floor(time / 10 / 60);
			var secs = Math.floor(time / 10 % 60);
			var millsecs = time % 10;
			 if (hours < 10){
			 	hours = "0" + hours;
			 }
			 if (mins < 10){
			 	mins = "0" + mins;
			 }
			 if (secs < 10){
			 	secs = "0" + secs;
			 }
			timerDisplayHours.innerHTML = hours + ":" + mins + ":" + secs;
			timerDisplayMillis.innerHTML = "  " + millsecs;
			calculTime();
		}, 100)
	}
	
}