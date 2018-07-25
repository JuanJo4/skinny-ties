$(document).ready(function() {
  TiesSlider();
});

function TiesSlider() {
  $(".owl-carousel").owlCarousel({
    nav:true,
    responsive:{
        0:{
            items: 3
        },
        400:{
            items: 5
        },
        960:{
            items: 9
        }
    }
  });
}
