/*
No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {
  const characters = str.split('');
  const n = characters.length;
  // Recursively permutate subsequent letters
  return permutate(characters, 0, n-1);
}

function permutate(characters, l, r) {
  let count = 0;
  if (l === r) {
    if (!(hasRepeats(characters))) {
      //console.log(`${characters}`);
      return count + 1;
    }
  }
  else {
    for (let i = l; i <= r; i++) {
      characters = swap(characters, l, i);
      count += permutate(characters, l + 1, r);
      // Back Tracking
      characters = swap(characters, l, i);
    }
  }
  return count;
}

function swap(characters, index1, index2) {
  const tempChar = characters[index1];
  // Perform swap
  characters[index1] = characters[index2];
  characters[index2] = tempChar;
  return characters;
};

function hasRepeats(characters) {
  let prevChar = '';
  for (const char of characters) {
    if (char === prevChar){
      return true;
    }
    prevChar = char;
  };
  return false;
};

permAlone("aab");

