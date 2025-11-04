"use strict";

const sections = document.querySelectorAll("section");

// Window tager fat om browservinduet og onscroll er en event der sker når der scrolles
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    // får nuværende scroll position
    let scrollDistance = window.scrollY;
    // får sektionens position ift. toppen af dokumentet
    let sectionDistance = section.offsetTop;
    // hvis sektionen er kommet ind i synsfeltet, tilføjes der "show-animate", ellers fjernes
    // vi trækker lidt fra for at trigge før toppen rammer helt
    if (scrollDistance >= sectionDistance - 50) {
      section.classList.add("show-animate");
    } else {
      section.classList.remove("show-animate");
    }
  });
});

// Hover-effekt på første sektion (sikrer korrekt selector og null-check)
const sectionOne = document.querySelector(".sec1");
if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}

const simon = document.getElementById("simon");
const piger = document.getElementById("piger");
const drenge = document.getElementById("drenge");



const soundDrenge = new Audio("sound/drenge.mp3");
drenge.addEventListener("click", () => {
  soundDrenge.play();
  drenge.classList.remove("animate");
  drenge.classList.toggle("anim-scale");
});

const soundPiger = new Audio("sound/piger.mp3");
piger.addEventListener("click", () => {
  soundPiger.play();
  piger.classList.remove("animate");
  piger.classList.toggle("anim-scale");
});

const soundSimon = new Audio("sound/simon.mp3");
simon.addEventListener("click", () => {
  soundSimon.play();
  simon.classList.remove("animate");
  simon.classList.toggle("anim-scale");
});

const gamle = document.getElementById("gamlesen");
if (gamle) {
  gamle.addEventListener("click", function () {
    this.classList.toggle("anim-bounce");
    gamle.classList.toogle("animate");
    gamle.classList.toogle("anim-scale");
  });
}

