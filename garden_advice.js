// Garden Advice App
// Provides gardening advice based on the season and plant type

// Function gives advice based on the season
function getSeasonAdvice(season) {
	// Checks if its summer
	if (season === "summer") {
		return "Water your plants regularly and provide some shade.\n";
		//Checks if its winter
	} else if (season === "winter") {
		return "Protect your plants from frost with covers.\n";
		// If season is not summer or winter, it will return this message
	} else {
		return "No advice for this season.\n";
	}
}

//Function gives advice based on plant type
function getPlantTypeAdvice(plantType) {
	// Check if its a flower
	if (plantType === "flower") {
		return "Use fertilizer to encourage blooms.";
		// Check if its a vegetable
	} else if (plantType === "vegetable") {
		return "Keep an eye out for pests!";
		// If plant type is not flower or vegetable, it will return this message
	} else {
		return "No advice for this type of plant.";
	}
}

//Ask user what season it is
let season = prompt("What season is it? (summer, winter, spring, fall)?");
// Ask the user what type of plant they have
let plantType = prompt(
	"What plant type do you have?(flower, vegetable, etc.)?",
);

// Combine the advice from both functions
let advice = getSeasonAdvice(season) + getPlantTypeAdvice(plantType);

// Display advice
console.log(advice);
