/*
    James Carlson
    Coding Temple - SE FT-144
    Frontend, Module 10 Lesson 5 Assignment: JavaScript and the Document Object Model DOM
*/

// 1. Document Manipulation with JavaScript

// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Steam Deck", price: 549.00, description: "Play your digital games library on the go!" },
    { name: "Nintendo Switch", price: 299.99, description: "Play Nintendo classics and indie darlings on the go!" },
    { name: "PlayStation 5", price: 499.99, description: "Play Spider-Man 2! It looks great!" }
];

// Task 2: Write a function to display the product information on the webpage dynamically.

function displayProducts() {
    const catalogue = document.getElementById("catalogue");
    
    for(let product of products) {
        const card = `
        <div class="card rounded p-3"  style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: $${product.price.toFixed(2)}</li>
            <li class="list-group-item">Description: ${product.description}</li>
        </ul>
        </div>`;

        catalogue.insertAdjacentHTML("beforeend", card);
    }
}

// Task 3: Implement an event listener to trigger the display of products when the page loads.

document.getElementById("catalogue").addEventListener("load", displayProducts());



// 2. Form Manipulation with JavaScript

// Task 1: Create an HTML form with input fields for the user's name, email, and message. ✅

// Task 2: Write JavaScript code to handle form submissions and store user input in an object.

function storeUserInput(event) {
    event.preventDefault();

    
    const input = event.target.elements;
    
    // Task 3: Implement form validation to ensure that all required fields are filled before submission.
    if(input.name.value == "" || input.email.value == "" || input.message.value == "") {
        alert("Form must be entirely filled out. Your data has not been stored.");
    } 
    else {
        // get and console.log user info
        const userInput = {
            name: input.name.value,
            email: input.email.value,
            message: input.message.value
        };
        console.log(userInput);

        // display a message to direct to console
        document.getElementById("confirm-submit").innerText = "Your input has been saved to an object! Check the console! 😎"
    }
}



// 3. Styling with JavaScript

function changeColor(id) {

    // creates a random color every time!
    rValue = Math.round(Math.random() * 255);
    gValue = Math.round(Math.random() * 255);
    bValue = Math.round(Math.random() * 255);

    document.getElementById(id).style["background-color"] =
        `rgb(${rValue},${gValue},${bValue})`;
}

function textCopied() {
    changeColor("copy-box");
    alert("Please don't plagiarize my code!");
}

function moveAway() {
    percentage = Math.random() * 100;
    document.getElementById("move-away").style["margin-left"] = `${percentage}%`;
    changeColor("move-away");
}

function textToUpper() {
    let text = document.getElementById("upper-box");
    text.value = text.value.toUpperCase();
    // changeColor("upper-box");
}