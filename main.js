$(document).ready(function() {
  $('.list-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
  $('.top-nav .nav-link').on('click', function() {
    $('.list-toggle').removeClass('open');
    $('.top-nav').removeClass('open');
  });
  $('nav a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 1000);
  });
  document.getElementById('up').addEventListener('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  });
  AOS.init({
    easing: 'ease',
    duration: 1500,
    once: true
  });
});