import { Photographer } from '../models/Photographer.js';
import { Media } from "../models/media.js";
class DataFactory {
    constructor(data, type) {
        // Photographer
        if (type === 'PhotographData') {
            return new Photographer(data);
        }else if (type ==='MediaData'){
            return new Media(data);
        } else {
            throw 'Unknown type';
        }
     }
}

export {DataFactory };