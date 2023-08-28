import { Image } from '../models/Image.js';
import { Video } from '../models/Video.js';

class typeMediaFactory {
    constructor(data, type) {
        // Media Photographer
        if (type === 'PhotographData') {
            const ManageMedia = data
                .map((media) => {
                    if (typeof media.image !== 'undefined') {
                        return new Image(media);
                    } else if (typeof media.video !== 'undefined') {
                        return new Video(media);
                    }
                    return null;
                })
                .filter((element) => element instanceof Image || element instanceof Video);
            return ManageMedia;
        } else {
            throw 'Unknown type';
        }
    }
}

export { typeMediaFactory };