$( document ).ready(function(){
//====== [ MATERIALIZE FUNCTIONS ] =====//
  $(".button-collapse").sideNav(); // SideNav

  $('.parallax').parallax(); // Parallax

  $('.tooltipped').tooltip({delay: 50}); // Top & bottom menu tooltips
//===== [ END MATERIALIZE FUNCTIONS ] =====//

//===== [ SCROLL MAGIC FUNCTIONALITY ] =====//
  var controller = new ScrollMagic.Controller();
//==========================================//
//====[index.html]First Parallax Element====//
  var bannerPin = new ScrollMagic.Scene({
    duration: 100,
    offset: 100
  })
  .setPin("#name-banner")
  // .addIndicators()
  .addTo(controller);

  var namePin = new ScrollMagic.Scene({triggerElement: "#name-banner", duration: 100, offset:150})
    .setPin("#name-banner")
    // .addIndicators()
    .addTo(controller);

  var fadeBanner = new ScrollMagic.Scene({triggerElement: "#name-text", offset: 700})
    .setTween("#name-banner", 3, {opacity:0})
    // .addIndicators()
    .addTo(controller)
//==========================================//
  var fadeInHtml = new ScrollMagic.Scene({
    triggerElement: "#name-banner"
  })
    .setTween("#html-icon", 1, {opacity: 1})
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);
//==========================================//
  var fadeInJS = new ScrollMagic.Scene({
    triggerElement: "#name-banner"
  })
    .setTween("#js-icon", 2, {opacity: 1})
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller)
//==========================================//
  var fadeInCSS = new ScrollMagic.Scene({
    triggerElement: "#name-banner"
  })
    .setTween("#css-icon", 3, {opacity: 1})
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller)


}) // ===== [ END DOCUMENT READY ] ===== //
