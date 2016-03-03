$(document).ready(function()
{

    var pos = 0;
    var boxSize = $(".box").width();
    if (boxSize <= 980) {
        boxSize = 980;
    }
    $(".box").width(boxSize);
    var boxY = $(window).height();

    $(".box-container").width(boxSize * 4);
    $(".box-container").height(boxY - 136);
    $(".box").height(boxY - 40);


});
$.backstretch("../img/bgx.png");
$(function(){

  $('#topSlider').bxSlider({
	mode: 'fade',
    auto: true,
    autoControls: false,
	controls: false,
    speed: 1000,
	pause :4000,
	randomStart: false,
  });
 // $("#topSlider").hover(function(){
 //  $('#topSlider').prepend( '<img src="img/topOver.png">' );
 //});
});
$(function() {
	$('#menu li')
		.each(function(i){
			$(this).css('background', 'url(../img/nav'+(i+1)+'_o.png) no-repeat');
		})
		.find('img').hover(
			function(){  
				$(this).stop().animate({'opacity' : '0'}, 50);  
			},
			function(){
				$(this).stop().animate({'opacity' : '1'}, 100);
			}
		);
	$('#content li')
    .each(function (i) {
        $(this).css('background', 'url(img/content' + (i + 1) + '_o.png) no-repeat');
    })
    .find('img').hover(
        function () {
            $(this).stop().animate({ 'opacity': '0' }, 50);
        },
        function () {
            $(this).stop().animate({ 'opacity': '1' }, 100);
        }
    );
   	$('.row1').adipoli({
        'startEffect' : 'overlay',
        'hoverEffect' : 'popout'
    });
   	$('.row2').adipoli({
        'startEffect' : 'grayscale',
        'hoverEffect' : 'sliceDown'
    });
	$("#dyna img[title]").tooltip({
 
   // tweak the position
   offset: [10, 2],
 
   // use the "slide" effect
   effect: 'slide',
// add dynamic plugin with optional configuration for bottom edge
}).dynamic({ bottom: { direction: 'down', bounce: true } });

});
