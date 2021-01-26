console.log("bonjour");

// RECHERCHE DANS LE DOM

// Afficher dans la console l'élément dont l'identifiant est 'c1'
console.log(document.getElementById("c1"));

// Afficher dans la console le premier élément de classe "carte"
let elements = document.getElementsByClassName("carte");
console.log(elements[0]);

// OU
console.log(document.querySelector(".carte"));

// Afficher dans la console tous les éléments de classe "carte"
console.log(document.getElementsByClassName("carte"));

// Afficher tous les paragraphes HTML (élément p)
let elems = document.getElementsByTagName("p");
for (let elem of elems) {
  console.log(elem);
}

// Afficher le nom de la classe de l'élément d'id j1
let e = document.getElementById("j1");
console.log(e.className);

// Afficher l'id du dernier élément fils de l'élément d'id j1
console.log(document.getElementById("j1").lastElementChild.id);

// MODIFICATION DU DOM

// Modifier le contenu de l'élément d'identifiant 'titre' pour y mettre le texte 'TP1 manipulation du DOM'
document.getElementById("titre").textContent = "TP1 manipulation du DOM";

// Mettre l'élément d'identifiant c1 en rouge ('red') et mettre l'élément d'identifiant c2 en vert ('green')
document.getElementById("c1").style.background = "red";
document.getElementById("c2").style.background = "green";

// Ajouter une 3e carte de couleur bleue, d'id c3 et d'ancre 3
let carte3 = document.createElement("p");
carte3.id = "c3";
carte3.className = "carte";
carte3.style.background = "blue";
carte3.innerHTML = "<a> 3 </a>";
document.getElementById("j1").appendChild(carte3);

// Ecrire la fonction "ajouterCarte" qui ajoute une nouvelle carte connaissant son numéro (4, 5, 6, ...) comme fils de l'élément d'id j1
// Toutes les cartes auront les mêmes propriétés (celles de la question ci-dessus) sauf l'id et l'ancre
function ajouterCarte(numero) {
  let carte = document.createElement("p");
  carte.id = "c" + numero;
  carte.className = "carte";
  carte.style.background = couleurAleatoire();
  carte.innerHTML = "<a> " + numero + " </a>";
  document.getElementById("j1").appendChild(carte);
}
ajouterCarte(4);
ajouterCarte(5);

// Ecrire une fonction "couleurAleatoire" qui choisit une couleur au hasard dans un tableau de couleurs
function couleurAleatoire() {
  const tCouleurs = [
    "blue",
    "red",
    "purple",
    "yellow",
    "green",
    "orange",
    "pink",
    "black",
    "brown",
    "cyan",
    "magenta"
  ];
  let indice = Math.round(Math.random() * (tCouleurs.length - 1));
  return tCouleurs[indice];
}

// Ecrire une boucle qui ajoute les cartes 6 à 10 en utilisant la fonction précédente
for (let i = 6; i < 11; i++) {
  ajouterCarte(i);
}

// Ecrire la fonction "supprimerCarte" qui supprime une carte dont on connait le numéro
function supprimerCarte(numero) {
  document.getElementById("j1").removeChild();
}

// Ecrire la fonction "deplacerCarte" qui déplace la première carte en dernier
function deplacerCarte() {
  let carte1 = document.getElementById("j1").firstElementChild;
  document.getElementById("j1").appendChild(carte1);
}
