
function slidesPlugin(activeSlide){

    const slides = document.querySelectorAll('.slide')

    

    slides[activeSlide].classList.add('active')
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
            
        })
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

let getNum = function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

slidesPlugin(getNum(0, 4))