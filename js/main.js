
$(document).ready(function () {
    // MOBILE MENU ------------------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('open');
        $('body').toggleClass('bg-active');
    });

    // faq
    $('.faqsect__header').click(function(){
        $('.faqsect__box').not($(this).parent()).removeClass('active');
        $('.faqsect__body').not($(this).next('.faqsect__body')).slideUp();
        $(this).parent().toggleClass('active');
        $(this).next('.faqsect__body').slideToggle();
    });



});