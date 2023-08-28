
import { ImageCard } from '../templates/ImageCard.js';
import { VideoCard } from '../templates/VideoCard.js';
import {showModalFilter,closeModalFilterOptions} from "../utils/Dropdown.js";


 export function createMedia(Media, mediaSection){
    // Créer toutes les PhotographerCar
    Media?.forEach((data) =>{
        if (data.image) {
            const imageTemplate = new ImageCard(data);
            const mediaUser = imageTemplate.createImageCard();
            mediaSection.appendChild(mediaUser);
        } else if (data.video) {
            const videoTemplate = new VideoCard(data);
            const mediaUser = videoTemplate.createVideoCard();
            mediaSection.appendChild(mediaUser);
        }
    });
    
}

   // Updatemedia par filtre
  export function updateMedia(Media, filter, mediaSection) {
      // Changer de média avec le filtre
      const filterActive = document.querySelector('.photographer__filter--active');
      filterActive.innerText = filter;
      filterMedia(Media, filter); 
         // Réinitialiser la section des médias de contenu
    mediaSection.innerHTML = '';
      createMedia(Media, mediaSection); 
      closeModalFilterOptions()
      manageLikes();
  }


function manageNumberLikes(like) {
    const numberLikes = like.querySelector('.likes');
    const totalLikes = document.getElementById('total-likes');
    // Ajoutez ou supprimez la classe "liké" pour savoir si le média a été aimé ou non
    like.parentElement.classList.toggle('liked');

    // Obtenez les likes actuels et le total des likes
    let currentLike = parseInt(numberLikes.textContent);
    let totalPhotographerLikes = parseInt(totalLikes.textContent);

    //réussir à ajouter ou réduire le courant comme
    if (like.parentElement.classList.contains('liked')) {
        currentLike++;
        totalPhotographerLikes++;
    } else {
        currentLike--;
        totalPhotographerLikes--;
    }
    // Changer avec un nouveau nombre de likes
    numberLikes.textContent = currentLike;
    totalLikes.textContent = totalPhotographerLikes;
}
//Gérer les likes (cliquez sur J'aime le média)
function manageLikes() {
    const allLikes = document.querySelectorAll('.information-likes');

    // Pour tous les likes, ajoutez un écouteur d'événement au clic : pour ajouter ou réduire le nombre total de likes
    allLikes.forEach((like) => {
        like.addEventListener('click', () => {
            manageNumberLikes(like);
        });
        like.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                manageNumberLikes(like);
            }
        });
    });
}

// Sélection par tri
export function filterMedia(data, filter) {
    let result;
    switch (filter) {
        case 'Popularité':
            result = data.sort((a, b) => b._likes - a._likes);
            break;
        case 'Date':
            result = data.sort((a, b) => new Date(b._date) - new Date(a._date));
            break;
        case 'Titre':
            result = data.sort((a, b) => a._title.localeCompare(b._title));
            break;
        default:
            data.sort((a, b) => b._likes - a._likes);
    }
    return result;
}
export function filterSelectEvent(filterSelect) {
    
    filterSelect.addEventListener('click', () => showModalFilter());
    filterSelect.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {            
            showModalFilter();
        }
    });
}

