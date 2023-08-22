import { PhotographData } from './data/photographData.js';
import {typeDataFactory} from './factory/DataFactory.js';
//import { MediaFactory} from './factory/MediaFactory.js';
import {createAllPhotographerCard  ,createGlobalPhotographerpage ,} from './component/photographer.js';
import  {getInputSelection} from './templates/sortby.js';
import  {mediaData} from './data/mediaData.js';
//import { createMedia} from './component/Media.js';



class App {
    constructor() {
        // Section avec tous les profils de photographes
        this.$photographersSection = document.querySelector('.photographer_section');
         // Page du photographe, avec toutes les données du photographe
         this.$photographerPage = document.querySelector('#profile');
         // Créer PhotographerApi pour obtenir des données Photographer
        this._photographData = new PhotographData('../../data/photographers.json');
        this._mediaApi = new mediaData('../../data/photographers.json');
    }



        async homePage() {
          //  Obtenir toutes les données des photographes
            const allPhotographersData = await this._photographData.getAllPhotographers();
            //Vérifiez si nous avons toutes les données des photographes 
            if (allPhotographersData) {
                // Utiliser Factory
                const Photographers = allPhotographersData.map(
                    (photographer) => new typeDataFactory(photographer, 'PhotographData'),
                );
    
                // Créer toutes les PhotographerCard
                createAllPhotographerCard(Photographers, this.$photographersSection);
                console.log(createAllPhotographerCard());
            }
        }

            // Photographer Page
    async photographerPage() {
        // Obtenir photographerID sur l’URL
        const parametersURL = new URL(document.location).searchParams;
        const photographerID = parseInt(parametersURL.get('id'));
        // Erreur de message d’initialisation
        const messageError =
            "Erreur: L'ID du photographe n'existe pas, ou n'est pas la bonne (photographerPage).";

        // Vérifiez si l’ID
        if (photographerID) {
            // Obtenir toutes les données des photographes
            const photographerData = await this._photographData .getOnePhotographer(photographerID,);
            
            if (photographerData) {
                    // utiliser Factory
                    const Photographer = new typeDataFactory(photographerData, 'PhotographData');
    
            
                    // creer Photographer Page
                    createGlobalPhotographerpage(Photographer, this.$photographerPage);
                    //créer SortBy
                    const SortBy = document.getElementById('sortBy');
                    SortBy.appendChild(getInputSelection());
              /*      //Toutes les données médias par photographe
                    const mediaData = await this._mediaApi.getAllMediaByPhotographer(photographerID);

                // Vérifiez si nous avons des données multimédias
                    if (mediaData){
                        //Utiliser Factory (gérer les médias : Image ou Vidéo)
                        const media = new MediaFactory (mediaData,'photographData');
                        //creer les media
                        const cardmedia = doucument.getElementById('photograph-media');
                       // cardmedia.appendChild(createMedia());
                
                    }*/
            }
    }
}
}
    // Créer une application « FishEye »
const app = new App();

// Routeur
const currentPage = document.location.pathname;
app.photographerPage();
router(app, currentPage);