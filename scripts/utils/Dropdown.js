//const filterSelect = document.getElementById("click");
//const filterOptions = document.getElementById("option");

export function showModalFilter() {
  // Afficher l’option, option masquée par défaut
  document.getElementById("click").style.display = "none";
  document.querySelector(".photographer__filter--menu").style.display = "flex";
}

// Fermer les options de filtrage modal
export function closeModalFilterOptions() {
  document.getElementById("click").style.display = "flex";
  document.querySelector(".photographer__filter--menu").style.display = "none";
}

// Fermer les options de filtre
if (document.querySelector(".photographer__filter--menu")) {
  document
    .querySelector(".photographer__filter--menu")
    .addEventListener("click", () => closeModalFilterOptions());
}
