import $ from 'jquery';

class WhatsApp {
    constructor() {
        this.initialize();
    }

    setup() {
        this.$holder = document.getElementsByClassName('m-whatsapp')[0];
        this.$body = document.getElementsByTagName('body')[0];

        // localstorage
        this.$qr = JSON.parse(localStorage.getItem('qr'));
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
        chapter = chapter + 1;
        this.displayText(chapter, this.$qr, this.$localStorage);
    }

    displayText(chapter, qr, storage) {
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

        var chapter1intro = 'Koning Clovis heeft mij gevraagd het Christendom in Maastricht te verspreiden. Daarom heb ik een afspraak gemaakt met de bisschop van Tongeren waardoor we nu zijn goede naam mogen gebruiken. We maken van hem een heilige; ‘sint Servaas’! Nu moeten we alleen nog wonderen creëren zodat de mensen ons geloven. Wil je me hierbij helpen?';
        var chapter2intro = 'Er doet een verhaal de rondte dat er al dagen een zwerver langs de Maas loopt en hij is er zelfs al meerdere keren bijna in gevallen, we vermoeden dat hij niets ziet. Als we hem helpen kunnen we dat als wonder verkondigen! Loop naar de Maas en verricht dat wonder!';
        var chapter3intro = 'Kleermaakster Henriette Neijt is een van de weinige Christenen in Maastricht en heeft contact met ons opgenomen. Ga naar haar toe.';
        var chapter4intro = 'Ik las net een Tweet van ene Tjeu Das, hij gelooft ons niet. Kijk maar;';
        var chapter5intro = 'Kom naar de kerk aan het Vrijthof, het is tijd voor een nieuw wonder.';
        var chapter6intro = 'Tjeu Das heeft ook weer van zich laten horen, kijk maar;';
        var chapter7intro = 'Het is mij ter ore gekomen dat dorpsgek Gekke Geis al dagen door de stad zwalkt. Je kunt hem vinden bij de brug;';
        var chapter8intro = 'Ja hoor, Tjeu Das heeft ook weer iets geplaatst, kijk maar;';
        var chapter9intro = 'Bij de stadsbrouwerij aan de linkerkant van de brug kunnen we met het gezegde st. Servaas water drank brouwen. Ga ernaartoe;';
        var chapter10intro = 'Tjeu Das organiseert bij de uitkijktoren langs de Maas een bijeenkomst om zijn relaas te houden, kijk maar;';
        var chapterSucces = 'Het is ons gelukt! Tjeu Das en zijn aanhangers hebben hun biezen gepakt en de stad verlaten.De stad gelooft nu in st. Servaas en het Christendom en groeit als nooit tevoren, kijk maar; link (Facebook post; Maastricht bloeit op dankzij st. Servaas; Mini-volksverhuizing Tjeu Das en aanhangers)';
        var chapterFail = 'Het is je niet gelukt… Tjeu Das heeft meer volgers dan ooit. De stad gelooft nauwelijks meer in st. Servaas en het Christendom en de groei maakt een pas op de plaats, kijk maar; link (Facebook post; Maastricht in de vergetelheid door kerkelijk bedrog; Tjeu Das; Maastrichts’ grootste influencer)';

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

        function showChapter1(qr) {
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
                                    '<p class="m-whatsapp__message">' + "Mooi zo, ga meteen naar Facebook, Instagram en Twitter en log daar in. <a href='/facebook-login.html'>Klik hier</a>." + '</p>' +
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
                                    '<p class="m-whatsapp__message">' + "Sint wordt in het Christendom gebruikt om aan te geven dat iemand heilig is en Servaas is de naam van de bisschop van Tongeren, vandaar. Mooi zo, ga meteen naar Facebook, Instagram en Twitter en log daar in. <a href='/facebook-login.html'>Klik hier</a>." + '</p>' +
                                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                recieveSound();
                            }, 1500 );
                        }
                    };
                }
            }, 1500);
        }
        function showChapter2(qr) {
            setTimeout(function () { // TWEEDE BERICHT
                // Batsegeziech komt online
                document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                document.getElementById("typing").classList.remove('hide');
            }, 1000); // CHAPTER1INTRO
            setTimeout(function () {
                // toon eerste bericht CHAPTER1INTRO
                bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                    '<div class="m-whatsapp__txt"> ' +
                    '<p class="m-whatsapp__message">' + chapter2intro + ' <a href="https://www.google.nl/maps/dir/Ruiterij+1,+6221+EW+Maastricht/Maasboulevard+80,+6211+HS+Maastricht/@50.8477681,5.6924429,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47c0e9bdd165c3c1:0x592e5401ce895fc7!2m2!1d5.6982342!2d50.8471121!1m5!1m1!1s0x47c0e9bc09c0eb1f:0x7db9109b3082989e!2m2!1d5.694923!2d50.846636!3e2" target="_blank">Klik hier voor de route</a>.</p>' +
                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                    setTimeout(function () {
                        // toon eerste bericht CHAPTER1INTRO
                        bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                            '<div class="m-whatsapp__txt"> ' +
                            '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a href="' + qr + '">deze link</a>.</p>' +
                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                            '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
        
                        bubbleClass[0].classList.remove('hide');
                        document.getElementById("typing").classList.add('hide');
                        document.getElementById("online").classList.remove('hide');
                        recieveSound();
                    }, 1500);

                bubbleClass[0].classList.remove('hide');
                recieveSound();

            }, 1500);
            setTimeout(function() {
                for(let i=0; i < answer.length; i++){
                    answer[i].onclick = function(e) {
                        bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                            '<div class="m-whatsapp__txt"> ' +
                            '<p class="m-whatsapp__message">' + this.innerHTML + '</p>' +
                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                            '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                            '</div>');
                        this.onclick = null;
                        sendSound();
                        console.log(e.target.id);
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
                                bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 385px;">' +
                                    '<div class="m-whatsapp__txt"> ' +
                                    '<p class="m-whatsapp__message">' + "Goed gedaan, de zwerver kan wonder boven wonder weer wat zien! Kijk wat erover wordt gezegd; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
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
                                bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 380px;">' +
                                    '<div class="m-whatsapp__txt"> ' +
                                    '<p class="m-whatsapp__message">' + "Goed gedaan, de zwerver kan wonder boven wonder weer wat zien! Kijk wat erover wordt gezegd; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
                                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                recieveSound();
                            }, 1500 );
                        }
                        if (e.target.id === "3") {
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
                                    '<p class="m-whatsapp__message">' + "Jammer, ik ben verwonderd dat je deze uitgelezen mogelijkheid hebt laten lopen, ik hoop dat je weet wat je doet." + '</p>' +
                                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                recieveSound();
                            }, 1000 );
                        }
                    };
                }
            }, 1500);
        }
        function showChapter3(qr, chapter) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter3intro + ' <a href="https://bit.ly/2Dk6Njh" target="_blank">Klik hier voor de route</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
                    bubbleClass[0].classList.remove('hide');
                    setTimeout(function () {
                        // toon eerste bericht CHAPTER1INTRO
                        bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                            '<div class="m-whatsapp__txt"> ' +
                            '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a class="whatsapp3" href="' + 'javascript:void(0);' + '">deze link</a>.</p>' +
                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                            '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
    
                            document.getElementsByClassName('whatsapp3')[0].addEventListener('click', () => {
                                storage[chapter - 1].whatsapp = 1;
                                localStorage.setItem('progression', JSON.stringify(storage));
                                window.location.href = qr;
                            });
        
                        bubbleClass[0].classList.remove('hide');
                        document.getElementById("typing").classList.add('hide');
                        document.getElementById("online").classList.remove('hide');
                        recieveSound();
                    }, 1500);
                    // document.getElementById("typing").classList.add('hide');
                    // document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            }

            if (answers[chapter - 1].whatsapp === 1) {

                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Henriëtte verricht wonderen met stoffen en heeft ons aangeboden st. Servaas kleding te maken. Maak een keuze uit de stoffen.</p>' +
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
                        '<div class="antwoord">Keuze 1</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="1" class="m-whatsapp__answer"><div class="l-row"><div class="l-col-6">Zijden: Katoen: Dunne stof, niet duur, zacht, veelzijdig.</div><div class="l-col-6"><img class="m-reset-y" width="200px" height="200px;" src="/img/whatsapp/katoen.svg" /></div></div></div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Keuze 2</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="2" class="m-whatsapp__answer"><div class="l-row"><div class="l-col-6">Zijden: Dunne stof, duur, structuur, exotisch.</div><div class="l-col-6"><img class="m-reset-y" width="200px" height="200px;" src="/img/whatsapp/zijden.svg" /></div></div></div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Keuze 3</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="3" class="m-whatsapp__answer"><div class="l-row"><div class="l-col-6">Zijden: Wol: Warme stof, niet duur, zacht, beperkt.</div><div class="l-col-6"><img class="m-reset-y" width="200px" height="200px;" src="/img/whatsapp/wol.svg" /></div></div></div>' +
                        '</div>';
                    for(let i=0; i < clickAnswer.length; i++){
                        clickAnswer[i].onclick = function() {
                            showChoice(event);
                        };
                    }
                    for(let i=0; i < answer.length; i++){
                        answer[i].onclick = function(e) {
                            bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message" style="font-size="">' + this.children[0].innerText + '</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                                '</div>');
                            this.onclick = null;
                            sendSound();

                            switch(this.getAttribute('id')) {
                                case '1':
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.remove('hide');
                                        document.getElementById("online").classList.add('hide');
                                        setTimeout(function() {
                                            document.getElementById("typing").classList.add('hide');
                                            document.getElementById("online").classList.remove('hide');
                                        }, 500 );
                                    }, 500 );
                                    setTimeout(function() {
                                        bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 165px;">' +
                                            '<div class="m-whatsapp__txt"> ' +
                                            '<p class="m-whatsapp__message">' + "Wat een wonderschone kleren, betaalbaar dus daar kunnen we veel van verkopen en aan verdienen. We hebben ze op Instagram gezet; <a href='/instagram.html'>Klik hier</a>." + '</p>' +
                                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                            '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                        recieveSound();
                                    }, 1000 );

                                    break;
                                case '2':

                                    setTimeout(function() {
                                        document.getElementById("typing").classList.remove('hide');
                                        document.getElementById("online").classList.add('hide');
                                        setTimeout(function() {
                                            document.getElementById("typing").classList.add('hide');
                                            document.getElementById("online").classList.remove('hide');
                                        }, 1000 );
                                    }, 0 );
                                    setTimeout(function() {
                                        bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 165px;">' +
                                            '<div class="m-whatsapp__txt"> ' +
                                            '<p class="m-whatsapp__message">' + "Wat een wonderschone kleren, duur maar gewild dus daar kunnen we veel aan verdienen hoewel niet veel mensen ze kunnen betalen. We hebben ze op Instagram gezet; <a href='/instagram.html'>Klik hier</a>." + '</p>' +
                                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                            '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                        recieveSound();
                                    }, 1500 );

                                    break;
                                case '3':
                                    
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.remove('hide');
                                        document.getElementById("online").classList.add('hide');
                                        setTimeout(function() {
                                            document.getElementById("typing").classList.add('hide');
                                            document.getElementById("online").classList.remove('hide');
                                        }, 1000 );
                                    }, 0 );
                                    setTimeout(function() {
                                        bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 165px;">' +
                                            '<div class="m-whatsapp__txt"> ' +
                                            '<p class="m-whatsapp__message">' + "Wat een wonderschone kleren, betaalbaar en warm maar we kunnen er helaas niet alles van maken. We hebben ze op Instagram gezet; <a href='/instagram.html'>Klik hier</a>." + '</p>' +
                                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                            '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                        recieveSound();
                                    }, 1000 );
                                    
                                    break;
                            }

                        };
                    }
                }, 1500);
            }
        }
        function showChapter4(qr) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () {
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter4intro + ' <a class="whatsapp4" href="javascript:void(0);">link</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
    
                        document.getElementsByClassName('whatsapp4')[0].addEventListener('click', () => {
                            storage[chapter - 1].whatsapp = 1;
                            localStorage.setItem('progression', JSON.stringify(storage));
                            window.location.href = '/twitter.html';
                        });
    
                    bubbleClass[0].classList.remove('hide');
                    document.getElementById("typing").classList.add('hide');
                    document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else if (answers[chapter - 1].whatsapp === 1) {
                setTimeout(function() {
                    setTimeout(function () {
                        bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                            '<div class="m-whatsapp__txt"> ' +
                            '<p class="m-whatsapp__message">Mensen geloven die Tjeu Das, zo ook IJzersmid Frederik Smidsch, ga naar hem toe! <a href="https://bit.ly/2Fj9MLF">Link locatie</a></p>' +
                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                            '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                            setTimeout(function () {
                                // toon eerste bericht CHAPTER1INTRO
                                bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                                    '<div class="m-whatsapp__txt"> ' +
                                    '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a class="whatsapp41" href="' + 'javascript:void(0);' + '">deze link</a>.</p>' +
                                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
            
                                    document.getElementsByClassName('whatsapp41')[0].addEventListener('click', () => {
                                        storage[chapter - 1].whatsapp = 2;
                                        localStorage.setItem('progression', JSON.stringify(storage));
                                        window.location.href = qr;
                                    });
                
                                bubbleClass[0].classList.remove('hide');
                                document.getElementById("typing").classList.add('hide');
                                document.getElementById("online").classList.remove('hide');
                                recieveSound();
                            }, 1500);
        
                        bubbleClass[0].classList.remove('hide');
                        // document.getElementById("typing").classList.add('hide');
                        // document.getElementById("online").classList.remove('hide');
                        recieveSound();
                    }, 1500);
                }, 1500);
            } else {
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Frederik Smidsch is de beste IJzer smid van de stad en heeft daardoor veel invloed! Overtuig hem van Sint Servaas.</p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
    
                    bubbleClass[0].classList.remove('hide');
                    document.getElementById("typing").classList.add('hide');
                    document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
                choiceWrap[0].classList.remove('hide');
                choice.innerHTML = '<div class="m-whatsapp__choice">' +
                    '<div class="antwoord">Antwoord 1</div>' +
                    '<div class="lees">Lees volledige antwoord</div>' +
                    '<div id="1" class="m-whatsapp__answer">' + "Je spreekt hem aan en vertelt over de vele mensen die de stad bezoeken voor st. Servaas en dat dit de smid wel eens veel nieuwe klanten zou kunnen opleveren." + '</div>' +
                    '</div>' +
                    '<div class="m-whatsapp__choice">' +
                    '<div class="antwoord">Antwoord 2</div>' +
                    '<div class="lees">Lees volledige antwoord</div>' +
                    '<div id="2" class="m-whatsapp__answer">' + "Je spreekt hem aan en vertelt over de tegenspoed die st. Servaas afroept over hen die niet in hem geloven en dat een succesvolle zakenman zelfs al zijn bezittingen is kwijtgeraakt." + '</div>' +
                    '</div>' +
                    '<div class="m-whatsapp__choice">' +
                    '<div class="antwoord">Antwoord 3</div>' +
                    '<div class="lees">Lees volledige antwoord</div>' +
                    '<div id="3" class="m-whatsapp__answer">' + "Je spreekt hem aan en vertelt vol overgave over het geweldige wonder van de zwerver dat st. Servaas verricht heeft." + '</div>' +
                    '</div>';
                for(let i=0; i < clickAnswer.length; i++){
                    clickAnswer[i].onclick = function() {
                        showAnswer(event);
                    };
                }
                for(let i=0; i < answer.length; i++){
                    answer[i].onclick = function(e) {
                        bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                            '<div class="m-whatsapp__txt"> ' +
                            '<p class="m-whatsapp__message">' + this.innerHTML + '</p>' +
                            '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                            '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                            '</div>');
                        this.onclick = null;
                        sendSound();
                        if (e.target.id === "1") {
                            answers[chapter - 1].twitter = 1;
                            localStorage.setItem('progression', JSON.stringify(answers));

                            setTimeout(function() {
                                document.getElementById("typing").classList.remove('hide');
                                document.getElementById("online").classList.add('hide');
                                setTimeout(function() {
                                    document.getElementById("typing").classList.add('hide');
                                    document.getElementById("online").classList.remove('hide');
                                }, 500 );
                            }, 500 );
                            setTimeout(function() {
                                bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 330px;">' +
                                    '<div class="m-whatsapp__txt"> ' +
                                    '<p class="m-whatsapp__message">' + "Ik bewonder je overtuigingskracht, de smid heeft zich zelfs positief uitgelaten over st. Servaas, kijk maar; <a href='/twitter.html'>Klik hier</a>." + '</p>' +
                                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                recieveSound();
                            }, 1000 );
                        }
                        if (e.target.id === "2") {
                            answers[chapter - 1].done = 1;
                            localStorage.setItem('progression', JSON.stringify(answers));

                            setTimeout(function() {
                                document.getElementById("typing").classList.remove('hide');
                                document.getElementById("online").classList.add('hide');
                                setTimeout(function() {
                                    document.getElementById("typing").classList.add('hide');
                                    document.getElementById("online").classList.remove('hide');
                                }, 1000 );
                            }, 0 );
                            setTimeout(function() {
                                bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 350px;">' +
                                    '<div class="m-whatsapp__txt"> ' +
                                    '<p class="m-whatsapp__message">' + "Ik bewonder je overtuigingskracht, de smid lijkt zijn succesvolle smederij niet te durven riskeren en laat zich niet meer uit over de kwestie!" + '</p>' +
                                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                recieveSound();
                            }, 1500 );
                            setTimeout(() => {
                                window.location.href = '/whatsapp.html';
                            }, 7500);
                        }
                        if (e.target.id === "3") {
                            answers[chapter - 1].twitter = 2;
                            localStorage.setItem('progression', JSON.stringify(answers));

                            setTimeout(function() {
                                document.getElementById("typing").classList.remove('hide');
                                document.getElementById("online").classList.add('hide');
                                setTimeout(function() {
                                    document.getElementById("typing").classList.add('hide');
                                    document.getElementById("online").classList.remove('hide');
                                }, 1000 );
                            }, 0 );
                            setTimeout(function() {
                                bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 330px;">' +
                                    '<div class="m-whatsapp__txt"> ' +
                                    '<p class="m-whatsapp__message">' + "Ik bewonder je inzet, maar de smid was al skeptisch over het wonder en is niet overtuigd door je overdreven verhaal, kijk maar; <a href='/twitter.html'>Klik hier</a>." + '</p>' +
                                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                recieveSound();
                            }, 1000 );
                        }
                    };
                }
            }
        }
        function showChapter5(qr) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter5intro + ' <a target="_blank" href="https://bit.ly/2z7aBBE">Link naar locatie</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                        setTimeout(function () {
                            // toon eerste bericht CHAPTER1INTRO
                            bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a class="whatsapp5" href="' + 'javascript:void(0);' + '">deze link</a>.</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                                document.getElementsByClassName('whatsapp5')[0].addEventListener('click', () => {
                                    storage[chapter - 1].whatsapp = 1;
                                    localStorage.setItem('progression', JSON.stringify(storage));
                                    window.location.href = qr;
                                });

                            bubbleClass[0].classList.remove('hide');
                            document.getElementById("typing").classList.add('hide');
                            document.getElementById("online").classList.remove('hide');
                            recieveSound();
                        }, 1500);

                    bubbleClass[0].classList.remove('hide');
                    // document.getElementById("typing").classList.add('hide');
                    // document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else if (answers[chapter - 1].whatsapp === 1) {
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">De duivel heeft de kerk proberen te vernielen maar st. Servaas geeft zijn leven voor de stad. Zo hebben we minder kans om betrapt te worden door die Tjeu Das. Laat de mensen zien dat de duivel uitgedreven is en vertel ze dat st. Servaas zijn leven heeft gegeven voor de stad.</p>' +
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
                        '<div id="1" class="m-whatsapp__answer">' + "Je spreekt een voorbijganger op het drukke hof aan en vertelt deze over de duivelsuitdrijving die st. Servaas heeft moeten bekopen met de dood om de stad te redden. Andere horen je nieuwsgierig aan en van mond-op-mond verspreid je bericht zich door de stad" + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 2</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="2" class="m-whatsapp__answer">' + "Je maakt een foto van de kerk om te laten zien dat de duivelsuitdrijving succesvol was en de kerk dus gespaard is gebleven. De foto post je op Facebook met het bijschrift dat st. Servaas zijn leven heeft gegeven voor de stad." + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 3</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="3" class="m-whatsapp__answer">' + "Je bent niet overtuigd en vind het niet geloofwaardig. Je negeert de opdracht." + '</div>' +
                        '</div>';
                    for(let i=0; i < clickAnswer.length; i++){
                        clickAnswer[i].onclick = function() {
                            showAnswer(event);
                        };
                    }
                    for(let i=0; i < answer.length; i++){
                        answer[i].onclick = function(e) {
                            bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">' + this.innerHTML + '</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                                '</div>');
                            this.onclick = null;
                            sendSound();
                            console.log(e.target.id);
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
                                    bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 530px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Gecondoleerd, wonderbaarlijk hoe je mond-op-mond een bericht kan verspreiden. Iedereen in de omgeving van het Vrijthof heeft erover gehoord en is st. Servaas dankbaar voor het redden van hun stad, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
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
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 480px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Gecondoleerd, wonderbaarlijk hoe snel zo’n post zich kan verspreiden. Heel Maastricht heeft erover gehoord en is st. Servaas dankbaar voor het redden van hun stad, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1500 );
                            }
                            if (e.target.id === "3") {
                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 220px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Gecondoleerd, wonderbaarlijk hoe je mijn opdracht negeert. We hebben zelf maar een bericht op Facebook geplaatst, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                        };
                    }
                }, 1500);
            }
        }
        function showChapter6(qr) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter6intro + ' <a href="/twitter.html">Link</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
                    bubbleClass[0].classList.remove('hide');
                    document.getElementById("typing").classList.add('hide');
                    document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else if (answers[chapter - 1].whatsapp === 1) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Ik heb de volgende opdracht voor je. Je moet wat producten voor me op de markt halen. Het gaat om drie verschillende producten. Ga eerst naar de markt; <a href="https://bit.ly/2zPUNmq" target="_blank">Link naar locatie</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                        setTimeout(function () {
                            // toon eerste bericht CHAPTER1INTRO
                            bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a class="whatsapp6" href="' + 'javascript:void(0);' + '">deze link</a>.</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                                document.getElementsByClassName('whatsapp6')[0].addEventListener('click', () => {
                                    storage[chapter - 1].whatsapp = 2;
                                    localStorage.setItem('progression', JSON.stringify(storage));
                                    window.location.href = qr;
                                });

                            bubbleClass[0].classList.remove('hide');
                            document.getElementById("typing").classList.add('hide');
                            document.getElementById("online").classList.remove('hide');
                            recieveSound();
                        }, 1500);

                    bubbleClass[0].classList.remove('hide');
                    // document.getElementById("typing").classList.add('hide');
                    // document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Wat goed! Je hebt alle producten verzameld! Zegen nu de producten met het water dat we Sint Servaas voor zijn dood natuurlijk nog hebben laten zegenen. Zo blijft Sint Servaas in de gedacht van de mensen en hebben we er ook nog baat bij. Hoe ga je te werk?</p>' +
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
                        '<div id="1" class="m-whatsapp__answer">' + "Je koopt het brood, spek en de groeten en zegent deze direct met het gezegende water. Omstanders zijn erg nieuwsgierig waarop je besluit de gezegende producten ter plekke aan de hoogste bieder te verkopen. " + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 2</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="2" class="m-whatsapp__answer">' + "Je koopt het brood, spek en de groeten en zegent deze direct met het gezegende water. Omstanders zijn erg nieuwsgierig waarop je besluit de gezegende producten ter plekke aan de mensen te geven. " + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 3</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="3" class="m-whatsapp__answer">' + "Je koopt het brood, spek en de groeten en zegent deze buiten het zicht van de menigte met het gezegende water. Je besluit de gezegende producten ter plekke te verkopen. " + '</div>' +
                        '</div>';
                    for(let i=0; i < clickAnswer.length; i++){
                        clickAnswer[i].onclick = function() {
                            showAnswer(event);
                        };
                    }
                    for(let i=0; i < answer.length; i++){
                        answer[i].onclick = function(e) {
                            bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">' + this.innerHTML + '</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                                '</div>');
                            this.onclick = null;
                            sendSound();
                            if (e.target.id === "1") {
                                answers[chapter - 1].twitter = 1;
                                localStorage.setItem('progression', JSON.stringify(answers));

                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 500 );
                                }, 500 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 425px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "De wonderen zijn de wereld nog niet uit, zoveel verdienen aan een simpel brood heb ik nog nooit meegemaakt, dat heeft wat teweeggebracht, kijk maar; <a href='/twitter.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                            if (e.target.id === "2") {
                                answers[chapter - 1].twitter = 2;
                                localStorage.setItem('progression', JSON.stringify(answers));

                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 380px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "De wonderen zijn de wereld nog niet uit, wat mensen wel niet doen voor een gratis simpel brood, dat heeft wat teweeggebracht, kijk maar; link (Twitter post; Gratis st. Servaas producten zorgen voor chaos op de Markt)." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1500 );
                            }
                            if (e.target.id === "3") {
                                answers[chapter - 1].twitter = 3;
                                localStorage.setItem('progression', JSON.stringify(answers));

                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 380px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "De wonderen zijn de wereld nog niet uit, maar dit was wel erg ambitieus. Niemand weet of geloofd dat het om gezegende producten gaat, kijk maar; <a href='/twitter.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                        };
                    }
                }, 1500);
            }

        }
        function showChapter7(qr) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter7intro + ' <a target="_blank" href="https://bit.ly/2Ppy0bD">Link naar locatie</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                        setTimeout(function () {
                            // toon eerste bericht CHAPTER1INTRO
                            bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a class="whatsapp7" href="' + 'javascript:void(0);' + '">deze link</a>.</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                                document.getElementsByClassName('whatsapp7')[0].addEventListener('click', () => {
                                    storage[chapter - 1].whatsapp = 1;
                                    localStorage.setItem('progression', JSON.stringify(storage));
                                    window.location.href = qr;
                                });

                            bubbleClass[0].classList.remove('hide');
                            document.getElementById("typing").classList.add('hide');
                            document.getElementById("online").classList.remove('hide');
                            recieveSound();
                        }, 1500);

                    bubbleClass[0].classList.remove('hide');
                    // document.getElementById("typing").classList.add('hide');
                    // document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Gekke Geis voelt zich niet zo goed. Als we hem helpen kunnen we dat weer aan Sint Servaas ophangen. Hoe ga je helpen?</p>' +
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
                        '<div class="antwoord">Keuze 1</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="1" class="m-whatsapp__answer">' + "Je hebt nog wat gezegend brood en water over die je aan gekke Geis geeft." + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Keuze 2</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="2" class="m-whatsapp__answer">' + "Je brouwt een kruidenthee voor gekke Geis." + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Keuze 3</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="3" class="m-whatsapp__answer">' + " Je laat gekke Geis verder zwalken en negeert de opdracht van de priester." + '</div>' +
                        '</div>';
                    for(let i=0; i < clickAnswer.length; i++){
                        clickAnswer[i].onclick = function() {
                            showChoice(event);
                        };
                    }
                    for(let i=0; i < answer.length; i++){
                        answer[i].onclick = function(e) {
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
                                    bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 225px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Wonderbaarlijk hoe dronken een mens kan zijn, door het brood en water is gekke Geis nu weer sober, de mensen hebben gezien dat je dat met de gezegende producten hebt gedaan, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
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
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 170px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Wonderbaarlijk hoe dronken een mens kan zijn, door de kruidenthee is gekke Geis nu weer sober, de mensen hebben dat ook gezien, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1500 );
                            }
                            if (e.target.id === "3") {
                                answers[chapter - 1].done = 1;
                                localStorage.setItem('progression', JSON.stringify(answers));
                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 220px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Wonderbaarlijk hoe dronken een mens kan zijn, jammer dat je gekke Geis niet hebt geholpen. We hadden de exposure voor st. Servaas goed kunnen gebruiken." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                                setTimeout(() => {
                                    window.location.href = '/whatsapp.html';
                                }, 10000);
                            }
                        };
                    }
                }, 1500);
            }
        }
        function showChapter8(qr) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter8intro + ' <a href="/intagram.html">Link</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                    bubbleClass[0].classList.remove('hide');
                    document.getElementById("typing").classList.add('hide');
                    document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else if (answers[chapter - 1].whatsapp === 1) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Op het einde van de brug is Rinalda de Hoor te vinden. <a target="_blank" href="https://bit.ly/2z8zTPJ">Link naar locatie</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                        setTimeout(function () {
                            // toon eerste bericht CHAPTER1INTRO
                            bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a class="whatsapp8" href="' + 'javascript:void(0);' + '">deze link</a>.</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                                document.getElementsByClassName('whatsapp8')[0].addEventListener('click', () => {
                                    storage[chapter - 1].whatsapp = 2;
                                    localStorage.setItem('progression', JSON.stringify(storage));
                                    window.location.href = qr;
                                });

                            bubbleClass[0].classList.remove('hide');
                            document.getElementById("typing").classList.add('hide');
                            document.getElementById("online").classList.remove('hide');
                            recieveSound();
                        }, 1500);

                    bubbleClass[0].classList.remove('hide');
                    // document.getElementById("typing").classList.add('hide');
                    // document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Rinalda is een dame van lichte zeden, is dol op roddels en sensatie en hoort en vertelt door haar zondige werk vaak over de verhalen die de rondte doen in de stad. Als we haar overtuigen van st. Servaas, dan hoort de hele stad daarover.</p>' +
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
                        '<div id="1" class="m-whatsapp__answer">' + "Je spreekt haar aan en vertelt over de vele mensen die de stad nu bezoeken door st. Servaas en dat dit vast ook de reden is dat ze zoveel verdiend de laatste tijd." + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 2</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="2" class="m-whatsapp__answer">' + "Je spreekt haar aan en vertelt over de gevaren van haar werk en dat geloven in st. Servaas haar daartegen kan beschermen.\n" + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 3</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="3" class="m-whatsapp__answer">' + "Je spreekt haar aan en vertelt vol overgave over de geweldige wonderen die st. Servaas verricht heeft." + '</div>' +
                        '</div>';
                    for(let i=0; i < clickAnswer.length; i++){
                        clickAnswer[i].onclick = function() {
                            showAnswer(event);
                        };
                    }
                    for(let i=0; i < answer.length; i++){
                        answer[i].onclick = function(e) {
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
                                    bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 325px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Ik blijf je overtuigingskracht bewonderen, Rinalda is maar wat blij met st. Servaas, kijk maar; <a href='/twitter.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                            if (e.target.id === "2") {
                                answers[chapter - 1].twitter = 1;
                                localStorage.setItem('progression', JSON.stringify(answers));

                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 280px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Ik blijf je overtuigingskracht bewonderen, maar Rinalda doet dit werk al jaren en heeft al vele kwalen overwonnen. Ze vindt de bescherming van st. Servaas helemaal niet nodig, kijk maar; <a href='/twitter.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1500 );
                            }
                            if (e.target.id === "3") {
                                answers[chapter - 1].twitter = 2;
                                localStorage.setItem('progression', JSON.stringify(answers));
                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 280px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Ik blijf je overtuigingskracht bewonderen, dankzij Rinalda verspreiden de verhalen over de wonderen zich weer alsof ze net hebben plaatsgevonden, kijk maar; <a href='/twitter.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                        };
                    }
                }, 1500);
            }

        }
        function showChapter9(qr) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter9intro + ' <a target="_blank" href="https://bit.ly/2zRkvXK">Link naar locatie</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                        setTimeout(function () {
                            // toon eerste bericht CHAPTER1INTRO
                            bubbleWrap.innerHTML += '<div class="m-whatsapp__wrapper-bubble">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">Wanneer je op locatie bent, scan de QR-code via <a class="whatsapp8" href="' + 'javascript:void(0);' + '">deze link</a>.</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                                document.getElementsByClassName('whatsapp8')[0].addEventListener('click', () => {
                                    storage[chapter - 1].whatsapp = 1;
                                    localStorage.setItem('progression', JSON.stringify(storage));
                                    window.location.href = qr;
                                });

                            bubbleClass[0].classList.remove('hide');
                            document.getElementById("typing").classList.add('hide');
                            document.getElementById("online").classList.remove('hide');
                            recieveSound();
                        }, 1500);

                    bubbleClass[0].classList.remove('hide');
                    // document.getElementById("typing").classList.add('hide');
                    // document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">Je bent nu bij de brouwerij. Welke drank ga je brouwen?</p>' +
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
                        '<div class="antwoord">Keuze 1</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="1" class="m-whatsapp__answer"><div class="l-row"><div class="l-col-6">Wijn: Gemiddeld alcoholpercentage, duur, bitterzoet, fruitig.</div><div class="l-col-6"><img src="/img/whatsapp/wijn.svg" width="200px" height="200px" style="float: right" class="m-reset-y" /></div></div></div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Keuze 2</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="2" class="m-whatsapp__answer"><div class="l-row"><div class="l-col-6">Bier: Laag alcoholpercentage, niet duur, bitter, kruidig.</div><div class="l-col-6"><img src="/img/whatsapp/bier.svg" width="200px" height="200px" style="float: right" class="m-reset-y" /></div></div></div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Keuze 3</div>' +
                        '<div class="lees">Lees volledige keuze</div>' +
                        '<div id="3" class="m-whatsapp__answer"><div class="l-row"><div class="l-col-6">Absint: Hoog alcoholpercentage, duur, bitter, kruidig.</div><div class="l-col-6"><img src="/img/whatsapp/absint.svg" width="200px" height="200px" style="float: right" class="m-reset-y" /></div></div></div>' +
                        '</div>';
                    for(let i=0; i < clickAnswer.length; i++){
                        clickAnswer[i].onclick = function() {
                            showChoice(event);
                        };
                    }
                    for(let i=0; i < answer.length; i++){
                        answer[i].onclick = function(e) {
                            bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">' + this.children[0].innerText + '</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                                '</div>');
                            this.onclick = null;
                            sendSound();
                            if (this.getAttribute('id') === "1") {
                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 500 );
                                }, 500 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 220px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Proost! Wat een wonderschoon brouwsel! duur maar populair dus daar kunnen we veel aan verdienen hoewel niet veel mensen het kunnen betalen. We hebben ze op Instagram gezet; <a href='/instagram.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                            if (this.getAttribute('id') === "2") {
                                answers[chapter - 1].instagram = 1;
                                localStorage.setItem('progression', JSON.stringify(answers));

                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 170px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Proost! Wat een wonderschoon brouwsel! Betaalbaar en populair dus daar kunnen we veel van verkopen en aan verdienen. We hebben ze op Instagram gezet; <a href='/instagram.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1500 );
                            }
                            if (this.getAttribute('id') === "3") {
                                answers[chapter - 1].instagram = 2;
                                localStorage.setItem('progression', JSON.stringify(answers));

                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 170px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Proost! Wat een wonderschoon brouwsel! duur en populair maar je word er wel snel dronken van. We hebben hem op Instagram gezet; <a href='/instagram.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                        };
                    }
                }, 1500);
            }
        }
        function showChapter10(qr) {
            const answers = JSON.parse(localStorage.getItem('progression'));

            if (answers[chapter - 1].whatsapp === 0) {
                setTimeout(function () { //
                    // Batsegeziech komt online
                    document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                    document.getElementById("typing").classList.remove('hide');
                }, 1000);
                setTimeout(function () {
                    bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                        '<div class="m-whatsapp__txt"> ' +
                        '<p class="m-whatsapp__message">' + chapter10intro + ' <a href="/facebook.html">Link</a></p>' +
                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                    bubbleClass[0].classList.remove('hide');
                    document.getElementById("typing").classList.add('hide');
                    document.getElementById("online").classList.remove('hide');
                    recieveSound();
                }, 1500);
            } else {
                setTimeout(function() {
                    choiceWrap[0].classList.remove('hide');
                    choice.innerHTML = '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 1</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="1" class="m-whatsapp__answer">' + "Je hebt de sleutel ongezien in de zakken van de mantel van Tjeu weten te verstoppen. Zodra de bijeenkomst start ga je vooraan in de menigte staan en laat je de pater Tjeu confronteren met de sleutel in zijn mantel." + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 2</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="2" class="m-whatsapp__answer">' + "Je hebt de sleutel ongezien in de zakken van de mantel van Tjeu weten te verstoppen. Zodra de bijeenkomst start ga je vooraan in de menigte staan en confronteer je Tjeu met de sleutel in zijn mantel." + '</div>' +
                        '</div>' +
                        '<div class="m-whatsapp__choice">' +
                        '<div class="antwoord">Antwoord 3</div>' +
                        '<div class="lees">Lees volledige antwoord</div>' +
                        '<div id="3" class="m-whatsapp__answer">' + "Je hebt de sleutel ongezien in de zakken van de mantel van Tjeu weten te verstoppen. Zodra de bijeenkomst start ga je in de menigte staan en wijs je de mensen naast je op de sleutel die volgens jou duidelijk uit de mantel van Tjeu steekt. Je overtuigd hen en samen confronteren jullie Tjeu met de sleutel in zijn mantel." + '</div>' +
                        '</div>';
                    for(let i=0; i < clickAnswer.length; i++){
                        clickAnswer[i].onclick = function() {
                            showChoice(event);
                        };
                    }
                    for(let i=0; i < answer.length; i++){
                        answer[i].onclick = function(e) {
                            bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble alt">' +
                                '<div class="m-whatsapp__txt"> ' +
                                '<p class="m-whatsapp__message">' + this.innerHTML + '</p>' +
                                '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                '</div> <div class="m-whatsapp__bubble-arrow alt"></div> ' +
                                '</div>');
                            this.onclick = null;
                            sendSound();
                            console.log(e.target.id);
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
                                    bubbleWrap.insertAdjacentHTML('beforeend', '<div class="m-whatsapp__wrapper-bubble" style="margin-top: 330px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Je hebt al ons harde werk op het spel gezet! Tjeu Das liet zich niets zeggen door notabene een pater en nu hij de sleutel zelf heeft gevonden gebruikt hij het tegen ons, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
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
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 330px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Gefeliciteerd, het wonder is geschiet! Tjeu Das liet zonder aarzelen zijn zakken zien waaruit de sleutel viel. Iedereen herkende de sleutel van het bericht en niemand geloofd een dief, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1500 );
                            }
                            if (e.target.id === "3") {
                                setTimeout(function() {
                                    document.getElementById("typing").classList.remove('hide');
                                    document.getElementById("online").classList.add('hide');
                                    setTimeout(function() {
                                        document.getElementById("typing").classList.add('hide');
                                        document.getElementById("online").classList.remove('hide');
                                    }, 1000 );
                                }, 0 );
                                setTimeout(function() {
                                    bubbleWrap.insertAdjacentHTML('beforeend','<div class="m-whatsapp__wrapper-bubble" style="margin-top: 330px;">' +
                                        '<div class="m-whatsapp__txt"> ' +
                                        '<p class="m-whatsapp__message">' + "Gefeliciteerd, het wonder is geschiet! Tjeu Das liet onder druk van je groep zijn zakken zien waaruit de sleutel viel. Iedereen herkende de sleutel van het bericht en niemand geloofd een dief, kijk maar; <a href='/facebook.html'>Klik hier</a>." + '</p>' +
                                        '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                                        '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>');
                                    recieveSound();
                                }, 1000 );
                            }
                        };
                    }
                }, 1500);
            }
        }
        function showSucces() {
            setTimeout(function () { //
                // Batsegeziech komt online
                document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                document.getElementById("typing").classList.remove('hide');
            }, 1000);
            setTimeout(function () {
                bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                    '<div class="m-whatsapp__txt"> ' +
                    '<p class="m-whatsapp__message">' + chapterSucces + '</p>' +
                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
                console.log('test');
                bubbleClass[0].classList.remove('hide');
                document.getElementById("typing").classList.add('hide');
                document.getElementById("online").classList.remove('hide');
                recieveSound();
            }, 1500);
        }
        function showFail() {
            setTimeout(function () { //
                // Batsegeziech komt online
                document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                document.getElementById("typing").classList.remove('hide');
            }, 1000);
            setTimeout(function () {
                bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                    '<div class="m-whatsapp__txt"> ' +
                    '<p class="m-whatsapp__message">' + chapterFail + '</p>' +
                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';
                console.log('test');
                bubbleClass[0].classList.remove('hide');
                document.getElementById("typing").classList.add('hide');
                document.getElementById("online").classList.remove('hide');
                recieveSound();
            }, 1500);
        }

        function showChapter2a(qr) {
            setTimeout(function () { // TWEEDE BERICHT
                // Batsegeziech komt online
                document.getElementsByClassName("m-whatsapp__name")[0].style.lineHeight = "140px";
                document.getElementById("typing").classList.remove('hide');
            }, 1000); // CHAPTER1INTRO
            setTimeout(function () {
                // toon eerste bericht CHAPTER1INTRO
                bubbleWrap.innerHTML = '<div class="m-whatsapp__wrapper-bubble hide">' +
                    '<div class="m-whatsapp__txt"> ' +
                    '<p class="m-whatsapp__message">Goed gedaan, de zwerver kan wonder boven wonder weer wat zien! Kijk wat erover wordt gezegd; <a href="/facebook.html">Link</a></p>' +
                    '<span class="m-whatsapp__timestamp">' + time + '</span>' +
                    '</div> <div class="m-whatsapp__bubble-arrow"></div> </div>';

                bubbleClass[0].classList.remove('hide');
                document.getElementById("typing").classList.add('hide');
                document.getElementById("online").classList.remove('hide');
                recieveSound();

            }, 1500);
        }

        if (chapter === 1) {
            showChapter1(qr);
        } else if (chapter === 2) {
            if (this.$chapterStorage.whatsapp === 0) {
                showChapter2(qr);
                this.$localStorage[chapter - 1].whatsapp = 1;
                localStorage.setItem('progression', JSON.stringify(this.$localStorage));
            } else {
                showChapter2a(qr);
            }
        } else if (chapter === 3) {
            showChapter3(qr, chapter, storage);
        } else if (chapter === 4) {
            showChapter4(qr);
        } else if (chapter === 5) {
            showChapter5(qr);
        } else if (chapter === 6) {
            showChapter6(qr);
        } else if (chapter === 7) {
            showChapter7(qr);
        } else if (chapter === 8) {
            showChapter8(qr);
        } else if (chapter === 9) {
            showChapter9(qr);
        } else if (chapter === 10) {
            showChapter10(qr);
        }

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
