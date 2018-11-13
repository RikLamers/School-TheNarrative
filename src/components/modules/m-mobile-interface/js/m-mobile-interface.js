class MobileInterface {
	constructor() {
		this.initialize();
	}

	setup() {
        this.$body = document.getElementsByTagName('body');
        this.$holder = document.getElementsByClassName('m-mobile-interface')[0];
        this.$mobileInterface = document.getElementsByClassName('m-mobile-interface__content')[0];
        this.$time = document.getElementsByClassName('m-mobile-interface__time')[0];
        if (this.$time) {
            this.updateTime();
        }

        if (this.$mobileInterface) {
            this.$whatsapp = document.getElementById('m-mobile-interface__whatsapp');
        }

        // notification
		this.$notification = document.getElementById('o-notification');
		if (this.$notification) {
			this.$notificationApp = document.getElementById('o-notification__app');
			this.$notificationAppText = document.getElementById('o-notification__apptext');
			this.$notificationFrom = document.getElementById('o-notification__from');
			this.$notificationText = document.getElementById('o-notification__text');
			this.$notificationLink = document.getElementById('o-notification__link');
		}

        // localstorage
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
        if (this.$mobileInterface) {
            this.showCorrectNotification(this.$chapter);
        }
    }
    
    showCorrectNotification(chapter) {
        if (chapter === 0) {
            this.$whatsapp.href = '/whatsapp.html';
            setInterval(() => {
                this.notifications('Nieuw bericht van priester Batsegeziech', '/whatsapp.html', true, '/img/whatsapp.svg', 'whatsapp', '+31 (0)43 350 5600');
            }, 10000);
        }
    }

    notifications(text, link = 'javascript:void(0);', hide = true, app = '/img/whatsapp.svg', appText = 'whatsapp', from = 'batsegeziech') {
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
