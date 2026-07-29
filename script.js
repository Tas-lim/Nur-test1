/* =========================================
   Noor Al-Quran Website
   Main JavaScript File
========================================= */


/* =========================================
   AUDIO LIBRARY SYSTEM
========================================= */


const TOTAL_AUDIO = 56;

const audioContainer = document.getElementById("audioContainer");

const audioSearch = document.getElementById("audioSearch");

const currentTrack = document.getElementById("currentTrack");

let audioPlayers = [];



/*
    Generate the 56 audio cards
*/

function createAudioLibrary() {


    for (let i = 1; i <= TOTAL_AUDIO; i++) {


        const card = document.createElement("div");

        card.className = "audio-card";


        card.dataset.number = i;



        card.innerHTML = `

            <div class="audio-header">

                <span class="audio-number">

                    🎧 التسجيل ${i}
                    <br>
                    🎧 Recording ${i}

                </span>

            </div>


            <audio controls>

                <source
                src="audio/${i}.mp3"
                type="audio/mpeg">

                Your browser does not support audio.

            </audio>

        `;



        audioContainer.appendChild(card);



        const player = card.querySelector("audio");


        audioPlayers.push(player);



        /*
            Update Now Playing
        */

        player.addEventListener("play", function(){


            pauseOtherPlayers(player);


            currentTrack.textContent =
            `🎧 التسجيل ${i} | Recording ${i}`;


        });


    }


}





/*
    Pause every audio except current one
*/

function pauseOtherPlayers(currentAudio){


    audioPlayers.forEach(audio => {


        if(audio !== currentAudio){

            audio.pause();

        }


    });


}








/* =========================================
   AUDIO SEARCH
========================================= */


audioSearch.addEventListener("input", function(){


    const searchValue =
    this.value.toLowerCase();



    const cards =
    document.querySelectorAll(".audio-card");



    cards.forEach(card => {


        const text =
        card.textContent.toLowerCase();



        if(text.includes(searchValue)){


            card.style.display = "block";


        }

        else{


            card.style.display = "none";


        }


    });


});









/* =========================================
   IMAGE LIGHTBOX
========================================= */


const galleryImages =
document.querySelectorAll(".gallery img");


const lightbox =
document.getElementById("lightbox");


const lightboxImage =
document.getElementById("lightboxImage");


const closeLightbox =
document.getElementById("closeLightbox");





galleryImages.forEach(image => {


    image.addEventListener("click", function(){


        lightbox.style.display = "flex";


        lightboxImage.src =
        this.src;


    });



});





closeLightbox.addEventListener("click", function(){


    lightbox.style.display = "none";


});





lightbox.addEventListener("click", function(event){


    if(event.target === lightbox){


        lightbox.style.display = "none";


    }


});









/* =========================================
   SMOOTH SCROLLING
========================================= */


document.querySelectorAll('a[href^="#"]')
.forEach(link => {


    link.addEventListener("click", function(e){


        const target =
        document.querySelector(this.getAttribute("href"));



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});









/* =========================================
   FUTURE PURCHASE LINKS
========================================= */


const whatsappButton =
document.getElementById("whatsappButton");


const contactButton =
document.getElementById("contactButton");



/*
    Replace these later with your friend's links
*/


const whatsappCatalogueLink = "#";


const authorContactLink = "#";





if(whatsappButton){

    whatsappButton.href =
    whatsappCatalogueLink;

}



if(contactButton){

    contactButton.href =
    authorContactLink;

}









/* =========================================
   INITIALIZE WEBSITE
========================================= */


createAudioLibrary();
