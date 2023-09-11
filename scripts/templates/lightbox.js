export class LightBox {
  constructor(listElment) {
    this.listElment = listElment;
    this.media = null;
  }
  show(id) {
    this.media = this.getElementById(id);
 
   this.display();
    
 
    this. manageEvents();
    
  }
  display() { 
    if (this.media.constructor.name === "Video") {
    this.loadVideo(
      `assets/medias/${this.media._photographerId}/${this.media._video}`,
      this.media._title
    );
    document.querySelector("#lightbox").classList.add("show");
  } else if (this.media.constructor.name === "Image") {
    this.loadImage(
      `assets/medias/${this.media._photographerId}/${this.media._image}`,
      this.media._title
    );
    document.querySelector("#lightbox").classList.add("show");
  }
}

  next() {
    let index = this.listElment.findIndex(
      (element) => element._id == this.media._id
    );
    if (index === this.listElment.length - 1) {
      this.media = this.listElment[0];
    } else {
      this.media = this.listElment[index + 1];
    }

    this.display();
  }
  prev() {
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
    document.querySelector("#lightbox").classList.remove("show");
  }
  manageEvents() {
     document.querySelector(".lightbox__next").addEventListener("click", (e) => {
     console.log(e);
      this.next();
    });
    document.querySelector(".lightbox__prev").addEventListener("click", () => {

      this.prev();
    });
   
   
   
    document.querySelector(".lightbox__close").addEventListener("click", () => {
            
            this.close();
        
    });
    document.querySelector("#lightbox").addEventListener("click", (e) => {
      if (e.target == e.currentTarget)  {
        this.close();
      }
});
  
    document.querySelector("#lightbox").addEventListener("keyup", (e) => {
    
        switch (e.key) {
            case "arrowRight":
                this.next();
                break;
                
            case "arrowLeft":
                this.prev();
                break;
                            
            case "Escape":
                this.close();
                break;

        
        }
         console.log(e.key);
    });
    
  }

  getElementById(id) {
    return this.listElment.find((element) => element._id == id);
  }
  loadImage(url) {
    this.url = null;
    const image = document.createElement("img");
    const container = document.querySelector(".lightbox__container");

    // titre image

    const mediaTitle = document.createElement("p");
    mediaTitle.classList.add("lightbox__title");
    mediaTitle.textContent = this.media._title;
    image.src = url;
    //image.onload = () => {
    container.appendChild(image);
    container.appendChild(mediaTitle);
    this.url = url;

    //};
  }
  loadVideo(url) {
    this.url = null;
    const video = document.createElement("video");
    video.classList.add("lightbox__video");
    video.setAttribute("controls", true);
    video.setAttribute("width", "100%");
    video.innerHTML = `<source src="${url}" type="video/mp4">`;

    const container = document.querySelector(".lightbox__container");

    const mediaTitle = document.createElement("p");
    mediaTitle.classList.add("lightbox__title");
    mediaTitle.textContent = this.media._title;
    video.src = url;

    container.appendChild(video);
    container.appendChild(mediaTitle);
    this.url = url;
  }
}
