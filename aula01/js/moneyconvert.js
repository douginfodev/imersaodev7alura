
function onClickButton(challenge) {
    let valueConvert = document.getElementById("inputMoedas");

    switch (challenge) {
        case "D1":
            //   Funcao desafio 1
            alert("Challenge D1 Clicked");
            break;
        case "D2":
            //   Funcao desafio 2
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

    valueConvert.value = '100';
}

