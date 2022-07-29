
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


var swiperreview = new Swiper(".mySwiper-review", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
			delay: 5000,
		},
	breakpoints: {
			1024: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: false,
					autoplay: {
							delay: false
						}
			},
			768: {
					slidesPerView: 2,
					spaceBetween: 1,
					loop: false,
					autoplay: {
							delay: false
						}
			},
	},
	pagination: {
			clickable: true,
	}
});

var swipericon = new Swiper(".icon_swipper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
			delay: 5000,
		},
	breakpoints: {
			1024: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: false,
					autoplay: {
							delay: false
						}
			},
			768: {
					slidesPerView: 2,
					spaceBetween: 1,
					loop: false,
					autoplay: {
							delay: false
						}
			},
	},
	pagination: {
			clickable: true,
	}
});


var swipericon = new Swiper(".mySwiper-images", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
			delay: 5000,
		},
	breakpoints: {
			1024: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: false,
					autoplay: {
							delay: false
						}
			},
			768: {
					slidesPerView: 2,
					spaceBetween: 1,
					loop: false,
					autoplay: {
							delay: false
						}
			},
	},
	pagination: {
			clickable: true,
	}
});


var swipericon = new Swiper(".mySwiper-accessories", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
			delay: 5000,
		},
	breakpoints: {
			1024: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: false,
					autoplay: {
							delay: false
						}
			},
			768: {
					slidesPerView: 2,
					spaceBetween: 1,
					loop: false,
					autoplay: {
							delay: false
						}
			},
	},
	pagination: {
			clickable: true,
	}
});



var swipericon = new Swiper(".mySwiper_imagetext", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
			delay: 5000,
		},
	breakpoints: {
			1024: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: false,
					autoplay: {
							delay: false
						}
			},
			768: {
					slidesPerView: 3,
					spaceBetween: 1,
					loop: false,
					autoplay: {
							delay: false
						}
			},
	},
	pagination: {
			clickable: true,
	}
});


var swipericon = new Swiper(".mySwipertwocolumns", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
			delay: 5000,
		},
	breakpoints: {
			1024: {
					slidesPerView: 2,
					spaceBetween: 20,
					loop: false,
					autoplay: {
							delay: false
						}
			},
			768: {
					slidesPerView: 2,
					spaceBetween: 1,
					loop: false,
					autoplay: {
							delay: false
						}
			},
	},
	pagination: {
			clickable: true,
	}
});
$(window).scroll(function(e){ 
	var $el = $('.sticky-element'); 
	var isPositionFixed = ($el.css('position') == 'fixed');
	if ($(this).scrollTop() > 300 && !isPositionFixed){ 
		$el.css({'position': 'fixed', 'top': '0px'}); 
	}
	if ($(this).scrollTop() < 300 && isPositionFixed){
		$el.css({'position': 'static', 'top': '0px'}); 
	} 
});
lastScroll = 0;
$(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if(lastScroll - scroll > 0) {
        $(".sticky-element").addClass("top_header");
    } else {
        $(".sticky-element").removeClass("top_header");
    }
    lastScroll = scroll;
});