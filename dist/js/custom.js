
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
