import $ from 'jquery';

class Facebook {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-facebook')[0];
		this.$body = document.getElementsByTagName('body');

		this.$username = JSON.parse(localStorage.getItem('username'));
		this.$facebookLogin = document.getElementsByClassName('m-facebook__login')[0];
		if (this.$facebookLogin) {
			this.$facebookLoginUser = document.getElementsByClassName('m-facebook__login--name')[0];
			if (this.$username) {
				this.$facebookLoginUser.value = this.$username;
			}
		}

		// Notification
		this.$notification = document.getElementById('o-notification');
		if (this.$notification) {
			this.$notificationApp = document.getElementById('o-notification__app');
			this.$notificationAppText = document.getElementById('o-notification__apptext');
			this.$notificationFrom = document.getElementById('o-notification__from');
			this.$notificationText = document.getElementById('o-notification__text');
			this.$notificationLink = document.getElementById('o-notification__link');
		}
		
		if (this.$holder) {
			this.$facebookAccPic = document.getElementById('m-facebook__profilepic');
			this.$facebookAccName = document.getElementById('m-facebook__postdata--name');
			this.$facebookTimestamp = document.getElementById('m-facebook__postdata--timestamp');
			this.$facebookPostTextEl = document.getElementById('m-facebook__posttext');
			this.$facebookLink = document.getElementsByClassName('m-facebook__link');
			this.$facebookPostImg = document.getElementById('m-facebook__img');
			this.$facebookLikes = document.getElementById('m-facebook__likes');
			this.$facebookShares = document.getElementById('m-facebook__shares');
			this.$facebookComments = document.getElementById('m-facebook__comments');
			this.$facebookPostInfo = [
				{
					chapter: 1,
					accountName: 'Henriëtte Neijt',
					accountImg: '/img/pf/henriette.jpg',
					post: 'De nieuwste Merovingische mode',
					postImg: '/img/facebook/henriette-poster.jpg',
					link: '#',
					likes: 'Tjeu Das en 96 andere',
					shares: '7 share',
					comments: [
						{
							name: 'Frederik Smidsch',
							pic: '/img/pf/frederik.jpg',
							comment: 'Die kint pas good neije!'
						}
					]
				},
				{
					chapter: 2,
					accountName: 'Dagblad de Merovinger',
					accountImg: '/img/merovinger/pf.jpg',
					post: 'MAASTRICHT – De afgelopen dagen deed zich het verhaal de rondte over een zwerver die meermaals bijna in de Maas zou zijn gevallen omdat hij niets zag. Nu blijkt zich een waar wonder te hebben voltrokken want de zwerver kan weer zien.',
					postImg: '/img/merovinger/pf.jpg',
					link: '/merovinger/blinde-zwerver-kan-weer-zien.html',
					likes: 'Jan Jansen en 5 andere',
					shares: '1 share',
					comments: [
						{
							name: 'Jantje',
							pic: '/img/whatsapp.svg',
							comment: 'Maecenas faucibus mollis interdum.'
						},
						{
							name: 'Teuntje',
							pic: '/img/facebook.svg',
							comment: 'Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum.'
						}
					]
				}, 
				{
					chapter: 3
				},
				{
					chapter: 4
				},
				{
					chapter: 5,
					post: 'MAASTRICHT – Maastricht is in rep en roer omdat vannacht ogenschijnlijk de duivel is verschenen bij de kerk aan het Vrijthof. De duivel had het gemunt op de recent afgebouwde Christelijke kerk welke hij weer met de grond gelijk leek te willen maken. De weerloze kerk, en daarmee tevens de slapende stad werd dit leed echter bespaard door een heldendaad van Sint Servaas die dit met zijn leven heeft moeten bekopen.',
					accountName: 'Dagblad de Merovinger',
					accountImg: '/img/merovinger/pf.jpg',
					link: '/merovinger/sint-servaas-geeft-zijn-leven.html',
					likes: 'Frederik en 51 andere',
					shares: '14 shares',
					comments: [
						{
							name: 'Jantje',
							pic: '/img/whatsapp.svg',
							comment: 'Maecenas faucibus mollis interdum.'
						},
						{
							name: 'Teuntje',
							pic: '/img/facebook.svg',
							comment: 'Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum.'
						}
					]
				},
				{
					chapter: 6
				},
				{
					chapter: 7,
					post: 'MAASTRICHT – Sint Servaas mag dan wel zijn leven hebben gegeven voor de stad, nog steeds heeft zijn nalatenschap invloed op de levens van de Maastrichtenaren. Zo werd gekke Geis, zoals de dorpsgek in de volksmond wordt genoemd, uit onverwachtse hoek geholpen nadat hij al enkele dagen doelloos door de stad zwalkte.',
					accountName: 'Dagblad de Merovinger',
					accountImg: '/img/merovinger/pf.jpg',
					link: '/merovinger/sint-servaas-producten-zorgen-voor-wonder.html',
					likes: 'Bastiaan en 67 andere',
					shares: '11 shares',
					comments: [
						{
							name: 'Jantje',
							pic: '/img/whatsapp.svg',
							comment: 'Maecenas faucibus mollis interdum.'
						},
						{
							name: 'Teuntje',
							pic: '/img/facebook.svg',
							comment: 'Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum.'
						}
					]
				},
				{
					chapter: 8
				},
				{
					chapter: 9
				},
				{
					// First post
					chapter: 10,
					post: 'MAASTRICHT – Bij een bijeenkomst, georganiseerd door Tjeu Das, is de Maastrichtse kerk ontmaskert. De aanwezige burgers, die in grote getalen zijn komen opdagen bij de uitkijktoren aan de Maas, waren getuigen van een schouwspel dat niemand van tevoren had kunnen bedenken. Tjeu Das maakte daar terplekke hoogstpersoonlijk korte metten met Sint Servaas.',
					accountName: 'Dagblad de Merovinger',
					accountImg: '/img/merovinger/pf.jpg',
					link: '/merovinger/ker-verzint-heilige.html',
					likes: 'Rikkerdt en 121 andere',
					shares: '21 shares',
					comments: [
						{
							name: 'Jantje',
							pic: '/img/whatsapp.svg',
							comment: 'Maecenas faucibus mollis interdum.'
						},
						{
							name: 'Teuntje',
							pic: '/img/facebook.svg',
							comment: 'Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum.'
						}
					]
				},
				{
					// split second post
					chapter: 10.1,
					post: 'MAASTRICHT – Bij een bijeenkomst, georganiseerd door Tjeu Das, is de vermiste sleutel van Sint Servaas opgedoken. De aanwezige burgers, die in grote getalen zijn komen opdagen bij de uitkijktoren aan de Maas, waren getuigen van een schouwspel dat niemand van tevoren had kunnen bedenken. Tjeu Das viel terplekke door de mand met zijn relaas en beschuldigingen aan het adres van Sint Servaas.',
					accountName: 'Dagblad de Merovinger',
					accountImg: '/img/merovinger/pf.jpg',
					link: '/merovinger/tjeu-das-blijkt-judas.html',
					likes: 'Rikkerdt en 121 andere',
					shares: '21 shares',
					comments: [
						{
							name: 'Jantje',
							pic: '/img/whatsapp.svg',
							comment: 'Maecenas faucibus mollis interdum.'
						},
						{
							name: 'Teuntje',
							pic: '/img/facebook.svg',
							comment: 'Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum.'
						}
					]
				}
			];

			this.$localStorage = JSON.parse(localStorage.getItem('progression'));
			this.$chapter = this.getChapter();
			this.$chapterStorage;
		}
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

