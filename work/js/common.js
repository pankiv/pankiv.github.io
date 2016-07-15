$(function() {

	var header = new Headhesive('.scrollhead', options);

	var options = {
		offset: 800
	}



	$(".number-item p").animated("slideInUp");

	// $(".load_wrap").fadeOut();

	$(".poslygu p").equalHeight();

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".top_nav_hid").slideToggle();
		return false;
	});

	$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".number").offset().top
		}, 2000)	
	});




	$(".portfolio-item").each(function(e) {
		var th = $(this);
		th.attr("href", "#portfolio-img-" + e)
		.find(".portfolio-popup")
		.attr("id", "portfolio-img-" + e );

	});


	$('.portfolio-item').magnificPopup({
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});



	$(".number").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 2000,
			easing: 'swing',
			step: function() {
				$(".number-item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".number-item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "34px",
				numberStep: comma_separator_number_step},
				7000);
		});
		this.destroy();


	}, {
		offset: "65%"
	});



	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 135,
		nav: true,
		autoplay: true,
		navText: "",
		responsive:{
			0:{
				items:1,
				margin: 15,
				nav: true
			},
			600:{
				items:1,
				stagePadding: 100,
				nav: true
			},
			1000:{
				items:1,
				stagePadding: 200,
				nav: true
			}
		}
	});


	$(".carusel_brand").owlCarousel({
		nav: true
	});

	$('.home_gallary_wrap, .ourwork').each(function() {
		$(this).magnificPopup({
			mainClass: 'mfp-zoom-in',
			delegate: 'a',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled:true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	/*
 * Replace all SVG images with inline SVG
 */
 $('img.img-svg').each(function(){
 	var $img = jQuery(this);
 	var imgID = $img.attr('id');
 	var imgClass = $img.attr('class');
 	var imgURL = $img.attr('src');

 	$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

 });

 // svg

 var ripplyScott = (function() {
 	var circle = document.getElementById('js-ripple'),
 	ripple = document.querySelectorAll('.js-ripple');

 	function rippleAnimation(event, timing) {
 		var tl           = new TimelineMax();
 		x            = event.offsetX,
 		y            = event.offsetY,
 		w            = event.target.offsetWidth,
 		h            = event.target.offsetHeight,
 		offsetX      = Math.abs( (w / 2) - x ),
 		offsetY      = Math.abs( (h / 2) - y ),
 		deltaX       = (w / 2) + offsetX,
 		deltaY       = (h / 2) + offsetY,
 		scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

 		console.log('x is:' + x);
 		console.log('y is:' + y);
 		console.log('offsetX is:' + offsetX);
 		console.log('offsetY is:' + offsetY);
 		console.log('deltaX is:' + deltaX);
 		console.log('deltaY is:' + deltaY);
 		console.log('width is:' + w);
 		console.log('height is:' + h);
 		console.log('scale ratio is:' + scale_ratio);

 		tl.fromTo(ripple, timing, {
 			x: x,
 			y: y,
 			transformOrigin: '50% 50%',
 			scale: 0,
 			opacity: 1,
 			ease: Linear.easeIn
 		},{
 			scale: scale_ratio,
 			opacity: 0
 		});

 		return tl;
 	}

 	return {
 		init: function(target, timing) {
 			var button = document.getElementById(target);

 			button.addEventListener('click', function(event) {
 				rippleAnimation.call(this, event, timing);
 			});
 		}
 	};
 })();

 ripplyScott.init('js-ripple-btn', 0.75);

 $(function($){
 	$("#phone").mask("+38(999)-99-99-999");
 });


 $("#sellect").selectize();

 $('.footer .brand').on('click', function () {
 	$('html,body').animate({
 		scrollTop: 0
 	}, 1500);
 });

});


