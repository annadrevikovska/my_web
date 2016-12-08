/*-------------------------------------------- 
Author: © - Anna Drevikovska | 2016-21-11 | ver. 1.0.0
Adding class .scrolled (background) to .navbar when it's collapsed and removing class .scrolled (background) when it's not or is closing.
For mobile media query
---------------------------------------------*/

var counter = 0;
$('.navbar-toggler').click(function() {
  if (counter == 0) {
    if ($('.navbar-collapsed').collapse()) {
      $('.navbar').addClass('scrolled');
      $('.logo').hide();
      counter++;
    }
  } else if (counter > 0) {
    if ($('.navbar-collapsed').collapse()) {
      $('.navbar').removeClass('scrolled');
      $('.logo').show(300).delay(800);
      counter--;
    }
  } else {
    $('.navbar').removeClass('scrolled');
    $('.logo').show();
  }
});