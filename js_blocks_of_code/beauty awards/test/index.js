// Prepend back button to sub menu(s)
$('.nav__sub').prepend('<li class="nav__item"><a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i> Back</a></li>');

// Close out sub menu
$('.sub__close').click(function(e) {
    e.preventDefault();

    $(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.nav__link').click(function(e) {
    e.preventDefault();

    $(this).siblings().addClass('is-active');
});