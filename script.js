// Array of tulip image URLs
var tulipImages = [
    "tulips1.jpg",
    "tulips2.jpg",
    "tulips3.jpg",
    "tulips4.jpg",
    // Add more image URLs here
];

var bouquetContainer = document.getElementById("bouquet");

// Function to add tulips to the bouquet
function addTulip() {
    var tulipImage = document.createElement("img");
    tulipImage.src = tulipImages[Math.floor(Math.random() * tulipImages.length)];
    tulipImage.className = "tulip";
    bouquetContainer.appendChild(tulipImage);
}

// Add tulips to the bouquet
for (var i = 0; i < 10; i++) { // You can adjust the number of tulips
    addTulip();
}
 