import $ from 'jquery';

class WhatsApp {
    constructor() {
        this.initialize();
    }

    setup() {
        this.$holder = document.getElementsByClassName('m-whatsapp')[0];
        this.$body = document.getElementsByTagName('body');
    }

    eventListeners() { }

    displayText() {
        var recieved = document.getElementById("recieved_txt");
        var introText = "Koning Clovis heeft mij gevraagd het Christendom in Maastricht te verspreiden. Daarom heb ik een afspraak gemaakt met de bisschop van Tongeren waardoor we nu zijn goede naam mogen gebruiken. We maken van hem een heilige; ‘sint Servaas’! Nu moeten we alleen nog wonderen creëren zodat de mensen ons geloven. Wil je me hierbij helpen?";

        recieved.innerHTML = '<p class=\"m-whatsapp__message\">' + introText + '</p><span class=\"m-whatsapp__timestamp\">' + '</span>';


        setTimeout(function(){

            }, 300);
    }

    initialize() {
        this.setup();
        this.eventListeners();
        this.displayText();
    }
}

new WhatsApp();
