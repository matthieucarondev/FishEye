import { PhotographData } from './data/photographData.js';
import {typeDataFactory} from './factory/DataFactory.js';
import {createAllPhotographerCard  ,createGlobalPhotographerpage ,} from './component/photographer.js';





class App {
    constructor() {
        // Section avec tous les profils de photographes
        this.$photographersSection = document.querySelector('.photographer_section');
         // Page du photographe, avec toutes les données du photographe
         this.$photographerPage = document.querySelector('#profile');
         // Créer PhotographerApi pour obtenir des données Photographer
        this._photographData = new PhotographData('../../data/photographers.json');
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
        // Get photographerID on URL
        const parametersURL = new URL(document.location).searchParams;
        const photographerID = parseInt(parametersURL.get('id'));
        // Init message error
        const messageError =
            "Erreur: L'ID du photographe n'existe pas, ou n'est pas la bonne (photographerPage).";

        // Check if ID
        if (photographerID) {
            // Get all photographers data
            const photographerData = await this._photographerMediaApi.getOnePhotographer(photographerID,);
            
            if (photographerData) {
                    // Use Factory
                    const Photographer = new PhotographersFactory(photographerData, 'PhotographerApi');
    
                    // All photographer data
                    console.log('===[ Photographer data ]===');
                    console.log(Photographer);
    
                    // Create Photographer Page
                    createGlobalPhotographerpage(Photographer, this.$photographerPage);
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