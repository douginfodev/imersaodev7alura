// Initial money Values
const dolar_real = 5.10;
const euro_real = 6.00;
const dolar_euro = 1.00;


//console.log(resultConverts);

//*** Functions Money Converts *****






//Onclick Button Convert
function challengeOne(value) {
    let result = convertMultiply(dolar_real, value).toString(); //Print result in inputText
    
    //Verify radio checked
    let money1 = document.querySelector('input[name="rdmoney1"]:checked').value;
    let money2 = document.querySelector('input[name="rdmoney2"]:checked').value;
   
    //Verify if different currencies
    if (money1 === money2){
      alert('select different currencies');
      return '0';
    }  

    return currencySymbol(money1,money2)+' '+result; 
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

