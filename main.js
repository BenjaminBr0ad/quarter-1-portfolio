$( document ).ready(function(){

  $(".button-collapse").sideNav(); // SideNav

  $('.parallax').parallax(); // Parallax

  $('.tooltipped').tooltip({delay: 50}); // Top & bottom menu tooltips

// ====== [ SCROLL FIRE ] ====== //
  var options = [
  {selector: '#index-reveal', offset: 200, callback: function(el) {
    Materialize.showStaggeredList($(el));
  } }
];
  Materialize.scrollFire(options);
// ===== [ END SCROLL FIRE ] ===== //


var controller = new ScrollMagic.Controller();

}) // ===== [ END DOCUMENT READY ] ===== //
