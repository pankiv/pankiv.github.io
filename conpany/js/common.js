$(function() {

	$(".preloader_overlay").fadeOut();

	$(".portall_item").equalHeights();


	$('ul.sf-menu').superfish({
		hoverClass: "no-class",
		delay: 400
	})
	.after("<div id='mob_menu'>").clone().appendTo("#mob_menu");
	$("#mob_menu").children("ul").removeClass("sf-menu");
	$("#mob_menu").find("*").attr("style", "");




	var $menu = $('#mob_menu');
	var $btnMenu = $('.toggle-mnu');

	$menu.mmenu({
		counters: true 
	});

	var api = $menu.data("mmenu");

	$btnMenu.click(function() {
		api.open();
		$(".toggle-mnu").addClass("on");
	});


	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});



	var owl = $("#owl-example");

	owl.owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		autoplay: true,
		autoplaySpeed: 1500
	});

	$('.customNextBtn').click(function() {
		owl.trigger('next.owl.carousel');
	})
// Go to the previous item
$('.customPrevBtn').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".popup-with-zoom-anim").magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$(".popup-with-zoom-anim").click(function() {
		$("#callback .formname").val($(this).data("form"));
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("is-visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("is-visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});


	/* ---- particles.js config ---- */

	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#3B5998"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#3B5998"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#3B5998",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});


	/* ---- stats.js config ---- */

	var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function() {
		stats.begin();
		stats.end();
		if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
			count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		}
		requestAnimationFrame(update);
	};
	requestAnimationFrame(update);


});

