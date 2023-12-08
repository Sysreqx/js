document.addEventListener('DOMContentLoaded', function () {
    const topBlock = document.querySelector('.top-block');
    const bottomBlock = document.querySelector('.bottom-block');

    window.addEventListener('scroll', function () {
        const scrollPosition = document.documentElement.scrollTop;

        // Прокрутка верхнего блока с эффектом прозрачности
        topBlock.style.opacity = 1 - scrollPosition / (topBlock.offsetHeight / 2);

        // Показ нижнего блока при достижении определенной высоты
        if (scrollPosition > topBlock.offsetHeight / 2) {
            bottomBlock.classList.add('show');
        } else {
            bottomBlock.classList.remove('show');
        }
    });
});
