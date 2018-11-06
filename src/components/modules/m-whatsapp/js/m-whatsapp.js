import $ from 'jquery';

class WhatsApp {
    constructor() {
        this.initialize();
    }

    setup() {
        this.$holder = document.getElementsByClassName('m-whatsapp')[0];
        this.$body = document.getElementsByTagName('body')[0];
        this.$chapter = this.$body.getAttribute('data-id');
    }

    eventListeners() { }

    displayText() {
        var bubbleWrap = document.getElementById("bubble-wrapper"),
            choice = document.getElementById("whatsapp_choice"),
            choiceWrap = document.getElementsByClassName("m-whatsapp__choicewrap"),
            clickAnswer = document.getElementsByClassName("lees"),
            bubbleClass = document.getElementsByClassName("m-whatsapp__wrapper-bubble"),
            answer = document.getElementsByClassName("m-whatsapp__answer");

        // tijd
        var date = new Date(),
            time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        var chapter1intro = "Koning Clovis heeft mij gevraagd het Christendom in Maastricht te verspreiden. Daarom heb ik een afspraak gemaakt met de bisschop van Tongeren waardoor we nu zijn goede naam mogen gebruiken. We maken van hem een heilige; ‘sint Servaas’! Nu moeten we alleen nog wonderen creëren zodat de mensen ons geloven. Wil je me hierbij helpen?";

        function sendSound() {
            var sendSound = new Audio('/sounds/whatsapp_send.m4a');
            sendSound.play();
        }
        function recieveSound() {
            var recieveSound = new Audio('/sounds/whatsapp_recieve.m4a');
            recieveSound.play();
        }

        function showAnswer(event) {
            // console.log(event.target.nextElementSibling);
            if (event.target.nextElementSibling.style.display === ''){
                event.target.nextElementSibling.style.display = 'none';
            }
            if (event.target.nextElementSibling.style.display !== 'none') {
                event.target.nextElementSibling.style.display = 'none';
                event.target.innerHTML = "Lees volledige antwoord";

            } else {
                choice.style.height = "auto";
                event.target.nextElementSibling.style.display = 'block';
                event.target.innerHTML = "Terug naar antwoorden";
            }
        };

        // user komt op pagina, verhaal start hier
        setTimeout(function () { // EERSTE BERICHT
            // Batsegeziech komt online
            document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
            document.getElementById("typing").classList.remove('hide');
        }, 1000); // CHAPTER1INTRO
        setTimeout(function () {
            // toon eerste bericht CHAPTER1INTRO
            bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                '<div class="m-whatsapp__txt"> ' +
                '<p class="m-whatsapp__message">' + chapter1intro + '</p>' +
                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

            bubbleClass[0].classList.remove('hide');
            document.getElementById("typing").classList.add('hide');
            document.getElementById("online").classList.remove('hide');
            recieveSound();
        }, 1500);
        setTimeout(function() {
            choiceWrap[0].classList.remove('hide');
            choice.innerHTML = '<div class="m-whatsapp__choice">' +
                '<div class="antwoord">Antwoord 1</div>' +
                '<div class="lees">Lees volledige antwoord</div>' +
                '<div id="1" class="m-whatsapp__answer">' + "Ja, ik doe mee!" + '</div>' +
                '</div>' +
                '<div class="m-whatsapp__choice">' +
                '<div class="antwoord">Antwoord 2</div>' +
                '<div class="lees">Lees volledige antwoord</div>' +
                '<div id="2" class="m-whatsapp__answer">' + "Ik wil best helpen, maar waarom de naam \“sint Servaas?\”" + '</div>' +
                '</div>';
            for(let i=0; i < clickAnswer.length; i++){
                clickAnswer[i].onclick = function() {
                    showAnswer(event);
                };
            }
            for(let i=0; i < answer.length; i++){
                answer[i].onclick = function(e) {
                    // console.log(this.innerHTML);
                    bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + this.innerHTML + '</p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                        '</div>');
                    this.onclick = null;
                    sendSound();
                    if (e.target.id === "1") {
                        setTimeout(function() {
                            document.getElementById("typing").classList.remove('hide');
                            document.getElementById("online").classList.add('hide');
                            setTimeout(function() {
                                document.getElementById("typing").classList.add('hide');
                                document.getElementById("online").classList.remove('hide');
                            }, 500 );
                        }, 500 );
                        setTimeout(function() {
                            bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 120px;">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">' + "Mooi zo, ga meteen naar Facebook, Instagram en Twitter en log daar in." + '</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                            recieveSound();
                        }, 1000 );
                    }
                    if (e.target.id === "2") {
                        setTimeout(function() {
                            document.getElementById("typing").classList.remove('hide');
                            document.getElementById("online").classList.add('hide');
                            setTimeout(function() {
                                document.getElementById("typing").classList.add('hide');
                                document.getElementById("online").classList.remove('hide');
                            }, 1000 );
                        }, 0 );
                        setTimeout(function() {
                            bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 175px;">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">' + "Sint wordt in het Christendom gebruikt om aan te geven dat iemand heilig is en Servaas is de naam van de bisschop van Tongeren, vandaar. Mooi zo, ga meteen naar Facebook, Instagram en Twitter en log daar in." + '</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                            recieveSound();
                        }, 1500 );
                    }
                };
            }
        }, 1500);
    }

    initialize() {
        this.setup();
        this.eventListeners();
        if (this.$holder) {
            this.displayText();
        }
    }
}

new WhatsApp();
