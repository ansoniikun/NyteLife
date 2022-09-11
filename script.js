"use strict";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle nav
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// MODAL WINDOW
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
let showModal = document.querySelectorAll(".show-modal");
let btnClose = document.querySelector(".close-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

btnClose.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (
    e.key === "Escape" &&
    !modal.classList.contains("hidden") &&
    !overlay.classList.contains("hidden")
  ) {
    hideModal();
  }
});

// Slider/Carousel
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  //Get current
  const current = document.querySelector(".current");
  //Remove current
  current.classList.remove("current");
  //Check for next slide
  if (current.nextElementSibling) {
    //Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //Get current
  const current = document.querySelector(".current");
  //Remove current
  current.classList.remove("current");
  //Check for prev slide
  if (current.previousElementSibling) {
    //Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//Button events
next.addEventListener("click", nextSlide);

prev.addEventListener("click", prevSlide);

if (auto) {
  //Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

//Swipe feature
let touchstartX = 0;
let touchendX = 0;

const checkDirection = () => {
  if (touchendX < touchstartX) {
    prevSlide();
  }
} 

slides.addEventListener('touchstart', e => {
  touchstartX = e.chengedTouches[0].screenX
});

slides.addEventListener('touchend', e => {
  touchendX = e.chengedTouches[0].screenX;
  checkDirection();
});




