// GERER LA DYNAMIQUE DE L'INPUT(menu déroulant)//



// POPULARITÉ - Fonction de tri par ordre décroissant des likes
function sortPopularite (medias){
    medias.sort((a,b) => {
        return (b.likes)-(a.likes);
    })
}