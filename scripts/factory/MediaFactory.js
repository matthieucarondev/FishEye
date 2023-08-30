import { Image } from '../models/image.js';
import { Video } from '../models/video.js';

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