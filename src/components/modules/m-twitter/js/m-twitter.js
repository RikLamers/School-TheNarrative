import $ from 'jquery';

class Twitter {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-twitter')[0];
		this.$body = document.getElementsByTagName('body')[0];

		// all elements
		this.$twitterPic = document.getElementsByClassName('m-twitter__profilepic')[0];
		this.$twitterName = document.getElementsByClassName('m-twitter__profile--name')[0];
		this.$twitterHandle = document.getElementsByClassName('m-twitter__profile--handle')[0];
		this.$twitterTweet = document.getElementById('m-twitter__tweet');
		this.$twitterTweetPic = document.getElementsByClassName('m-twitter__tweetpic')[0];
		this.$twitterDate = document.getElementById('m-twitter__date');
		this.$twitterTime = document.getElementById('m-twitter__time');
		this.$twitterLikes = document.getElementsByClassName('m-twitter__like')[0];
		this.$twitterComments = document.getElementById('m-twitter__comments');

		this.$twitterInfo = [
			{
				chapter: 1
			},
			{
				chapter: 2
			},
			{
				chapter: 3
			},
			{
				chapter: 4,
				profilePic: '/img/twitter/posts/td-pf.png',
				profileName: 'Tjeu Das',
				profileHandle: '@tjeudas66',
				tweet: 'Die “Sint Servaas” bestaat helemaal niet! Die zwerver kon natuurlijk niets zien omdat hij zich niet waste en dat hij die Servaas daarna niet met eigen ogen gezien heeft is ook wel heel toevallig! <i>#stservaasbestaatniet #verwonderd #maastricht #merovingen</i>',
				likes: 17,
				comments: [
					{
						commentPic: '/img/pf/frederik.jpg',
						commentName: 'Frederik Smidsch',
						commentHandle: '@freSmid',
						tweet: 'Die Tjeu heeft misschien wel een punt...'
					}
				]
			},
			{
				chapter: 5
			},
			{
				chapter: 6,
				profilePic: '/img/twitter/posts/td-pf.png',
				profileName: 'Tjeu Das',
				profileHandle: '@tjeudas66',
				tweet: 'Ja hoor die “Sint Servaas” is nu ook nog gestorven om ‘zijn’ stad te redden! Laat me niet lachen. Het werd ze gewoon te heet onder de voeten dus hebben ze er maar zelf een eind aan gemaakt en ik zal het gaan bewijzen ook! <i>#stservaasbestaatniet #stservaasbestondniet #verwonderd #maastricht #merovingen</i>',
				likes: 22,
				comments: [
					{
						commentPic: '/img/pf/batsegeziech.jpg',
						commentName: 'Priester batsegeziech',
						commentHandle: '@PBatsegezich',
						tweet: 'Heb een beetje respect voor de redder van uw stad! Moge god uw bijstaan!'
					},
					{
						commentPic: '/img/pf/henriette.jpg',
						commentName: 'Henriëtte Neijt',
						commentHandle: '@HennyNeijt',
						tweet: '<i>@Tjeudas66 #Ketter #TjeuDas4Ketter</i>'
					}
				]
			},
			{
				chapter: 7
			},
			{
				chapter: 8,
				profilePic: '/img/pf/rinalda.jpg',
				profileName: 'Rinalda de Hoor',
				profileHandle: '@RinaHoor69',
				tweet: 'Alle toeristen die voor Sint Servaas naar Maastricht komen, kunnen ook bij mij komen met speciale Sint-Servaas-korting! <i>#stservaasiseenbaas #stservaas #komsnel #verwonderd #maastricht #merovingen</i>',
				tweetPic: '/img/twitter/rinalda-poster.jpg',
				likes: 69,
				comments: [
					{
						commentPic: '/img/pf/batsegeziech.jpg',
						commentName: 'Priester batsegeziech',
						commentHandle: '@PBatsegezich',
						tweet: 'Wat een onzedelijke praktijken! <i>#godslastering</i>'
					}
				]
			},
			{
				chapter: 9
			},
			{
				chapter: 10
			},
			{
				chapter: 4.1,
				profilePic: '/img/pf/frederik.jpg',
				profileName: 'Frederik Smidsch',
				profileHandle: '@FreSmid',
				tweet: 'Sinds het wonder van die “Sint Servaas” loopt het wonderbaarlijk genoeg nog harder in mijn smederij, de mensen komen echt uit het hele Merovingische rijk naar Maastricht. Goed voor de economie dus! <i>#stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				likes: 21,
				comments: [
					{
						commentPic: '/img/pf/henriette.jpg',
						commentName: 'Henriëtte Neijt',
						commentHandle: '@HennyNeijt',
						tweet: 'Ik wind er geen doekjes om: ik kom niet uitgenaaid!'
					},
					{
						commentPic: '/img/pf/rinalda.jpg',
						commentName: 'Rinalda de Hoor',
						commentHandle: '@RinaHoor',
						tweet: '<i>@HennyNeijt</i> Ik ook niet!'
					}
				]
			},
			{
				chapter: 4.2,
				profilePic: '/img/pf/frederik.jpg',
				profileName: 'Frederik Smidsch',
				profileHandle: '@FreSmid',
				tweet: '<i>@Tjeudas66</i> heeft gelijk, die “Sint Servaas” bestaat helemaal niet! Wat een overdreven verhalen zeg! Als hij bestaat, had iemand hem echt wel gezien! <i>#stservaasbestaatniet #verwonderd #maastricht #merovingen</i>',
				likes: 19,
				comments: [
					{
						commentPic: '/img/pf/tjeu.jpg',
						commentName: 'Tjeu Das',
						commentHandle: '@Tjeudas66',
						tweet: '<i>@FreSmid</i> Goed gezegd, zegt het voort!'
					}
				]
			},
			{
				chapter: 6.1,
				profilePic: '/img/pf/merovinger.jpg',
				profileName: 'Dagblad de Merovinger',
				profileHandle: '@DeMerovinger',
				tweet: 'BREAKING Biedingsoorlog op de markt! Er worden producten aan de hoogste bieder verkocht die besprenkeld zijn met water dat Sint Servaas voor zijn dood nog gezegend heeft. <i>#opisop #stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				likes: 52,
				comments: [
					{
						commentPic: '/img/pf/henriette.jpg',
						commentName: 'Henriëtte Neijt',
						commentHandle: '@HennyNeijt',
						tweet: `Ich hub d'r ein! <i>#blessed</i>`
					}
				]
			},
			{
				chapter: 6.2,
				profilePic: '/img/pf/merovinger.jpg',
				profileName: 'Dagblad de Merovinger',
				profileHandle: '@DeMerovinger',
				tweet: 'BREAKING Chaos op de markt! Er worden gratis producten weggegeven die besprenkeld zijn met water dat Sint Servaas voor zijn dood nog gezegend heeft. <i>#opisop #stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				likes: 47,
				comments: []
			},
			{
				chapter: 6.3,
				profilePic: '/img/pf/merovinger.jpg',
				profileName: 'Dagblad de Merovinger',
				profileHandle: '@DeMerovinger',
				tweet: 'BREAKING Fraude op de markt?! Er worden producten verkocht die besprenkeld zouden zijn met water dat Sint Servaas voor zijn dood nog gezegend zou hebben. Niemand heeft het gezien, feit of fabel? <i>#feitoffabel #stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				likes: 51,
				comments: [
					{
						commentPic: '/img/pf/tjeu.jpg',
						commentName: 'Tjeu Das',
						commentHandle: '@Tjeudas66',
						tweet: 'Zie je nou wel, allemaal onzin! <i>#FakeNews #SintServaasBestaatNiet</i>'
					}
				]
			},
			{
				chapter: 8.1,
				profilePic: '/img/pf/rinalda.jpg',
				profileName: 'Rinalda de Hoor',
				profileHandle: '@RinaHoor69',
				tweet: 'Niemand hoeft mij te beschermen, Sint Servaas ook niet! <i>#eigenbaas #stservaas #komsnel #verwonderd #maastricht #merovingen</i>',
				tweetPic: '/img/twitter/rinalda-poster.jpg',
				likes: 51,
				comments: [
					{
						commentPic: '/img/pf/tjeu.jpg',
						commentName: 'Tjeu Das',
						commentHandle: '@Tjeudas66',
						tweet: 'Gelijk heb je! Met de borst vooruit! <i>#SintServaasBestaatNiet</i>'
					}
				]
			},
			{
				chapter: 8.2,
				profilePic: '/img/pf/rinalda.jpg',
				profileName: 'Rinalda de Hoor',
				profileHandle: '@RinaHoor69',
				tweet: 'Wow, wat is die Sint Servaas toch een baas! Zelfs na zijn dood verricht die nog wonderen! <i>#stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				tweetPic: '/img/twitter/rinalda-poster.jpg',
				likes: 80,
				comments: []
			}
		],
		
