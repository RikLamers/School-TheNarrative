import $ from 'jquery';

class Rebus {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-rebus')[0];
        this.$body = document.getElementsByTagName('body')[0];
        
        if (this.$holder) {
            this.$container = document.getElementsByClassName('m-rebus__content')[0].firstChild.nextSibling;
            this.$input = document.getElementById('m-rebus__input');
            this.$checkButton = document.getElementById('m-rebus__check');
            this.$stage = 1;
            this.$getAllimg = document.getElementsByClassName('m-rebus__img');
            this.$rebusImg1 = ['/img/rebus/2-1.svg', '/img/rebus/2-2.svg', '/img/rebus/2-3.svg', '/img/rebus/2-4.svg', '/img/rebus/2-5.svg', '/img/rebus/2-6.svg', '/img/rebus/2-7.svg', '/img/rebus/2-8.svg', '/img/rebus/2-9.svg', '/img/rebus/2-10.svg', '/img/rebus/2-11.svg'];
            this.$rebusImg2 = ['/img/rebus/3-1.svg', '/img/rebus/3-2.svg', '/img/rebus/3-3.svg', '/img/rebus/3-4.svg', '/img/rebus/3-5.svg', '/img/rebus/3-6.svg', '/img/rebus/3-7.svg', '/img/rebus/3-8.svg', '/img/rebus/3-9.svg', '/img/rebus/3-10.svg', '/img/rebus/3-11.svg', '/img/rebus/3-12.svg'];
        }

        // Notification
		this.$notification = document.getElementById('o-notification');
		if (this.$notification) {
			this.$notificationApp = document.getElementById('o-notification__app');
			this.$notificationAppText = document.getElementById('o-notification__apptext');
			this.$notificationFrom = document.getElementById('o-notification__from');
			this.$notificationText = document.getElementById('o-notification__text');
            this.$notificationLink = document.getElementById('o-notification__link');
            if (this.$holder) {
                setTimeout(() => {
                    this.notifications('Los de rebus op, en weet welke producten je moet halen!');
                }, 5000);
            }
		}
	}

    eventListeners() {
        this.$input.addEventListener('keyup', (e) => {
            e.preventDefault();
            const pressedKey = e.which || e.keyCode;
            if (pressedKey === 13) {
                this.checkAnswer();
            }
        });

        this.$checkButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.checkAnswer();
        });
    }

    notifications(text, link = 'javascript:void(0);', hide = true, app = '/img/whatsapp.svg', appText = 'whatsapp', from = 'Priester Batsegeziech') {
		this.$notificationApp.src = app;
        this.$notificationAppText.innerText = appText;
        this.$notificationFrom.innerText = from;
        this.$notificationText.innerText = text;
        this.$notificationLink.href = link;
		this.$notification.className = 'o-notification o-notification--show';

		if (hide) {
			setTimeout(() => {
				this.$notification.className = 'o-notification o-notification--hide';
			}, 5000);
		}
	}

    checkAnswer() {
        switch (this.$stage) {
            case 1:
                if (this.$input.value.toLowerCase() === 'brood') {
                    this.$stage = 2;
                    this.$input.value = '';

                    // Remove all img
                    for (var i = this.$getAllimg.length - 1; i >= 0; --i) {
                        this.$getAllimg[i].parentNode.remove();
                    }

                    // place new img
                    for (let x = 0; x < this.$rebusImg1.length; x++) {
                        const div = document.createElement('div');
                        div.className = 'l-col-4';
                        this.$container.appendChild(div);
                        const img = document.createElement('img');
                        img.className = 'm-rebus__img';
                        img.src = this.$rebusImg1[x];
                        div.appendChild(img);
                    }
                    this.$getAllimg = document.getElementsByClassName('m-rebus__img');
                } else {
                    this.$input.value = '';
                }

                break;
            case 2:
                if (this.$input.value.toLowerCase() === 'spek') {
                    this.$stage = 3;
                    this.$input.value = '';

                    // Remove all img
                    for (var i = this.$getAllimg.length - 1; i >= 0; --i) {
                        this.$getAllimg[i].parentNode.remove();
                    }

                    // place new img
                    for (let x = 0; x < this.$rebusImg2.length; x++) {
                        const div = document.createElement('div');
                        div.className = 'l-col-4';
                        this.$container.appendChild(div);
                        const img = document.createElement('img');
                        img.className = 'm-rebus__img';
                        img.src = this.$rebusImg2[x];
                        div.appendChild(img);
                    }
                    this.$getAllimg = document.getElementsByClassName('m-rebus__img');
                } else {
                    this.$input.value = '';
                }

                break;
            case 3:
                if (this.$input.value.toLowerCase() === 'venkel') {
                    this.notifications('Wat goed! Je hebt alle producten verzameld! Zegen nu de...', '/whatsapp.html', false);
                } else {
                    this.$input.value = '';
                }

                break;
        }
    }

	initialize() {
        this.setup();
        if (this.$holder) {
            this.eventListeners();
        }
	}
}

new Rebus();
