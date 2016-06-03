$(document).ready(function () {
    
    /* Sticky Navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '60px'
    });
    
    
    /* Main scroll buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    /* Navigation scroll buttons */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top}, 1000);
                    return false;
                }
            }
        });
    });
    
    /* Animations on scroll */
    $('.js--features-an-wp').waypoint(function (direction) {
       $('.js--features-an-wp').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--how-an-wp').waypoint(function (direction) {
       $('.js--how-an-wp').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--cities-an-wp').waypoint(function (direction) {
       $('.js--cities-an-wp').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--plan-an-wp').waypoint(function (direction) {
       $('.js--plan-an-wp').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});