$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('affix');

    } else {
        $('.header').removeClass('affix');

    }
});
/* back to top */
var btn = $('.scrollup');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('activate');
    } else {
        btn.removeClass('activate');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});

$(document).ready(function() {

    $('#birthday').datepicker();

    $(".date-range").flatpickr({
        mode: "range",
        dateFormat: "d/m/Y",

    });

    $("#form-input-starttid").flatpickr({
        enableTime: true,
        dateFormat: "d/m/Y H:i",
    });
    $("#form-input-sluttid").flatpickr({
        enableTime: true,
        dateFormat: "d/m/Y H:i",
    });

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    //toggle-menu
    $(".navbars").click(function() {
        $('.elements').show();
        $('body').addClass('ov-hidden');
    });
    $(".elements .close a").click(function() {
        $('.elements').hide();
        $('body').removeClass('ov-hidden');
    });

    $(".btn-language").click(function() {
        $('.languages').slideToggle();
    });
    $(".language").click(function() {
        $('.languages').slideToggle();
    });

    $(".options-label").click(function() {
        $('.options').slideToggle();
    });

    $(".toggle-mobile").click(function() {
        $('.menu').slideToggle();
    });



    $(window).load(function() {
        if ($('.banner-video').hasClass('vd-has-started')) {
            $('.banner-video.vd-has-started').removeClass('vd-has-started');
        } else {
            $('.banner-video').addClass('vd-has-started');
        }
    });


    $('.slide-about').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});