$(document).ready(function(){

    /* For the sticky navigation */
    $('.js--services-section').waypoint(function(direction){
      if(direction === "down"){
          $('.sticky-header-nav').css('opacity', 1)
      } else {
          $('.sticky-header-nav').css('opacity', 0)
      }
    }, {
      offset: '3em'
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
