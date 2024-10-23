
window.addEventListener('scroll',function(){
    let header = document.querySelector('.header');
    let scrollPosition = window.scrollY;
    
    if(scrollPosition > 50) {
        header.classList.add('headerFixed');
    } else {
        header.classList.remove('headerFixed');
    }

    // console.log(rect.top) // .top를 붙이면 상단에서 얼마나 떨어져 있는지 확인 가능
    // console.log(window.innerHeight) // 모니터에 따라 height값이 다른데 그 값을 알려주는 기능
    
    let aniElement = document.querySelectorAll('.ani');

    for(let i = 0; i < aniElement.length; i++) {
        const ani = aniElement[i];
        const rect = ani.getBoundingClientRect(); // 해당 div가 상단에서 얼마나 떨어져 있는지 확인 가능

        if (rect.top < window.innerHeight / 1.25) { // react.top 값이 window.innerHeight 를 1.2로 나눈 값 보다 작으면 실행
            ani.style.opacity = '1';
            ani.style.transform = 'translateY(0)';
        }
    }


}) 












