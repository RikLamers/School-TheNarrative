import $ from 'jquery';

class Progression {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('o-progression')[0];
        this.$body = document.getElementsByTagName('body')[0];
        this.$mobileInterface = document.getElementsByClassName('m-mobile-interface')[0];
        this.$mobileInterfaceProgressionText = document.getElementsByClassName('m-mobile-interface__progression')[0];
        this.$mobileInterfaceBattFiller = document.getElementsByClassName('m-mobile-interface__battfiller')[0];
        this.$progression = [];
        this.$currentProgression = this.retrieveProgression();
        this.$initialHref = window.location.href;
        if (window.performance.navigation.type === 1 || window.location.href !== this.$initialHref) {
            this.retrieveProgression();
            this.checkProgressionBar();
        }
	}

    eventListeners() { }

    retrieveProgression() {
        const retrievedProgression = localStorage.getItem('progression');

        if (retrievedProgression) {
            this.$progression = JSON.parse(localStorage.getItem('progression'));

            for (let i = 0; i < this.$progression.length; i++) {
                if (this.$progression[i].done === 0) {
                    this.$body.setAttribute('data-id', i + 1);
                    break;
                }
            }

        } else {
            this.setInitialProgression();
        }

    }

    setInitialProgression() {
        const structure =  {
            whatsapp: 0,
            facebook: 0,
            instagram: 0,
            homescreen: 0,
            twitter: 0,
            meropedia: 0,
            merovinger: 0,
            done: 0,
            points: 0
        };

        for (let i = 0; i < 11; i++) {
            this.$progression.push(structure);
        }
        
        localStorage.setItem('progression', JSON.stringify(this.$progression));
    }

    checkProgressionBar() {

        let percentage = 0;

        for (let i = 0; i < this.$progression.length; i++) {
            percentage = percentage + Number(this.$progression[i].points);
        }

        this.$mobileInterfaceProgressionText.innerText = `${percentage}%`;
        this.$mobileInterfaceBattFiller.style.width = `${0.14 * percentage}px`;

    }

	initialize() {
		this.setup();
        this.eventListeners();

        if (this.$mobileInterface) {
            this.checkProgressionBar();
        }

	}
}

new Progression();
