// Loading Screen
$(window).on('load', function() {
    $('.overlay_loading').fadeOut(3000,
        function() {
            $("body").css("overflow", "auto");
        });
});

$(document).ready(function() {
    'use strict';

    // cashing
    var myArtical = $('.container-artical-about');

    //  STart the Header
    $('header').height($(window).height());
    $(window).resize(function() {
        $('header').height($(window).height()) / 2;
    });
    // End the Header 

    // sTart the Navbar
    $('.nav-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // End the Navbar


    // Smooth Scroll 
    $('.navbar-nav a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
    });
    // End Smooth Scroll

    // to btn
    $(".btn").mouseover(function() {
        $(this).css("background", "rgba(204,160,37,1)"), ("color", "black");
        $('.btn').fadeInUpBig(10000);

    });
    $(".btn").mouseleave(function() {
        $(this).css("background", "#fb3c3d");
        $('btn').fadeInUp(2000)
    });

    // End btn

    // Start Artical
    myArtical.show(5000)
    myArtical.animate({
        padding: '20px 10px',
        borderShadow: '2px 3px 3px 1px rgba(#e4e2da , 0.3)',
        borderRadius: '5px'
    }, 2000);
    // nav Projects
    // sTart the Navbar



    $('.page-item .page-link').click(function() {
        $(this).addClass('selected').removeClass('selected');
    });
    // End the Nav Projects

    
    
    $('.fixed-icon a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
    });
    
    //  Trigger NiceScroll
    $('html ').niceScroll({
        cursorcolor: "rgba(204,160,37,1)",
        cursorborder: "none"
    });
}); //document

//  Trigger MixitUp
var mixer = mixitup('.projects'),
    mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'

    },
    animation: {
        duration: 200
    }
});