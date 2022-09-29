const sidebarOpenBtn = document.querySelector('.btn-plus');
const dashboard = document.querySelector('.dashboard');

sidebarOpenBtn.addEventListener('click', () => {
	dashboard.classList.toggle('show-sidebar');
});

const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	spaceBetween: 20,
	loop: true,
});

const swiper2 = new Swiper('.swiper-2', {
	slidesPerView: 4,
	// spaceBetween: 20,
	loop: true,

	// If we need pagination
	pagination: {
		// el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});
