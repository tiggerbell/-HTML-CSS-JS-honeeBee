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

// //더보기 누르면 스크롤 이동
// const seeMore = document.querySelector('.btnMore')
// seeMore.addEventListener("click",()=>{
//     let value = window.scrollY
//     value
//     if(value > 400){
//         mainText.style.animation = "disappear 1s ease-in-out forwards"
//     }
//     else{
//         mainText.style.animation = 'slide 1s ease-out'
//     }
//     })
// })

//top 버튼
const topBtn = document.querySelector('#moveTopBtn');
topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//팀원 소개 스크롤이벤트
(function () {
    // window.addEventListener('scroll', function() {
    //     info.innerHTML = window.pageYOffset;
    // });
    let scrollEl = document.querySelector(".bbb");
    let scrollEl2 = document.querySelector('.background ');
    let scrollElTop = scrollEl.getBoundingClientRect().top + window.pageYOffset;
    let scrollElTop2 = scrollEl2.getBoundingClientRect().top + window.pageYOffset;
    window.addEventListener('scroll', function () {
        console.log(window.scrollY)
        // console.log(scrollElTop)

        if (window.scrollY > 1224) {
            scrollEl.classList.add('fixed');
            if ((window.scrollY >= 4450)) {
                scrollEl.classList.add('end');
                console.log(window.scrollY)
            }
            else {
                scrollEl.classList.remove('end');
            }
        }
        else {
            scrollEl.classList.remove('fixed');
        }
    })
})();