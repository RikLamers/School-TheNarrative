import $ from 'jquery';
import jsQR from 'jsqr';

class QrReader {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = $('.m-qr-reader');
        this.$body = $('body');
        this.$activateCam = document.getElementById('m-qr-reader__btn');
        this.$video = document.createElement('video');
        this.$canvas = document.getElementById('m-qr-reader__canvas');
        this.$context = this.$canvas.getContext('2d');

        this.$loadingMessage = document.getElementById('loadingMessage');
		this.$outputContainer = document.getElementById('output');
		this.$outputMessage = document.getElementById('outputMessage');
        this.$outputData = document.getElementById('outputData');
        
        this.$scanned = false;
        this.$req;
        this.$code;
	}

	eventListeners() {
        this.$activateCam.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia({
                video: true,
                audio: false
            }, (stream) => {
                this.$video.srcObject = stream;
                this.$video.play();
                this.$req = requestAnimationFrame(this.tick.bind(this));
            }, (error) => {
                console.log(error);
                console.error(error);
            });
        });

        this.$video.addEventListener('play', () => {
            this.draw(this.$video, this.$context, 300, 300);
        });
	}

	draw(video, context, width, height) {
        context.drawImage(video, 0, 0, width, height);
            window.setInterval( () => {
                if (!this.$scanned) {
                    this.draw(video, context, width, height);
                } else {
                    clearInterval();
                }
            }, 10);
            window.setInterval( () => {
                if (!this.$scanned) {
                    this.$req = requestAnimationFrame(this.tick.bind(this));
                } else {
                    clearInterval();
                }
            }, 1000);
    }

    drawLine(begin, end, color) {
		this.$context.beginPath();
		this.$context.moveTo(begin.x, begin.y);
		this.$context.lineTo(end.x, end.y);
		this.$context.lineWidth = 4;
		this.$context.strokeStyle = color;
		this.$context.stroke();
	}

    tick() {

		if (this.$video.readyState === this.$video.HAVE_ENOUGH_DATA) {
            const imageData = this.$context.getImageData(0, 0, this.$canvas.width, this.$canvas.height);
			const code = jsQR(imageData.data, imageData.width, imageData.height, {
				inversionAttempts: 'dontInvert'
            });

			if (code) {
                this.$code = code;
                this.$scanned = true;
                this.handleCode(code);
				this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
				this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
				this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
				this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
            }

		}
    }
    
    handleCode(code) {
        clearInterval();
        window.cancelAnimationFrame(this.$req);
        window.location.href = code.data;
    }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new QrReader();