		// localstorage
		this.$localStorage = JSON.parse(localStorage.getItem('progression'));
		this.$chapter = this.getChapter();
		this.$chapterStorage;

		// Notification
		this.$notification = document.getElementById('o-notification');
		if (this.$notification) {
			this.$notificationApp = document.getElementById('o-notification__app');
			this.$notificationAppText = document.getElementById('o-notification__apptext');
			this.$notificationFrom = document.getElementById('o-notification__from');
			this.$notificationText = document.getElementById('o-notification__text');
			this.$notificationLink = document.getElementById('o-notification__link');
		}
	}

	eventListeners() { }

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
	
	getChapter() {
		for (let i = 0; i < this.$localStorage.length; i++) {
			if (this.$localStorage[i].done === 0) {
				this.$chapter = i;
				this.$chapterStorage = this.$localStorage[i];
				break;
			}
		}
		if (this.$holder) {
			this.placeRightText(this.$chapter);
		}
	}

	placeRightText(chapter) {

		if (chapter === 3) {
			if (this.$chapterStorage.twitter === 0) {
				setTimeout(() => {
					this.notifications('Mensen geloven die Tjeu Das...', '/whatsapp.html', false);
				}, 5000);
			} else if (this.$chapterStorage.twitter === 1) {
				chapter = 10;
				setTimeout(() => {
					this.notifications('Kom naar de kerk aan het Vrijthof...', '/whatsapp.html', false);
					this.$localStorage[3].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
				}, 5000);
			} else if (this.$chapterStorage.twitter === 2) {
				chapter = 11;
				setTimeout(() => {
					this.notifications('Kom naar de kerk aan het Vrijthof...', '/whatsapp.html', false);
					this.$localStorage[3].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
				}, 5000);
			}
		} else if (chapter === 5) {
			if (this.$chapterStorage.twitter === 0) {
				setTimeout(() => {
					this.$localStorage[chapter].whatsapp = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
					this.notifications('Ik heb de volgende opdracht voor je...', '/whatsapp.html', false);
				}, 5000);
			} else if (this.$chapterStorage.twitter === 1) {
				chapter = 12;
				setTimeout(() => {
					this.$localStorage[5].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
					this.notifications('Het is mij ter ore gekomen...', '/whatsapp.html', false);
				}, 5000);
			} else if (this.$chapterStorage.twitter === 2) {
				chapter = 13;
				setTimeout(() => {
					this.$localStorage[5].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
					this.notifications('Het is mij ter ore gekomen...', '/whatsapp.html', false);
				}, 5000);
			} else if (this.$chapterStorage.twitter === 3) {
				chapter = 14;
				setTimeout(() => {
					this.$localStorage[5].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
					this.notifications('Het is mij ter ore gekomen...', '/whatsapp.html', false);
				}, 5000);
			}
		} else if (chapter === 7) {
			if (this.$chapterStorage.twitter === 0) {
				chapter = 7;
				setTimeout(() => {
					this.$localStorage[7].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
					this.notifications('Bij de stads...', '/whatsapp.html', false);
				}, 5000);
			} else if (this.$chapterStorage.twitter === 1) {
				chapter = 15;
				setTimeout(() => {
					this.$localStorage[7].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
					this.notifications('Bij de stads...', '/whatsapp.html', false);
				}, 5000);
			} else if (this.$chapterStorage.twitter === 2) {
				chapter = 16;
				setTimeout(() => {
					this.$localStorage[7].done = 1;
					localStorage.setItem('progression', JSON.stringify(this.$localStorage));
					this.notifications('Bij de stads...', '/whatsapp.html', false);
				}, 5000);
			}
		}

		if (this.$twitterInfo[chapter].tweet) {
			const date = new Date();
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();
			let minutes;

			if (date.getMinutes - 7  < 0) {
				minutes = 55;
			} else if (date.getMinutes() - 7 < 10) {
				minutes = '0' + (date.getMinutes() - 7);
			} else {
				if (date.getMinutes() - 7 < 10) {
					minutes = '0' + (date.getMinutes() - 7);
				} else {
					minutes = date.getMinutes() - 7;
				}
			}

			this.$twitterPic.style.backgroundImage = `url(${this.$twitterInfo[chapter].profilePic})`;
			this.$twitterName.innerText = this.$twitterInfo[chapter].profileName;
			this.$twitterHandle.innerText = this.$twitterInfo[chapter].profileHandle;
			this.$twitterTweet.innerHTML = this.$twitterInfo[chapter].tweet;
			if (this.$twitterInfo[chapter].tweetPic) {
				this.$twitterTweetPic.src = this.$twitterInfo[chapter].tweetPic;
			}
			this.$twitterDate.innerText = `${day}/${month}/${year}`;
			this.$twitterTime.innerText = `${date.getHours()}:${minutes}`;
			this.$twitterLikes.innerText = this.$twitterInfo[chapter].likes;
			if (this.$twitterInfo[chapter].comments) {
				for (let i = 0; i < this.$twitterInfo[chapter].comments.length; i++) {
					this.$twitterComments.innerHTML += `<div class="m-twitter__comment">
					<div class="l-container">
						<div class="l-row">
							<div class="l-col-3">
								<div class="m-twitter__profilepic" style="background-image: url(${this.$twitterInfo[chapter].comments[i].commentPic});"></div>
							</div>
							<div class="l-col-7">
								<div class="l-row">
									<div class="l-row">
										<div class="l-col-12">
											<div class="m-twitter__profile--name">${this.$twitterInfo[chapter].comments[i].commentName}</div>
										</div>
									</div>
									<div class="l-row">
										<div class="l-col-12">
											<div class="m-twitter__profile--handle">${this.$twitterInfo[chapter].comments[i].commentHandle}</div>
										</div>
									</div>
								</div>
							</div>
							<div class="l-col-2">
								<i class="fas fa-angle-down"></i>
							</div>
						</div>
						<div class="l-row">
							<div class="l-col-12">
								<div class="m-twitter__reply">
									<p>${this.$twitterInfo[chapter].comments[i].tweet}</p>
								</div>
							</div>
						</div>
					</div>
				</div>`;
				}
			}
		}

	}

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new Twitter();
