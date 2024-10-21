
window.addEventListener('scroll',function(){
    let header = document.querySelector('.header');
    let scrollPosition = window.scrollY;

    if(scrollPosition > 50) {
        header.classList.add('headerFixed');
    } else {
        header.classList.remove('headerFixed');
    }
})












