
$(document).ready(function () {
    // MOBILE MENU ------------------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('open');
        $('body').toggleClass('bg-active');
    });

    // MOBILE SUBMENU ------------------- //
    $('.submenu > a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.mobile-dropdown').slideToggle();
    });
    $('.mobile-dropdown a').click(function (e) {
        $('.burger').removeClass('open');
        $('.header__nav').removeClass('open');
        $('body').removeClass('bg-active');
    });

    // faq
    $('.faqsect__header').click(function () {
        $('.faqsect__box').not($(this).parent()).removeClass('active');
        $('.faqsect__body').not($(this).next('.faqsect__body')).slideUp();
        $(this).parent().toggleClass('active');
        $(this).next('.faqsect__body').slideToggle();
    });

    // 1 screen - hove

    if ($('.beginjourney__small').length) {
        var bigElement = document.querySelector('.beginjourney__small');

        bigElement.addEventListener('mouseover', function () {
            var boxesElement = this.closest('.beginjourney__boxes');
            if (boxesElement) {
                boxesElement.classList.add('active');
            }
        });

        bigElement.addEventListener('mouseout', function () {
            var boxesElement = this.closest('.beginjourney__boxes');
            if (boxesElement) {
                boxesElement.classList.remove('active');
            }
        });

    }

    // scroll to anchor --- //
    $('.submenu a, .anchor-link').on('click', function (e) {
        var target = $(this.hash);
        if (target.length) {
            var offsetTop = target.offset().top;
            var headerHeight = $('header').outerHeight();
            $('html, body').animate({
                scrollTop: offsetTop - headerHeight + 50
            }, 500);
        }
    });

    // select2
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

});