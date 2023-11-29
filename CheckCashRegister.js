function checkCashRegister(price, cash, cid) {
    let originalCid = cid.slice().map(innerArray => innerArray.slice());
    let totalChange = new Map();
    let currencyValues =
    {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let status;
    let change = cash.toFixed(2) - price.toFixed(2);

    if (change < 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    else if (change == 0) {
        return { status: "CLOSED", change: cid };
    }
    else {
        for (let i = cid.length - 1; i >= 0; i--) {
            let currency = cid[i][0];
            let currencyValue = parseFloat(currencyValues[currency].toFixed(2));

            while (parseFloat(change.toFixed(2)) >= currencyValue &&
                parseFloat(cid[i][1].toFixed(2)) >= currencyValue) {
                change -= currencyValue.toFixed(2);
                cid[i][1] -= currencyValue.toFixed(2);

                if (totalChange.has(currency)) {
                    totalChange.set(currency, totalChange.get(currency) + currencyValue);
                }
                else {
                    totalChange.set(currency, currencyValue);
                }
            }
        }
    }



    let output = Array.from(totalChange.entries());
    let cidValue = 0;
    for (let [key, value] of cid) {
        cidValue += value;
    } 
    
    //console.log(change.toFixed(2));
    //console.log(Math.Sum(totalChange.values()));
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    else if (change == cidValue) {
        //console.log(originalCid.toString());
        return { status: "CLOSED", change: originalCid };
    }
    else {
        //console.log(output.toString());
        return { status: "OPEN", change: output };
    }
    //return { status: "OPEN", change: output }
}

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])