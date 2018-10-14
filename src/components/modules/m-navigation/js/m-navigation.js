import $ from 'jquery';

class Navigation {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-navigation')[0];
		this.$body = document.getElementsByTagName('body');
		this.$main = document.getElementsByTagName('main');
		this.$nav = this.$holder;
		this.$navButton = document.getElementsByClassName('m-navigation__toggle')[0];
		this.$navList = document.getElementsByClassName('m-navigation__list')[0];
		this.$navItem = document.getElementsByClassName('m-navigation__item')[0];
		this.$mobileNavIsVisibile = false;

	}

	eventListeners() {
		if (this.$navButton) {
			this.$navButton.addEventListener('click', (e) => {
				e.preventDefault();
				this.toggleNav();
			});
		}
	}

	toggleNav() {
		if (this.$mobileNavIsVisibile) {
			this.$navButton.classList.remove('is--active');
			// this.$body.classList.remove('overflow-hidden-mobile');
			this.$mobileNavIsVisibile = false;
			this.$navList.classList.remove('is--active');

		} else {
			this.$navButton.classList.add('is--active');
			// this.$body.classList.add('overflow-hidden-mobile');
			this.$mobileNavIsVisibile = true;
			this.$navList.classList.add('is--active');
		}
	}

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Navigation();
