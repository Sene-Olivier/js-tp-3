// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let lastScroll = 0;
const img1 = document.querySelector ("#imgImprovise");

window.addEventListener("scroll", () => {

if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
} else {
    navbar.style.height = "50px";
}
   
});

window.addEventListener("scroll", () => {

if (window.scrollY > "200px") {
    img1.style.opacity = "1";
    img1.style.transform.translateX = 0;
}

});


