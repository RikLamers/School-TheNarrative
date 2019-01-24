import $ from 'jquery';

class EndGame {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-end-game')[0];
		this.$body = document.getElementsByTagName('body')[0];
		
		// end-game
		// part 1
		this.$part1 = document.getElementsByClassName('m-end-game__part1')[0];
		this.$part1Input = document.getElementsByClassName('m-end-game__part1--input')[0];
		this.$part1Btn = document.getElementsByClassName('m-end-game__part1--btn')[0];

		// part 2
		this.$part2 = document.getElementsByClassName('m-end-game__part2')[0];
		this.$part2Btn1 = document.getElementById('m-end-game__part2__btn1');
		this.$part2Btn2 = document.getElementById('m-end-game__part2__btn2');
		this.$part2Btn3 = document.getElementById('m-end-game__part2__btn3');

		// part 3
		this.$part3 = document.getElementsByClassName('m-end-game__part3')[0];
		this.$part3Btn1 = document.getElementById('m-end-game__part3__btn1');
		this.$part3Btn2 = document.getElementById('m-end-game__part3__btn2');

		// part 4
		this.$part4 = document.getElementsByClassName('m-end-game__part4')[0];
		this.$part4Btn1 = document.getElementById('m-end-game__part4__btn1');
		this.$part4Btn2 = document.getElementById('m-end-game__part4__btn2');
		
		// notification
		this.$notification = document.getElementById('o-notification');
		if (this.$notification) {
			this.$notificationApp = document.getElementById('o-notification__app');
			this.$notificationAppText = document.getElementById('o-notification__apptext');
			this.$notificationFrom = document.getElementById('o-notification__from');
			this.$notificationText = document.getElementById('o-notification__text');
			this.$notificationLink = document.getElementById('o-notification__link');
		}

	}
	
	eventListeners() {
		this.$part1Input.addEventListener('keyup', (e) => {
			e.preventDefault();
            const pressedKey = e.which || e.keyCode;
            if (pressedKey === 13) {
				this.$part1Btn.click();
            }
		});

		this.$part1Btn.addEventListener('click', (e) => {
			e.preventDefault();
			if (this.$part1Input.value.toLowerCase() === 'de sleutel is te vinden in de linker uitsparing van de maaspunttoren') {
				this.$part1.style.display = 'none';
				this.notifications('Goedzo! dat was het correcte antwoord! Kies nu de beste afleiding!');
				setTimeout(() => {
					this.$part2.style.display = 'block';
				}, 5000);
			} else {
				this.notifications('Het antwoord klopt niet! m = 13. onthoudt dat!');
			}
		});

		// Part 2
		this.$part2Btn1.addEventListener('click', this.checkPart2.bind(this));
		this.$part2Btn2.addEventListener('click', this.checkPart2.bind(this));
		this.$part2Btn3.addEventListener('click', this.checkPart2.bind(this));
	
		// part 3
		this.$part3Btn1.addEventListener('click', this.checkPart3.bind(this));
		this.$part3Btn2.addEventListener('click', this.checkPart3.bind(this));

		// part 4
		this.$part4Btn1.addEventListener('click', this.checkPart4.bind(this));
		this.$part4Btn2.addEventListener('click', this.checkPart4.bind(this));
	
	}

	checkPart2(e) {
		e.preventDefault();
		if (e.target.getAttribute('data-id') === 'correct') {
			this.notifications('Wonderschoon! Ga zo door!');
			this.$part2.style.display = 'none';
			setTimeout(() => {
				this.$part3.style.display = 'block';
			}, 5000);

		} else {
			this.notifications('Pas op! Zo brand je heel Maastricht nog plat!');
		}
	}

	checkPart3(e) {
		e.preventDefault();
		if (e.target.getAttribute('data-id') === 'correct') {
			this.notifications('Wonderbaarlijke verstopplek!');
			this.$part3.style.display = 'none';
			setTimeout(() => {
				this.$part4.style.display = 'block';
			}, 5000);
		} else {
			this.notifications('Kijk uit! Zo overtuig je niemand!');
		}
	}

	checkPart4(e) {
		e.preventDefault();
		if (e.target.getAttribute('data-id') === 'correct') {
			this.notifications('Goedzo, Tjeu Das lijkt verslagen, klik hier!', '/facebook.html', false);
			this.$part4Btn1.style.pointerEvents = 'none';
			this.$part4Btn2.style.pointerEvents = 'none';
		} else {
			this.notifications('Oei, niet helemaal juist, klik hier!', '/facebook.html', false);
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
	
	initialize() {
		this.setup();
		if (this.$holder) {
			this.eventListeners();
			setTimeout(() => {
				this.notifications('Vergeet niet; m = 13! Succes!');
			}, 1000);
		}
	}
}

new EndGame();
