//this is a selg-invoking anonymous function
// it's called the module pattern

(() => {
//this is a JS comment
console.log('this is some text');

//go into the document and make a referrence to an element that you want to work with
let theHeading = document.querySelector(".main-heading"),
    theIcons = document.querySelectorAll(".icon");

//create a function that runs when theHeader element is clicked
function logElement() {
    console.log('clicked on an element: ', this.id);
}

//Listen for a user event, and then do something
//the "do something" is the function we run when the element is clicked
theHeading.addEventListener("click", logElement);

// loop through all of the icons and add event handling to them
//process each icon one at a time and add behaviour
theIcons.forEach(icon => icon.addEventListener("click", logElement));

})();
