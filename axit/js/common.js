// $(function() {




// $(".sect_1 .in").animated("fadeInDown");



// var theToggle = document.getElementById('toggle');

// // based on Todd Motto functions
// // http://toddmotto.com/labs/reusable-js/

// // hasClass
// function hasClass(elem, className) {
// 	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
// }
// // addClass
// function addClass(elem, className) {
// 	if (!hasClass(elem, className)) {
// 		elem.className += ' ' + className;
// 	}
// }
// // removeClass
// function removeClass(elem, className) {
// 	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
// 	if (hasClass(elem, className)) {
// 		while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
// 			newClass = newClass.replace(' ' + className + ' ', ' ');
// 		}
// 		elem.className = newClass.replace(/^\s+|\s+$/g, '');
// 	}
// }
// // toggleClass
// function toggleClass(elem, className) {
// 	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
// 	if (hasClass(elem, className)) {
// 		while (newClass.indexOf(" " + className + " ") >= 0 ) {
// 			newClass = newClass.replace( " " + className + " " , " " );
// 		}
// 		elem.className = newClass.replace(/^\s+|\s+$/g, '');
// 	} else {
// 		elem.className += ' ' + className;
// 	}
// }

// theToggle.onclick = function() {
// 	toggleClass(this, 'on');
// 	return false;
// }


// // tabs

// $('.nav-tabs-dropdown').each(function(i, elm) {
    
//     $(elm).text($(elm).next('ul').find('li.active a').text());
    
// });
  
// $('.nav-tabs-dropdown').on('click', function(e) {

//     e.preventDefault();
    
//     $(e.target).toggleClass('open').next('ul').slideToggle();
    
// });

// $('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function(e) {

//     e.preventDefault();
    
//     $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
      
// });















// 	//SVG Fallback
// 	if(!Modernizr.svg) {
// 		$("img[src*='svg']").attr("src", function() {
// 			return $(this).attr("src").replace(".svg", ".png");
// 		});
// 	};

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// });



$(function(){function e(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")}function t(t,n){var a=" "+t.className.replace(/[\t\r\n]/g," ")+" ";if(e(t,n)){for(;a.indexOf(" "+n+" ")>=0;)a=a.replace(" "+n+" "," ");t.className=a.replace(/^\s+|\s+$/g,"")}else t.className+=" "+n}$(".sect_1 .in").animated("fadeInDown");var n=document.getElementById("toggle");n.onclick=function(){return t(this,"on"),!1},$(".nav-tabs-dropdown").each(function(e,t){$(t).text($(t).next("ul").find("li.active a").text())}),$(".nav-tabs-dropdown").on("click",function(e){e.preventDefault(),$(e.target).toggleClass("open").next("ul").slideToggle()}),$('#nav-tabs-wrapper a[data-toggle="tab"]').on("click",function(e){e.preventDefault(),$(e.target).closest("ul").hide().prev("a").removeClass("open").text($(this).text())}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$("form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"mail.php",data:e.serialize()}).done(function(){alert("Thank you!"),setTimeout(function(){e.trigger("reset")},1e3)}),!1});try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(a){}$("img, a").on("dragstart",function(e){e.preventDefault()})});