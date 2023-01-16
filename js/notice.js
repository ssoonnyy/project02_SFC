$(function(){

  const btnNotice = $('.bg_notice_box .notice_box .btn_notice li');
  const noticeSheet = $('.notice_sheetbox>div')

  btnNotice.click(function(){
  
    let target = $(this);
    let i = target.index();

    btnNotice.removeClass('notice_on');
    btnNotice.eq(i).addClass('notice_on');

    noticeSheet.removeClass('on_sheet');
    noticeSheet.eq(i).addClass('on_sheet');
    

    
    let box = $('.on_sheet>div')
  
    box.mouseover(function(){
      let target =$(this);
      let i = target.index();
      box.eq(i).css({'transition': 'all 0.4s'})
      box.eq(i).css({'transform':'translate(-5px,-10px)'})
      box.eq(i).css({'box-shadow': '10px 10px 5px gray'})
    })
  
    box.mouseout(function(){
      let target =$(this);
      let i = target.index();
      box.eq(i).css({'transform':'translate(0)'})
      box.eq(i).css({'box-shadow': 'none'})
    })
  
  }); // btn notice click event

  let box = $('.on_sheet>div')
  
  box.mouseover(function(){
    let target =$(this);
    let i = target.index();
    box.eq(i).css({'transition': 'all 0.4s'})
    box.eq(i).css({'transform':'translate(-5px,-10px)'})
    box.eq(i).css({'box-shadow': '10px 10px 5px gray'})
  })

  box.mouseout(function(){
    let target =$(this);
    let i = target.index();
    box.eq(i).css({'transform':'translate(0)'})
    box.eq(i).css({'box-shadow': 'none'})
  })
}); 

