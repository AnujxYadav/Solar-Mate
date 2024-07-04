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
    if(mobileNumber.length !== 10) {
        alert("Please enter a valid mobile number");
        return;
    }
    var billInfo = document.querySelector('select[name="billInfo"]').value;
    var specialNote = document.querySelector('textarea[name="specialNote"]').value;
    var preFilledLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfLu4e4e0QGVS1-XwN9MVyJyP_vzfZNZtip7GPPq7VwCMmXCw/viewform?usp=pp_url&entry.1510382416=' + encodeURIComponent(firstName) + '&entry.1290999781=' + encodeURIComponent(emailID) + '&entry.786904787=' + encodeURIComponent(mobileNumber) + '&entry.26756016=' + encodeURIComponent(billInfo) + '&entry.1755035927=' + encodeURIComponent(specialNote);
    
    // window.location.href = preFilledLink;
    window.open(preFilledLink, '_blank').focus(); 
}

const dict = {
    'residential_content': `<p class="mt-4">Our residential solar panel services bring clean energy solutions to your doorstep. We specialize in custom installations tailored to your home's unique needs, maximizing energy efficiency and savings. Our expert team handles everything from design to installation with precision and professionalism, ensuring a seamless transition to solar power.</p>

<p>With a focus on quality and reliability, we use industry-leading technology and materials to deliver durable and long-lasting solar systems. Whether you're looking to reduce your carbon footprint, lower your electricity bills, or gain energy independence, we're here to make it happen.</p>

<p>Beyond installation, we provide ongoing maintenance and support to keep your solar panels performing at their best for years to come. Our commitment to customer satisfaction means you can trust us to deliver exceptional service every step of the way.</p><p class="small fw-medium text-primary">Remove your cursor to view other services<i
                                            class="fa fa-arrow-right ms-2"></i></p>`,
    'commercial_content': `<p>Elevate your business with our comprehensive commercial solar services. We specialize in designing and implementing customized solar solutions tailored to meet the unique energy needs of commercial enterprises. Our expert team works closely with you to assess your energy requirements, analyze your facility, and develop a solar system that maximizes efficiency and savings.</p>

<p>From large-scale installations on rooftops to ground-mounted arrays, we leverage cutting-edge technology and high-quality materials to ensure optimal performance and longevity. Our commitment to excellence extends beyond installation – we provide ongoing maintenance and support to ensure your solar system operates at peak efficiency for years to come.</p>

<p>By harnessing the power of the sun, you can significantly reduce your operating costs, enhance your sustainability profile, and contribute to a cleaner environment. Join the ranks of forward-thinking businesses embracing renewable energy solutions and take control of your energy future today.</p>
<p class="small fw-medium text-primary">Remove your cursor to view other services<i
                                            class="fa fa-arrow-right ms-2"></i></p>`,
    'industrial_content': `<p>Transform your industrial facility with our specialized industrial solar services. We excel in crafting tailor-made solar solutions engineered to meet the robust energy demands of industrial operations. Our dedicated team collaborates closely with you to assess your energy needs, conduct thorough site evaluations, and develop a solar system optimized for maximum efficiency and cost-effectiveness.</p>

<p>Whether your facility requires rooftop installations, ground-mounted arrays, or solar carports, we leverage state-of-the-art technology and premium-grade materials to ensure robust performance and durability. Our end-to-end services encompass design, installation, and ongoing maintenance, guaranteeing seamless operation and prolonged system lifespan.</p>

<p>By harnessing solar energy, you can substantially reduce operational expenses, bolster your sustainability credentials, and mitigate your carbon footprint. Join the forefront of industrial enterprises embracing renewable energy solutions and secure a competitive edge in today's green economy.</p>
<p class="small fw-medium text-primary">Remove your cursor to view other services<i
                                            class="fa fa-arrow-right ms-2"></i></p>`,
}


const org = {
    'residential_content': `<p>Our residential solar panel services bring clean energy solutions to your
                                        doorstep. We specialize in custom
                                        installations tailored to your home's unique needs, maximizing energy efficiency
                                        and savings.</p>
                                    <p class="small fw-medium text-primary">Hover to Read More<i
                                            class="fa fa-arrow-right ms-2"></i></p>`,
    'commercial_content': `<p>Elevate your business with our comprehensive commercial solar services. Our
                                        expert
                                        team works closely to assess your
                                        requirements, analyze your facility, and develop a solar system that maximizes
                                        efficiency and savings.</p>
                                    <p class="small fw-medium text-primary">Hover to Read More<i
                                            class="fa fa-arrow-right ms-2"></i></p>`,
    'industrial_content': `<p>Transform your industrial facility with our specialized industrial solar
                                        services. We
                                        excel in crafting tailor-made
                                        solar solutions engineered to meet the robust energy demands of industrial
                                        operations.</p>
                                    <p class="small fw-medium text-primary">Hover to Read More<i
                                            class="fa fa-arrow-right ms-2"></i></p>`
}

