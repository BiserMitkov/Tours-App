const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

const homeNavButton = document.getElementById('home').addEventListener('click', (e) => {
  e.target.href = '#'
  container.classList.remove("change");
});

const storiesNavButton = document.getElementById('story').addEventListener('click', (e) => {
  e.target.href = '#stories'
  container.classList.remove("change");
});

const toursNavButton = document.getElementById('tour').addEventListener('click', (e) => {
  e.target.href = '#tours'
  container.classList.remove("change");
});

const contactsNavButton = document.getElementById('contact').addEventListener('click', (e) => {
  e.target.href = '#contacts'
  container.classList.remove("change");
});


