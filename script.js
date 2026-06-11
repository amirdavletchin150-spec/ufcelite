// LOADER

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 500);

}, 1000);

});

// COUNTDOWN UFC FREEDOM 250

const eventDate = new Date("June 14, 2026 20:00:00").getTime();

const countdown = setInterval(() => {

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

if(d) d.innerHTML = days;
if(h) h.innerHTML = hours;
if(m) m.innerHTML = minutes;
if(s) s.innerHTML = seconds;

if(distance < 0){

clearInterval(countdown);

if(document.getElementById("countdown")){
document.getElementById("countdown").innerHTML =
"<h2>EVENT LIVE NOW</h2>";
}

}

},1000);

// FIGHT SIMULATOR

const fighters = [

"Ilia Topuria",
"Justin Gaethje",
"Alex Pereira",
"Ciryl Gane",
"Sean O'Malley",
"Petr Yan",
"Islam Makhachev",
"Dricus Du Plessis",
"Jon Jones",
"Tom Aspinall"

];

const simulateBtn = document.getElementById("simulateBtn");

if(simulateBtn){

simulateBtn.addEventListener("click", () => {

const randomWinner =
fighters[Math.floor(Math.random() * fighters.length)];

const result = document.getElementById("fightResult");

result.innerHTML =
`🏆 Winner: ${randomWinner}`;

result.style.transform = "scale(1.2)";

setTimeout(() => {
result.style.transform = "scale(1)";
},300);

});

}

// SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0px)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".fighter-card,.ranking-card,.hall-card,.weight-card,.fight-row"
).forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(50px)";
el.style.transition = "all .8s ease";

observer.observe(el);

});

// HERO PARALLAX

window.addEventListener("scroll", () => {

const hero = document.querySelector(".hero-content");

if(hero){

const value = window.scrollY * 0.3;

hero.style.transform =
`translateY(${value}px)`;

}

});

// NAVBAR BACKGROUND

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.85)";

}else{

navbar.style.background =
"rgba(0,0,0,.4)";

}

});

// 3D CARD EFFECT

document.querySelectorAll(".fighter-card").forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY =
((x / rect.width) - 0.5) * 20;

const rotateX =
((y / rect.height) - 0.5) * -20;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});

// RANDOM UFC QUOTE

const quotes = [

"Champions aren't born. They are made.",
"Pressure creates legends.",
"Every fight tells a story.",
"The Octagon never lies.",
"Greatness demands sacrifice."

];

setInterval(()=>{

const heroBadge =
document.querySelector(".hero-badge");

if(heroBadge){

heroBadge.innerHTML =
quotes[Math.floor(Math.random()*quotes.length)];

}

},5000);
