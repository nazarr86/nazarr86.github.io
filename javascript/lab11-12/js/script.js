/carusel/
$(function () {
    $('.carousel-wrapper').carusel({

    });


    var html = $('#shablon').html();
    var data = {
        car_model: "Audi R8",
        capture:{
            src: "img/audi-r8.jpg",
            alt: "Audi R8"
        },
        car_discription: "Суперкар с мощным двигателем и умопомрачительным дизайном",
        car_plus: "Основные приемущества: ",
        car_advantages: ['изысканный стиль в неповторной форме', 'стильный двигатель V8 FSI', 'мощный привод quattro']

    }

    var content = tmpl(html, data);
    $('body').append('<h2>JavaScript Templating by John Resig</h2>')
    $('body').append(content);
});