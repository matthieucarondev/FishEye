export class Lightbox { 
  
  
  /**
  * @constructs Lightbox
  * @param {string} type Type de média
  * @param {string} url Image Url
  * @param {string[]} images Url du tableau d’images
  * @param {string[]} imagesTitles Gamme de titres multimédias
  */
 constructo(medias){
  this.medias=medias;
 }
  shoowLightbox(mediaId){
    const media = this.medias.find(media=> media._id=== mediaId)
    this.elemnt=this.buildDom();

    document.body.appendChild(this.element);

      if  (media.constructor.name === "Video") {
         this.loadVideo(media._title,`assets/medias/${media._photographerId}/${media.video}`);
        } else if (media.constructor.name=== "Image") {
          this.loadImage(media._title,`assets/medias/${media._photographerId}/${media.image}`);
        }
        const indexCourantDeMonMedia =this.medias.findIndex(media =>media._id===id);
        const indexSuivant =this.medias.length===indexCourantDeMonMedia +1 ?0:indexCourantDeMonMedia+1;
        const indexPrecedent = indexCourantDeMonMedia===0? this.medias.length -1:indexCourantDeMonMedia -1;

        const btnPrev = document.getElementById("btn-prev")
        const btnNext = document.getElementById("btn-next")

        btnPrev.setAttribute("data-id",indexPrecedent)
        btnNext.setAttribute("data-id",indexSuivant)

        btnPrev.addEventListener("click",(e)=>{
          const mediaId = e.target.dataset.id
          const media = this.medias.find(media =>media._id ===mediaId)
          this.generateLightBoxContainer(media);
        })

          btnNext.addEventListener("click",(e)=>{
            const mediaId = e.target.dataset.id
            const media = this.medias.find(media =>media._id ===mediaId)
            this.generateLightBoxContainer(media);
        })
  

  }
static init(allmedias) {
      const mediaList = Array.from(medias);
      const mediaLinks = mediaList.map((media) => {
        if (media.constructor.name ==="image") {
          return media.image;
          } else if (media.constructor.name ==="video") {
            return media.video;
        }
      });


      mediaList.forEach((media) => {
        const html = document.querySelectorAll(`${this._id}`);
    
  
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
  
          new Lightbox(url);
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
  
            new Lightbox(url);
          }
        });
      });
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
 
   const mediaTitle = document.createElement("p");
   imageTitle.classList.add("lightbox__title");
   imageTitle.textContent = this._title;

   //image.onload = () => {
     container.removeChild(loader);
     container.appendChild(image);
     container.appendChild(mediaTitle);
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
   
   const mediaTitle = document.createElement("p");
   imageTitle.classList.add("lightbox__title");
   imageTitle.textContent = this._title;
   video.src = url;
   //video.load = () => {
   container.removeChild(loader);
   container.appendChild(video);
   container.appendChild(mediaTitle);
   this.url = url;
  // };

   
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
     <button  class="lightbox__close" aria-label="close"></button>
     <button id="btn-prev" class="lightbox__prev datad=""  aria-label="previous"></button>
     <button id="btn-next" class="lightbox__next" datad=""  aria-label="next"></button>
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
