/*
This script can be run on the console on CSGO500 to attempt to collect the rain every 15 seconds
*/

function collectRain() {
	const buttons = document.querySelectorAll('input[type="button"].base-button.is-pink'); // Select all button elements
	const targetButton = Array.from(buttons).find(button => button.textContent.trim() === 'Join Rain');

	if (targetButton) {
	    console.log(`Button found: ${Date.now()}`);
	    targetButton.click();
	    console.log(`Button clicked: ${Date.now()}`);
	} else {
	    console.log(`Button not found: ${Date.now()}`);
	    // Prevents recursion by exiting the function if the button isn't found
	    return;
	}
}

const intervalId = setInterval(collectRain, 15000); //every 15s

// if you want to stop the interval without refreshing the webpage
// clearInterval(intervalId);