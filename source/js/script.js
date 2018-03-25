  /*--Water Wheel Carousel--*/
$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({
    startingItem: 4,
    flankingItems: 4,
    separation: 200,
    sizeMultiplier: 0.8,
    separationMultiplier: 0.7,
    speed: 250,
    opacityMultiplier: 1
  });

  $('#prev').on('click', function (){
    carousel.prev();
    return false;
  });
  $('#next').on('click', function (){
    carousel.next();
    return false;
  });
});

  /*--Owl Carousel--*/
$(document).ready(function () {
  $(".reviews__carousel").owlCarousel({
    navText: ["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
    margin: 25,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
        nav : true,
        dots: false,
        center: true,
        startPosition: 1,
      },
    }
  })
});
