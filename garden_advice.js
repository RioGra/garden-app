// Refactor the code into functions
// Function to get user input to allow advice
// based on user input for season  and plant type.

// Function to get season advice
function getSeasonAdvice(season) {
	if (season === "summer") {
		return "Water your plants regularly and provide some shade.\n";
	} else if (season === "winter") {
		return "Protect your plants from frost with covers.\n";
	} else {
		return "No advice for this season.\n";
	}
}

//Function to get plant type advice
function getPlantTypeAdvice(plantType) {
	if (plantType === "flower") {
		return "Use fertilizer to encourage blooms.";
	} else if (plantType === "vegetable") {
		return "Keep an eye out for pests!";
	} else {
		return "No advice for this type of plant.";
	}
}

// Get user input
let season = prompt("What season is it? (summer, winter, spring, fall)?");
let plantType = prompt(
	"What plant type do you have?(flower, vegetable, etc.)?",
);

// Get advice from functions
let advice = getSeasonAdvice(season) + getPlantTypeAdvice(plantType);

// Display advice
console.log(advice);

