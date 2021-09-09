'use strict'

/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

document.getElementById('node1').innerHTML = `I used the getElementById("node1") method to access this`;
document.getElementsByClassName('node2')[0].innerHTML = `I used the getElementByClassName("node2") method to access this`;
let h3Collection = document.getElementsByTagName('h3');

for (const h3 of h3Collection) {
  h3.textContent = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <a> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
// BONUS: Add a link href to the <a>

let newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This node was created using the createElement() method';
let parentElement = document.querySelector('#parent');
parentElement.appendChild(newParagraph);

let newAnchorTag = document.createElement('a');
newAnchorTag.innerHTML = '<a href="#">I am a tag</a>';
parentElement.insertBefore(newAnchorTag, newParagraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <a> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

let parentNode = document.getElementById('exercise3');
let childNode = document.getElementById('N1');
let secondAnchorTag = document.createElement('a');

secondAnchorTag.textContent = 'New Child Node';

parentNode.replaceChild(secondAnchorTag, childNode);
parentNode.removeChild(secondAnchorTag);

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from left to right
// BONUS - Make the red box go all the way around the perimeter of the green box */

let box = document.getElementById('box');
let boxPosition = 0;

function move() {
  if (boxPosition <= 150) {
    boxPosition += 1;
    box.style.left = boxPosition + 'px';
  }
}

let timer = setInterval(move, 50);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
  let bodyElement = document.querySelector('body');
  let modal = document.createElement('div');
  modal.textContent = 'Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user';
  modal.style.width = '200px';
  modal.style.zIndex = 10;
  modal.style.position = 'fixed';
  modal.style.top = '50vh';
  modal.style.left = '50vw';
  bodyElement.prepend(modal);
}