	placeRightText(chapter) {
		if (chapter === 0) {
			setTimeout(() => {
				this.$notification.setAttribute('class', 'facebook0');
				document.getElementsByClassName('facebook0')[0].addEventListener('click', (e) => {
					this.$localStorage[chapter].done = 1;
					localStorage.setItem('progression', JSON.stringsify(this.$localStorage));
				});
				this.notifications('Er doet een verhaal de rondte...', '/whatsapp.html', false);
			}, 5000);
		} else if (chapter === 9) {
			if (this.$chapterStorage.Facebook === 1) {
				return;
			} else if (this.$chapterStorage === 2 || this.$chapterStorage === 3) {
				chapter = chapter + 1;
			}
		}

		const now = new Date();
		let minutes;
		
		if (now.getMinutes - 7  < 0) {
			minutes = 55;
		} else if (now.getMinutes() - 7 < 10) {
			minutes = '0' + (now.getMinutes() - 7);
		} else {
			if (now.getMinutes() - 7 < 10) {
				minutes = '0' + (now.getMinutes() - 7);
			} else {
				minutes = now.getMinutes() - 7;
			}
		}

		const time = `${now.getHours()}:${minutes}`;
		
		if (this.$facebookPostInfo[chapter].post) {

			this.$facebookAccName.innerText = this.$facebookPostInfo[chapter].accountName;
			this.$facebookAccPic.style.backgroundImage = `url(${this.$facebookPostInfo[chapter].accountImg})`;
			this.$facebookTimestamp.innerText = `vandaag om ${time}`;
			this.$facebookPostTextEl.innerText = this.$facebookPostInfo[chapter].post;
			this.$facebookLink[0].href = this.$facebookPostInfo[chapter].link;
			this.$facebookPostImg.src = this.$facebookPostInfo[chapter].postImg;
			this.$facebookLink[1].href = this.$facebookPostInfo[chapter].link;
			this.$facebookLikes.innerText = this.$facebookPostInfo[chapter].likes;
			this.$facebookShares.innerText = this.$facebookPostInfo[chapter].shares;

			for (let i = 0; i < this.$facebookPostInfo[chapter].comments.length; i++) {
				this.$facebookComments.innerHTML += `<div class="m-facebook__comment">
				<div class="l-row">
					<div class="l-col-3">
						<div class="m-facebook__comment--photo" style="background-image: url(${this.$facebookPostInfo[chapter].comments[i].pic});">
						</div>
					</div>
					<div class="l-col-9">
						<div class="m-facebook__comment--cloud">
							<div class="l-row">
								<div class="l-col-12">
									<div class="m-facebook__comment--name">
										${this.$facebookPostInfo[chapter].comments[i].name}
									</div>
								</div>
							</div>
							<div class="l-row">
								<div class="l-col-12">
									<p>${this.$facebookPostInfo[chapter].comments[i].comment}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
			}

		}
	}

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Facebook();
