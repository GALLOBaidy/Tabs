// Récupérer le sélecteur .about, tous les sélecteurs .tab-btn et .content
let about = document.querySelector(".about");
let tabT = document.querySelectorAll(".tab-btn");
let content = document.querySelectorAll(".content");

// Ecouter l'évènement 'click' sur .about
about.addEventListener("click", function (a) {
  // Récupérer la valeur de l'id de l'élément courant avec e.target.dataset.id
  // voir tuto https://codepen.io/dizakids/pen/WNNVLEz
  const id = a.target.dataset.id;

  // si id
  if (id) {
    // supprimer .active sur les autres boutons
    tabT.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // le btn courant devient .active
    a.target.classList.add("active");
    // supprimer .active sur les autres contenus
    content.forEach(function (article) {
      article.classList.remove("active");
    });
    // récupérer le contenu courant grâce à l'id
    const element = document.getElementById(id);
    // ajouter .active au contenu courant
    element.classList.add("active");
  }
});