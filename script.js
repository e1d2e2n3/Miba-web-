

window.addEventListener ("load", ()  => {
    document.body.classList.add("loaded");
} );  
    

// Catégories
const categories = [
  {
     nom: "Animaux sauvages", image: "lion.jpg",
    lien:"http://fr.wikipedia.org/wiki/faune_sauvage"
   },


  { nom: "Animaux marins", image: "requin.png",
    lien:"http://fr.wikipedia.org/wiki/Animal_marin"
   },
  { nom: "Oieseaux", image: "oieseau.png",
    lien:"http://fr.wikipedia.org/wiki/Oiseau"
   },
  { nom: "Reptiles", image: "serpa.png" ,
    lien:"http://fr.wikipedia.org/wiki/Reptile"
  }
];




// Espèces
const especes = [
  { nom: " Lion", categorie: "Animaux sauvages", image: "ani.jpg",
    lien:"http://www.youtube.com/results?search_query=documentaire+lion"
   },
  { nom: "liopart", categorie: "Animaux sauvages", image: "liopart.jpg",
    lien:"http://www.youtube.com/results?search_query=documentaire+liopart"
   },
  { nom: "Rhinecerose", categorie:"Animaux marins", image: "ngubu.jpg",
    lien:"http://www.youtube.com/results?search_query=documentaire+rhinecerose"
   },
  { nom: "oiseau", categorie: "Oiseaux", image: "pt oiseau.png",
    lien:"http://www.youtube.com/results?search_query=documentaire+oiseau"
   }
];

// Afficher catégories
const catContainer = document.getElementById("categories-container");

categories.forEach(cat => {
  catContainer.innerHTML += `
    <div class="card">
    <a href="${cat.lien}" target="_blank">
      <img src="${cat.image}" alt="${cat.nom}">
      </a>
      <h3>${cat.nom}</h3>
    </div>
  `;
});

// Afficher espèces
const espContainer = document.getElementById("especes-container");

especes.forEach(esp => {
  espContainer.innerHTML += `
    <div class="card">
 <a href="${esp.lien}" target="_blank">
      <img src="${esp.image}" alt="${esp.nom}">
      </a>
    
      <h3>${esp.nom}</h3>
      <p>${esp.categorie}</p>
    </div>
  `;
});