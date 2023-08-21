import { PhotographerCard } from '../templates/PhotographerCard.js';

import { PhotographerPage } from '../templates/PhotographerPage.js';


export function createAllPhotographerCard(Photographers, photographersSection) {
    Photographers.forEach((photographer) => {
       let Card= new PhotographerCard(photographer); 
        photographersSection.appendChild(Card.createPhotographerCard());
    });
}
export function createGlobalPhotographerpage(Photographer, photographerPage) {
    const Template = new PhotographerPage(Photographer);
    photographerPage.innerHTML = Template.createPhotographerPage();
}