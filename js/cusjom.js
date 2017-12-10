$(document).ready(function() {

	// fullpage plugin init
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
		menu: '#js-menu',
		autoScrolling: false,
		scrollingSpeed: 1200,
		fitToSection: false
	});

	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling");
		}
	});

	// rellax init
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
	

	// owl-carousel plugin
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1600:{
	            items:4
	        }
	    }
	});

});