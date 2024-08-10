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
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
})(jQuery);

var billInfo1 = "";
var billButtons = document.querySelectorAll('.btn-group-custom .btn');

billButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        billInfo1 = this.getAttribute('data-value'); // Capture the data-value of the clicked button
        console.log('Selected Bill Info:', billInfo1); // For debugging purposes
        
        // Remove the green class from all buttons except the clicked one
        billButtons.forEach(btn => {
            if (btn !== this) {
                btn.classList.remove('green-button');
            }
        });
        
        // Add the green class to the clicked button
        this.classList.add('green-button');
    });
});

function submitHandler1 () {
    event.preventDefault();
    console.log("Hello");
    var form = document.querySelector('.form1');
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        console.log("returned");
        return;
    }
    var firstName = document.querySelector('input[name="firstName1"]').value;
    var emailID = document.querySelector('input[name="emailID1"]').value;
    var mobileNumber = document.querySelector('input[name="mobileNumber1"]').value;
    if(mobileNumber.length !== 10) {
        alert("Please enter a valid mobile number");
        return;
    }

// Add event listeners to the buttons
    
    var specialNote = document.querySelector('textarea[name="specialNote1"]').value;
    if(specialNote === "") {
        specialNote = "None";
    }
    var preFilledLink = 'https://docs.google.com/forms/d/e/1FAIpQLSck5TIZlZtXdX_aYUGPdoX_OTCPnY2-y4-ST744_f2tgVkUWw/viewform?usp=pp_url&entry.368488719=' + encodeURIComponent(firstName) + '&entry.1117197037=' + encodeURIComponent(emailID) + '&entry.1327484179=' + encodeURIComponent(mobileNumber) + '&entry.1581777149=Residential' + '&entry.1659302869=' + encodeURIComponent(billInfo1) + '&entry.1103337190=' + encodeURIComponent(specialNote);
    
    // window.location.href = preFilledLink;
    window.open(preFilledLink, '_blank').focus(); 
}

function submitHandler2 () {
    event.preventDefault();
    console.log("Hello");
    var form = document.querySelector('.form2');
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        console.log("returned");
        return;
    }
    var firstName = document.querySelector('input[name="firstName2"]').value;
    var emailID = document.querySelector('input[name="emailID2"]').value;
    var mobileNumber = document.querySelector('input[name="mobileNumber2"]').value;
    if(mobileNumber.length !== 10) {
        alert("Please enter a valid mobile number");
        return;
    }
    var billInfo = document.querySelector('input[name="monthlyBillValuetext2"]').value;
    var specialNote = document.querySelector('textarea[name="specialNote2"]').value;
    if(specialNote === "") {
        specialNote = "None";
    }
    var preFilledLink = 'https://docs.google.com/forms/d/e/1FAIpQLSck5TIZlZtXdX_aYUGPdoX_OTCPnY2-y4-ST744_f2tgVkUWw/viewform?usp=pp_url&entry.368488719=' + encodeURIComponent(firstName) + '&entry.1117197037=' + encodeURIComponent(emailID) + '&entry.1327484179=' + encodeURIComponent(mobileNumber) + '&entry.1581777149=Commercial' + '&entry.1659302869=' + encodeURIComponent(billInfo) + '&entry.1103337190=' + encodeURIComponent(specialNote);
    
    // window.location.href = preFilledLink;
    window.open(preFilledLink, '_blank').focus(); 
}

