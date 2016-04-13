$(document).ready(function() {

	$("#phone").mask("+38(999)-99-99-999");
	$("#phone1").mask("+38(999)-99-99-999");
	$("#phone2").mask("+38(999)-99-99-999");

	$('.popup').magnificPopup({type:'image'});
	$('.popup_form').magnificPopup({
		 type: "inline"
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    },
    navText: ""
});

	// Головна картинка 
	function windowResize() {
		$("header").css("min-height", $(window).height()); 
	};
	windowResize();
	$(window).resize(function() {
		windowResize(); 
	});



	// Таби
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");


	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");


	$(".contacts_top .tab_item").not(":first").hide();
	$(".contacts_top .tab").click(function() {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contacts_top .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

	$(".footer_phone .tab_item").not(":first").hide();
	$(".footer_phone .wrapper .tab").click(function() {
		$(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ress = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Дякуємо за заявку! Ми з Вами обовязково зв’яжемося..");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				// save instance in magnificPopup variable
				magnificPopup.close(); 
				ress.trigger("reset");
				// Close popup that is currently opened
			}, 1000);
		});
		return false;
	});
	
});

	$(window).load(function() {

		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 


		$(".top_header").animated("fadeInDown", "faseInDown");

		$(".tabs_header .wrapper").animated("flipInY", "flipInY");

		$(".study_item").animated("fadeInRight", "fadeOutRight");

		$(".s_study form").animated("zoomInRight", "fadeOut");

		$(".s_red h3").animated("slideInUp", "fadeOut");

		$("footer h2").animated("zoomInDown", "fadeOut");
});