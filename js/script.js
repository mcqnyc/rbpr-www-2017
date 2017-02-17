$(document).ready(function(){

    /* For the sticky navigation */
    $('.js--services-section').waypoint(function(direction){
      if(direction === "down"){
          $('.sticky-header-nav').css('opacity', 1)
      } else {
          $('.sticky-header-nav').css('opacity', 0)
      }
    }, {
      offset: '68em'
    });
    
    
    /* Navigation scroll */
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }
      });
    });
    
    /* Animated Accordion (Slide Down) */

//  Fix this to remove global const; Also - transpile it
    const accordions = document.getElementsByClassName("services-accordion");

    for (let i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      }
    }

    /* Animated slide on philosophy section */ 

    function myFunction() {
      const x = document.getElementById("philosophy-section");
      // const x = document.getElementById("philosophy-toggle-content");
      // var x = document.getElementById('myDIV');
      // if (x.style.display === 'none') {
      //     x.style.display = 'block';
      // } else {
      //     x.style.display = 'none';
      // }
      if (x.style.overflow === 'hidden') {
          x.style.overflow = 'visible';
      } else {
          x.style.overflow = 'hidden';
      }
    }
/*
  put a + button on top, greyed out background:
  on click toggle the css property to be active 
  so it does what is indicated there

    if overflow: hidden; is true
    change it to the setting that shows all the text
    
    also, change the button to be a "-" and remove 
    the greyed out background
*/


    /* Animate on scroll */
    $('.js--fade-in').waypoint(function(direction){
        $('.js--fade-in').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--fade-up-phone').waypoint(function(direction){
        $('.js--fade-up-phone').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--fade-in-cities').waypoint(function(direction){
        $('.js--fade-in-cities').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--pulse-plan').waypoint(function(direction){
        $('.js--pulse-plan').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
});
