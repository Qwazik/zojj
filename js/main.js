$(function() {
    var beforeAfterCarousel = $('#jsBeforeAfterCarousel').owlCarousel({
    	items: 1,
    	loop: true
    });

    var beforeAfterNav = $('.before-after__carousel .carousel-nav');

    $(beforeAfterNav).find('.prev').click(function(){
    	console.log('click');
    	beforeAfterCarousel.trigger('prev.owl.carousel');
    });

    $(beforeAfterNav).find('.next').click(function(){
    	console.log('click');
    	beforeAfterCarousel.trigger('next.owl.carousel');
    });

});
