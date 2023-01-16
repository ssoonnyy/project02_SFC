$(function(){
  let tab = $('.flex_box .pc_accordion nav')

  let state = false;

  tab.click(function(){
    if(!state) {
      $(this).children('ul').addClass('on');
      state =true;
    }else {
      $(this).children('ul').removeClass('on');
      state =false;
    }
  });
});


