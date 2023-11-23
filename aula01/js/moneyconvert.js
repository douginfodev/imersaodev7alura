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

//*** Functions Money Converts *****


//Onclick Button Convert
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

//Onclick Button Convert
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
            //   Funcao desafio 3
            break;
        case "D4":
            //   Funcao desafio 4
            break;
        default:
            alert("Challenge is not found...");
    }

    document.getElementById(nameChallenge).innerHTML = result;

}

