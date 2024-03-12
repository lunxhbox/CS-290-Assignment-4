// Prompt for Favorite Song
var favoriteSong = prompt("What's your favorite Florence and the Machine song?");

// Band Details
var leadSinger = "Florence Welch";
var popularSongs = ["Dog Days Are Over", "Shake It Out", "You've Got the Love"];
var albums = ["Lungs", "Ceremonials", "How Big, How Blue, How Beautiful", "High as Hope"];

// Display Popular Songs
console.log("Popular songs by Florence and the Machine include: " + popularSongs.join(", "));

// Function to Display Band Information
function displayBandInfo() {
    console.log("Florence Welch is the lead singer of Florence and the Machine.");
    console.log("Popular albums include: " + albums.join(", "));
}

// Event Listener for More Info Button
document.getElementById("moreInfoButton").addEventListener("click", displayBandInfo);
