function loginM() {
    const jmeno = document.getElementById("username").value;
    const heslo = document.getElementById("password").value;

    const huh = {
        "pepik": "ahoj1",
        "karel": "kočka3",
       "jana" :  "pizza2",
       "eva"   :  "12345" };

    if (huh.hasOwnProperty(jmeno) && huh[jmeno] === heslo) {
       
        alert("uspěšně přihlášen");
        window.location.href = 'http://127.0.0.1:5500/hodina4/vsechny%20slozky/css/lol.html';

       
    
        }

       
      
    else{
       
        alert("neplatný jméno nebo heslo");
    }
}
