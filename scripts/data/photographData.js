import { Url } from './getdata.js';
class PhotographData extends Url {
    constructor(url) {
        super(url);
    }

    // Obtenez tous les photographes
    async getAllPhotographers() {
        try {
            const data = await this.get();
            return data.photographers;
        } catch (error) {
            console.log(error);
        }
    }

    // Obtenir un photographe
    async getOnePhotographer(photographerId) {
        try {
            const data = await this.get();
            return data.photographers.find((e) => e.id === photographerId);
        } catch (error) {
            console.log(error);
        }
    }
}

export { PhotographData};