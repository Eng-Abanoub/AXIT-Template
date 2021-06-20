$(function(){
   
   $("html").niceScroll();

   $(window).on('scroll',function(){
      $('.header').css('min-height',$(window).height());
      $('.header .overlay').css('min-height',$(window).height());
   })
   $('.tabs .tab').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
      $($(this).data('tabid')).siblings().hide().end().fadeIn(1000);
      console.log($($(this).data('tabid')));
   })

});

// $(window).on('load',function(){
//    $('.loading-screen .loading').fadeOut(1000,function(){
//       $(this).parent().fadeOut(2000);
//    });
      
//});