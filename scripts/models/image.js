import { Media } from "./media.js";

class Image extends Media {
  constructor(data) {
    super(data);
    this._image = data.image;
  }

  get image() {
    return this._image;
  }

  get generateHTMLCard() {
    const article = document.createElement("div");
    article.classList.add("media");
    // article.setAttribute("data-id", this._id);

    const imageCard = `

            <figure  class="medias_photographer card " data-id="${this._id}"aria-label="media__image" tabindex="0">
           
                      <img class="medias-photographer_pic "  src="./assets/medias/${this._photographerId}/${this._image}" alt="${this._title}" href="./assets/medias/${this._photographerId}/${this._image}">
                     
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
    article.innerHTML = imageCard;
    return article;
  }

}

export { Image };
