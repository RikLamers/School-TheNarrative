import $ from 'jquery';

class Intro {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-intro')[0];
        this.$body = document.getElementsByTagName('body')[0];

        if (this.$holder) {
            this.$video = document.getElementsByClassName('m-intro__video')[0];
            this.$duration = this.$video.duration;
    
            this.$content = document.getElementsByClassName('m-intro__info')[0];
            this.$inputName = document.getElementsByClassName('m-intro__name')[0];
            this.$inputPhoto = document.getElementsByClassName('m-intro__photo')[0];
            this.$start = document.getElementsByClassName('m-intro__start')[0];
            this.$retrievedUsername = JSON.parse(localStorage.getItem('username'));
            this.$retrievedPhoto = JSON.parse(localStorage.getItem('photo'));
    
            if (this.$retrievedUsername) {
                this.$inputName.value = this.$retrievedUsername;
            }
        }
        
	}

    eventListeners() {
        this.$video.addEventListener('play', (e) => {
            this.getTime();
        });

        this.$start.addEventListener('click', (e) => {
            this.storeName();
            if (this.$inputPhoto.value) {
                this.storePhoto();
            }
        });

        this.$inputName.addEventListener('keyup', (e) => {
            this.$username = this.$inputName.value;
            const pressedKey = e.which || e.keyCode;
            if (pressedKey === 13) {
                this.storeName();
            }
        });

        this.$inputName.addEventListener('onfocusout', (e) => {
            if (this.$username) {
                this.storeName();
            }
        });
    }

    getTime() {
        const time = this.$video.currentTime;

        if (time === this.$video.duration) {
            this.showContent();
        } else {
            setTimeout(() => {
                this.getTime();
            }, 500);
        }
    }

    showContent() {
        this.$video.style.display = 'none';
        this.$content.style.display = 'block';
    }

    storeName() {
        if (this.$username && this.$username.length > 0) {
            this.$username = this.$username[0].toUpperCase() + this.$username.substr(1, this.$username.length);
            localStorage.setItem('username', JSON.stringify(this.$username));
        }
    }

    storePhoto() {
        localStorage.setItem('photo', JSON.stringify(this.$inputPhoto.value));
    }

	initialize() {
        this.setup();
        if (this.$holder) {
            this.eventListeners();
        }
	}
}

new Intro();
