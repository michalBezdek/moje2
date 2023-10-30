function yearChecker() {
   const iYear = parseFloat(document.getElementById("vek").value)

   if (iYear >= 18) {
      console.log("zletilý");
   }
   else if (iYear < 18) {
      console.log("nezletilý");
   }

}

function yearChecker2() {
   const irok = parseFloat(document.getElementById("rok").value)

   if (irok <= 2005) {
      console.log("zletilý");
   }
   else if (irok > 2005) {
      console.log("nezletilý");
   }

}

function yearChecker3() {
   const iOvereni = parseFloat(document.getElementById("oboje").value)



   if (iOvereni <= 2005 && iOvereni >= 18) {
      document.getElementById("result").textContent = "zletilý"

   } else {
      document.getElementById("result").textContent = "nezletilý"
   }

}