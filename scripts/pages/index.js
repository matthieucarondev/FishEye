async function getData() {
  try {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
 
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
            console.log(photographers);
        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const data = await getData();
        const photographers = data.photographers;
        console.log(data);
        displayData(photographers);
    }
    
    init();
    
