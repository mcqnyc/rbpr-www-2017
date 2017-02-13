$(document).ready(function(){
    console.log('doc is ready');
    /* For the sticky navigation */
    $('.js--services-section').waypoint(function(direction){
      console.log('iiiin waypoint');
        if(direction === "down"){
            $('nav').addClass('sticky-header-nav');
            $('nav>a>div').addClass('rbpr-nav-name');
            $('nav>ul>li').addClass('sticky-header-nav');

        } else {
            $('nav').removeClass('sticky-header-nav');
        }
    }, {
      offset: 1em;
    });
   
    /* Scroll on buttons */
    // $('.js--scroll-to-plans').click(function(){
    //    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    // });
    
    // $('.js--scroll-to-start').click(function(){
    //    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    // });
    
    
    /* Navigation scroll */
    
    // $(function() {
    //   $('a[href*="#"]:not([href="#"])').click(function() {
    //     if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html, body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // });
    
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
