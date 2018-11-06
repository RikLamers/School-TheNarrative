import $ from 'jquery';

class Instagram {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-instagram')[0];
        this.$photo = document.getElementsByClassName('m-instagram__photo')[0];
        this.$like = document.getElementsByClassName('m-instagram__like')[0];
        this.$body = document.getElementsByTagName('body')[0];
        this.$touchCounter = 0;
        this.$liked = false;
        this.$lastY = 0;
        this.$chapter = this.$body.getAttribute('data-id');
	}

    eventListeners() {
        if (this.$holder) {
            this.$photo.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.$touchCounter++;
                if (this.$touchCounter % 2 === 0 ) {
                    if (this.$liked) {
                        this.$like.src = '/img/instagram/like.svg';
                        this.$liked = false;
                    } else {
                        this.$like.src = '/img/instagram/like_filled.svg';
                        this.$liked = true;
                    }
                }
            });
            
            this.$photo.addEventListener('touchmove', (e) => {
                const startTouch = e.changedTouches[0].clientY;
    
                if (startTouch > this.$lastY) {
                    this.$body[0].scrollTop = this.$body[0].scrollTop - (startTouch - this.$lastY);
                    this.$lastY = startTouch;
                }else if (startTouch < this.$lastY) {
                    this.$body[0].scrollTop = this.$body[0].scrollTop + (this.$lastY - startTouch);
                    this.$lastY = startTouch;
                }
            });
            
            this.$like.addEventListener('touchstart', (e) => {
                e.preventDefault();
                if (this.$liked) {
                    this.$like.src = '/img/instagram/like.svg';
                    this.$liked = false;
                } else {
                    this.$like.src = '/img/instagram/like_filled.svg';
                    this.$liked = true;
                }
            });
        }
    }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new Instagram();
