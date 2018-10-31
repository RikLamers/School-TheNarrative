import $ from 'jquery';

class Facebook {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-facebook')[0];
        this.$body = document.getElementsByTagName('body');
	}

    eventListeners() { }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new Facebook();
