$(function() {

	$('.mobile-btn').on('click', function() {
		$('.menu').slideToggle(50);
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

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.price-table__content').hide().eq($(this).index()).slideDown(500);
	});

});
