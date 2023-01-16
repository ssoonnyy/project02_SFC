// header sticky function 
$(function(){
  let target = 0;

  $(window).scroll(function(){
    let st = $(this).scrollTop();
    if(st > target){
      $('.header_box').addClass('header_scrolled');
      $('#btn_top').stop().animate({opacity:1},300)

    }else {
      $('.header_box').removeClass('header_scrolled');
      $('#btn_top').stop().animate({opacity:0},300)
    }
  });
});
/*--------------------------------------------*/
// 모바일 햄버거버튼 컨트롤

$(function(){
  let btnOpen = $('.header_box .header .glnb .gnb .gnb_mobile .btn_ham_open');
  let mobileMenu = $('.mobile_menu_Sheet');
  let btnClose = $('.mobile_menu_Sheet .m_menu_header .m_btn_close');
  
  btnOpen.click(function(){
    mobileMenu.css('right','0').css('width','100%');
  })
  btnClose.click(function(){
    mobileMenu.css('right','-100%').css('width','0');
  })
})



//모바일 메뉴 sheet 컨트롤
$(function(){
  let tab = $('.mobile_menu_Sheet .m_lnbBox .m_lnb_sheetBox div nav')
  let sheet = $('.mobile_menu_Sheet .m_lnbBox .m_lnb_sheetBox div nav ul')
  
  let state = false;

  tab.click(function(){
    if(!state) {
      $(this).find('ul').addClass('on');
      state =true;
    }else {
      $(this).find('ul').removeClass('on');
      state =false;
    }
  });
});
/*--------------------------------------------*/

//pc 메뉴 sheet 컨트롤

  // // 메뉴1
  $(function(){
    $('.pc_menu01').mouseover(function(){
      $('.sheet01_hide').css('display','block');
      $('.pc_lnb_sheet01').stop().animate({
        height:400
      },400);
    });
    $('.pc_lnb_sheet01').mouseover(function(){
      $('.sheet01_hide').css('display','block');
      $('.pc_lnb_sheet01').stop().animate({
        height:400
      },400);
    });

    $('.pc_menu01').mouseleave(function(){
      $('.sheet01_hide').css('display','none');
      $('.pc_lnb_sheet01').stop().animate({
        height:0
      },400);
    })
    $('.pc_lnb_sheet01').mouseleave(function(){
      $('.sheet01_hide').css('display','none');
      $('.pc_lnb_sheet01').stop().animate({
        height:0
      },400);
    })
  })
 // 메뉴2
 $(function(){
  $('.pc_menu02').mouseover(function(){
    $('.sheet02_hide').css('display','block');
    $('.pc_lnb_sheet02').stop().animate({
      height:400
    },400);
  });
  $('.pc_lnb_sheet02').mouseover(function(){
    $('.sheet02_hide').css('display','block');
    $('.pc_lnb_sheet02').stop().animate({
      height:400
    },400);
  });

  $('.pc_menu02').mouseleave(function(){
    $('.sheet02_hide').css('display','none');
    $('.pc_lnb_sheet02').stop().animate({
      height:0
    },400);
  })
  $('.pc_lnb_sheet02').mouseleave(function(){
    $('.sheet02_hide').css('display','none');
    $('.pc_lnb_sheet02').stop().animate({
      height:0
    },400);
  })
})
 // 메뉴3
 $(function(){
  $('.pc_menu03').mouseover(function(){
    $('.sheet03_hide').css('display','block');
    $('.pc_lnb_sheet03').stop().animate({
      height:400
    },400);
  });
  $('.pc_lnb_sheet03').mouseover(function(){
    $('.sheet03_hide').css('display','block');
    $('.pc_lnb_sheet03').stop().animate({
      height:400
    },400);
  });

  $('.pc_menu03').mouseleave(function(){
    $('.sheet03_hide').css('display','none');
    $('.pc_lnb_sheet03').stop().animate({
      height:0
    },400);
  })
  $('.pc_lnb_sheet03').mouseleave(function(){
    $('.sheet03_hide').css('display','none');
    $('.pc_lnb_sheet03').stop().animate({
      height:0
    },400);
  })
})
 // 메뉴4
 $(function(){
  $('.pc_menu04').mouseover(function(){
    $('.sheet04_hide').css('display','block');
    $('.pc_lnb_sheet04').stop().animate({
      height:400
    },400);
  });
  $('.pc_lnb_sheet04').mouseover(function(){
    $('.sheet04_hide').css('display','block');
    $('.pc_lnb_sheet04').stop().animate({
      height:400
    },400);
  });

  $('.pc_menu04').mouseleave(function(){
    $('.sheet04_hide').css('display','none');
    $('.pc_lnb_sheet04').stop().animate({
      height:0
    },400);
  })
  $('.pc_lnb_sheet04').mouseleave(function(){
    $('.sheet04_hide').css('display','none');
    $('.pc_lnb_sheet04').stop().animate({
      height:0
    },400);
  })
})
 // 메뉴5
 $(function(){
  $('.pc_menu05').mouseover(function(){
    $('.sheet05_hide').css('display','block');
    $('.pc_lnb_sheet05').stop().animate({
      height:400
    },400);
  });
  $('.pc_lnb_sheet05').mouseover(function(){
    $('.sheet05_hide').css('display','block');
    $('.pc_lnb_sheet05').stop().animate({
      height:400
    },400);
  });

  $('.pc_menu05').mouseleave(function(){
    $('.sheet05_hide').css('display','none');
    $('.pc_lnb_sheet05').stop().animate({
      height:0
    },400);
  })
  $('.pc_lnb_sheet05').mouseleave(function(){
    $('.sheet05_hide').css('display','none');
    $('.pc_lnb_sheet05').stop().animate({
      height:0
    },400);
  })
})
 // 메뉴6
 $(function(){
  $('.pc_menu06').mouseover(function(){
    $('.sheet06_hide').css('display','block');
    $('.pc_lnb_sheet06').stop().animate({
      height:400
    },400);
  });
  $('.pc_lnb_sheet06').mouseover(function(){
    $('.sheet06_hide').css('display','block');
    $('.pc_lnb_sheet06').stop().animate({
      height:400
    },400);
  });

  $('.pc_menu06').mouseleave(function(){
    $('.sheet06_hide').css('display','none');
    $('.pc_lnb_sheet06').stop().animate({
      height:0
    },400);
  })
  $('.pc_lnb_sheet06').mouseleave(function(){
    $('.sheet06_hide').css('display','none');
    $('.pc_lnb_sheet06').stop().animate({
      height:0
    },400);
  })
})
/*--------------------------------------------*/
