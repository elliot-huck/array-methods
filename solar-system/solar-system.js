const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const fragment = document.createDocumentFragment();

const sendToFrag = (item) => {
  const paragraph = document.createElement("p");
  const text = document.createTextNode(`${item}`);
  paragraph.appendChild(text);
  fragment.appendChild(paragraph);
}

planets.forEach(sendToFrag);

const planetEl = document.getElementById("planets")
planetEl.appendChild(fragment);

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

capitalPlanets = planets.map((planet) => planet.slice(0, 1).toUpperCase() + planet.slice(1));
console.log(capitalPlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithE = planets.filter((planetName) => planetName.includes("e"));
console.log(planetsWithE);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce((total, currentWord) => `${total} ${currentWord}`);
console.log(sentence);