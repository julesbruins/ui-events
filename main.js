/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...

// 2x klikken -> links naar rechts
let bibberLink = document.querySelector('a:nth-of-type(1)')

bibberLink.addEventListener('dblclick', bibberAni) 
bibberLink.addEventListener('animationend', bibberAni)

function bibberAni () {
bibberLink.classList.toggle('bibber')
}


// 1x klikken -> omhoog/omlaag
let updownLink = document.querySelector('a:nth-of-type(2)')

updownLink.addEventListener('click', updownAni)
updownLink.addEventListener('animationend', updownAni)

function updownAni () {
  updownLink.classList.toggle('updown')
}


// met muis erover -> draaien
let turnaroundLink = document.querySelector('a:nth-of-type(3)')

turnaroundLink.addEventListener('mouseover', turnAni)
turnaroundLink.addEventListener('animationend', turnAni)

function turnAni () {
  turnaroundLink.classList.toggle('turnaround')
}


// focus -> in/uit zoomen
let pulseLink = document.querySelector('a:nth-of-type(4)')

pulseLink.addEventListener('focus', pulseAni)
pulseLink.addEventListener('animationend', pulseAni)

function pulseAni () {
  pulseLink.classList.toggle('pulse')
}


// key indrukken -> draai Y-as
let keydownLink = document.querySelector('a:nth-of-type(5)')

keydownLink.addEventListener('keydown', twistAni)
keydownLink.addEventListener('animationend', twistAni)

function twistAni () {
  keydownLink.classList.toggle('twist')
}


// scroll -> vergroot en verkleint
let scale = 1;
const el = document.querySelector('a:nth-of-type(6)')
el.onwheel = zoom;

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}



// let cutLink = document.querySelector('a:nth-of-type(5)')

// cutLink.addEventListener('cut', cutAni)

// function cutAni () {
//   cutLink.classList.toggle('hidden')
// }

