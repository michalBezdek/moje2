function getName() {
    const iUserName = document.getElementById("username").value

    console.log(iUserName)
}
function addition() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value);

    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value);

    const additionResault = inputFirstNumber + inputSecondNumber;
    document.getElementById("result").value = additionResault;

}
function subtraction() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)
    const additionResault = inputFirstNumber - inputSecondNumber

    document.getElementById("result").value = additionResault
}

function deleni() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value);

    const additionResault = inputFirstNumber / inputSecondNumber
    document.getElementById("result").value = additionResault
}
function nasobeni() {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value);
    const additionResault = inputFirstNumber * inputSecondNumber
    document.getElementById("result").value = additionResault
}

function checkResult() {

    const inputNumber = parseInt(document.getElementById("numbertocheck").value)
    if (inputNumber > 10) {
        console.log("VĚTŠÍ NEŽ 10")

    } else if (inputNumber < 10) {
    } console.log("MENŠÍ NEŽ 10")

}

const trida =[];
trida[0]= "michal";
 "adam"
 "hozna";
"fanda";
 "tony"
  "petr";
 "jachym";
 "dominik";
 "ruda";
"petr";
 "kristian";
 "martin";
 "natalie";
 "klara";
 "tomas";
 "franta";
 "petr";
"lukas";

function forLoop() {
    for(let i = 0; i < trida.lenght; i++) {

     console.log(trida[i])
    }
}