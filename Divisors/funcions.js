function esparell(){
    // Llegim el que han introduit a les variables
    var a = document.getElementById('numero1').value;
    //Passam el text d'a a números (Integer - enter)
    a = parseInt(a);

    if (a%2==0){
        document.getElementById('resposta1Verda').hidden = false;
        document.getElementById('resposta1Vermella').hidden = true;

    }else{
        document.getElementById('resposta1Vermella').hidden = false;
        document.getElementById('resposta1Verda').hidden = true;
    }

}
function divisors() {
    document.getElementById('divisors1blau').hidden = true;
    document.getElementById('divisors1vermell').hidden = true;
    document.getElementById('divisors1verd').hidden = true;
    // Llegim el que han introduit a les variables
    var a = document.getElementById('numero2').value;
    //Passam el text d'a a números (Integer - enter)
    a = parseInt(a);

    if (a % 2 == 0) {
        document.getElementById('divisors1blau').hidden = false;
    }
    if (a % 3 == 0) {
        document.getElementById('divisors1vermell').hidden = false;
    }
    if (a % 6 == 0) {

        document.getElementById('divisors1verd').hidden = false;
    }
}
function valorsentre() {
    var a = document.getElementById('numero3').value;
    var b = document.getElementById('numero4').value;
    a = parseInt(a);
    b = parseInt(b);
    let text_valors="";
    if(a>b) {

        for (let i = a - 1 ; i > b; i--)
            text_valors += i + " ";
    }
    else{

        for (let i  =a + 1;i < b;i++)
            text_valors += i + " ";

    }


    document.getElementById('valors').innerHTML = text_valors;
    document.getElementById('valors').hidden= false;
}