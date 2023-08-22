import { Image } from './models/image.js';
import { Video } from './models/video.js';
import { ImageCard } from '../templates/ImageCard.js';
import { VideoCard } from '../templates/VideoCard.js';



 export function createMedia(Media, mediaSection) {
    // Créer toutes les PhotographerCard
    Media.forEach((media) => {
        if (media instanceof Image) {
            const imageTemplate = new ImageCard(media);
            mediaSection.appendChild(imageTemplate.createImageCard());
        } else if (media instanceof Video) {
            const videoTemplate = new VideoCard(media);
            mediaSection.appendChild(videoTemplate.createVideoCard());
        }
    });
}
