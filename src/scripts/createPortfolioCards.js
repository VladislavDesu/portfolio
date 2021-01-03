"use strict";

const $ = require("jquery");

function createPortfolioCards(cards) {
   const portfolioList = document.querySelector(".portfolio__list");
   const portfolioTemplate = document.querySelector("#portfolio-item").content;
   const portfolioSource = portfolioTemplate.querySelector("picture source");
   const portfolioPhoto = portfolioTemplate.querySelector(".portfolio__photo");
   const portfolioName = portfolioTemplate.querySelector(".portfolio__name");
   const portfolioLink = portfolioTemplate.querySelector(".portfolio__link");

   portfolioSource.srcset = cards.webp;
   portfolioPhoto.src = cards.photo;
   portfolioPhoto.alt = "A photo of the " + cards.name + " site";
   portfolioName.textContent = cards.name;
   portfolioLink.href = cards.link;
   const copyContent = portfolioTemplate.cloneNode(true);
   portfolioList.appendChild(copyContent);
}

const portfolioCards = [{
      name: "Alexis",
      image: "images/alexis.png",
      webp: "images/alexis.webp",
      link: "portfolio-sites/alexis/"
   },

   {
      name: "Pulse",
      image: "images/pulse.png",
      webp: "images/pulse.webp",
      link: "portfolio-sites/pulse/"
   },

   {
      name: "Sedona",
      image: "images/sedona.png",
      webp: "images/sedona.webp",
      link: "portfolio-sites/sedona/"
   },

   {
      name: "Mogo",
      image: "images/mogo.png",
      webp: "images/mogo.webp",
      link: "portfolio-sites/mogo/"
   },

   {
      name: "Cat Energy",
      image: "images/cat-energy.png",
      webp: "images/cat-energy.webp",
      link: "portfolio-sites/cat-energy/"
   },

   {
      name: "Gllacy",
      image: "images/gllacy.png",
      webp: "images/gllacy.webp",
      link: "portfolio-sites/gllacy/"
   },

   {
      name: "Misocial",
      image: "images/misocial.png",
      webp: "images/misocial.webp",
      link: "portfolio-sites/misocial/"
   },

   {
      name: "Nerds",
      image: "images/nerds.png",
      webp: "images/nerds.webp",
      link: "portfolio-sites/nerds/"
   },

   {
      name: "Borodinski",
      image: "images/borodinski.png",
      webp: "images/borodinski.webp",
      link: "portfolio-sites/borodinski/"
   },

   {
      name: "Covid",
      image: "images/covid.png",
      webp: "images/covid.webp",
      link: "portfolio-sites/covid/"
   },

   {
      name: "Project One",
      image: "images/project-one.png",
      webp: "images/project-one.webp",
      link: "portfolio-sites/project-one/"
   },

   {
      name: "Styles Conference",
      image: "images/styles-conference.png",
      webp: "images/styles-conference.webp",
      link: "portfolio-sites/styles-conference/"
   },

   {
      name: "Mycompany",
      image: "images/mycompany.png",
      webp: "images/mycompany.webp",
      link: "portfolio-sites/mycompany/"
   },

   {
      name: "Kvast",
      image: "images/kvast.png",
      webp: "images/kvast.webp",
      link: "portfolio-sites/kvast/"
   },
];

const portfolio = document.querySelector("#portfolio");
const portfolioBtn = portfolio.querySelector(".portfolio__btn");

const portfolioCardsLen = portfolioCards.length;
const portfolioItems = 0;
const maxItems = 3;

let minPortfolioItems = maxItems;
let maxPortfolioItems = portfolioCardsLen;

portfolioCards.slice(portfolioItems, minPortfolioItems).forEach((i) => {
   createPortfolioCards(i);
});

portfolioBtn.addEventListener("click", (e) => {
   portfolioCards.slice(minPortfolioItems, maxPortfolioItems).forEach((i) => {
      createPortfolioCards(i);
      minPortfolioItems++;
   });

   if (minPortfolioItems === maxPortfolioItems) {
      portfolioBtn.style.display = "none";
   };
});