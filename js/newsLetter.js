document.addEventListener("DOMContentLoaded",()=>{
  let newsOpen = document.querySelector('.pc_footer_btnbox .btn_news')
  let newsOpenMobile = document.querySelector('.footer .btn_news')
  let newsClose = document.querySelector('.close_news')

  newsOpen.onclick = openNewsForm
  newsOpenMobile.onclick =openNewFormMobile
  newsClose.onclick = closeNewsForm

  function openNewsForm(){
    document.querySelector('.news_letter').style.display='block'
  }
  function openNewFormMobile(){
    document.querySelector('.news_letter').style.display='block'
  }
  function closeNewsForm(){
    document.querySelector('.news_letter').style.display='none'
  }
})

