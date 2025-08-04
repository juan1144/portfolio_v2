document.addEventListener('DOMContentLoaded', () => {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelector('.carousel-slides');
        const images = slideshow.querySelectorAll('img');
        const prevBtn = slideshow.querySelector('.prevSlide');
        const nextBtn = slideshow.querySelector('.nextSlide');
        let index = 0;

        function updateSlide() {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            updateSlide();
        });

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % images.length;
            updateSlide();
        });
    });
});