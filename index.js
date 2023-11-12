
// Select and Element
let paragraph = document.getElementById('paragraph');

console.log(paragraph); // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName('link');


// 
console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection

// Selecting By tag name

let divs = document.getElementsByTagName('div');

console.log(divs);

// Getting element by attribute
// let attribute = element.getAttribute(attributeName);

let paragraph2 = document.getElementById('paragraph');
let paragraphId = paragraph.getAttribute('id');
console.log(paragraphId); // <== paragraph

// Changing the value of an element's attribute
// element.setAttribute(name, value);
let paragraph3 = document.getElementById('paragraph');
paragraph3.setAttribute('id', 'info-paragraph');

// Create a DOM object
let h2Tag = document.createElement('h2');
console.log(h2Tag); // <== <h2></h2>

// Adding Content
h2Tag.innerHTML = 'Elephant';

// Add Element into a Parent Element
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);

// Create a Text Node
// let text = document.createTextNode(data);

let text = document.createTextNode('This text is created dynamically 🏆 🎯');

parent.appendChild(text);

// Activity No 1.
// Crea te a P element.
const pElement = document.createElement("p");

// Create a Text Node
const textNode = document.createTextNode("Hi there! I am using JavaScript");

// Add the text node to the p element we have created
pElement.appendChild(textNode);

// Now add the P Element to the body of the DOM
// document.body.appendChild(pElement);
parent.appendChild(pElement);

// Adding text before another element
const h1Tag = document.createElement("h1");

// Creating the node
const h1Node = document.createTextNode("Heading 1 - comes before Heading 2");

// Adding the text to the DOM
h1Tag.appendChild(h1Node);

// Creating the node
parent.insertBefore(h1Tag, h2Tag);


// Activity 2
// Adding an Input before the  "Add Item" button
// Creating the Input Element
const inputElement = document.createElement("input");

// Setting up some atributes for the Input Element
inputElement.setAttribute("type", "text");
inputElement.setAttribute("placeholder", "Add Item");

// Find the button with the id = "add-item-button"
const buttonElement = document.getElementById("add-item-button");

// Inserting the input before the button
parent.insertBefore(inputElement, buttonElement);

// Deleting the Buttom from the DOM
// We do not create the variable buttonElement because it already exist
// buttonElement = document.getElementById("add-item-button");
// We don't add the button selections because we did already in case
// let button = document.getElementById('add-item-button');

/*
// Removing the Child
parent.removeChild(buttonElement);

// Clearing Elements with innerHTML
let contentDiv = document.getElementById('content');
contentDiv.innerHTML = ''; // clears the whole element

// With While Loop
let contentDiv = document.getElementById('content');

// Remove all child nodes
while (contentDiv.firstChild) {
  contentDiv.removeChild(contentDiv.firstChild);
}
*/

// Events in JavaScirpt
// Adding a Click Event

// We don't add the button selections because we did already in case
// let button = document.getElementById('add-item-button');

buttonElement.onclick = function() {
    console.log("adding an element to the list");
}

// Activity 3
// Create a Click Event that Will Add a LI element witha number.

// Define the DIV content
const divElement = document.getElementById("content");

// We already created the button Element

// Declaring the counter and initializing it
let itemNumber = 1;

// Creating the Event Listener with anonymous function
buttonElement.addEventListener("click", function() {

    // Check if ul element exists
    let ulElement = divElement.querySelector("ul");

    if(!ulElement) {
        ulElement = document.createElement("ul");
        divElement.appendChild(ulElement);
    }

    // Creating the li Element
    const liElement = document.createElement("li");

    // Setting up the text Item Number + Counter
    liElement.textContent = `Item Number No. ${itemNumber}`;

    // Incrementing the Element in each click
    itemNumber++;

    // Append the li element to the ul element
    ulElement.appendChild(liElement);

});

// Inputs Manipulation

// Getting the value from Input
let input = document.getElementsByTagName('input')[0];
console.log(input.value); //=> ""

// Creating a Click Event for the button
let sendButton = document.getElementById("send-btn");

// Moving the input inside the function (optional) with Anonymous Function
sendButton.onclick = function() {
    // let input2 = document.getElementsByTagName("input")[0]; // or leave it as it is, outside. The zero is to get the first occurence
    let input2 = document.getElementById("input2"); // or leave it as it is, outside
    console.log(input2.value);
}

// Commands for Scrapping a Web Site

// Getting all the Elements with a className
let titles = document.getElementsByClassName('reactAppRoot');
for (let i = 0; i < titles.length; i++) {
    console.log(titles[i].innerHTML);
  }

// Getting all the titles ordered by its metric
  let elems = document.getElementsByClassName('itemlist');

  let articles = elems[0].children[0].getElementsByClassName('athing');
  
  let pointsElement;
  let articlesArray = [];
  
  for (let i = 0; i < articles.length - 1; i++) {
    pointsElement = articles[i].nextSibling.getElementsByClassName('score')[0];
    points = pointsElement ? pointsElement.innerText : '0';
    articlesArray.push({
      title: articles[i].children[2].innerText,
      point: parseInt(points.split(' ')[0])
    });
  }
  
  articlesArray.sort(function(a, b) {
    return a.point - b.point;
  });