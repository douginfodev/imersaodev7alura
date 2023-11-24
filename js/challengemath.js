function convertMultiply(moneyValue1, moneyValue2) {
    let results = (moneyValue1 * moneyValue2);
    return results;
}

function convertDivision(moneyValue1, moneyValue2) {
    let results = (moneyValue1 / moneyValue2);
    return results;
}

function changeDecimalPlaces(value) {
    let valueCheck = value;//.replace(".",","); var a = 1.2345; a.toString().split('.')[1].length

    let results = valueCheck + '00';

    if (valueCheck > 0 && valueCheck < 10)
        results = valueCheck + '0';

    return results.replace(".", ",");
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

//Change temperature symbol
function temperatureSymbol(temp1, temp2) {
    let temperature = temp1 + temp2;

    //1 - celsius / 2 - fahre / 3 - Kelvin
    switch (temperature) {
        case "12": //Celsius -> Fahre
            return '° F';
        case "13":  //Celsius -> Kelvin
            return '° K';
        case "21": //Fahre - Celsius
            return '° C';
        case "23": //Fahre - Kelvin
            return '° K';
    }
}

//Change currency symbol of Label
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

//Change bitcoin brand
function bitcoinBrand(option) {
    let imageBrand = document.getElementById('bitcoinbrand');

    switch (option) {
        case "1":
            imageBrand.src = '../aula01/images/AD.png';
            break;
        case "2":
            imageBrand.src = '../aula01/images/btn.png';
            break;
        case "3":
            imageBrand.src = '../aula01/images/eth.png';
            break;
        case "4":
            imageBrand.src = '../aula01/images/sol.png';
            break;
        case "5":
            imageBrand.src = '../aula01/images/trx.png';
            break;
        case "6":
            imageBrand.src = '../aula01/images/usdt.png';
            break;
    }
}