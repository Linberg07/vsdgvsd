$(document).ready(function(){
var acord_item = $('.accordion__item');
var acord_ul = $('.accordion__item_ul');
var acord_icon = $('.dcjq-parent');
acord_icon.removeClass('active');
acord_ul.css('display','none');

acord_item.click(function(){
	if(!acord_icon.hasClass('active')){
		$('.scroll').css({
    'height': 0 + 'px',
});
	}else{
		console.log('1');
		acord_ul.css('display','none');
		var OffsetTop = $(this).offset().top;
	}

	
	
	
	
	console.log('находится от верха:' +OffsetTop);

	 window.scrollTo( 0, OffsetTop );


})
console.log('1');

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

});