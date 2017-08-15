$(document).ready(function() {
  
  $('.hamburger-menu-link').on('click', function(e){
   e.preventDefault()
    $('.device-menu').fadeIn();
  })

  $('.close').on('click', function(e){
   e.preventDefault()
    $('.device-menu').fadeOut();
  })

  $('.products').hover(function(e){   
    $('.products__block').fadeToggle(0);
  })
 
   $('.products__block').mouseover(function(e){   
    $('.products__block').fadeIn(0);
  })

  $('.products__block').mouseleave(function(e){   
    $('.products__block').fadeOut(0);
  })

  $('.products-close').on('click', function(e){
   e.preventDefault()
    $('.products__block').fadeOut(0);
  })

});
