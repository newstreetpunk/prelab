$(function() {

	$('.mobile-btn').on('click', function() {
		$('.menu').slideToggle(80);
		$(this).toggleClass('active');
		$('.logo').slideToggle(40);
	});

	var $page = $('html, body');

	$('.form-open').on('click', function(){
		$(this).hide(50).prev().slideDown(70);
		$page.animate({
            scrollTop: $('.callback').offset().top - 80}, 50);
		return false;
	});

});
