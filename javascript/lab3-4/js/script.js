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
var elementBody = document.body;
elementBody.appendChild(wrapper);

var h1 = document.createElement('h1');
h1.innerHTML = test.header;
var parentElement = document.querySelector('.wrapper');
parentElement.appendChild(h1);

var form = document.createElement('form');
form.classList.add('question-form');
parentElement.appendChild(form);
var k = 0;


for(var i = 0; i < test.question.length; i++){
	
	var h3 = document.createElement('h3');
	h3.innerHTML = i + 1 + '. ' + test.question[i];
	var formParentElement = document.querySelector('.question-form');
	formParentElement.appendChild(h3);

	for(var j = 0; j < 3; j++){
		
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'test.id[k]';
		checkbox.name = 'test.answerName[k]';

		var p = document.createElement('p');
		p.classList.add('elementParagraph');
		var inputParentElement = document.getElementsByTagName('h3');
		inputParentElement[i].appendChild(p);

		var label = document.createElement('label');
		label.for = 'test.id[k]';
		label.innerHTML = test.answer[k];

		var pParentElement = document.getElementsByTagName('p');
		pParentElement[k].appendChild(checkbox);
		pParentElement[k].appendChild(label);

		k++;
	}
}

var button = document.createElement('button');
button.type = 'button';
button.classList.add('btn');
button.classList.add('btn-lg');
