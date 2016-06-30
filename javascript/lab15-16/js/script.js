//SEARCH FORM
$(function () {
	
	$('.btn').on('click', search);

	$('.search').keypress(function () {
		if(event.keyCode == 13){
			search;
		} else return;
	});

	function search(e) {
        e.preventDefault();
        $('img').remove();
        var $searchKey = $('.search').val();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + $searchKey + '&image_type=photo',
            dataType: 'jsonp',
            success: function (data) {
                var $results = data.hits;
                for (var i = 0; i < data.hits.length; i++) {
                    $('.pictures').append('<img src="' + $results[i].previewURL + '">');
                }

            },
            error: function () {
                alert('Error!');
            }
        });

        $('.search').val('');
}
})

//CLASSES

function Human(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

Human.prototype.do = function() {
  console.log('Я сейчас ' + this.work)
}

function Worker(name, age, gender, height, weight, workplace, sale) {
	Human.apply(this, arguments);
	this.workplace = workplace;
	this.sale = sale
	this.work = 'работаю!!!';
}

function Student(name, age, gender, height, weight, study, scholarship) {
	Human.apply(this, arguments);
	this.study = study;
	this.scholarship = scholarship;
	this.work = 'смотрю теливизор';
}

Worker.prototype = new Human();
Worker.prototype.constructor = Worker;
Student.prototype = new Human();
Student.prototype.constructor = Student;

var andrey = new Worker('Andrey', 26, 'male', 190, 85, 'factory', 3000);
console.log(andrey);
andrey.do();

var irina = new Worker('Irina', 24, 'female', 170, 55, 'web-studio', 4000);
console.log(irina);
irina.do();

var max = new Student('Max', 23, 'male', 192, 90, 'university', 100);
console.log(max);
max.do();

var sveta = new Student('Sveta', 28, 'female', 168, 50, 'courses', 0);
console.log(sveta);
sveta.do();