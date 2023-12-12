
function Forloop() {
let text = " "
for (let i = 1; i < 251; i++) {
    text +=  i + ",";
}
console.log(text);
}

function ONEtwo() {
let zprava = " "
for (let i = 15; i < 151; i++) {
    zprava += i + "<br>"
}
document.getElementById("pt").innerHTML = zprava;
}

function Twoone() {
    let dopis = " "
    for (let i = 1; i < 101; i++) {
    if (i % 2 === 0)
        dopis += i + "<br>"    }
     
        document.getElementById("tt").innerHTML = dopis;
}
function Threetwo() {
sluvko = ""
const inputNumber = parseInt(document.getElementById("ok").value);
for (let i = 0; i <= inputNumber; i++){
  
    sluvko += i + "<br>"
}
document.getElementById("tp").innerHTML = sluvko;
}

function Twothree() {
    let perk = "";
    const inputNumber = parseInt(document.getElementById("Ok").value);
   
    for (let i = 1; i <= inputNumber; i++) {
      if ((inputNumber % 2 === 0 && i % 2 === 0) || (inputNumber % 2 !== 0 && i % 3 === 0)) {
        perk +=  + i +"<br>";
      }
    }
   
   
    document.getElementById("pk").innerHTML = perk;
  }