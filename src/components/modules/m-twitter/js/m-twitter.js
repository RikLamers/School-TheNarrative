import $ from 'jquery';

class Twitter {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-Twitter')[0];
        this.$body = document.getElementsByTagName('body');
	}

    eventListeners() { }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new Twitter();
