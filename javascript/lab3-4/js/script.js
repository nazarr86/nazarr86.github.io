var test = {
	header: 'Тест по программированию',
	question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
	id: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
	answerName: ['answer-one', 'answer-two', 'answer-three', 'answer-four', 'answer-five', 'answer-six', 'answer-seven', 'answer-eight', 'answer-nine'],
	answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	textButton: 'Проверить мои результаты'
}

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.margin = '0 auto';
wrapper.style.width = '800px';
wrapper.style.padding = '0';
wrapper.style.background = '#fff';
var elementBody = document.body;
elementBody.appendChild(wrapper);

var h3 = document.createElement('h3');
h3.innerHTML = test.header;
h3.style.textAlign = 'center';
h3.style.marginBottom = '60px';
var parentElement = document.querySelector('.wrapper');
parentElement.appendChild(h3);

var form = document.createElement('form');
form.classList.add('form-group');
parentElement.appendChild(form);
var k = 0;


for(var i = 0; i < test.question.length; i++){
	
	var ol = document.createElement('ol');
	ol.innerHTML = i + 1 + '. ' + test.question[i];
	ol.style.fontSize = '20px';
	var formParentElement = document.querySelector('.form-group');
	formParentElement.appendChild(ol);



	for(var j = 0; j < 3; j++){

		var li = document.createElement('li');
		li.classList.add = 'answer-list';
		li.style.listStyle = 'none';
		li.style.fontSize = '18px';
		li.style.marginLeft = '20px';
		var liParentElement = document.getElementsByTagName('ol');
		liParentElement[i].appendChild(li);
		
		var label = document.createElement('label');
		label.for = 'test.id[k]';
		label.innerHTML = test.answer[k];
		label.style.fontWeight = 'normal';
		label.style.paddingLeft = '7px';
		label.style.paddingTop = '3px';
		
		var labelParentElement = document.getElementsByTagName('li');

		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'test.id[k]';
		checkbox.name = 'test.answerName[k]';

		labelParentElement[k].appendChild(checkbox);
		labelParentElement[k].appendChild(label);
		k++;
	}
}

var button = document.createElement('button');
button.type = 'button';
button.classList.add('btn');
button.classList.add('btn-default');
button.innerHTML = test.textButton;
button.style.margin = '43px auto 50px 240px';
button.style.padding = '14px 32px';
button.style.fontSize = '20px';
button.style.border = '2px solid #000';
button.style.background = '#cfe2f3';
parentElement.appendChild(button);
