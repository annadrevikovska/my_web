/*-------------------------------------------- 
Author: © - Anna Drevikovska | 2016-01-12 | ver. 1.0.0
Adding active class (.active) on loading and every time a link in navigation is clicked, removing class (.active) from
last one if a new one is clicked
---------------------------------------------*/

$(window).load(function() {
  $('.nav .nav-link').click(function() {
    $('.nav .nav-link').removeClass("active");
    $(this).addClass("active");
  });
});
