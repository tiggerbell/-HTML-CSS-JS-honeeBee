    //X 아이콘에 마우스 올렸을 때 애니메이션
    const slideOut = document.querySelector('.slideOut')
    slideOut.addEventListener("mouseover", () => {
        slideOut.style.transition = 'all 0.5s ease-in'
        slideOut.style.transform = 'rotate(270deg)'
    })
    slideOut.addEventListener("mouseout", () => {
        slideOut.style.transform = 'rotate(-270deg)'
    })

    //팝업 메뉴에 대한 js
    //X 아이콘 누르면 오른쪽 슬라이드 하며 메인 페이지 다시 보여줌 
    const menuwrap = document.querySelector(".menuwrap")
    const slideIn = document.querySelector(".userIcon")
    slideOut.addEventListener("click", () => {
        menuwrap.classList.toggle("menuwrap-fold")
    }) 
    slideIn.addEventListener("click",()=>{
        menuwrap.classList.toggle("menuwrap-fold")
    })

    
