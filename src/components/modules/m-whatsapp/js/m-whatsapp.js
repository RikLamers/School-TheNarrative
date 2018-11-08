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
            backBtn = document.getElementById("back-btn"),
            appImg = document.getElementById("app-img"),
            appImgLarge = document.getElementById("app-img-enlarged"),
            choiceWrap = document.getElementsByClassName("m-whatsapp__choicewrap"),
            clickAnswer = document.getElementsByClassName("lees"),
            bubbleClass = document.getElementsByClassName("m-whatsapp__wrapper-bubble"),
            answer = document.getElementsByClassName("m-whatsapp__answer");

        // actuele tijd
        var date = new Date(),
            time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        var chapter1intro = "Koning Clovis heeft mij gevraagd het Christendom in Maastricht te verspreiden. Daarom heb ik een afspraak gemaakt met de bisschop van Tongeren waardoor we nu zijn goede naam mogen gebruiken. We maken van hem een heilige; ‘sint Servaas’! Nu moeten we alleen nog wonderen creëren zodat de mensen ons geloven. Wil je me hierbij helpen?";
        var chapter2intro = "Er doet een verhaal de rondte dat er al dagen een zwerver langs de Maas loopt en hij is er zelfs al meerdere keren bijna in gevallen, we vermoeden dat hij niets ziet. Als we hem helpen kunnen we dat als wonder verkondigen! Loop naar de Maas en verricht dat wonder!";

        // geluiden verzenden ontvangen
        function sendSound() {
            var sendSound = new Audio('/sounds/whatsapp_send.m4a');
            sendSound.play();
        }
        function recieveSound() {
            var recieveSound = new Audio('/sounds/whatsapp_recieve.m4a');
            recieveSound.play();
        }

        // reload pagina op back button
        backBtn.onclick = function() {
            location.reload();
        };

        // vergroot en verklein profiel foto
        appImg.onclick = function() {
            appImgLarge.classList.remove('hide');
            appImgLarge.onclick = function() {
                appImgLarge.classList.add('hide');
            };
        };
        // document.addEventListener("click", function (event) {
        //     console.log(event.target.id);
        //     if (event.target.id !== appImgLarge) {
        //         appImgLarge.classList.add('hide');
        //     }
        // });

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

        // setTimeout(function () { // TWEEDE BERICHT
        //     // Batsegeziech komt online
        //     document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
        //     document.getElementById("typing").classList.remove('hide');
        // }, 1000); // CHAPTER1INTRO
        // setTimeout(function () {
        //     // toon eerste bericht CHAPTER1INTRO
        //     bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
        //         '<div class="m-whatsapp__txt"> ' +
        //         '<p class="m-whatsapp__message">' + chapter2intro + '</p>' +
        //         '<span class="m-whatsapp__timestamp">' + time + '</span>' +
        //         '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
        //
        //     bubbleClass[0].classList.remove('hide');
        //     document.getElementById("typing").classList.add('hide');
        //     document.getElementById("online").classList.remove('hide');
        //     recieveSound();
        // }, 1500);
        // setTimeout(function() {
        //     choiceWrap[0].classList.remove('hide');
        //     choice.innerHTML = '<div class="m-whatsapp__choice">' +
        //         '<div class="antwoord">Keuze 1</div>' +
        //         '<div class="lees">Lees volledige keuze</div>' +
        //         '<div id="1" class="m-whatsapp__answer">' + "Je vindt twee ronde glasscherven, wat hout en touw en maakt deze vernuftig aan elkaar. Je geeft het aan de zwerver en zegt er specifiek bij dat ze door St. Servaas geschonken zijn." + '</div>' +
        //         '</div>' +
        //         '<div class="m-whatsapp__choice">' +
        //         '<div class="antwoord">Keuze 2</div>' +
        //         '<div class="lees">Lees volledige keuze</div>' +
        //         '<div id="2" class="m-whatsapp__answer">' + "Je vult een emmer met water uit de Maas en wast daarmee de ogen van de zwerver schoon. Je zegt er specifiek bij dat het heilige water van St. Servaas zijn zicht teruggebracht heeft." + '</div>' +
        //         '</div>' +
        //         '<div class="m-whatsapp__choice">' +
        //         '<div class="antwoord">Keuze 3</div>' +
        //         '<div class="lees">Lees volledige keuze</div>' +
        //         '<div id="3" class="m-whatsapp__answer">' + "Je negeert de zwerver en laat hem aan zijn lot over." + '</div>' +
        //         '</div>';
        //     for(let i=0; i < clickAnswer.length; i++){
        //         clickAnswer[i].onclick = function() {
        //             showChoice(event);
        //         };
        //     }
        //     for(let i=0; i < answer.length; i++){
        //         answer[i].onclick = function(e) {
        //             // console.log(this.innerHTML);
        //             bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
        //                 '<div class="m-whatsapp__txt"> ' +
        //                 '<p class="m-whatsapp__message">' + this.innerHTML + '</p>' +
        //                 '<span class="m-whatsapp__timestamp">' + time + '</span>' +
        //                 '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
        //                 '</div>');
        //             this.onclick = null;
        //             sendSound();
        //             console.log(e.target.id);
        //             if (e.target.id === "1") {
        //                 setTimeout(function() {
        //                     document.getElementById("typing").classList.remove('hide');
        //                     document.getElementById("online").classList.add('hide');
        //                     setTimeout(function() {
        //                         document.getElementById("typing").classList.add('hide');
        //                         document.getElementById("online").classList.remove('hide');
        //                     }, 500 );
        //                 }, 500 );
        //                 setTimeout(function() {
        //                     bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 385px;">' +
        //                         '<div class="m-whatsapp__txt"> ' +
        //                         '<p class="m-whatsapp__message">' + "Goed gedaan, de zwerver kan wonder boven wonder weer wat zien! Kijk wat erover wordt gezegd; link (Facebook post; St. Servaas laat blinde weer zien)." + '</p>' +
        //                         '<span class="m-whatsapp__timestamp">' + time + '</span>' +
        //                         '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
        //                     recieveSound();
        //                 }, 1000 );
        //             }
        //             if (e.target.id === "2") {
        //                 setTimeout(function() {
        //                     document.getElementById("typing").classList.remove('hide');
        //                     document.getElementById("online").classList.add('hide');
        //                     setTimeout(function() {
        //                         document.getElementById("typing").classList.add('hide');
        //                         document.getElementById("online").classList.remove('hide');
        //                     }, 1000 );
        //                 }, 0 );
        //                 setTimeout(function() {
        //                     bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 370px;">' +
        //                         '<div class="m-whatsapp__txt"> ' +
        //                         '<p class="m-whatsapp__message">' + "Goed gedaan, de zwerver kan wonder boven wonder weer wat zien! Kijk wat erover wordt gezegd; link (Facebook post; St. Servaas laat blinde weer zien)." + '</p>' +
        //                         '<span class="m-whatsapp__timestamp">' + time + '</span>' +
        //                         '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
        //                     recieveSound();
        //                 }, 1500 );
        //             }
        //             if (e.target.id === "3") {
        //                 setTimeout(function() {
        //                     document.getElementById("typing").classList.remove('hide');
        //                     document.getElementById("online").classList.add('hide');
        //                     setTimeout(function() {
        //                         document.getElementById("typing").classList.add('hide');
        //                         document.getElementById("online").classList.remove('hide');
        //                     }, 1000 );
        //                 }, 0 );
        //                 setTimeout(function() {
        //                     bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 175px;">' +
        //                         '<div class="m-whatsapp__txt"> ' +
        //                         '<p class="m-whatsapp__message">' + "Jammer, ik ben verwonderd dat je deze uitgelezen mogelijkheid hebt laten lopen, ik hoop dat je weet wat je doet." + '</p>' +
        //                         '<span class="m-whatsapp__timestamp">' + time + '</span>' +
        //                         '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
        //                     recieveSound();
        //                 }, 1000 );
        //             }
        //         };
        //     }
        // }, 1500);
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
