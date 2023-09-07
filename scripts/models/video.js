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
    const article = document.createElement("article");
    article.classList.add("media_video");

    const videoCard = `
    <a  tabindex="0" >
                  <figure  class="medias_photographer" aria-label="media__image" tabindex="0">
                     
                      <video class="medias-photographer_pic ${this._id}">
                         <source src="../assets/medias/${this._photographerId}/${this._video}"   href="../assets/medias/${this._photographerId}/${this._video}" type="video/mp4"/>
                      </video>
                     
            <figcaption class="media_photo__information">
                 <h3>${this._title}</h3>
                <div class="information-likes" >
                  <span class="likes">${this._likes}</span>
                    <svg tabindex="0" class="icon" role="button" aria-label="Bouton de like" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                    </svg>
                </div> 
            </figcaption> 
      </figure>           
       </a>    
            
        `;
    article.innerHTML = videoCard;
    return article;
  }
}

export { Video };
