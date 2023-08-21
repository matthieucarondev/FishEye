class PhotographerPage {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerPage() {
        const photographerPage = `<aside class="photograph-header_information">
        <div class="info">
            <h1>${this._photographer.name}</h1>
            <div class="info_place">
                <h3>${this._photographer.place}</h3>
            </div>
                <h4>${this._photographer.tagline}</h4>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <div class="photographer__page--avatar">
                <img src="../../${this._photographer.portrait}" alt="Portrait de ${this._photographer.name}">
            </div>
        </aside>
        `;

        return photographerPage;
    }
}

export { PhotographerPage };