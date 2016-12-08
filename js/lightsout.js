/*-------------------------------------------- 
Author: © - Anna Drevikovska | 2016-03-12 | ver. 1.0.0
Changing image overlay on click handler with .lights-out class
Changing on click handler color property of h1 in header and its :hover color property 
---------------------------------------------*/

var counter = 0;

$('.logo').click(function() {
	if (counter === 0) {
		$('.header').addClass('lights-out');
		counter++;
	} else {
		$('.header').removeClass('lights-out');
		counter--;
	}
});

$('.logo').click(function() {
	if ($('.header h1 a').hasClass('name')) {
		$('.header h1 a').removeClass().addClass('new-name');
	} else if ($('.header h1 a').hasClass('new-name')) {
		$('.header h1 a').removeClass('new-name').addClass('name');
	} else {
		$('.header h1 a').addClass('new-name');
	}
});