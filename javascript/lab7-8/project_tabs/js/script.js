$(function(){
	$('#tabs-1').show();//показывает вкладку с якорем #tabs-1 по умолчанию

	//проверяем не активна ли вкладка, если активна то нечего не делаем
	$('.tabs-header__list li').click(function(){
		if($(this).attr('class') == 'active'){
			return false;
		}
		//ссылка на текст вкладки которую должны показать
		var link = $(this).children().attr('href');
		//ссылка на текст пока что активной вкладки, которую нужно будет скрыть
		var prevActive = $('li.active').children().attr('href');
		$('li.active').removeClass('active');
		$(this).addClass('active');
		//показываем/скрываем текст вкладок
		$(prevActive).fadeOut(500, function(){
			$(link).fadeIn();
			//изменение цвета вкладок для активных вкладок
			$('.tabs-header__list li').css('background', '#ccc');
			$('li.active').css('background', '#f3f3f3');
		});
		return false;
	});
});