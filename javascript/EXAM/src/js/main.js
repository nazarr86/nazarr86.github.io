$(function () {

	// инит. масонри
	var $tiles = $('.tiles');

	$(document).ajaxComplete(function() {
		try {
			$tiles.masonry('destroy');

			$tiles.imagesLoaded(function() {
				$tiles.masonry({
					itemSelector: ".tile",
					columnWidth: ".tile",
					gutter: 10
				});
			});
		} catch(err) {

		}
	});


	// получение картинок с сервера и вставка на страницу
	var $searchField = $('.form-search-partner__field');
	var $searchBtn = $('.form-search-partner__btn');
	var tmplHtml = $('#tmplHtml').html();

	function ajaxQuery(query) {
		$.ajax({
			method: 'GET',
			url: 'https://pixabay.com/api/',
			data: 'key=2701940-50686df15687ed4665dfca084&q=' + query + '&image_type=photo&lang=ru,en&per_page=7',
			success: function (obj) {
				for (var i = 0; i < obj.hits.length; i++) {
					var objImages = obj.hits[i];
					var content = tmpl(tmplHtml, objImages);

					$tiles.append(content);
				}
			}
		});
	}

	ajaxQuery('country');

	$searchBtn.click(function (e) {
		var query = $searchField.val();

		$searchField.val('');
		$searchField.blur();
		$tiles.html('');

		ajaxQuery(query);

		e.preventDefault();
	});


	// карусель
	if ( $('html').width() < 751 ) {
		return;
	} else {
		$('.jcarousel').jcarousel({
			wrap: 'circular'
		});
	}

	$('.jcarousel-control-prev').jcarouselControl({
		target: '-=1'
	});

	$('.jcarousel-control-next').jcarouselControl({
		target: '+=1'
	});

});//Ready