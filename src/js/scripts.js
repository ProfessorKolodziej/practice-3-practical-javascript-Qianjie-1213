// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello!");

const myname = "Sofia";
const myage = 18;

console.log(myage);

// practical javascript
// show and hide an element

// find the element to hide
const toggleedparagraph = document.querySelector('.show');
console.log(toggleedparagraph);

// write a function that toggles the show/hide class
function toggleparagraph() {
	toggleedparagraph.classList.toggle("hide");
	toggleedparagraph.classList.toggle("show");
	console.log("my toggle function");
	console.log(toggleedparagraph);
}


//find the button and toggle the paragraph when click it
const toggleButton = document.querySelector('#toggle-control');

// add an event listener to the button
toggleButton.addEventListener('click', toggleparagraph);

