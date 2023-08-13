function mediaFactory (data) {
    const { id, title, image, video, likes } = data;
    const photo = `assets/images/${image}`;
    const movie = `assets/images/${video}`;

       // Création de l'input pour le trie (menu déroulant)
       function getInputSelection() {
        const input = document.createElement('div');
        input.classList.add("photograph-media__input");
        
        input.innerHTML = ` <label for="trie" class="trie-text">Trier par</label>
                            <select tabindex="2" name="trie" id="trie" aria-haspopup="liste de selection" role="Liste">
                                <option value="popularite" selected >Popularité</option>
                                <option value="date">Date</option>
                                <option value="titre">Titre</option>
                            </select> `
                  
        return (input); 
        
    }
     function getphotoDom() {
        const userPhoto= document.createElement('div');
        userPhoto.setAttribute("class", "photo-Media");
        userPhoto.setAttribute("id", `${id}`);
       
            userPhoto.innerHTML= ` <figure class="medias_photographer" tabindex="3">
                                    <img class="medias-photographer_pic"src="assets/images/${image}" alt="${title}" aria-label="Ouvre la lightbox"/>
                                            <figcaption class="media_photo__information">
                                            <h3>${title}</h3>
                                                <div class="information-likes">
                                                    <span class="likes">${likes}</span>
                                                    <svg tabindex="3" class="icon" role="button" aria-label="Bouton de like" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                                                    </svg>
                                                </div>
                                            </figcaption> 
                                </figure> `
            return(userPhoto);
     }
        function getvideoDom () {
                const userVideo = document.createElement('div');
                userVideo.classList.add("media-video");
                userVideo.setAttribute("id",`${id}`);
               
                userVideo.innerHTML=`<figure class="medias_photographer" tabindex="3">
                                                <video class="medias-photographer_pic" src="assets/images/${video}" alt="${title}" type="video/mp4" aria-label="Ouvre la lightbox"></video>
                                                    <figcaption class="media_photo__information">
                                                            <h3>${title}</h3>
                                                            <div class="information-likes">
                                                                <span class="likes" >${likes}</span>
                                                                <svg tabindex="3" class="icon" role="button" aria-label="Bouton de like" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                                                                </svg>
                                                            </div> 
                                                    </figcaption>
                                    </figure> `
                                
                    return(userVideo);
        
                                                        
        }
            


   

    return {
        
        id,
        title,
        photo,
        movie,
        likes,
        getInputSelection,
        getphotoDom,
        getvideoDom,
    }
}
