import $ from 'jquery';

class WhatsApp2 {
    constructor() {
        this.initialize();
    }

    setup() {
        this.$holder = document.getElementsByClassName('m-whatsapp')[0];
        this.$body = document.getElementsByTagName('body');
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

        function showChoice(event) {
            // console.log(event.target.nextElementSibling);
            if (event.target.nextElementSibling.style.display === ''){
                event.target.nextElementSibling.style.display = 'none';
            }
            if (event.target.nextElementSibling.style.display !== 'none') {
                event.target.nextElementSibling.style.display = 'none';
                event.target.innerHTML = "Lees volledige keuze";

            } else {
                choice.style.height = "auto";
                event.target.nextElementSibling.style.display = 'block';
                event.target.innerHTML = "Terug naar keuzes";
            }
        };


    }

    initialize() {
        this.setup();
        this.eventListeners();
        if (this.$holder) {
            this.displayText();
        }
    }
}

new WhatsApp2();
