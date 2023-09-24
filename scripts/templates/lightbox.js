export class LightBox {
  constructor(listElment) {
    this.listElment = listElment;
    this.media = null;
     
  }
  show(id) {
       this.media = this.getElementById(id);
       document.body.insertAdjacentHTML("beforeend", `<div id="lightbox">
    <div class="lightbox__wrapper">
     <button id="btn-next" class="lightbox__next"   aria-label="next"></button>
      <div class="lightbox__container"> <button  class="lightbox__close" aria-label="close"></button></div>
     
     <button id="btn-prev" class="lightbox__prev"  aria-label="previous"></button>
    </div>
   `);

    this.display();
    this.manageEvents();
  }
  display() {
    if (this.media.constructor.name === "Video") {
      this.loadVideo(
        `assets/medias/${this.media._photographerId}/${this.media._video}`,
        this.media._title
      );
     
    } else if (this.media.constructor.name === "Image") {
      this.loadImage(
        `assets/medias/${this.media._photographerId}/${this.media._image}`,
        this.media._title
      );
      
    }
  }

  next() {

    let index = this.listElment.findIndex(
      (element) => element._id == this.media._id
    );
    if (index === this.listElment.length - 1) {
      this.media = this.listElment[0];
    } else  {
      this.media = this.listElment[index + 1];
    }

    this.display();
  }
  prev() {
     const closeLightbox = document.querySelector("#lightbox");

    let index = this.listElment.findIndex(
      (element) => element._id == this.media._id
    );
    if (index === 0) {
      this.media = this.listElment[this.listElment.length - 1];
    } else {
      this.media = this.listElment[index - 1];
    }
    
    this.display();
  }

  close() {
    const _this = this;
    const closeLightbox = document.querySelector("#lightbox");
    if (closeLightbox) {

    closeLightbox.remove();
    }else {
      

    
  }
}
  handlekeyup(_this, e) {

    const closeLightbox = document.querySelector("#lightbox");
    if(closeLightbox) {
    switch (e.key) {
      
      case "ArrowRight":
        _this.next();
        break;

      case "ArrowLeft":
        _this.prev();
        break;

      case "Escape":
        _this.close();
        break;
    }

    } else {
      
  }
  
  }
  manageEvents() {
   
    document.querySelector(".lightbox__next").addEventListener("click", (e) => {
      this.next();
  
    
    });
    document.querySelector(".lightbox__prev").addEventListener("click", () => {
      this.prev();
     
    });

    document.querySelector(".lightbox__close").addEventListener("click", () => {
      this.close();
    });
    document.querySelector("#lightbox").addEventListener("click", (e) => {
      if (e.target == e.currentTarget) {
        this.close();
      }
    });
    const _this = this;
    document.addEventListener(
      "keyup",
      this.handlekeyup.bind(this, _this),
      true
    );
  }

  getElementById(id) {
    const filterActive = document.querySelector(
      ".photographer__filter--active");
      if (filterActive.innerText === "Popularité") {
         return this.listElment.find((element) => element._id == id);
      }else if (filterActive.innerText === "Titre") {
        return this.listElment.find((element) => element._id == id);}
      else if (filterActive.innerText === "Date") {
        return this.listElment.find((element) => element._id == id);}
        else {
          return this.listElment.find((element) => element._id == id);
        }
          
   
  }
  loadImage(url) {
    this.url = null;
    const image = document.createElement("img");
    image.setAttribute("class", "media__lightBox");
    const container = document.querySelector(".lightbox__container");

    // titre image

    const mediaTitle = document.createElement("p");
    mediaTitle.classList.add("lightbox__title");
    mediaTitle.textContent = this.media._title;
    image.src = url;

    const mediatoreplace = document.querySelector(".media__lightBox");
    if (mediatoreplace) {
      mediatoreplace.replaceWith(image);
    } else {
      container.appendChild(image);
    };
    const titleToReplace= document.querySelector(".lightbox__title");
    if (titleToReplace) {
      titleToReplace.replaceWith(mediaTitle);
    } else {
      container.appendChild(mediaTitle);
    };
    this.url = url;

    //};
  }
  loadVideo(url) {
    this.url = null;
    const video = document.createElement("video");
    video.classList.add("lightbox__video");
    video.setAttribute("class", "media__lightBox");
    video.setAttribute("controls", true);
    video.setAttribute("width", "100%");
    video.innerHTML = `<source src="${url}" type="video/mp4">`;

    const container = document.querySelector(".lightbox__container");

    const mediaTitle = document.createElement("p");
    mediaTitle.classList.add("lightbox__title");
    mediaTitle.textContent = this.media._title;
    video.src = url;

    const mediatoreplace = document.querySelector(".media__lightBox");
    if (mediatoreplace) {
      mediatoreplace.replaceWith(video);
    } else {
      container.appendChild(video);
    };
    const titleToReplace= document.querySelector(".lightbox__title");
    if (titleToReplace) {
      titleToReplace.replaceWith(mediaTitle);
    } else {
      container.appendChild(mediaTitle);
    };

    this.url = url;
  }

}
