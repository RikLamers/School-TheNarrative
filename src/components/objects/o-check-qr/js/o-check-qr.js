import $ from 'jquery';

class CheckQR {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('o-check-qr')[0];
        this.$body = document.getElementsByTagName('body');
        this.$btn = this.$holder;
        this.$deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
        this.$supportedBrowsers = this.getSupportedBrowsers();
        console.log(this.$btn);
	}

    eventListeners() {
        this.$btn.addEventListener('click', (e) => {
            e.preventDefault();
            const isSupported = this.checkSupport(this.$deviceInfo.browser);
            console.log('fnehfiekn');

            if (isSupported) {
                window.location.href = '/game/qr-reader';
            } else {
                window.location.href = '/game/qr-photo';
            }

        });
    }

    getSupportedBrowsers() {

        let arr = [];

        for (let i = 0; i < 100; i++) {
            // FireFox support beginning at 36
            if (i > 35) {
                arr.push('firefox' + i);
            }

            // Chrome support beginning at 53
            if (i > 52) {
                arr.push('chrome' + i);
            }

            // Safari support beginning at 11
            if (i > 10 && i < 20) {
                arr.push('safari' + i);
            }

            // Edge support beginning at 12
            if (i > 11 && i < 25) {
                arr.push('edge' + i);
            }
        }

        return arr;
    }

    checkSupport(currentBrowser) {
        for (let i = 0; i < this.$supportedBrowsers.length; i++) {
            if (this.$supportedBrowsers.indexOf(currentBrowser) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new CheckQR();
