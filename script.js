function sumN() {
    let n = parseInt(document.getElementById("priN").value);
    let sum = 0;

    if (Number.isInteger(n) && n >= 1) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) { 
                sum += i;
            }
        }
        document.getElementById("result").innerHTML =  n + ".-." + sum;
    } else {
        document.getElementById("result").innerHTML = ".-.";
    }
}
