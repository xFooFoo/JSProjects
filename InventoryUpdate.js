/*
Coding Interview Prep
Algorithms
Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    const output = {};

    // add all new items first then add on the original items in arr1
    for (const item of arr2) {
        output[item[1]] = item[0];
    }

    for (const item of arr1) {
        if ((item[1] in output)) {
            output[item[1]] += item[0];
        } else {
            output[item[1]] = item[0];
        }
    }
    console.log(Object.entries(output)
    .sort()
    .map(([key, value]) => [value, key]));

    return Object.entries(output)
    .sort()
    .map(([key, value]) => [value, key]);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);