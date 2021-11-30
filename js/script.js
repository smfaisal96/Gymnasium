$(function(){
    'use strict';
  /*Menu Fix*/
    var navOff = $('.main-menu').offset().top;

    $(window).on('scroll', function(){
      var scrolling =  $(this).scrollTop();

        if(scrolling > navOff){
            $('.main-menu').addClass('menu_fix');
        }

        else{
            $('.main-menu').removeClass('menu_fix');
        }

    });

     // Back to Top Button
     $('.bck_to_top').on('click', function(){
      $('html, body').animate({
          scrollTop: 0,
      }, 1500);
  });


  $(window).on('scroll', function(){
      var abc =  $(this).scrollTop();

      if(abc > 150){
          $('.bck_to_top').fadeIn();
      }

      else{
          $('.bck_to_top').fadeOut();
      }
  });

    /*Banner Part Start*/
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    
    /*About Part Start*/
    $('.venobox').venobox(); 


/*Banner Part Start*/
$('.testimonial').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,

    responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
});

//Team Part Start
$('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,

    responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
});

/*Countdown Part Start*/

$('.counter').counterUp();

/*Partner Part Start*/
$('.partner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    dots: false,

    responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
});

});