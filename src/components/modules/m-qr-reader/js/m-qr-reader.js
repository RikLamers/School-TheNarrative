import $ from 'jquery';
import jsQR from 'jsqr';

class QrReader {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = $('.m-qr-reader');
		this.$body = $('body');

		this.$startCam = document.getElementById('m-qr-reader__btn');

		this.$video = document.createElement('video');
		this.$canvasElement = document.getElementById('canvas');
		this.$canvas = this.$canvasElement.getContext('2d');
		this.$loadingMessage = document.getElementById('loadingMessage');
		this.$outputContainer = document.getElementById('output');
		this.$outputMessage = document.getElementById('outputMessage');
		this.$outputData = document.getElementById('outputData');

		requestAnimationFrame(this.tick.bind(this));
	}

	eventListeners() {
		this.$startCam.addEventListener('click', (e) => {
			e.preventDefault();
			navigator.mediaDevices.getUserMedia({video: {favingMode: 'environment'}}).then((stream) => {
				this.$video.srcObject = stream;
				this.$video.setAttribute('playsinline', true);
				this.$video.play();
				requestAnimationFrame(this.tick.bind(this));
			});
		});
	}

	drawLine(begin, end, color) {
		this.$canvas.beginPath();
		this.$canvas.moveTo(begin.x, begin.y);
		this.$canvas.lineTo(end.x, end.y);
		this.$canvas.lineWidth = 4;
		this.$canvas.strokeStyle = color;
		this.$canvas.stroke();
	}

	tick() {
		this.$loadingMessage.innerText = '⌛ Loading video...';

		if (this.$video.readyState === this.$video.HAVE_ENOUGH_DATA) {
			this.$loadingMessage.hidden = true;
			this.$canvasElement.hidden = false;
			this.$outputContainer.hidden = false;

			this.$canvasElement.height = this.$video.videoHeight;
			this.$canvasElement.width = this.$video.videoWidth;

			this.$canvas.drawImage(this.$video, 0, 0, this.$canvasElement.width, this.$canvasElement.height);

			const imageData = this.$canvas.getImageData(0, 0, this.$canvasElement.width, this.$canvasElement.height);
			const code = jsQR(imageData.data, imageData.width, imageData.height, {
				inversionAttempts: 'dontInvert'
			});

			if (code) {
				this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
				this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
				this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
				this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');

				this.$outputMessage.hidden = true;
				this.$outputData.parentElement.hidden = false;
				this.$outputData.innerText = code.data;
			} else {
				this.$outputMessage.hidden = false;
				this.$outputData.parentElement.hidden = true;
			}

		}
	}

	initialize() {
		this.setup();
		this.eventListeners();
		requestAnimationFrame(this.tick.bind(this));
	}
}

new QrReader();
