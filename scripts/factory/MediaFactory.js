import { Image } from '../models/Image.js';
import { Video } from '../models/Video.js';

class MediaFactory {
    constructor(data) {
        // Media Photographer
       
                    if (data.image ) {
                        return new Image(data);
                    } else if (data.video ) {
                        return new Video(data);
                    }
                    return null;
                }
               
    }

export {MediaFactory };