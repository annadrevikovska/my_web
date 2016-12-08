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
} else {
	$('.logo').mouseover(function() {
		if ($(this).hasClass('logo-new')) {
			$(this).removeClass('logo-new').addClass('logo');
		}
	});

	$('.logo').mouseleave(function() {
		if ($(this).hasClass('logo-new')) {
			$(this).removeClass('logo-new').addClass('logo');
		}
	});
}