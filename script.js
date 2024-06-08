// slider start
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slider = document.querySelector('.slider');
const imageSlide = document.querySelectorAll('.image-slider')
let slideNumber = 1;
let imageLength = imageSlide.length;
console.log(imageLength)
// next slider
const nextSlider = () => {
    slider.style.transform = `translateX(-${slideNumber * 100}%)`;
    slideNumber++;

}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0%)`;
    console.log(`translateX(0%)`)
    slideNumber = 1;
}
nextBtn.addEventListener('click', function () {
    slideNumber < imageLength ? nextSlider() : getFirstSlide();


})
//prev slider
const prevSlider = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
    slideNumber--;
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(imageLength - 1) * 100}%)`;
    slideNumber = imageLength;
}
prevBtn.addEventListener('click', function () {
    slideNumber > 1 ? prevSlider() : getLastSlide();
})
// slider end