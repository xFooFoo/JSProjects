// JavaScript source code
function convertToRoman(num) {
    let output = "";
    let romanNumerals = new Map([
        ['1000', 'M'],
        ['900', 'CM'],
        ['500', 'D'],
        ['400', 'CD'],
        ['100', 'C'],
        ['90', 'XC'],
        ['50', 'L'],
        ['40', 'XL'],
        ['10', 'X'],
        ['9', 'IX'],
        ['5', 'V'],
        ['4', 'IV'],
        ['1', 'I']
    ]);

    for (let [key, value] of romanNumerals) {
        //console.log(`${key}`);
        while (num >= key) {
            //console.log(`${num} ${key} ${romanNumerals[key]}`);
            output += value;
            num -= key;
        }
    }
    return output;
}

console.log(convertToRoman(36));