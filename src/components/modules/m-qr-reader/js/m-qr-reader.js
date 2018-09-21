import $ from 'jquery';
import { jsQR } from 'jsqr';

class QrReader {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = $('.m-qr-reader');
        this.$body = $('body');
        this.$activateCam = document.getElementById('m-qr-reader__btn');
        this.$video = document.createElement('video');
        // this.$video = document.querySelector('#m-qr-reader__video');
        this.$canvas = document.getElementById('m-qr-reader__canvas');
        this.$context = this.$canvas.getContext('2d');
        this.$vendorUrl = window.URL;
	}

	eventListeners() {
        this.$activateCam.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.getMedia = navigator.getUserMedia;
            navigator.getMedia({
                video: true,
                audio: false
            }, (stream) => {
                this.$video.srcObject = stream;
                this.$video.play();
            }, (error) => {
                console.log(error);
                console.error(error);
            });
        });

        this.$video.addEventListener('play', (e) => {
            this.draw(this.$video, this.$context, 400, 300);
        });
	}

	draw(video, context, width, height) {
        context.drawImage(video, 0, 0, width, height);
        window.setInterval( () => {
            this.draw(video, context, width, height);
        });
    }

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new QrReader();
