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