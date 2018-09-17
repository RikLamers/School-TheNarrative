import $ from 'jquery';

class Navigation {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = $('.m-navigation');
		this.$body = $('body');
		this.$main = this.$body.find('main');
		this.$navButton = this.$body.find('.m-navigation__toggle');
		this.$nav = this.$holder;
		this.$navList = this.$holder.find('.m-navigation__list');
		this.$navItem = this.$navList.find('.m-navigation__item');
		this.$mobileNavIsVisibile = false;
		this.$hideArray = ['m-heroimage', 'm-who', 'm-portfolio', 'm-two-column'];
	}

	eventListeners() {
		this.$navButton.click((e) => {
			e.preventDefault();
			this.toggleNav();
		});

	}

	toggleNav() {
		if (this.$mobileNavIsVisibile) {
			this.$navButton.removeClass('is--active');
			this.$body.removeClass('overflow-hidden-mobile');
			this.$nav.removeClass('is--active');
			this.$mobileNavIsVisibile = false;
			for (let i = 0; i < this.$hideArray.length; i++) {
				if (this.$main.find(`.${this.$hideArray[i]}`)) {
					$(`.${this.$hideArray[i]}`).css({
						'display': 'block'
					});
				}
			}

		} else {
			this.$navButton.addClass('is--active');
			this.$body.addClass('overflow-hidden-mobile');
			this.$nav.addClass('is--active');
			this.$mobileNavIsVisibile = true;
			for (let i = 0; i < this.$hideArray.length; i++) {
				if (this.$main.find(`.${this.$hideArray[i]}`)) {
					$(`.${this.$hideArray[i]}`).css({
						'display': 'none'
					});
				}
			}
		}
	}

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Navigation();
