//Challenge #1 - Initial currencies values
const dolar_real = 5.05;
const euro_real = 5.34;
const dolar_euro = 0.92;


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
function onClickButton(challenge) {
    let result = 0;

    switch (challenge) {
        case "D1": //Function Challenge 1
            const valueConvert = document.getElementById("inputMoedas");
            result = challengeOne(valueConvert.value);
            break;
        case "D2":
            //   Funcao desafio 2
            alert("Challenge D1 Clicked");
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

    document.getElementById("conversion").innerHTML = result;

}

