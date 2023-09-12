$(function() {

      /*      Fixed header       */

      let header = $("#header");
      let intro = $("#intro");
      let introH = intro.innerHeight();
      let scroollPos = $(window).scrollTop();
      let nav = $("#nav");
      let navToggle = $("#navToggle");


      $(window).on("scroll", function() {
         let introH = intro.innerHeight();
         scroollPos = $(this).scrollTop();
         if( scroollPos >= 95 ) {
            header.addClass("fixed");
         } else {
            header.removeClass("fixed");
         }


      });

      /* Smooth Scrol */

      $("[data-scroll]").on("click", function(event) {
         event.preventDefault();
         
         let elementId = $(this).data("scroll");
         let elementOffset = $(elementId).offset().top;

         nav.removeClass("show");

         $("html, body").animate({
            scrollTop: elementOffset - 70
         }, 700);
      });



      /* Nav Toggle */
      navToggle.on("click", function(event){
         event.preventDefault();

         nav.toggleClass("show");
      });

      

      /* Reviews: */
      let slider = $("#reviewsSlider");

      slider.slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         fade: false,
         arrows: false,
         dots: true
      }); 
}); 