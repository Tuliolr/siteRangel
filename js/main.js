/* Menu */

$('.mobile-btn').click(function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});

/* slide*/
function slider(sliderName, velocidade) {
	var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate =  setInterval(rotateSlide, velocidade);

		$(sliderClass + ' > :first').addClass(activeClass);

/* Para o slide para com o passar do mouse
		$(sliderClass).hover(function(){
			clearInterval(rotate);
		}, function() {
			rotate =  setInterval(rotateSlide, velocidade);
		});

    */

		function rotateSlide(){
			var activeSlide = $(sliderClass + ' > .' + activeClass),
					nextSlide = activeSlide.next();

					if (nextSlide.length == 0) {
							nextSlide = $(sliderClass + ' > :first');
					}
					activeSlide.removeClass(activeClass);
					nextSlide.addClass(activeClass);
		}
}

slider('container-slide', 3000);
