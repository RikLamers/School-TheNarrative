import $ from 'jquery';

class Instagram {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-instagram')[0];
        // this.$photo = document.getElementsByClassName('m-instagram__photo')[0];
        this.$like = document.getElementsByClassName('m-instagram__like')[0];
        this.$body = document.getElementsByTagName('body')[0];
        this.$touchCounter = 0;
        this.$liked = false;
        this.$lastY = 0;

        // All elements
        this.$profilePic = document.getElementsByClassName('m-instagram__profilepic')[0];
        this.$profileName = document.getElementsByClassName('m-instagram__profilename');
        this.$postLocation = document.getElementById('m-instagram__location');
        this.$postPhoto = document.getElementById('m-instagram__photo');
        this.$likedBy = document.getElementById('m-instagram__likedby');
        this.$otherLikes = document.getElementById('m-instagram__others');
        this.$postComment = document.getElementById('m-instagram__postcomment');
        this.$allComments = document.getElementById('m-instagram__allcomments');
        this.$commentBy = document.getElementById('m-instagram__commentby');
        this.$comment = document.getElementById('m-instagram__comment');
        this.$timestamp = document.getElementById('m-instagram__timestamp');

        this.$postInfo = [
            {
                chapter: 1
            },
            {
                chapter: 2
            },
            {
                chapter: 3,
                accName: 'ChristendomMaastricht',
                accPic: '/img/instagram/posts/pf.jpg',
                accLocation: 'Maastricht, The Netherlands',
                postImg: '/img/instagram/posts/h3.jpg',
                postText: '<i>#stservaas #christendom #merchandise #kleding #mode #musthave #opisop #maastricht #merovingen</i>',
                postLikedBy: 'Bastiaan',
                postLikes: '51 others',
                postCommentBy: 'TjeuDas66',
                postCommentText: 'VERRAAD!🤬😡',
                postCommentCount: '3'
            },
            {
                chapter: 4
            },
            {
                chapter: 5
            },
            {
                chapter: 6
            },
            {
                chapter: 7
            },
            {
                chapter: 8,
                accName: 'TjeuDas66',
                accPic: '/img/instagram/posts/td-pf.png',
                accLocation: 'Maastricht, The Netherlands',
                postImg: '/img/instagram/posts/h8.jpg',
                postText: '<i>#stservaasbestaatniet #verwonderd #merchandise #kleding #mode #musthave #opisop #maastricht #merovingen</i>',
                postLikedBy: 'Frederik',
                postLikes: '99 others',
                postCommentBy: 'Frederik',
                postCommentText: 'Super Tjeu!👍🏻',
                postCommentCount: '37'
            },
            {
                chapter: 9,
                accName: 'ChristendomMaastricht',
                accPic: '/img/instagram/posts/pf.png',
                accLocation: 'Maastricht, The Netherlands',
                postImg: '/img/instagram/posts/h9.1.jpg',
                postText: '<i>#stservaaswijn #stservaas #wijnisfijn #wonderbaarlijklekker #musthave #maastricht #merovingen</i>',
                postLikedBy: 'Rinalda',
                postLikes: '1357 others',
                postCommentBy: 'Frederik',
                postCommentText: 'Go Servaas!😇',
                postCommentCount: '501'
            },
            {
                chapter: 10
            },
            {
                chapter: 9.1,
                accName: 'ChristendomMaastricht',
                accPic: '/img/instagram/posts/pf.png',
                accLocation: 'Maastricht, The Netherlands',
                postImg: '/img/instagram/posts/h9.2.jpg',
                postText: '<i>#stservaasisbier #stservaas #bierplezier #wonderbaarlijklekker #musthave #maastricht #merovingen</i>',
                postLikedBy: 'TjeuDas66',
                postLikes: '555 others',
                postCommentBy: 'TjeuDas66',
                postCommentText: 'Ik like alleen om bier, niet om die neppe "servaas"!',
                postCommentCount: '65'
            },
            {
                chapter: 9.2,
                accName: 'ChristendomMaastricht',
                accPic: '/img/instagram/posts/pf.png',
                accLocation: 'Maastricht, The Netherlands',
                postImg: '/img/instagram/posts/h9.3.jpg',
                postText: '<i>#stservaasabsint #stservaas #absintservaas #wonderbaarlijklekker #musthave #maastricht #merovingen</i>',
                postLikedBy: 'Frederik',
                postLikes: '364 others',
                postCommentBy: 'Frederik',
                postCommentText: 'Eindelijk iets voor echte mannen zoals ik!💪🏻',
                postCommentCount: '23'
            }
        ];

        this.$localStorage = JSON.parse(localStorage.getItem('progression'));
        this.$chapter = this.getChapter();
        this.$chapterStorage;

	}

    eventListeners() {
        if (this.$holder) {
            this.$like.addEventListener('click', (e) => {
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

        if (chapter === 8) {
            if (this.$chapterStorage.Instagram === 1) {
                chapter = 10;
            } else if (this.$chapterStorage.Instagram === 2) {
                chapter = 11;
            }
        }

        if (this.$postInfo[chapter].postImg) {
            this.$profilePic.src = this.$postInfo[chapter].accPic;
            this.$profileName[0].innerText = this.$postInfo[chapter].accName;
            this.$postLocation.innerText = this.$postInfo[chapter].accLocation;
            this.$postPhoto.src = this.$postInfo[chapter].postImg;
            this.$likedBy.innerText = this.$postInfo[chapter].postLikedBy;
            this.$otherLikes.innerText = this.$postInfo[chapter].postLikes;
            this.$profileName[1].innerText = this.$postInfo[chapter].accName;
            this.$postComment.innerHTML = this.$postInfo[chapter].postText;
            this.$allComments.innerText = this.$postInfo[chapter].postCommentCount;
            this.$commentBy.innerText = this.$postInfo[chapter].postCommentBy;
            this.$comment.innerHTML = this.$postInfo[chapter].postCommentText;
            this.$timestamp.innerText = Math.floor(Math.random() * 30);
        }
    }

	initialize() {
		this.setup();
        this.eventListeners();
	}
}

new Instagram();
