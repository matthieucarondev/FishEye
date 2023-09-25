import { Media } from "./media.js";

class Video extends Media {
  constructor(data) {
    super(data);
    this._video = data.video;
  }

  get video() {
    return this._video;
  }
  get generateHTMLCard() {
    const article = document.createElement("div");
    article.classList.add("media");
    // article.setAttribute("data-id", this._id);

    const videoCard = `
        
            <figure  class="medias_photographer card" data-id="${this._id}" aria-label="media__image"  tabindex="0">
                <video class="medias-photographer_pic">
                         <source  src="././assets/medias/${this._photographerId}/${this._video}"  href="../assets/medias/${this._photographerId}/${this._video}" type="video/mp4" />
                      </video>
                <figcaption class="media_photo__information">
                    <h3>${this._title}</h3> 
                </figcaption> 
            </figure> 
            <div class="information-likes">
                <span class="likes">${this._likes}</span>
                <svg tabindex="0" class="icon" role="button" aria-label="Bouton de like" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>
            </div>          
        
            
        `;
    article.innerHTML = videoCard;
    return article;
  }
}

export { Video };
