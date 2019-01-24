import $ from 'jquery';

class Merofy {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-merofy')[0];
        this.$body = document.getElementsByTagName('body')[0];
	}

    eventListeners() { }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new Merofy();
