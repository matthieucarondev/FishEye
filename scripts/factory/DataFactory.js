import { Photographer } from '../models/Photographer.js';

class typeDataFactory {
    constructor(data, type) {
        // Photographer
        if (type === 'PhotographData') {
            return new Photographer(data);
        } else {
            throw 'Unknown type';
        }
    }
}

export { typeDataFactory };