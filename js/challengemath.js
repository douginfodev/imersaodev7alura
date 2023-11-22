function convertMultiply(moneyValue1, moneyValue2) {
    let results = (moneyValue1 * moneyValue2);
    return results;
}

function convertDivision(moneyValue1, moneyValue2) {
    let results = (moneyValue1 / moneyValue2);
    return results;
}

function changeDecimalPlaces(value) {
    let valueCheck = value;//.replace(".",",");

    let results = valueCheck+'00';

    if (valueCheck > 0 && valueCheck < 10)
      results = valueCheck+'0';

    return results.replace(".",",");
}




//Change currency symbol
function currencySymbol(money1, money2) {
    let symbol = money1 + money2;

    switch (symbol) {
        case "12":
        case "32":     //Function Challenge 1
            return 'E$';
        case "13":
        case "23":
            return 'R$';
        case "21":
        case "31":
            return 'US$';
    }
}

//Change currency symbol of input text
function currencyLabel(option) {
    let label = document.getElementById('currency');

    switch (option) {
        case "1":
            label.innerHTML = 'US$';
            break;
        case "2":
            label.innerHTML = 'E$';
            break;
        case "3":
            label.innerHTML = 'R$';
            break;
    }
}