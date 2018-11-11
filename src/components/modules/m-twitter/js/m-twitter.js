import $ from 'jquery';

class Twitter {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-Twitter')[0];
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
				profileHandle: '@tjeudas13',
				tweet: 'Die “Sint Servaas” bestaat helemaal niet! Die zwerver kon natuurlijk niets zien omdat hij zich niet waste en dat hij die Servaas daarna niet met eigen ogen gezien heeft is ook wel heel toevallig! <i>#stservaasbestaatniet #verwonderd #maastricht #merovingen</i>',
				comments: [
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit!'
					},
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit! <i>#wegmetservaas #opgerot #centen</i>'
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
				profileHandle: '@tjeudas13',
				tweet: 'Ja hoor die “Sint Servaas” is nu ook nog gestorven om ‘zijn’ stad te redden! Laat me niet lachen. Het werd ze gewoon te heet onder de voeten dus hebben ze er maar zelf een eind aan gemaakt en ik zal het gaan bewijzen ook! <i>#stservaasbestaatniet #stservaasbestondniet #verwonderd #maastricht #merovingen</i>',
				comments: [
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit!'
					},
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit! <i>#wegmetservaas #opgerot #centen</i>'
					}
				]
			},
			{
				chapter: 7
			},
			{
				chapter: 8
			},
			{
				chapter: 9
			},
			{
				chapter: 10
			},
			{
				chapter: 4.1,
				profilePic: '/img/twitter/posts/fs-pf.png',
				profileName: 'Frederik Smidsch',
				profileHandle: '@FreSmid',
				tweet: 'Sinds het wonder van die “Sint Servaas” loopt het wonderbaarlijk genoeg nog harder in mijn smederij, de mensen komen echt uit het hele Merovingische rijk naar Maastricht. Goed voor de economie dus! <i>#stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				comments: [
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit!'
					},
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit! <i>#wegmetservaas #opgerot #centen</i>'
					}
				]
			},
			{
				chapter: 4.2,
				profilePic: '/img/twitter/posts/fs-pf.png',
				profileName: 'Frederik Smidsch',
				profileHandle: '@FreSmid',
				tweet: '@Tjeudas13 heeft gelijk, die “Sint Servaas” bestaat helemaal niet! Wat een overdreven verhalen zeg! Als hij bestaat, had iemand hem echt wel gezien! <i>#stservaasbestaatniet #verwonderd #maastricht #merovingen</i>',
				comments: [
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit!'
					},
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit! <i>#wegmetservaas #opgerot #centen</i>'
					}
				]
			},
			{
				chapter: 6.1,
				profilePic: '/img/twitter/posts/m-pf.png',
				profileName: 'Dagblad de Merovinger',
				profileHandle: '@DeMerovinger',
				tweet: 'BREAKING Biedingsoorlog op de markt! Er worden producten aan de hoogste bieder verkocht die besprenkeld zijn met water dat Sint Servaas voor zijn dood nog gezegend heeft. <i>#opisop #stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				comments: [
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit!'
					},
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit! <i>#wegmetservaas #opgerot #centen</i>'
					}
				]
			},
			{
				chapter: 6.2,
				profilePic: '/img/twitter/posts/m-pf.png',
				profileName: 'Dagblad de Merovinger',
				profileHandle: '@DeMerovinger',
				tweet: 'BREAKING Chaos op de markt! Er worden gratis producten weggegeven die besprenkeld zijn met water dat Sint Servaas voor zijn dood nog gezegend heeft. <i>#opisop #stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				comments: [
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit!'
					},
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit! <i>#wegmetservaas #opgerot #centen</i>'
					}
				]
			},
			{
				chapter: 6.3,
				profilePic: '/img/twitter/posts/m-pf.png',
				profileName: 'Dagblad de Merovinger',
				profileHandle: '@DeMerovinger',
				tweet: 'BREAKING Fraude op de markt?! Er worden producten verkocht die besprenkeld zouden zijn met water dat Sint Servaas voor zijn dood nog gezegend zou hebben. Niemand heeft het gezien, feit of fabel? <i>#feitoffabel #stservaasiseenbaas #stservaas #verwonderd #maastricht #merovingen</i>',
				comments: [
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit!'
					},
					{
						commentPic: '/img/twitter/posts/fs-pf.png',
						commentName: 'Frederik',
						commentHandle: '@freSmid',
						tweet: 'Helemaal mee eens Tjeu! Die Servaas moet de stad uit! <i>#wegmetservaas #opgerot #centen</i>'
					}
				]
			}
		],
		
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
		this.placeRightText(this.$chapter);
	}

	placeRightText(chapter) {


		console.log(this.$twitterInfo);

		if (chapter === 3) {
			if (this.$chapterStorage.twitter === 1) {
				chapter = 10;
			} else if (this.$chapterStorage.twitter === 2) {
				chapter = 11;
			}
		} else if (chapter === 5) {
			if (this.$chapterStorage.twitter === 1) {
				chapter = 12;
			} else if (this.$chapterStorage.twitter === 2) {
				chapter = 13;
			} else if (this.$chapterStorage.twitter === 3) {
				chapter = 14;
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
