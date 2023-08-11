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

    return {
        id,
        title,
        photo,
        movie,
        likes,
        getInputSelection,
    }
}
