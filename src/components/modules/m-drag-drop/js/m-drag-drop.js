import $ from 'jquery';

class DragDrop {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-drag-drop')[0];
        this.$body = document.getElementsByTagName('body')[0];
        if (this.$holder) {
            this.$correctBox = document.getElementsByClassName('m-drag-drop__correct')[0];
    
            // Element collection
            this.$collectionEl = document.getElementsByClassName('m-drag-drop__items');
            this.$collectionCorrectLength;
    
            // get all dragable items
            this.$whatsapp = document.getElementById('m-drag-drop__whatsapp');
            this.$instagram = document.getElementById('m-drag-drop__instagram');
            this.$facebook = document.getElementById('m-drag-drop__facebook');
            this.$width = window.innerWidth;
            this.$height = window.innerHeight;
            this.$offsetHeight = this.$correctBox.offsetHeight;
            this.$offsetWidth = this.$collectionEl[0].firstChild.nextSibling.offsetWidth;
            this.$correct = 0;
        }
	}

    eventListeners() {

        for (let i = 0; i < this.$collectionEl.length; i++) {
            this.$collectionEl[i].addEventListener('touchmove', this.moveEvent);
            this.$collectionEl[i].addEventListener('touchend', this.endEvent.bind(this));
        }

    }

    moveEvent(e) {
        e.preventDefault();
        const location = e.touches[0];

        e.target.style.left = `${location.pageX}px`;
        e.target.style.top = `${location.pageY}px`;
    }

    endEvent(e) {
            const x = parseInt(e.target.style.left);
            const y = parseInt(e.target.style.top);
            console.log(this.$correctBox);
            if (e.target.getAttribute('data-id') === 'correct') {
                if (x < this.$correctBox.offsetWidth && x > 0 && y < this.$correctBox.offsetHeight && y > 0) {
                    e.target.style.left = `${((this.$correctBox.offsetWidth / this.$collectionCorrectLength) - e.target.offsetWidth) / 2 + (this.$correct * (this.$correctBox.offsetWidth / this.$collectionCorrectLength))}px`;
                    e.target.style.top = `${(this.$correctBox.offsetHeight - e.target.offsetHeight) / 2}px`;
                    e.target.style.pointerEvents = 'none';
                    this.$correct++;
                    if (this.$correct === 3) {
                        this.complete();
                    }
                }
            } else if (e.target.getAttribute('data-id') !== 'correct') {
                if (x < this.$correctBox.offsetWidth && x > 0 && y < this.$correctBox.offsetHeight && y > 0) {
                    e.target.style.left = `${Math.floor(Math.random() * (this.$width - this.$offsetWidth))}px`;
                    e.target.style.top = `${Math.floor(Math.random() * (this.$height - (this.$offsetHeight * 2))) + this.$offsetHeight}px`;
                }
            }
    }

    randomPlaceEl(width, height, offsetHeight, offsetWidth) {
        for (let i = 0; i < this.$collectionEl.length; i++) {
            this.$collectionEl[i].firstChild.nextSibling.style.left = `${Math.floor(Math.random() * (width - offsetWidth))}px`;
            this.$collectionEl[i].firstChild.nextSibling.style.top = `${Math.floor(Math.random() * (height - (offsetHeight * 2))) + offsetHeight}px`;
        }
    }

    getAmountCorrect(collection) {
        const correct = [];

        for (let i = 0; i < collection.length; i++) {
            if (collection[i].firstChild.nextSibling.getAttribute('data-id') === 'correct') {
                correct.push(collection[i].firstChild.nextSibling);
            }
        }

        this.$collectionCorrectLength = correct.length;

    }

    complete() {
        console.log('GOEDZO');
    }

	initialize() {
        this.setup();
        if (this.$holder) {
            this.eventListeners();
            this.randomPlaceEl(this.$width, this.$height, this.$offsetHeight, this.$offsetWidth);
            this.getAmountCorrect(this.$collectionEl);
        }
	}
}

new DragDrop();
