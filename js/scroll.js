// 메인 스크롤 이벤트
var lastScrollTop = 0;


document.querySelector("body").onscroll = function(){ 
    console.log(document.documentElement.scrollTop)
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      // downscroll code
      headerwrap.classList.add("scroll-up")
      
   }
   else if(window.pageYOffset == 0){
    headerwrap.style.background="transparent" 
    
   } 
   else {
      // upscroll code
      headerwrap.classList.remove("scroll-up")
      headerwrap.style.background="#fff" 
      headerwrap.style.borderBottom = "1px solid #ffbb2e"
   }
   lastScrollTop = st <= 0 ? 0 : st;
}
