$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

function checkSize() {
    if ($(".header br").css("display") == "none") {
    	$('#secondDiv').insertBefore('#firstDiv');
    	$('.header .image').append($('.logo'));
    } else {
    	$('#firstDiv').insertBefore('#secondDiv');
    	$('.logo').insertAfter('.navbar-toggler');
    }
}