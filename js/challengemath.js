//***** Challenge 1 - Money Convert *****
function convertMultiply(moneyValue1, moneyValue2) {
    let results = (moneyValue1 * moneyValue2);
    return results;
}

function convertDivision(moneyValue1, moneyValue2) {
    let results = (moneyValue1 / moneyValue2);
    return results;
}

//***** Challenge 3 - Temperature Convert ******
// CELSIUS
function convertCelsiusFahre(celsius) {
    let results = ((celsius * 1.8) + 32);
    return results;
}

function convertCelsiusKelvin(celsius) {
    let results = (celsius + 273.15);
    return results;
}

// FAHRENHEIT
function convertFahreKelvin(fahre) {
    let results = (((fahre - 32) * 0.55555) + 273.15);
    return results; 
}

function convertFahreCelsius(fahre) {
    let results = ((fahre - 32) * 0.55555);
    return results; 
}

// KELVIN
function convertKelvinFahre(kelvin) {
    let results = (((kelvin - 273.15) * 0.55555) + 32);
    return results; 
}

function convertKelvinCelsius(kelvin) {
    let results = (kelvin - 273.15);
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
        case "32":     
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

    //1 - Celsius / 2 - Fahre / 3 - Kelvin
    switch (temperature) {
        case "12": //Celsius -> Fahre
        case "32": //Kelvin -> Fahre
            return '°F';
        case "13": //Celsius -> Kelvin
        case "23": //Fahre -> Kelvin
            return '°K';
        case "21": //Fahre -> Celsius
        case "31": //kelvin -> Celsius
            return '°C';
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

//Change currency symbol of Label
function temperatureLabel(option) {
    let label = document.getElementById('temperature');

    switch (option) {
        case "1":
            label.innerHTML = '°C';
            break;
        case "2":
            label.innerHTML = '°F';
            break;
        case "3":
            label.innerHTML = '°K';
            break;
    }
}

//Change bitcoin brand
function bitcoinBrand(option) {
    let imageBrand = document.getElementById('bitcoinbrand');

    switch (option) {
        case "1":
            imageBrand.src = 'images/AD.png';
            break;
        case "2":
            imageBrand.src = 'images/btn.png';
            break;
        case "3":
            imageBrand.src = 'images/eth.png';
            break;
        case "4":
            imageBrand.src = 'images/sol.png';
            break;
        case "5":
            imageBrand.src = 'images/trx.png';
            break;
        case "6":
            imageBrand.src = 'images/usdt.png';
            break;
    }
}