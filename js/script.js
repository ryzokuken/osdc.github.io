$(window).scroll(function() {
  const scroll = $(this).scrollTop();

  $('.box-header').css({
    'transform': 'translate(0px, -' + scroll / 6 + '%)',
    'transition': 'fadeOut 0.2s'
  });

  $('.fa-angle-double-down').css({
    'transform': 'translate(0px, ' + scroll / 2 + '%)'
  });
});

$('body').on('click', '.fa-bars', function() {
  $('.navpane').animate({
    left: '+=280px'
  }, 200);
  $('.fa-bars').animate({
    left: '+=280px'
  }, 200, function() {
    $(this).addClass('fa-times');
    $(this).removeClass('fa-bars');
  });
});

$('body').on('click', '.fa-times', function() {
  $('.navpane').animate({
    left: '-=280px'
  }, 200);
  $('.fa-times').animate({
    left: '-=280px'
  }, 200, function() {
    $(this).addClass('fa-bars');
    $(this).removeClass('fa-times');
  });
});

$(function(){
  $(".typewriter").typed({
    strings: [
      '<span class="dev">development</span>', 
      '<span class="des">Design<span>', 
      '<span class="sec">security</span>', 
      '<span class="lin">Linux</span>', 
      '<span class="oss">Open Source</span>^2000'
    ],
    typeSpeed: 0,
    loop: true
  });
});