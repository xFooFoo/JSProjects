/*
This script can be run on the console on twitch streams to attempt to collect the free bonus channel points every 15 seconds
class="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr"
*/

function collectChannelPoints() {
	const buttons = document.querySelectorAll('button.ScCoreButtonLabel'); // Select all button elements
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

const intervalId = setInterval(collectChannelPoints, 15000); //every 15s

// if you want to stop the interval without refreshing the webpage
// clearInterval(intervalId);