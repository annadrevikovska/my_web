/*-------------------------------------------- 
Author: © - Anna Drevikovska | 2016-01-12 | ver. 1.0.0
Adding class (.pt-1) on media query (mobile) and removing class (.pt-1) on media query (min-width: 768px)
Not used! Only kept for possible later usage or updates
---------------------------------------------*/

if ($(window).width < 768) {
    $('.nav .navbar-nav').addClass('pt-1');
} else {
    $('.nav .navbar-nav').removeClass('pt-1');
}