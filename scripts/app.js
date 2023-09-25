import { PhotographData } from "././data/photographData.js";
import { DataFactory } from "././factory/DataFactory.js";
import {
  createAllPhotographerCard,
  createGlobalProfilephotographer,
} from "././component/photographer.js";
import { getInputSelection } from "././templates/sortby.js";
import { Likes } from "././templates/Likes.js";
import { mediaData } from "././data/mediaData.js";
import { MediaFactory } from "././factory/MediaFactory.js";
import { displayMedia, SortSelectEvent } from "././component/Media.js";
import { closeModalFilterOptions } from "././utils/Dropdown.js";
import { Form } from "././utils/form.js";
class App {
  constructor() {
    // Section avec tous les profils de photographes
    this._photographersSection = document.querySelector(
      ".photographer_section"
    );
    // Page du photographe, avec toutes les données du photographe
    this._photographerPage = document.querySelector("#profile");
    this._mediaSection = document.getElementById("gallery");
    // Créer PhotographerApi pour obtenir des données Photographer
    this._photographData = new PhotographData("././data/photographers.json");
    this._mediaApi = new mediaData(".././data/photographers.json");
  }

  async homePage() {
    //  Obtenir toutes les données des photographes
    const allPhotographersData =
      await this._photographData.getAllPhotographers();
    //Vérifiez si nous avons toutes les données des photographes
    if (allPhotographersData) {
      // Utiliser Factory
      const Photographers = allPhotographersData.map(
        (photographer) => new DataFactory(photographer, "PhotographData")
      );

      // Créer toutes les PhotographerCard
      createAllPhotographerCard(Photographers, this._photographersSection);
    }
  }

  // Photographer Page
  async photographerPage() {
    // Obtenir photographerID sur l’URL
    const parametersURL = new URL(document.location).searchParams;
    const photographerID = parseInt(parametersURL.get("id"));
    // Erreur de message d’initialisation
    const messageError =
      "Erreur: L'ID du photographe n'existe pas, ou n'est pas la bonne (photographerPage).";

    // Vérifiez si l’ID
    if (photographerID) {
      // Obtenir toutes les données des photographes
      const photographerData = await this._photographData.getOnePhotographer(
        photographerID
      );
      if (photographerData) {
        // utiliser Factory
        const Photographer = new DataFactory(
          photographerData,
          "PhotographData"
        );

        // creer Photographer Page
        createGlobalProfilephotographer(Photographer, this._photographerPage);

        this.openContactModal();

        // recuperer les medias du photographes : une liste d"objet au format json
        const allMediaDATA = await this._mediaApi.getAllMediaByPhotographer(
          photographerID
        );

        if (allMediaDATA) {
          const Mediaphotograph = allMediaDATA.map(
            (medias) => new MediaFactory(medias)
          );

          this.sortElement();

          displayMedia(Mediaphotograph, "Popularité", this._mediaSection);

          // tous les option filtre
          const filterPopularite = document.getElementById("filter-popularite");
          const filterDate = document.getElementById("filter-date");
          const filterTitre = document.getElementById("filter-titre");
          // 'Popularité'
          this.SortEvent(filterPopularite, Mediaphotograph, "Popularité");

          // 'Date'
          this.SortEvent(filterDate, Mediaphotograph, "Date");

          // 'Titre'
          this.SortEvent(filterTitre, Mediaphotograph, "Titre");

          // aside prix total like

          const asideLikes = document.getElementById("total");
          const asideTemplate = new Likes(Photographer, Mediaphotograph);
          asideLikes.innerHTML = asideTemplate.createAsideLikes();

          new Form().validation();
        }
      }
    }
  }

  openContactModal() {
    const error = document.getElementById("error_message");
    const form = document.getElementById("formContact");
    document.querySelector(".contact_button").addEventListener("click", (e) => {
      form.style.display = "block";
      const name = document.getElementById("namePh");
      name.innerHTML = e.currentTarget.dataset.id;
      error.style.display = "none";
    });
  }

  sortElement() {
    const SortBy = document.getElementById("sortBy");
    SortBy.appendChild(getInputSelection());

    const filterActive = document.querySelector(
      ".photographer__filter--active"
    );
    filterActive.innerText = "Popularité";
    // Filtrer la sélection
    const filterSelect = document.querySelector(
      ".photographer__filter--select"
    );
    // Ajouter un listeur d’événements sur la sélection de filtre
    SortSelectEvent(filterSelect);
  }
  SortEvent(filter, allmedia, option) {
    filter.addEventListener("click", () =>
      displayMedia(allmedia, option, this._mediaSection)
    );
    filter.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        displayMedia(allmedia, option, this._mediaSection);
        closeModalFilterOptions();
        filter.focus();
      }
    });
  }
}

// Créer une application « FishEye »
const app = new App();
function router(app, currentPage) {
  let route;
  // Message d’erreur par défaut
  const messageError =
    "Vous êtes perdu ? Retournons à l'accueil.Cette URL n'existe pas.";

  switch (currentPage) {
    // Home Page
    case "/FishEye/index.html":
    case "/index.html":
    case "/FishEye/":
      route = app.homePage();
      break;
    // Photographer Page
    case "/photographer.html":
    case "/FishEye/photographer.html":
      route = app.photographerPage();
      break;
  }
  return route;
}

// Routeur
const currentPage = document.location.pathname;

router(app, currentPage);
