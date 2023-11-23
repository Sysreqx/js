document.addEventListener("DOMContentLoaded", function() {
    const images = ["https://esquire.kz/wp-content/uploads/2016/11/19.png", "https://esquire.kz/wp-content/uploads/2016/11/18.png", "https://esquire.kz/wp-content/uploads/2016/11/16.png"]; // Add your image URLs here
    let sliderContainer = document.querySelector('.slider-container');

    let sliderImage = document.querySelector('.slider-image');
    sliderImage = sliderImage.querySelector('div');
    sliderImage = sliderImage.querySelector('img');
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        let imageUrl = images[currentIndex];
        sliderImage.src = imageUrl;
        // console.log("img " + currentIndex);
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds
});