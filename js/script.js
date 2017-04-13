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

$('body').on('click', '.fa-angle-double-right', function() {
  $('.navpane').animate({
    left: '+=50vw'
  }, 200);
  $('.fa-angle-double-right').animate({
    left: '+=50vw'
  }, 200, function() {
    $(this).addClass('fa-angle-double-left');
    $(this).removeClass('fa-angle-double-right');
  });
});

$('body').on('click', '.fa-angle-double-left', function() {
  $('.navpane').animate({
    left: '-=50vw'
  }, 200);
  $('.fa-angle-double-left').animate({
    left: '-=50vw'
  }, 200, function() {
    $(this).addClass('fa-angle-double-right');
    $(this).removeClass('fa-angle-double-left');
  });
});