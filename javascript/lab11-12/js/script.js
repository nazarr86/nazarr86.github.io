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
        car_advantages: ['изысканный стиль в неповторной форме', 'стильный двигатель V8 FSI', 'мощный привод quattro'],
        car_seller_telephone: "Контактный телефон поставщика",
        car_seller_number: "+380970000123",
        car_seller_address: "Сайт поставщика в Украине",
        car_seller_site: "http://www.audi.ua/",
        feedback: "Фидбек",
        feedback_text: "Это отличная тачка"
    }

    var content = tmpl(html, data);
    $('body').append('<h2 class="header-title">JavaScript Templating by John Resig</h2>')
    $('body').append(content);
});