
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

  $('.products').on('mouseenter touchstart', function(){
    $('.products__block').fadeIn(200);
  })

  $('.products').on('mouseleave', function(){
    $('.products__block').fadeOut(200);
  })

  $('.products').on('mouseleave', function(){
    $('.products__block').fadeOut(200);
  })  
  
  $('.products-close').on('click', function(e){
   e.preventDefault()
    $('.products__block').fadeOut(200);
  })
});


// team accordion
$(function(){
  
  var teamItem = $('.team-acco').find('.active').find('.team-acco__wrap'),
      itemHeight = teamItem.find('.team-acco__content').outerHeight();
      teamItem.css({
        'height' : itemHeight
      })
  
  //console.log(itemHeight);

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

//menu width accordion
$(function(){
    
    $('.menu-acco__title').on('click', function (e) {
      e.preventDefault();

      var elem = $(e.target),
          item = elem.closest('.menu-acco__item'),
          content = item.find('.menu-acco__wrap-content'),
          reqWidth = content.find('.menu-acco__content').outerWidth(),
          items = item.siblings(),
          otherContent = items.find('.menu-acco__wrap-content');
          console.log(reqWidth);

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');

        otherContent.css({
          'width' : 0
        });

        content.css({
          'width' : reqWidth
        })
      } else {
        item.removeClass('active');
        content.css({
          'width' : 0
        })
      }        
    })
});

//fancybox
$(function(){
  $('[data-fancybox]').fancybox({});   
  
});

//slick slider
$(function(){
 var burgerSlider = $('.burgers__slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false    
  });

  $('.burgers__arrow-link_right').on('click', function(e){
    e.preventDefault();
    $('.burgers__slider').slick('slickNext');
  })

  $('.burgers__arrow-link_left').on('click', function(e){
    e.preventDefault();
    $('.burgers__slider').slick('slickPrev');
  })
});


//map
$(function(){
  ymaps.ready(init);
    var myMap,
        myPlacemark;
    
    var marker = {
      iconLayout: 'default#image',
      iconImageHref: './img/icons/map-marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57]
    }
   
    function init(){     
        myMap = new ymaps.Map ("map", {
          center: [55.80083807, 49.10486854],
          zoom: 12
        });

        myMap.behaviors.disable('scrollZoom')
        myPlacemark0 = new ymaps.Placemark([55.78398689, 49.11284808], {           
          // hintContent: 'Москва!', 
          // balloonContent: 'Столица России' 
        },marker);

        myPlacemark1 = new ymaps.Placemark([55.80951609, 49.08229236],{},marker);
        myPlacemark2 = new ymaps.Placemark([55.79830078, 49.12692431],{},marker);


        myMap.geoObjects.add(myPlacemark0)
                        .add(myPlacemark1)
                        .add(myPlacemark2);
    }
});

//form ajax
$(function(){

  var order = $('.popup-order');    
  var orderText = order.find('p');

  var submitForm = function (ev) {
    ev.preventDefault();
    // console.log(ev);

    var form = $(ev.target);  
    
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        orderText.html(mes);
        $.fancybox.open(order);
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#order-form').on('submit', submitForm);

$('.close-order').on('click', function(e) {
  e.preventDefault();

  $.fancybox.close(order);
})

});