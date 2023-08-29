class PhotographerPage {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerPage() {
        const photographerPage = `<aside aria-label="profile photographe" class="photograph-header_information">
        <div class="info">
            <h1>${this._photographer.name}</h1>
            <div class="info_place">
                <h2>${this._photographer.place}</h2>
            </div>
                <h3>${this._photographer.tagline}</h3>
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