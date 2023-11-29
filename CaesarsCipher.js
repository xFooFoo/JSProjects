// JavaScript source code
function rot13(output) {
	const SHIFT = 13;
	let shiftedOutput = "";
	for (let i = 0; i < output.length; i++) {
		let currCharCode = output.charCodeAt(i);
		//console.log(currCharCode);
		if (currCharCode >= 65 && currCharCode <= 90) {
			let newCharCode = (currCharCode - 65 + SHIFT) % 26 + 65;
			shiftedOutput += String.fromCharCode(newCharCode);
		}
		else {
			shiftedOutput += String.fromCharCode(currCharCode)
		}
	}
	return shiftedOutput;
}

console.log(rot13("SERR PBQR PNZC")); 