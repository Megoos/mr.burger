$(function(){
    var sections = $('.section'),
        display = $('.maincontent'),
        inScroll = false;

        var md = new MobileDetect(window.navigator.userAgent),
            isMobile = md.mobile();

    //переход на нужную секцию
    var performTransition = function (sectionEq) {

        if (inScroll) return

        inScroll = true;
        var position = (sectionEq * -100) + '%';

        display.css({
            'transform': 'translateY(' + position + ')',
            '-webkit-transform': 'translateY(' + position + ')'
        });

        sections.eq(sectionEq).addClass('active')
                .siblings().removeClass('active');
        

         setTimeout(function () {
            inScroll = false;
            $('.fixed-menu__item').eq(sectionEq).addClass('active')
                .siblings().removeClass('active');
        }, 1300);
    }

    // поиск секций
    var defineSections = function (sections) {
        var activeSection = sections.filter('.active');
        return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
        }
    }

    //общая функция для нескольких действий
    var scrollToSection = function (direction) {
        var section = defineSections(sections);

        if (direction == 'up' && section.nextSection.length) { // скроллим вверх
        performTransition(section.nextSection.index());
        }

        if (direction == 'down' && section.prevSection.length) { //скроллим вниз
        performTransition(section.prevSection.index());
        }
    }

    //действие на движение скрола
     $('.wrapper').on({
        wheel: function(e) {
            var deltaY = e.originalEvent.deltaY;
            var direction = deltaY > 0
                ? 'up'
                : 'down';

            scrollToSection(direction)
            
        },
        touchmove: function (e) {
            e.preventDefault();
        }
     });

    //действие на кнопки
     $(document).on('keydown', function (e) {
        var section = defineSections(sections);        

        switch (e.keyCode) {
        case 40: //вверх
            scrollToSection('up');
            break;
        case 38: //вниз
            scrollToSection('down');
            break;
        }
    });

    $('[data-scroll-to]').on('click touchstart', function (e) {
        e.preventDefault();

        var elem = $(e.target);
        var sectionNum = parseInt(elem.attr('data-scroll-to'));
        performTransition(sectionNum);
    });
    
    //свайпы ТОЛЬКО для мобильных уст-в
    if (isMobile) {
        $(window).swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            scrollToSection(direction);
        }
        });
    }
});