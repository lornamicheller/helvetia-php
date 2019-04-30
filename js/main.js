(function ($) {
	"use strict";

	// preloader
	$(window).on('load', function () {
		$("#loading").fadeOut(500);
	})

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});

	// sticky-header
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky");
			$("#sticky-logo").attr("src", "img/logo/logo-white.png")
		} else {
			$("#sticky-header").addClass("sticky");
			$("#sticky-logo").attr("src", "img/logo/logo.png");
		}

	});

	$(document).ready(function () {
		event.preventDefault();
		$('.about-us').on('click', () => {
			$('.about-us-info').toggle();
		});
	});



	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	// app-active
	$('.app-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite: true,
		centerMode: true,
		centerPadding: 0,
		autoplay: true,
		responsive: [{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	// testimonial-active
	$('.testimonial-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
		infinite: true,
		autoplay: false,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: false,
			}
		}, ]
	});


	// niceSelect;
	$("select").niceSelect();

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-level-up-alt"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();

	// FORM SCRIPT

	// $(document).ready(function () {
	// 	$('#myform').submit(function (event) {
	// 		'use strict';
	// 		var isValid = true;

	// 		//validate the name entry
	// 		var name = $('#name')
	// 			.val()
	// 			.trim();
	// 		if (name === '') {
	// 			$('#name')
	// 				.next()
	// 				.text('This field is required.');
	// 			isValid = false;
	// 		} else {
	// 			$('#name')
	// 				.next()
	// 				.text('');
	// 		}
	// 		$('#name').val(name);

	// 		//validate the email entry
	// 		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	// 		var email = $('#email')
	// 			.val()
	// 			.trim();
	// 		if (email === '') {
	// 			$('#email')
	// 				.next()
	// 				.text('This field is required.');
	// 			isValid = false;
	// 		} else if (!emailPattern.test(email)) {
	// 			$('#email')
	// 				.next()
	// 				.text('Must be a valid email address');
	// 			isValid = false;
	// 		} else {
	// 			$('#email')
	// 				.next()
	// 				.text('');
	// 		}
	// 		$('#email').val(email);
	// 		//validate the phone number entry
	// 		var phone = $('#phone')
	// 			.val()
	// 			.trim();
	// 		if (phone === '') {
	// 			$('#phone')
	// 				.next()
	// 				.text('This field is required.');
	// 			isValid = false;
	// 		} else {
	// 			$('#phone')
	// 				.next()
	// 				.text("");
	// 		}
	// 		$('#phone').val(phone);

	// 		//validate the subject entry
	// 		var subject = $('#subject')
	// 			.val()
	// 			.trim();
	// 		if (subject === '') {
	// 			$('#subject')
	// 				.next()
	// 				.text('This field is required.');
	// 			isValid = false;
	// 		} else {
	// 			$('#subject')
	// 				.next()
	// 				.text('');
	// 		}
	// 		$('#subject').val(subject);

	// 		//validate the message entry
	// 		var message = $('#message')
	// 			.val()
	// 			.trim();
	// 		if (message === '') {
	// 			$('#message')
	// 				.next()
	// 				.text('This field is required.');
	// 			isValid = false;
	// 		} else {
	// 			$('#message')
	// 				.next()
	// 				.text('');
	// 		}
	// 		$('#message').val(message);

	// 		//prevent default action
	// 		if (isValid === false) {
	// 			event.preventDefault();
	// 		}
	// 	}); //end submit

	// 	//validate form when keyup
	// 	$('#myform').keyup(function () {
	// 		$(this).submit();
	// 	});
	// }); //end ready


	// // FORM SCRIPT ENDS HERE


})(jQuery);