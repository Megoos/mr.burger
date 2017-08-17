
//hamburger menu
$(function(){
  $('.hamburger-menu-link').on('click', function(e){
   e.preventDefault()
    $('.device-menu').fadeIn();
  });

  $('.close').on('click', function(e){
   e.preventDefault()
    $('.device-menu').fadeOut();
  })
});

//products block
$(function(){
   $('.products').hover(function(e){   
    $('.products__block').fadeToggle(0);
  });
 
   $('.products__block').mouseover(function(e){   
    $('.products__block').fadeIn(0);
  });

  $('.products__block').mouseleave(function(e){   
    $('.products__block').fadeOut(0);
  });

  $('.products-close').on('click', function(e){
   e.preventDefault()
    $('.products__block').fadeOut(0);
  })
});


// team accordion
$(function(){
  
  var teamItem = $('.team-acco').find('.active').find('.team-acco__wrap'),
      itemHeight = teamItem.find('.team-acco__content').outerHeight();
      teamItem.css({
        'height' : itemHeight
      })
  
  console.log(itemHeight);

  $('.team-acco__title').on('click', function(e){
    e.preventDefault();

    var elem = $(e.target),
        item = elem.closest('.team-acco__item'),
        content = item.find('.team-acco__wrap'),
        reqHeight = content.find('.team-acco__content').outerHeight(),
        items = item.siblings(),
        otherContent = items.find('.team-acco__wrap');
        //console.log(reqHeight);

    if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');

      otherContent.css({
        'height' : 0
      });

      content.css({
        'height' : reqHeight
      })
    } else {
      item.removeClass('active');
      content.css({
        'height' : 0
      })
    }        
  })
});
