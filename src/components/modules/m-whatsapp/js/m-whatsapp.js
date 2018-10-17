import $ from 'jquery';

class WhatsApp {
    constructor() {
        this.initialize();
    }

    setup() {
        this.$holder = document.getElementsByClassName('m-whatsapp')[0];
        this.$body = document.getElementsByTagName('body');
    }

    eventListeners() { }

    initialize() {
        this.setup();
        this.eventListeners();
    }
}

new WhatsApp();