$(document).ready(function() {
    console.log(window.innerWidth);
    if(window.innerWidth <= 1180) {
        //select all elements of class hover-text and hide 
        $('.hover-text').hide();
    }
    else {
    var timeoutId;
    var originalWidth = $('.col-md-6.col-lg-4.wow.fadeInUp.view1').css('width');

    $('.col-md-6.col-lg-4.wow.fadeInUp.view1').hover(
      function() {
        clearTimeout(timeoutId);
        var that = $(this);
        timeoutId = setTimeout(function() {
          that.siblings().hide(0);
          var child = that.children('.service-item').first();
          child.css({
            'display': 'flex',
            'flex-direction': 'row'
          });
          var icon = child.children('.position-relative').first().children('.service-icon').first();
          // hide the icon
          icon.hide();
          var nonHoverChild = child.children('.position-relative').first().children('.non-hover').first();
          // change the content of the non-hover div to "Hello"
          nonHoverChild.html(dict[nonHoverChild.attr('id')]);
          that.animate({ width: '100%' }, 150);
        }, 500); // 500 milliseconds = 0.5 second
      },
      function () {
        console.log("done");
        var that = $(this);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          var child = that.children('.service-item').first();
          child.css({
            'display': 'block',
            'flex-direction': 'column'
          });
          var icon = child.children('.position-relative').first().children('.service-icon').first();
          // show the icon for large screens
          icon.show();
          var nonHoverChild = child.children('.position-relative').first().children('.non-hover').first();
          // revert the content of the non-hover div
          nonHoverChild.html(org[nonHoverChild.attr('id')]);
          that.animate({ width: originalWidth }, 200, function() {
            that.siblings().show(250);
          });
        }, 500); // 500 milliseconds = 0.5 second
      }
    );
  }
});


document.addEventListener('DOMContentLoaded', function () {
                    const serviceItems = document.querySelectorAll('.service-item');

                    function toggleExpand (item, expand) {
                        if (expand) {
                            item.classList.add('expanded');
                        } else {
                            item.classList.remove('expanded');
                        }
                    }

                    function handleInteraction (e) {
                        const item = e.currentTarget;
                        toggleExpand(item, !item.classList.contains('expanded'));
                        e.stopPropagation();
                    }

                    serviceItems.forEach(item => {
                        item.addEventListener('click', handleInteraction);
                        item.addEventListener('touchstart', handleInteraction, { passive: true });
                    });

                    // Close expanded items when clicking outside
                    document.addEventListener('click', function (e) {
                        if (!e.target.closest('.service-item')) {
                            serviceItems.forEach(item => toggleExpand(item, false));
                        }
                    });

                    document.addEventListener('touchstart', function (e) {
                        if (!e.target.closest('.service-item')) {
                            serviceItems.forEach(item => toggleExpand(item, false));
                        }
                    }, { passive: true });
                });

            function updateSliderValue (slider, outputId) {
                    document.getElementById(outputId).textContent = slider.value;
                    calculateSavings();
                }

                function calculateSavings () {
                    const monthlyBill = parseFloat(document.getElementById('monthlyBill').value);
                    const dailyUsage = parseFloat(document.getElementById('dailyUsage').value);

                    // This is a simplified calculation incorporating both values
                    const monthlySavings = monthlyBill * (dailyUsage / 50); // Adjust this formula as needed
                    const yearlySavings = monthlySavings * 12;
                    const tenYearSavings = yearlySavings * 10;

                    document.getElementById('savingsAmount').textContent = '$' + tenYearSavings.toFixed(1);
                    document.getElementById('billWithout').textContent = monthlyBill.toFixed(1);
                    document.getElementById('billWith').textContent = (monthlyBill - monthlySavings).toFixed(1);
                }

                // Initial calculation
                calculateSavings();

                // Add event listeners to both sliders
                document.getElementById('monthlyBill').addEventListener('input', function () {
                    updateSliderValue(this, 'monthlyBillValue');
                });

                document.getElementById('dailyUsage').addEventListener('input', function () {
                    updateSliderValue(this, 'dailyUsageValue');
                });


document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');

    function toggleExpand(item, expand) {
        if (expand) {
            item.classList.add('expanded');
        } else {
            item.classList.remove('expanded');
        }
    }

    function handleInteraction(e) {
        const item = e.currentTarget;
        toggleExpand(item, !item.classList.contains('expanded'));
        e.stopPropagation();
    }

    serviceItems.forEach(item => {
        item.addEventListener('click', handleInteraction);
        item.addEventListener('touchstart', handleInteraction, { passive: true });
    });

    // Close expanded items when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.service-item')) {
            serviceItems.forEach(item => toggleExpand(item, false));
        }
    });

    document.addEventListener('touchstart', function(e) {
        if (!e.target.closest('.service-item')) {
            serviceItems.forEach(item => toggleExpand(item, false));
        }
    }, { passive: true });
});

document.querySelectorAll('.btn-group .btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
        // Optionally, store the selected value
        // For example, in a hidden form field or a JavaScript variable
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.custom-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
  
    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener('click', function(e) {
        e.preventDefault();
        if (navbarCollapse.style.display === 'block') {
          navbarCollapse.style.display = 'none';
        } else {
          navbarCollapse.style.display = 'block';
        }
      });
  
      // Close the navbar when a nav item is clicked
      var navItems = document.querySelectorAll('.navbar-nav .nav-link');
      navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function() {
          if (window.innerWidth < 992) { // Only on mobile
            navbarCollapse.style.display = 'none';
          }
        });
      });
  
      // Handle resize events
      window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
          navbarCollapse.style.display = '';
        }
      });
    }
  });