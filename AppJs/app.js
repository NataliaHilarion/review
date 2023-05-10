import { reviews } from "./users.js";

const $img = document.getElementById("person-img")
const $author = document.getElementById("author");
const $job = document.getElementById("job")
const $info = document.getElementById("info");

const $btnPrev = document.querySelector(".prev-btn")
const $btnNext = document.querySelector(".next-btn")
const $btnRandom = document.querySelector(".random-btn");

let currentItem = 1

window.addEventListener("DOMContentLoaded", function(){
  return showPerson()
})

function showPerson(){
   return personInformation(currentItem)
}

function personInformation(person){
  const item = reviews[person];
  $img.src = item.img;
  $author.textContent = item.name;
  $job.textContent = item.job;
  $info.textContent = item.text;
}

$btnPrev.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson()
});

$btnNext.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson()
});

$btnRandom.addEventListener("click", function () {
  const random = Math.floor(Math.random() * reviews.length)
  currentItem = random
  showPerson()
})

