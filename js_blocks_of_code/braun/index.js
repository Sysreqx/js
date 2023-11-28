// https://esquire.kz/braun_oral-b/

document.addEventListener("DOMContentLoaded", function() {
    const images1 = ["https://esquire.kz/wp-content/uploads/2016/11/19.png", "https://esquire.kz/wp-content/uploads/2016/11/18.png", "https://esquire.kz/wp-content/uploads/2016/11/16.png"]; // Add your image URLs here
    const images2 = ["https://esquire.kz/wp-content/uploads/2016/11/18-1.png", "https://esquire.kz/wp-content/uploads/2016/11/19-1.png", "https://esquire.kz/wp-content/uploads/2016/11/20-1.png"]; // Add your image URLs here
    const images3 = ["https://esquire.kz/wp-content/uploads/2016/11/18.png", "https://esquire.kz/wp-content/uploads/2016/11/16.png"]; // Add your image URLs here
    const images4 = ["https://esquire.kz/wp-content/uploads/2016/11/19-1.png", "https://esquire.kz/wp-content/uploads/2016/11/20-1.png"]; // Add your image URLs here
    const images5 = ["https://esquire.kz/wp-content/uploads/2016/11/324.png", "https://esquire.kz/wp-content/uploads/2016/11/329.png", "https://esquire.kz/wp-content/uploads/2016/11/330.png"]; // Add your image URLs here
    const images6 = ["https://esquire.kz/wp-content/uploads/2016/11/brush-1.png", "https://esquire.kz/wp-content/uploads/2016/11/brush-3.png", "https://esquire.kz/wp-content/uploads/2016/11/brush-3.png", "https://esquire.kz/wp-content/uploads/2016/11/brush-2.png"]; // Add your image URLs here
    let sliderContainer = document.querySelector('.slider-container');

    let sliderImage1 = document.querySelector('.slider-image1')
        .querySelector('div')
        .querySelector('img');

    let sliderImage2 = document.querySelector('.slider-image2')
        .querySelector('div')
        .querySelector('img');

    let sliderImage3 = document.querySelector('.slider-image3')
        .querySelector('div')
        .querySelector('img');

    let sliderImage4 = document.querySelector('.slider-image4')
        .querySelector('div')
        .querySelector('img');

    let sliderImage5 = document.querySelector('.slider-image5')
        .querySelector('div')
        .querySelector('img');

    let sliderImage6 = document.querySelector('.slider-image6')
        .querySelector('div')
        .querySelector('img');

    let currentIndex = 0;
    let currentIndexTwoImages = 0;
    let currentIndexFourImages = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images1.length;
        currentIndexTwoImages = (currentIndexTwoImages + 1) % images3.length;
        currentIndexFourImages = (currentIndexFourImages + 1) % images6.length;

        let imageUrl1 = images1[currentIndex];
        sliderImage1.src = imageUrl1;

        let imageUrl2 = images2[currentIndex];
        sliderImage2.src = imageUrl2;

        let imageUrl3 = images3[currentIndexTwoImages];
        sliderImage3.src = imageUrl3;

        let imageUrl4 = images4[currentIndexTwoImages];
        sliderImage4.src = imageUrl4;

        let imageUrl5 = images5[currentIndex];
        sliderImage5.src = imageUrl5;

        let imageUrl6 = images6[currentIndexFourImages];
        sliderImage6.src = imageUrl6;
        // console.log("img " + currentIndex);
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds
});