(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


function submitHandler () {
    event.preventDefault();
    console.log("Hello");
    var form = document.querySelector('.form-style');
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }
    var firstName = document.querySelector('input[name="firstName"]').value;
    var emailID = document.querySelector('input[name="emailID"]').value;
    var mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
    var billInfo = document.querySelector('select[name="billInfo"]').value;
    var specialNote = document.querySelector('textarea[name="specialNote"]').value;
    var preFilledLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfLu4e4e0QGVS1-XwN9MVyJyP_vzfZNZtip7GPPq7VwCMmXCw/viewform?usp=pp_url&entry.1510382416=' + encodeURIComponent(firstName) + '&entry.1290999781=' + encodeURIComponent(emailID) + '&entry.786904787=' + encodeURIComponent(mobileNumber) + '&entry.26756016=' + encodeURIComponent(billInfo) + '&entry.1755035927=' + encodeURIComponent(specialNote);
    
    // window.location.href = preFilledLink;
    window.open(preFilledLink, '_blank').focus(); 
}