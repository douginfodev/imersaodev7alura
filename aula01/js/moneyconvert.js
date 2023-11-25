//Challenge #1 - Initial currencies values
const dolar_real = 5.05;
const euro_real = 5.34;
const dolar_euro = 0.92;

//Challenge #2 - Bitcoins to real values
const ada_real = 1.87;
const btc_real = 183002.58;
const eth_real = 9567.37;
const sol_real = 283.50;
const trx_real = 0.50;
const usdt_real = 4.91;

//Challenge #4 - Light Year values
const ligthyear_km = 9.048;

//*** Functions Money Converts *****
//#1 - Challenge One Function
function challengeOne(value) {
    let result = 0;

    //Verify radio checked
    let money1 = document.querySelector('input[name="rdmoney1"]:checked').value;
    let money2 = document.querySelector('input[name="rdmoney2"]:checked').value;

    //Verify if different currencies
    if (money1 === money2) {
        alert('select different currencies');
        return '0';
    } else {

        let currencyselect = (money1 + '' + money2);

        if (currencyselect == '12' || currencyselect == '21')
            result = convertMultiply(dolar_euro, value).toString(); //Print result in inputText

        if (currencyselect == '13' || currencyselect == '31')
            result = convertMultiply(dolar_real, value).toString(); //Print result in inputText

        if (currencyselect == '23' || currencyselect == '32')
            result = convertMultiply(euro_real, value).toString(); //Print result in inputText

    }

    return currencySymbol(money1, money2) + ' ' + changeDecimalPlaces(result);
}

//#2 - Challenge Two Function
function challengeTwo(value) {
    let result = 0;
    let bitcoinDefault = 0;

    //Verify radio checked
    let bitcoin = document.querySelector('input[name="rdbitcoin"]:checked').value;


    //Verify if different currencies
    if (bitcoin === 0) {
        alert('Selecione uma criptomoeda');
        return '0';
    } else {

        let bitcoinselect = bitcoin;


        switch (bitcoinselect) {
            case '1':
                bitcoinDefault = ada_real;
                break;
            case '2':
                bitcoinDefault = btc_real;
                break;
            case '3':
                bitcoinDefault = eth_real;
                break;
            case '4':
                bitcoinDefault = sol_real;
                break;
            case '5':
                bitcoinDefault = trx_real;
                break;
            case '6':
                bitcoinDefault = usdt_real;
                break;
        }
    }

    result = convertDivision(bitcoinDefault, value).toString(); //Print result in inputText

    return changeDecimalPlaces(result);
}

//Challenge Three Function
function challengeThree(value) {
    let result = 0;

    //Verify radio checked
    let temperature1 = document.querySelector('input[name="rdtemperature1"]:checked').value;
    let temperature2 = document.querySelector('input[name="rdtemperature2"]:checked').value;

    //Verify if different currencies
    if (temperature1 === temperature2) {
        alert('Select different temperatures');
        return '0';
    } else {

        let temperatureSelected = (temperature1 + '' + temperature2);
        let resultfixed = 0;

        switch (temperatureSelected) {
            case '12':
                resultfixed = convertCelsiusFahre(value);
                result = resultfixed.toFixed(2).replace('.', ',');
                break;
            case '13':
                resultfixed = convertCelsiusKelvin(value);
                result = resultfixed.toFixed(2).replace('.', ',');
                break;
            case '21':
                resultfixed = convertFahreCelsius(value);
                result = resultfixed.toFixed(2).replace('.', ',');
                break;
            case '23':
                resultfixed = convertFahreKelvin(value);
                result = resultfixed.toFixed(2).replace('.', ',');
                break;
            case '31':
                resultfixed = convertKelvinCelsius(value);
                result = resultfixed.toFixed(2).replace('.', ',');
                break;
            case '32':
                resultfixed = convertKelvinFahre(value);
                result = resultfixed.toFixed(2).replace('.', ',');
                break;
        }

        return result + temperatureSymbol(temperature1, temperature2);
    }
}

//Challenge Three Function
function challengeFour(value) {
    let result = 0;
    let ligthyear = value;

    if (ligthyear === '') {
        alert('Enter de value of Light Year');
        return '0';
    } else {
        result = convertMultiply(ligthyear, ligthyear_km);
        return result;
    }
}


//Onclick Button Convert
function onClickButton(challenge) {
    let result = 0;
    let nameChallenge = '0';

    switch (challenge) {
        case "D1": //Function Challenge 1
            const valueConvert = document.getElementById("inputMoedas");
            nameChallenge = 'conversion';
            result = challengeOne(valueConvert.value);
            break;
        case "D2":
            const bitcoinConvert = document.getElementById("inputBitcoins");
            nameChallenge = 'bitconversion';
            result = challengeTwo(bitcoinConvert.value);
            break;
        case "D3":
            const temperatureConvert = document.getElementById("inputTemperature");
            nameChallenge = 'tempconversion';
            result = challengeThree(temperatureConvert.value);
            break;
        case "D4":
            const lightyearConvert = document.getElementById("inputLightYear");
            nameChallenge = 'lightconversion';
            result = challengeFour(lightyearConvert.value) + ' KM';
            break;
        default:
            alert("Challenge is not found...");
    }

    document.getElementById(nameChallenge).innerHTML = result;

}