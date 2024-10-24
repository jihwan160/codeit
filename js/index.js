
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


// 메인 input 글자 애니메이션

const inputElement = document.querySelector('#mainInput');
const words = ['코딩 기초','파이썬','데이터 분석','프론트엔드','백엔드'];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let delay = 0
let typingInterval;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting === true) {
        charIndex--;
        inputElement.value = currentWord.substring(0,charIndex);

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }else {
        charIndex++;
        inputElement.value = currentWord.substring(0,charIndex);

        if (charIndex === currentWord.length) {
            if(delay === 0) {
                delay = 500;
                setTimeout(() => {
                    deleting = true;
                    delay = 0
                }, delay);
            }
        }
    }
}

function startTyping() {
    typingInterval = setInterval(typeEffect,deleting ? 100 : 60);
}

inputElement.addEventListener('click',function(){
    if(typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }
})

document.addEventListener('click',(event)=>{
    if(!typingInterval && event.target !== inputElement) {
        startTyping();
    }
})

startTyping();






