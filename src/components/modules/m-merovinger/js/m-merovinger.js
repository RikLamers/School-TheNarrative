import $ from 'jquery';

class Merovinger {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-merovinger')[0];
        this.$body = document.getElementsByTagName('body')[0];

        // Notification
		this.$notification = document.getElementById('o-notification');
		if (this.$notification) {
			this.$notificationApp = document.getElementById('o-notification__app');
			this.$notificationAppText = document.getElementById('o-notification__apptext');
			this.$notificationFrom = document.getElementById('o-notification__from');
			this.$notificationText = document.getElementById('o-notification__text');
			this.$notificationLink = document.getElementById('o-notification__link');
        }
        
        this.$localStorage = JSON.parse(localStorage.getItem('progression'));
        this.$chapter = this.getChapter();
        this.$chapterStorage;
        
	}

    eventListeners() { }

    getChapter() {
		for (let i = 0; i < this.$localStorage.length; i++) {
			if (this.$localStorage[i].done === 0) {
				this.$chapter = i;
				this.$chapterStorage = this.$localStorage[i];
				break;
			}
		}
		this.placeRightText(this.$chapter);
    }
    
    placeRightText(chapter) {
		console.log(chapter);
        if (chapter === 1) {
            this.$localStorage[chapter].done = 1;
            localStorage.setItem('progression', JSON.stringify(this.$localStorage));
            setInterval(() => {
                this.notifications('Kleermaakster Henriëtte Neijt...', '/whatsapp.html');
            }, 15000);
        } else if (chapter === 4) {
			this.$localStorage[chapter].done = 1;
			localStorage.setItem('progression', JSON.stringify(this.$localStorage));
			setInterval(() => {
				this.notifications('Tjeu das heeft weer...', '/whatsapp.html');
			}, 15000);
		} else if (chapter === 6) {
			this.$localStorage[chapter].done = 1;
			localStorage.setItem('progression', JSON.stringify(this.$localStorage));
			setInterval(() => {
				this.notifications('Ja hoor, Tjeu heeft ook...', '/whatsapp.html');
			}, 15000);
		} else if (chapter === 9) {
			//
		}
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

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new Merovinger();
