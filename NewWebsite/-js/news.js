
$.backstretch("");
$(function(){
  $('#slider1').bxSlider({
	mode: 'vertical',
    auto: true,
    autoControls: false,
	controls: false,
    speed: 500,
	pause :6000,
	width: 400,
    randomStart: false,
  });
  $('#topSlider').bxSlider({
	mode: 'fade',
    auto: true,
    autoControls: false,
	controls: false,
    speed: 1000,
	pause :4000,
	randomStart: false,
  });

});

