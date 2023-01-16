document.addEventListener("DOMContentLoaded",()=>{
  if(matchMedia("all and (min-width:320px) and (max-width: 1023px)").matches){
    var swiper = new Swiper(".mySwiper_m", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination_m",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }else if(matchMedia("all and (min-width: 1024px)").matches){
    $(function(){
      let eleWidth = $('.visual_main_frame ul li').innerWidth(); 
      let state = false;

    
      function left() {
        stop();
        direction='left';
        $('.visual_main_frame ul').animate({left : eleWidth*-1},500,function(){
          $(this).children('li:first').insertAfter($(this).children('li:last')); 
          $(this).css('left',0);
          state = false;
        });
      } // left();
    
      function right() {
        stop();
        direction='right';
        $('.visual_main_frame>ul>li:last').insertBefore($('.visual_main_frame>ul>li:first'));
        $('.visual_main_frame>ul').css('left',eleWidth*-1);
        $('.visual_main_frame>ul').animate({left : 0 },500,function(){
          state = false;
        })
      }// right();
    
      $('.btn_left_visual_main').click(function(){
        if(!state) {
          state =true;
          left();
        }
      })
      $('.btn_right_visual_main').click(function(){
        if(!state) {
          state = true;
          right();
        }
      })
    })
  }

  window.onresize = function(){
    document.location.reload();
  };

})




