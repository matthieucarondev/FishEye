//Mettre le code JavaScript lié à la page photographer.html
// Récupération de l'ID dans l'URL avec la méthode "URLSearchParams"
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const url = 'data/photographers.json';

// afficher tout les donné de id avec ".find"
fetch(url)
    .then(response => {return response.json()})
    .then((data) => {
        const photographer = data.photographers;
        const profilPhotographer = photographer.find((profil) => profil.id == id);
        const medias = data.media;
    
 
        
       


        // --------------------PROFILE PHOTOGRAPHE-------------------------------//
            //créer la section  information du photographe à partir de l'id//

const userProfil = document.createElement('section');
userProfil.setAttribute('class','photograph-header');
userProfil.setAttribute('aria-label','information général du photographe');
userProfil.innerHTML=`<aside class="photograph-header_information">
                            <div class="info">
                                <h1>${profilPhotographer.name}</h1>
                                <div class="info_place">
                                    <h3>${profilPhotographer.city},${profilPhotographer.country}</h3>
                                </div>
                                    <h4>${profilPhotographer.tagline}</h4>
                            </div>
                     </aside>
                     <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                     
                     <img class="photograph-header_photo" src="assets/photographers/${profilPhotographer.portrait}" alt="${profilPhotographer.name}"/>`

const photographMain =document.getElementById("profile");
photographMain.appendChild(userProfil);



const modalLike = document.createElement('article');
modalLike.setAttribute('id','likePrice');
        modalLike.innerHTML = `  <div id="total__likes">
                                    <p id="like-total"></p>
                                    <svg class="icon-total" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill=" #000000"/>
                                    </svg>
                                </div>
                                <div class="total__price">
                                <p class="total-price">${profilPhotographer.price}€/jour</p>
                                </div>`

                                const likesCount  =document.getElementById("total");
                                likesCount.appendChild(modalLike);

displayInput(medias);
displayMedia(medias);


function totalLikes() {
	const likes = document.querySelectorAll(".likes");
	const totalLikesNumber = document.querySelector("#like-total");

	let totalLikes = 0;
	likes.forEach((like) => (totalLikes += parseInt(like.textContent)));

	totalLikesNumber.textContent = totalLikes + " ";
}

totalLikes();

})



 .catch(error => {
    console.log('Vous avez fait une erreur:' + error);
    })

/*
- Fonction affichage INPUT(menu déroulant)
_ Aavec appel de la Factory Media
*/
function displayInput(medias) {
    const mediaSection = document.getElementById("sortBy");
    const input = mediaFactory(medias);
    const inputUser = input.getInputSelection();
    mediaSection.appendChild(inputUser); 
}

function displayMedia(medias) {

    const gridMedia =document.getElementById("photograph-media");
         
         medias.forEach((media)=> {

            const mediaPhotograph =mediaFactory(media);   
            if (media.photographerId == id){
                if(media.image){
                     const userMedia = mediaPhotograph.getphotoDom();
                    gridMedia.appendChild(userMedia);
                }else{
                    const userMedia = mediaPhotograph.getvideoDom();
                    gridMedia.appendChild(userMedia);
                }
            }
        });
         
        }
