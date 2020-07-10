// Preloader
$(window).on('load', function () {
  $(".loader").fadeOut();
  $("#preloder").delay(200).fadeOut("slow");
});
// End_ Preloader

// Background Set
$('.set-bg').each(function () {
  var bg = $(this).data('setbg');
  $(this).css('background-image', 'url(' + bg + ')');
});
// End_Background_Set

// Play Button
var audio, playbtn, seek_bar;
function initAudioPlayer(){
  audio = new Audio();
  audio.src = "music-files/main.m4a";
  audio.loop = false;
  audio.play();

  playbtn = document.getElementById("playpausebtn");

  playbtn.addEventListener("click", playpause);

  function playpause(){
    if(audio.paused){
      audio.play();
      playbtn.style.background = "url(../images/pause.png) no-repeat";
    }
    else{
      audio.pause();
      playbtn.style.background = "url(../images/pause.png) no-repeat";
    }
  }
}
window.addEventListener("load", initAudioPlayer);
// Play Button

// Nav
$(document).ready(function () {
  $('.menu_toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top_nav').toggleClass('open');
  });

  $('.top_nav .nav_link').on('click', function () {
    $('.menu_toggler').removeClass('open');
    $('.top_nav').removeClass('open');
  });
});
// End_Nav

// Page_Animation
AOS.init({
  duration: 800,
  easing: "ease-in-out"
});
// End_Page_Animation