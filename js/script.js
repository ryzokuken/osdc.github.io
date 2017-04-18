$('.bars').click(function() {
  $('.navpane').animate({'left': '+=280px'}, 200);
});

$('.close').click(function() {
  $('.navpane').animate({'left': '-=280px'}, 200);
});

Typed.new(".typewriter", {
  strings: [
    'Development',
    'Design',
    'Security',
    'Linux',
    'Open Source',
    'Free',
    'Hacker',
    'Cypherpunk'
  ],
  typeSpeed: 0,
  loop: true,
  shuffle: true,
  showCursor: false
});
