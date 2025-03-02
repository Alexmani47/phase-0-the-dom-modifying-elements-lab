// Remove the <main> element with id="main"
const main = document.getElementById("main");
if (main) {
    main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to "victory"
newHeader.id = "victory";

// Add text content with your name
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME

// Append it to the body
document.body.appendChild(newHeader);

