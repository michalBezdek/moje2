function bMi() {
    const hmotnostInput = document.getElementById("hmotnostKg");
    const vyskaInput = document.getElementById("vyskaM");

    const hmotnost_v_kg = parseFloat(hmotnostInput.value);
    const výška_v_m = parseFloat(vyskaInput.value);

    const BMI = hmotnost_v_kg / (výška_v_m * výška_v_m);
    document.getElementById("result").innerHTML = " BMI: " + BMI.toFixed(1);

    if (BMI < 18.5) {
        document.getElementById("urceno").innerHTML = "Podváha 😐 ";
    } else if (BMI >= 18.5 && BMI < 25) {
        document.getElementById("urceno").innerHTML = "Normální váha 😀";
    } else if (BMI >= 25 && BMI < 30) {
        document.getElementById("urceno").innerHTML = "Nadváha😐";
    } else if (BMI >= 30) {
        document.getElementById("urceno").innerHTML = "Obezita🙁";
    }
}


