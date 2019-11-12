$(function() {

	$('.mobile-btn').on('click', function() {
		$('.menu').slideToggle(80);
		$(this).toggleClass('active');
		$('.logo').slideToggle(40);
	});

});
