export class Form {
  constructor() {
    this.error = document.getElementById("error_message");
    this.errorName =
      "Prenom invalide = 2 caractères minimum ou caractére invalide";
    this.errorLastName =
      "Nom invalide = 2 caractères minimum ou caractére invalide";
    this.errorEmail = "Veuillez entrer une adresse mail valide";
    this.errorMessage = "Une erreur est survenue au niveau du text";
  }

  validation() {
    //const formulaire
    const form = document.getElementById("formContact");
    const firstName = document.getElementById("prenom");
    const lastName = document.getElementById("nom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    //error

    //regex
    const nameRegEx = new RegExp( /^\w{2,}[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/i);
    const emailRegEx = new RegExp(/^[a-z0-9]+@([a-z]+)\.[a-z]{2,3}$/);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let validationVar =
        this.validateFirstName(firstName, nameRegEx) &&
        this.validateLastName(lastName, nameRegEx) &&
        this.validateEmail(email, emailRegEx) &&
        this.validateMessage(message);

      if (validationVar) {
        this.error.style.display = "none";
        this.resultConsole(firstName, lastName, email, message);
        form.reset();
        form.style.display = "none";
      }
    });
    this.displayForm();
  }

  //afficher le formulaire / et ne plus l'afficher
  displayForm() {
    const close = document.getElementById("close");
    const form = document.getElementById("formContact");
    close.addEventListener("click", () => {
      form.reset();
      form.style.display = "none";
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        form.reset();
        form.style.display = "none";
      }
    });
  }

  //resultat dans la console
  resultConsole(firstName, lastName, email, message) {
    console.group("Résultat du formulaire de contact");
    console.log("Prénom : " + firstName.value);
    console.log("Nom : " + lastName.value);
    console.log("Email : " + email.value);
    console.log("Message : " + message.value);
    console.groupEnd();
  }

  validateFirstName(elt, regex) {
    if (elt.value == "" || !elt.value.match(regex)) {
      this.error.style.display = "block";
      this.error.innerHTML = this.errorName;
      return false;
    }
    this.error.style.display = "none";
    console.log("gg prenom");
    return true;
  }

  validateLastName(elt, regex) {
    if (elt.value == "" || !elt.value.match(regex)) {
      this.error.style.display = "block";
      this.error.innerHTML = this.errorLastName;
      return false;
    }
    this.error.style.display = "none";
    console.log("gg nom");
    return true;
  }

  validateEmail(elt, regex) {
    if (!elt.value.match(regex) || elt.value == "") {
      this.error.style.display = "block";
      this.error.innerHTML = this.errorEmail;
      return false;
    }
    this.error.style.display = "none";
    console.log("gg email");
    return true;
  }

  validateMessage(elt) {
    if (elt.value.trim() < 4 || elt.value == "") {
      this.error.style.display = "block";
      this.error.innerHTML = this.errorMessage;
      return false;
    }
    this.error.style.display = "none";
    console.log("gg message");
    return true;
  }
}
