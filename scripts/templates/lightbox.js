
/**
 * @class
 */
export class Lightbox {
    /**
     * Initialisation
     * @param {Object[]} photographerMediasList Un tableau d'instances Media
     */
    static init(allmedias) {
      const mediaList = Array.from(allmedias);
       
      const mediaLinks = mediaList.map((media) => {
        
        if (media.constructor.name === "Video") {
          return media.video;
        } else if (media.constructor.name=== "Image") {
          return  media.image;
        }
      });

      const mediaTitles = mediaList.map((media) => media.title);

      mediaList.forEach((media) => {
        const html = document.getElementsByClassName(`${media._photographerId}`);
        //const profil= mediaList.find((media)=>media===photographerId);
  
        // Ajouter un événement au clic qui ouvre une lightbox pour les médias
        html[0].addEventListener("click", (e) => {
          e.preventDefault();
          const type = media.constructor.name;
          
          let url = "";
  
          if (type === "Image") {
            url = media.image;
       
          } else if (type === "Video") {
            url = media.video;
          } else {
            url = null;
          }
  
          new Lightbox(type, url, mediaLinks, mediaTitles);
        });
  
        // Ajouter un événement en appuyant sur une touche Entrée qui ouvre une lightbox pour les médias
        html[0].addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const type = media.constructor.name;
            let url = "";
  
            if (type === "Image") {
              url = media.image;
            } else if (type === "Video") {
              url = media.video;
            } else {
              url = null;
            }
  
            new Lightbox(type, url, mediaLinks, mediaTitles);
          }
        });
      });
    }
    

  /**
  * @constructs Lightbox
  * @param {string} type Type de média
  * @param {string} url Image Url
  * @param {string[]} images Url du tableau d’images
  * @param {string[]} imagesTitles Gamme de titres multimédias
  */
 constructor(type, url, images, imagesTitles) {
   this.element = this.buildDom(url);
   this.images = images;
   this.imagesTitles = imagesTitles;
   this.onKeyUp = this.onKeyUp.bind(this);

   if (type === "Image") {
     this.loadImage(url);
   }
   if (type === "Video") {
     this.loadVideo(url);
   }

   document.body.appendChild(this.element);
   document.addEventListener("keyup", this.onKeyUp);
 }

 /**
  * Keyboard access
  * @param {KeyboardEvent} e
  */
 onKeyUp(e) {
   if (e.key === "Escape" || e.key === "Esc") {
     this.close(e);
   } else if (e.key === "ArrowLeft") {
     this.prev(e);
   } else if (e.key === "ArrowRight") {
     this.next(e);
   }
 }

 /**
  * Charger l'image
  * @param {string} url URL de l'image
  */
 loadImage(url) {
   this.url = null;
   const image = new Image();
   const container = this.element.querySelector(".lightbox__container");

   // Loader
   const loader = document.createElement("div");
   loader.classList.add("lightbox__loader");
   container.innerHTML = "";
   container.appendChild(loader);

   // titre image
   const i = this.images.findIndex((image) => image === url);
   const imageTitle = document.createElement("p");
   imageTitle.classList.add("lightbox__title");
   imageTitle.textContent = this.imagesTitles[i];

   //image.onload = () => {
     container.removeChild(loader);
     container.appendChild(image);
     container.appendChild(imageTitle);
     this.url = url;
   //};

   image.src = url;
 }

 /**
  * Charger la vidéo
  * @param {string} url Video URL
  */
 loadVideo(url) {
   this.url = null;
   const video = document.createElement("video");
   video.setAttribute("controls", true);
   video.setAttribute("width", "100%");
   video.innerHTML = `<source src="${url}" type="video/mp4">`;

   const container = this.element.querySelector(".lightbox__container");

   // Loader
   const loader = document.createElement("div");
   loader.classList.add("lightbox__loader");
   container.innerHTML = "";
   container.appendChild(loader);

   // titre image
   const i = this.images.findIndex((image) => image === url);
   const imageTitle = document.createElement("p");
   imageTitle.classList.add("lightbox__title");
   imageTitle.textContent = this.imagesTitles[i];

   //video.load = () => {
   container.removeChild(loader);
   container.appendChild(video);
   container.appendChild(imageTitle);
   this.url = url;
  // };

   video.src = url;
 }

 /**
  * fermer lightbox
  * @param {MouseEvent|KeyboardEvent} e
  */
 close(e) {
   e.preventDefault();

   this.element.classList.add("fadeOut");

   window.setTimeout(() => {
     this.element.parentElement.removeChild(this.element);
   }, 500);

   document.removeEventListener("keyup", this.onKeyUp);
 }

 /**
  * image suivant
  * @param {MouseEvent|KeyboardEvent} e
  */
 next(e) {
   e.preventDefault();

   let i = this.images.findIndex((image) => image === this.url);
   if (i === this.images.length - 1) {
     i = -1;
   }

   if (this.images[i + 1].includes(".jpg")) {
     this.loadImage(this.images[i + 1]);
   } else if (this.images[i + 1].includes(".mp4")) {
     this.loadVideo(this.images[i + 1]);
   }
 }

 /**
  * image précedent
  * @param {MouseEvent|KeyboardEvent} e
  */
 prev(e) {
   e.preventDefault();

   let i = this.images.findIndex((image) => image === this.url);
   if (i === 0) {
     i = this.images.length;
   }

   if (this.images[i - 1].includes("jpg")) {
     this.loadImage(this.images[i - 1]);
   } else if (this.images[i - 1].includes("mp4")) {
     this.loadVideo(this.images[i - 1]);
   }
 }

 /**
  * creation DOM
  * @return {HTMLElement}
  */
 buildDom() {
   const lightboxEl = document.createElement("section");
   lightboxEl.classList.add("lightbox");

   lightboxEl.setAttribute("role", "dialog");
   lightboxEl.setAttribute("aria-labelledby", "lightbox");
   lightboxEl.setAttribute("aria-describedby", "lightbox");
   lightboxEl.setAttribute("aria-modal", "true");
   lightboxEl.setAttribute("aria-hidden", "true");
   lightboxEl.setAttribute("tabindex", "-1");

   lightboxEl.innerHTML = `

   <div class=".lightbox__wrapper">
     <button class="lightbox__close" aria-label="close"></button>
     <button class="lightbox__prev"  aria-label="previous"></button>
     <button class="lightbox__next"  aria-label="next"></button>
     <div class="lightbox__container"></div>
   </div>
   
   `;

   lightboxEl
     .querySelector(".lightbox__close")
     .addEventListener("click", this.close.bind(this));
   lightboxEl
     .querySelector(".lightbox__next")
     .addEventListener("click", this.next.bind(this));
   lightboxEl
     .querySelector(".lightbox__prev")
     .addEventListener("click", this.prev.bind(this));

   const focusElement = lightboxEl.querySelector(".lightbox__close");

   window.setTimeout(() => {
     focusElement.focus();
   }, 100);

   return lightboxEl;
 }
}
