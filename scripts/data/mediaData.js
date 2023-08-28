import { Url } from './getdata.js';
class mediaData extends Url {
    constructor(url) {
        super(url);
    }

    // Obtenir tous les supports de données par photographe
    async getAllMediaByPhotographer(photographerId) {
        try {
            const data = await this.get();
            return data.media.filter((e) => e.photographerId === photographerId);
        } catch (error) {
            console.log(error);
        }
    }

    // Obtenir un photographe
    async getMediaById(mediaId) {
        try {
            const data = await this.get();
            return data.media.find((e) => e.id == mediaId);
        } catch (error) {
            console.log(error);
        }
    }
}

export { mediaData };