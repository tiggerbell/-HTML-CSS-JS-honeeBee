    //X 아이콘에 마우스 올렸을 때 애니메이션
    const xBtn = document.querySelector('.closeBtn')
    xBtn.addEventListener("mouseover", () => {
        xBtn.style.transition = 'all 0.5s ease-in'
        xBtn.style.transform = 'rotate(270deg)'
    })
    xBtn.addEventListener("mouseout", () => {
        xBtn.style.transform = 'rotate(-270deg)'
    })

    //X 아이콘 누르면 오른쪽 슬라이드 하며 메인 페이지 다시 보여줌
    const menu = document.querySelector(".menuwrap")
    const show = document.querySelector(".userIcon")
        xBtn.addEventListener("click", () => {
            document.querySelector(".menuwrap").style.display = "none"
            document.querySelector("body").classList.remove("slide-shown")
            menu.classList.toggle("showmenu")
        }) 
        show.addEventListener("click",()=>{
            document.querySelector(".menuwrap").style.display = "grid"
            document.querySelector("body").classList.add("slide-shown")
            menu.classList.toggle("showmenu");
        })

