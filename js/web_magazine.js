
document.addEventListener("DOMContentLoaded",()=>{
  let toggleBtn = document.querySelector('.btn_web_magazine')
  let changeImg01 = document.querySelector('.change01>img')
  let changeImg02 = document.querySelector('.change02>img')

  let changeTxt01 = document.querySelector('.change_txt01>div>p')
  let changeTxt02 = document.querySelector('.change_txt02>div>p')

  let state = false

  if(matchMedia("all and (min-width:302px) and (max-width:1023px)").matches){
    var swiper = new Swiper(".magazine_box", {
      effect: "cards",
      grabCursor: true,
    });
  }else if(matchMedia("all and (min-width:1024px)").matches){
    toggleBtn.addEventListener('click',()=>{
      if(!state) {
        toggleBtn.style.transform = "rotate(360deg)"
        changeImg01.style.transform = "rotateY(360deg)"
        changeImg02.style.transform = "rotateY(360deg)"
        changeImg01.setAttribute('src','./images/web_magazine03.png')
        changeImg02.setAttribute('src','./images/web_magazine04.jpg')

        if(matchMedia("all and (min-width:320px) and (max-width: 1023px)").matches) {
          changeTxt01.innerHTML = '무용 전문 <span style="color:green">춤:in</span>'
          changeTxt02.innerHTML = '연극 전문 웹진 <span style="color:orange">연극:in</span>'
        } else if(matchMedia("all and (min-width:1024px)").matches) {
          changeTxt01.innerHTML = '무용 전문 웹진 춤:in <span style="color:green">춤:in</span><br/>서울문화재단의 무용 전문 웹 매거진 채널 "춤:in"에서 다양한 정보를 확인하세요.'
          changeTxt02.innerHTML = '연극 전문 웹진 연극:in <span style="color:orange">연극:in</span><br/>서울문화재단의 연극 전문 웹 매거진 채널 "연극 in"에서 다양한 정보를 확인하세요.'
        }
        state = true
      }else if(state) {
        toggleBtn.style.transform = "rotate(0)"
        changeImg01.style.transform = "rotateY(0)"
        changeImg02.style.transform = "rotateY(0)"
        changeImg01.setAttribute('src','./images/web_magazine01.png')
        changeImg02.setAttribute('src','./images/web_magazine02.jpg')
        if(matchMedia("all and (min-width:320px) and (max-width: 1023px)").matches) {
          changeTxt01.innerHTML = "문학 전문 웹진 <span style='color:blue'>비유</span>"
          changeTxt02.innerHTML = "문화예술 종합월간지 <span style='color:green'>문화플러스서울</span>"
        }else if(matchMedia("all and (min-width:1024px)").matches) {
          changeTxt01.innerHTML = "문학 전문 웹진 <span style='color:blue'>비유</span><br/>서울문화재단의 무용 전문 웹 매거진 '비유'에서 다양한 정보를 확인하세요."
          changeTxt02.innerHTML = "문화예술 종합월간지 <span style='color:green'>문화플러스서울</span><br/>서울문화재단의 문화예술웹 매거진 채널 '문화서울플러스'에서 다양한 정보를 확인하세요."
        }
        state = false
      }
    })
  }
  window.onresize = function(){
  document.location.reload();
  };
})