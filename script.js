document.addEventListener('DOMContentLoaded' , function() {
    let preloader = document.getElementById('preloader')
    let content = document.getElementById('content')

    preloader.style.display = 'none';
    content.style.display = 'block'
});

const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click' , function(e) {
    scrollTop(0 , 1000)
})

function scrollTop(scroll , duration) {
    let doc = document.documentElement;
    let currentTime = duration;
    let speed = 10;

    let animate = () => {
        if(currentTime < 0) return;
        setTimeout(() => {
            doc.scrollTop -= doc.scrollTop / (currentTime / speed)
            console.log(doc.scrollTop)
            currentTime -= speed;
            animate()
        }, speed);
    }

    animate();
}

window.addEventListener('scroll' , function(e) {
    if(document.documentElement.scrollTop > 250) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none'
    }
})
