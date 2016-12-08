/*-------------------------------------------- 
Author: © - Anna Drevikovska | 2016-02-12| ver. 1.0.0
On the page load checkSize() function checks the window width of the device and changes the
order of the #firstDiv(header) and the #secondDiv(navigation) in the html document as well as moving
the logo image from navigation section to header and the other way around.
---------------------------------------------*/

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