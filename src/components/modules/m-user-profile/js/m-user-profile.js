import $ from 'jquery';

class UserProfile {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = $('.m-user-profile');
        this.$body = $('body');
        this.$profile;
        this.$browser;
        this.$browserList = [];
        this.$osList = ['mac', 'android', 'iphone', 'windows'];
        this.$htmlClasses = this.getHtmlClasses();
	}

    // eventListeners() { }

    // Get all html classes Modernizr puts on html tage
    getHtmlClasses() {
        let classes = [];
        const classesObj = document.getElementsByTagName('html')[0].classList;

        for (let i = 0; i < classesObj.length; i++) {
            classes.push(classesObj[i]);
        }

        return classes;
    }

    // Perform check on what device and browser user is
    checkDevice(htmlClasses, list) {
        for (let x = 0; x < list.length; x++) {
            if (htmlClasses.indexOf(list[x]) !== -1) {
                return list[x];
            }
        }
    }
    
    // Get device info, if it doens't exists get them and store them
    getDeviceInfo() {

        const setItems = JSON.parse(localStorage.getItem('deviceInfo'));

        if (setItems) {
            this.$browser = {
                browser: setItems.browser,
                os: setItems.os
            };
            console.log(this.$browser);
        } else {
            for (let i = 0; i < 101; i++) {
                this.$browserList.push('chrome' + i);
                this.$browserList.push('firefox' + i);
                if (i < 15) {
                    this.$browserList.push('safari' + i);
                }

                if (i > 11 && i < 18) {
                    this.$browserList.push('edge' + i);
                }
            }

            setTimeout(() => {
                this.$browser = {
                    browser: this.checkDevice(this.$htmlClasses, this.$browserList),
                    os: this.checkDevice(this.$htmlClasses, this.$osList)
                };
                
                localStorage.setItem('deviceInfo', JSON.stringify(this.$browser));
            }, 250);


        }

    }

	initialize() {
		this.setup();
        // this.eventListeners();
        this.getDeviceInfo();
	}
}

new UserProfile();
