'use strict';

$(function () {
    var $base = {
        testHeader: 'Тест по программированию',
        testQuestions: [{
            questionNumber: 'Вопрос №1',
            radioNumber:  'first',
            id: ['1', '2', '3'],
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            rightAnswer: 2
        },
        {
            questionNumber: 'Вопрос №2',
            radioNumber:  'second',
            id: ['1', '2', '3'],
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            rightAnswer: 3
        },
        {
            questionNumber: 'Вопрос №3',
            radioNumber:  'third',
            id: ['1', '2', '3'],
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            rightAnswer: 1
        }],
        submit: 'Показать результат'
    };

    localStorage.setItem('test', JSON.stringify($base));
    var $data = JSON.parse(localStorage.getItem('test'));

    var $html = $('#test').html();
    var $content = tmpl($html, $data);
    $('.wrapper').append($content);

    function showModal(e) {
        e.preventDefault();

        var $modal = $('<div class="modal"></div>');
        var $result = 0;
        var $answer = $('input:checked');
        var $correct = [];

        for (var i = 0; i<$data.testQuestions.length; i++) {
            $correct[i] = $data.testQuestions[i].rightAnswer;
            if ($($answer[i]).attr('id') == $correct[i]) {
                $result += 1;
                $modal.append('<p class="correct">Ответ на ' + (i+1) + ' вопрос <b>правильный</b></p>');
            } else {
                $modal.append('<p class="incorrect">Ответ на ' + (i+1) + ' вопрос <b>неправильный</b></p>');
            }
        }

        $modal.append('<h4 class="result">Всего правильных ответов: ' + $result + '</h4><hr>');

        if ($result == $data.testQuestions.length) {
            $modal.append('<h4>Поздравляем! Вы успешно прошли тест</h4>');
        } else {
            $modal.append('<h4>Tест не пройден</h4>');
        }

        $modal.append('<button>Попробывать снова</button>');
        $('body').append($modal);

        $('button').one('click', function (e) {
            e.preventDefault();
            $modal.detach();
            $('input').attr('checked', false);
        })
    }

    $('button').on('click', showModal);

    return this;
});