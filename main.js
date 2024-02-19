// variable contenant le formulaire
var form = document.querySelector(".example");

// fonction pour récupérer les valeurs du formulaire
function getFormValues(event) {
  // on empêche l'envoi du formulaire, pour ne pas rafraichir la page
  event.preventDefault();

  // on récupère les données du formulaire
  var data = new FormData(form);

  // on créé une variable text vide
  var text = "";

  // on fait une boucle avec chaque champ du formulaire
  data.forEach((value, name) => {
    // pour chaque champ du formulaire, on ajoute le nom et la valeur (\n = retour à la ligne)
    text += name + ": " + value + "\n";
  });

  // on fait une alerte avec le texte
  alert(text);
}

// lorsqu'on envoie le formulaire, on appelle la fonction getFormValues
form.addEventListener("submit", getFormValues);
