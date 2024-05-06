// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions
// Instructions
// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your
// Note:
// On the next page, you have the HTML code

document.querySelector(".start-here").innerHTML = "main title";

const innerUl=document.querySelector('.start-here + li ul');
const newElement=document.createElement("li");
newElement.textContent = 'sub title 4';
innerUl.append(newElement);

const lastLi = document.querySelector("ul").lastElementChild;
lastLi.remove();

document.title = "Master Of The Dom";

document.querySelector("div p").innerHTML = "Hello";

