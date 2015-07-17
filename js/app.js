$(document).ready(function() {
	//initialize slider, from "slick" code
	//slick plugin code
	$('.carousel').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		// infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('#nav_work').click(function(e) {
		$('.on_start').css("display", "none");
		$('.coming_soon').css("display", "block");
	});

	$('.close').click(function(e) {
		$('.on_start').css("display", "block");
		$('.coming_soon').css("display", "none");
	});
});


				