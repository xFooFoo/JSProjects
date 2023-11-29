// JavaScript source code
function palindrome(str) {
    let formattedString = "";
    for (let i = 0; i < str.length; i++)
    {
        const charCode = str.charCodeAt(i)
        //console.log(str[i]);
        //console.log(charCode);
        //A-Za-z0-9
        if ((97 <= charCode && charCode <= 122) ||
            (65 <= charCode && charCode <= 90) ||
            (48 <= charCode && charCode <= 57))
        {
            formattedString += str[i].toLowerCase();
        }
        else {
            continue;
        }
    }
    //console.log(Math.floor(formattedString.length / 2) - 1);
    console.log(formattedString);
    for (let i = 0; i < Math.ceil(formattedString.length/2); i++)
    {
        //console.log(`${formattedString[i]} ${formattedString[formattedString.length - i - 1]}`);
        if (formattedString[i] != formattedString[formattedString.length - i - 1])
        {
            return false;
        }
    }

    return true;
}

console.log(palindrome("agweaerthuerat"));
console.log(palindrome("agweaerthuerat"));
console.log(palindrome("35qyuq3a5rtyuqa34e5u"));
