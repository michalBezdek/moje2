function myFunction() {
    var variable1; //Nebudeme pouzivat
    let variable2; //budeme pouzivat
    const variable3 = 3; // nemohu pote zmenit
    variable4 = "ahoj" // string
    variable5 = 5 // number/int/integer
    variable6 = true // boolean

    const userFirstName = document.getElementById("firstName").value
    const userLastName = document.getElementById("lastName").value


    const userFullName = userFirstName + " " + userLastName
    document.getElementById("fullName").value = userFullName

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