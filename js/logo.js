/*-------------------------------------------- 
Author: © - Anna Drevikovska | 2016-03-12 | ver. 1.0.0
Changing sizes of the logo on mouseover and mouseleave mouse events when the browser width
is 650 or more
Not used! Only kept for possible later usage or updates
---------------------------------------------*/

if ($("body").innerWidth() >= 650) {
		$('.logo').mouseover(function() {
		if ($(this).hasClass('logo')) {
			$(this).removeClass('logo').addClass('logo-new');
		}
	});

	$('.logo').mouseleave(function() {
		if ($(this).hasClass('logo-new')) {
			$(this).removeClass('logo-new').addClass('logo');
		}
	});
}