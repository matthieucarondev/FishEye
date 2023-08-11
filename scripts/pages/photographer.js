//Mettre le code JavaScript lié à la page photographer.html
// Récupération de l'ID dans l'URL avec la méthode "URLSearchParams"
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const url = 'data/photographers.json';

// afficher tout les donné de id avec ".find"
fetch(url)
    .then(Response => {Response.json()
    .then((data) => {
        const photographer = data.photographers;
        const medias = data.media;
        const profilPhotographer = photographer.find((profil) => profil.id == id);


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

const photographMain =document.getElementById("main");
photographMain.appendChild(userProfil);

displayInput(medias)


 // Affichage par tri "menuSort.js"
 document.getElementById('trie').addEventListener('change', (e) => {
    selectChange(e, medias);
    
})
 })
})
/*
- Fonction affichage INPUT(menu déroulant)
_ Aavec appel de la Factory Media
*/
function displayInput(medias) {
    const mediaSection = document.querySelector(".photograph-media");
    const input = mediaFactory(medias);
    const inputUser = input.getInputSelection();
    mediaSection.appendChild(inputUser);
}