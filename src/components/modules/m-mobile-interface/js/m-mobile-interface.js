class MobileInterface {
	constructor() {
		this.initialize();
	}

	setup() {
        this.$body = document.getElementsByTagName('body');
        this.$holder = document.getElementsByClassName('m-mobile-interface')[0];
        this.$time = document.getElementsByClassName('m-mobile-interface__time')[0];
        if (this.$time) {
            this.updateTime();
        }
	}

    eventListeners() { }

    updateTime() {
        const now = new Date();
        let minutes;

        if (now.getMinutes() < 10) {
            minutes = '0' + now.getMinutes();
        } else {
            minutes = now.getMinutes();
        }

        const time = now.getHours() + ':' + minutes;

        document.getElementsByClassName('m-mobile-interface__time')[0].innerText = time;
    
        setTimeout(() => {
            this.updateTime();
        }, 1000);
    }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new MobileInterface();
