$( document ).ready(function(){
//====== [ MATERIALIZE FUNCTIONS ] =====//
  $(".button-collapse").sideNav(); // SideNav

  $('.parallax').parallax(); // Parallax

  $('.tooltipped').tooltip({delay: 50}); // Top & bottom menu tooltips

  $('.materialboxed').materialbox(); // Pop-out images
//===== [ END MATERIALIZE FUNCTIONS ] =====//

//===== [ SCROLL MAGIC FUNCTIONALITY ] =====//
  var controller = new ScrollMagic.Controller();
//==========================================//
//=================Banner #1================//
  var bannerPin1 = new ScrollMagic.Scene({
    duration: 1000,
    offset: 300
  })
    .setPin("#banner-1")
    // .addIndicators()
    .addTo(controller);

  var fadeInSlogan = new ScrollMagic.Scene({
    triggerElement: "#banner-1"
    })
    .setTween("#slogan", 1, {opacity: 1})
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);
  var fadeInLocated = new ScrollMagic.Scene({
    triggerElement: "#banner-1"
    })
    .setTween("#located", 1, {opacity: 1})
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);

  var fadeOutBanner1 = new ScrollMagic.Scene({
    triggerElement: "#name-text",
    offset: 350
  })
    .setTween("#banner-1", 1, {opacity:0})
    // .addIndicators()
    .addTo(controller);
//==========================================//
//=================Banner #2================//
  var bannerPin2 = new ScrollMagic.Scene({
    duration: 2000,
    offset: 2500
  })
    .setPin("#banner-2")
    // .addIndicators()
    .addTo(controller);

  var fadeInBanner2 = new ScrollMagic.Scene({
    triggerElement: "#banner-2"
  })
    .setTween("#banner-2", 1, {opacity: 1})
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);

  var fadeOutBanner2 = new ScrollMagic.Scene({
    triggerElement: "#banner-2",
    offset: 2200
  })
    .setTween("#banner-2", 1, {opacity:0})
    // .addIndicators()
    .addTo(controller);
//==========================================//
//=================Banner #3================//
var bannerPin3 = new ScrollMagic.Scene({
  duration: 2000,
  offset: 5900
})
  .setPin("#banner-3")
  // .addIndicators()
  .addTo(controller);

var fadeInBanner3 = new ScrollMagic.Scene({
  triggerElement: "#banner-3"
})
  .setTween("#banner-3", 1, {opacity: 1})
  // .addIndicators({name:"1 (duration:0)"})
  .addTo(controller);

var fadeOutBanner3 = new ScrollMagic.Scene({
  triggerElement: "#banner-3",
  offset: 2200
})
  .setTween("#banner-3", 1, {opacity:0})
  // .addIndicators()
  .addTo(controller);
//==========================================//
//=================Banner #4================//
var bannerPin4 = new ScrollMagic.Scene({
  duration: 2000,
  offset: 9500
})
  .setPin("#banner-4")
  // .addIndicators()
  .addTo(controller);

var fadeInBanner4 = new ScrollMagic.Scene({
  triggerElement: "#banner-4"
})
  .setTween("#banner-4", 1, {opacity: 1})
  .addIndicators()
  .addTo(controller);

var fadeOutBanner4 = new ScrollMagic.Scene({
  triggerElement: "#banner-4",
  offset: 2200
})
  .setTween("#banner-4", 1, {opacity: 0})
  .addIndicators()
  .addTo(controller);
}) // ===== [ END DOCUMENT READY ] ===== //
