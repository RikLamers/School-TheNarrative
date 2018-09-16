import $ from 'jquery';

class Dropdown {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = $('.o-dropdown');
		this.$body = $('body');
		this.$dropdownButton = this.$holder.find('.o-dropdown__select');
		this.$dropdownMenu = this.$holder.find('.o-dropdown__menu');
	}

	eventListeners() {
		//let self = this;
		this.$dropdownButton.click(this.toggleDropdown);

	}

	toggleDropdown(e) {
		let element = e.currentTarget;

		if ($(element).parent().hasClass("is--active")) {
			$(element).parent().removeClass("is--active");
			$(element).parent().find(".o-dropdown__menu").slideUp(200);
		} else {
			$('body').find(".o-dropdown").removeClass("is--active");
			$(element).parent().addClass("is--active");
			$(element).parent().find(".o-dropdown__menu").slideDown(200);
		}
	}

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Dropdown();