function submitHandler3 () {
    event.preventDefault();
    console.log("Hello");
    var form = document.querySelector('.form3');
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        console.log("returned");
        return;
    }
    var firstName = document.querySelector('input[name="firstName3"]').value;
    var emailID = document.querySelector('input[name="emailID3"]').value;
    var mobileNumber = document.querySelector('input[name="mobileNumber3"]').value;
    if(mobileNumber.length !== 10) {
        alert("Please enter a valid mobile number");
        return;
    }
    var billInfo = document.querySelector('input[name="monthlyBillValuetext3"]').value;
    var specialNote = document.querySelector('textarea[name="specialNote3"]').value;
    if(specialNote === "") {
        specialNote = "None";
    }
    var preFilledLink = 'https://docs.google.com/forms/d/e/1FAIpQLSck5TIZlZtXdX_aYUGPdoX_OTCPnY2-y4-ST744_f2tgVkUWw/viewform?usp=pp_url&entry.368488719=' + encodeURIComponent(firstName) + '&entry.1117197037=' + encodeURIComponent(emailID) + '&entry.1327484179=' + encodeURIComponent(mobileNumber) + '&entry.1581777149=Industrial' + '&entry.1659302869=' + encodeURIComponent(billInfo) + '&entry.1103337190=' + encodeURIComponent(specialNote);
    
    // window.location.href = preFilledLink;
    window.open(preFilledLink, '_blank').focus(); 
}

const dict = {
    'residential_content': `<p class="mt-4">Our residential solar panel services bring clean energy solutions to your doorstep. We specialize in custom installations tailored to your home's unique needs, maximizing energy efficiency and savings. Our expert team handles everything from design to installation with precision and professionalism, ensuring a seamless transition to solar power.</p>

<p>Transform your home into a powerhouse of sustainability with our premium residential solar
 plant installation services. We specialize in custom installations tailored to your homes unique
 needs and providing top-of-the-line solar solutions that reduce your carbon footprint and
 lowering your energy bills.</p>

<p>Our expert team handles every step of the process- from initial consultation and custom design
 to seamless installation and ongoing maintenance.</p>

<p>Experience the future of energy—harness the power of the sun with SolarMate.</p>

<p class="small fw-medium text-primary">Remove your cursor to view other services<i
                                            class="fa fa-arrow-right ms-2"></i></p>`,
    'commercial_content': `<p>Elevate your business with our comprehensive commercial solar services. We specialize in designing and implementing customized solar solutions tailored to meet the unique energy needs of commercial enterprises. Our expert team works closely with you to assess your energy requirements, analyze your facility, and develop a solar system that maximizes efficiency and savings.</p>

<p> From large-scale installations on rooftops to ground-mounted arrays, we leverage cutting edge
 technology and industry best practices to deliver reliable, cost effective and environmentally
 friendly energy solutions to meet the unique needs of your businesses.</p>

<p>Discover the power of renewable energy and join the growing number of businesses investing in
 solar energy with us.</p>
<p class="small fw-medium text-primary">Remove your cursor to view other services<i
                                            class="fa fa-arrow-right ms-2"></i></p>`,
    'industrial_content': `<p>Transform your industrial facility with our specialized industrial solar services. We excel in crafting tailor-made solar solutions engineered to meet the robust energy demands of industrial operations. Our dedicated team collaborates closely with you to assess your energy needs, conduct thorough site evaluations, and develop a solar system optimized for maximum efficiency and cost-effectiveness.</p>

<p>Committed to delivering high quality, reliable and scalable Solar solutions, we empower
 industries to harness the power of the sun, driving progress towards a greener future.</p>

 <p>Our expert team ensures seamless integration with your existing infrastructure, maximizing
 energy efficiency and sustainability while significantly reducing operational costs.</p>

 <p>Partner with us and take a bold step towards energy independence and environmental
 responsibility.</p>

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
                        // item.addEventListener('click', handleInteraction);
                        // item.addEventListener('touchstart', handleInteraction, { passive: true });
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
                    // const dailyUsage = parseFloat(document.getElementById('dailyUsage').value);

                    // This is a simplified calculation incorporating both values
                    const monthlySavings = monthlyBill/120;
                    const yearlySavings = monthlySavings * 12;
                    const tenYearSavings = yearlySavings * 10;

                    document.getElementById('savingsAmount').textContent = monthlySavings.toFixed(1);
                    document.getElementById('billWithout').textContent = monthlyBill.toFixed(1)*12*8.5;
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