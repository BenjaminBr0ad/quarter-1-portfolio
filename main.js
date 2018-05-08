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
  if (window.innerWidth >= 992) {
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
    .on("start", function (e) {
      TweenMax.to($("#slogan"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
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
    .on("start", function (e) {
      TweenMax.to($("#banner-1"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 0 : 1});
    })
    // .addIndicators()
    .addTo(controller);

  } else if (window.innerWidth < 992) {
    var fadeInSlogan = new ScrollMagic.Scene({
      triggerElement: "#banner-1",
      offset: 100
    })
    .on("start", function (e) {
      TweenMax.to($("#slogan"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
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
  }
//==========================================//
//=================Banner #2================//
  if (window.innerWidth >= 992) {
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
    .on("start", function (e) {
      TweenMax.to($("#banner-2"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);

    var fadeOutBanner2 = new ScrollMagic.Scene({
      triggerElement: "#banner-2",
      offset: 2200
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-2"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 0 : 1});
    })
    // .addIndicators()
    .addTo(controller);

  } else if (window.innerWidth < 992) {
    var fadeInBanner2 = new ScrollMagic.Scene({
      triggerElement: "#banner-2"
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-2"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);

    var fadeOutBanner2 = new ScrollMagic.Scene({
      triggerElement: "#banner-2",
      offset: 2200
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-2"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 0 : 1});
    })
    // .addIndicators()
    .addTo(controller);
  }
//==========================================//
//=================Banner #3================//
  if (window.innerWidth >= 992) {
    var bannerPin3 = new ScrollMagic.Scene({
      duration: 2000,
      offset: 5800
    })
    .setPin("#banner-3")
    // .addIndicators()
    .addTo(controller);

    var fadeInBanner3 = new ScrollMagic.Scene({
      triggerElement: "#banner-3"
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-3"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);

    var fadeOutBanner3 = new ScrollMagic.Scene({
      triggerElement: "#banner-3",
      offset: 2200
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-3"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 0 : 1});
    })
    // .addIndicators()
    .addTo(controller);

  } else if (window.innerWidth < 992) {
    var fadeInBanner3 = new ScrollMagic.Scene({
      triggerElement: "#banner-3"
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-3"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
    // .addIndicators({name:"1 (duration:0)"})
    .addTo(controller);

    var fadeOutBanner3 = new ScrollMagic.Scene({
      triggerElement: "#banner-3",
      offset: 2200
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-3"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 0 : 1});
    })
    // .addIndicators()
    .addTo(controller);
  }
//==========================================//
//=================Banner #4================//
  if (window.innerWidth >= 992) {
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
    .on("start", function (e) {
      TweenMax.to($("#banner-4"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
    // .addIndicators()
    .addTo(controller);

    var fadeOutBanner4 = new ScrollMagic.Scene({
      triggerElement: "#banner-4",
      offset: 2500
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-4"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 0 : 1});
    })
    // .addIndicators()
    .addTo(controller);

  } else if (window.innerWidth < 992) {
    var fadeInBanner4 = new ScrollMagic.Scene({
      triggerElement: "#banner-4"
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-4"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 1 : 0});
    })
    // .addIndicators()
    .addTo(controller);

    var fadeOutBanner4 = new ScrollMagic.Scene({
      triggerElement: "#banner-4",
      offset: 2200
    })
    .on("start", function (e) {
      TweenMax.to($("#banner-4"), 0.2, {opacity: e.scrollDirection === "FORWARD" ? 0 : 1});
    })
    // .addIndicators()
    .addTo(controller);
  }
//==========================================//
//=================Local Storage================//
  const renderUserInfo = function () {
    if (!localStorage.getItem('user_data')) {

    } else if (localStorage.getItem('user_data')) {
    let userInfo = JSON.parse(localStorage.getItem('user_data'))
    $('#icon_prefix').val(userInfo.name)
    $('#icon_telephone').val(userInfo.phone)
    $('#icon_email').val(userInfo.email)
    }
  }
  renderUserInfo()

  $('#submit').click(function () {
    let userInfo = {}
    if (document.getElementById('icon_prefix').checkValidity() && document.getElementById('icon_telephone').checkValidity() && document.getElementById('icon_email').checkValidity()) {
      userInfo.name = $('#icon_prefix').val()
      userInfo.phone = $('#icon_telephone').val()
      userInfo.email = $('#icon_email').val()
      localStorage.setItem('user_data', JSON.stringify(userInfo))
    }
  })

}) // ===== [ END DOCUMENT READY ] ===== //
