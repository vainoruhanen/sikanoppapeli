

var pelaajia = 0;
var noppia = 0;

var pisteet1 = 0;
var pisteet2 = 0;
var pisteet3 = 0;
var pisteet4 = 0;
var pisteet5 = 0;
var pisteet6 = 0;
var pisteet7 = 0;
var pisteet8 = 0;

var nimet = [];

var vuoro = 1;

var noppa = 0;
var noppa2 = 0;

var kierroksenPisteet = 0;

var vuoroVaihtuu = false;





var noppaaHeitetaan = false;

function aloitapeli(){
    checkGameMode();
    naytaPeliNakyma();
    piilotaAlkuNakyma();
    paivitaPelaajat();
}


function heita(){

       if(noppia == 2){
         document.getElementById("noppa-kuva2").src = "img/nothing.png";
         }
        document.getElementById("noppa-kuva").src = "img/nothing.png";
        noppaaHeitetaan = true;
        setTimeout(() => {noppaaHeitetaan = false;}, 2000);
        paivitaPisteet();
        noppa = arvo();
        if(noppia == 2){
            noppa2 = arvo();
        }
    

        setTimeout(() => { 
            if(noppa == 1){
            document.getElementById("noppa-kuva").src = "img/dice1.png";
        }
    
        if(noppa == 2){
            document.getElementById("noppa-kuva").src = "img/dice2.png";
        }
    
        if(noppa == 3){
            document.getElementById("noppa-kuva").src = "img/dice3.png";
        }
    
        if(noppa == 4){
            document.getElementById("noppa-kuva").src = "img/dice4.png";
        }
    
        if(noppa == 5){
            document.getElementById("noppa-kuva").src = "img/dice5.png";
        }
    
        if(noppa == 6){
            document.getElementById("noppa-kuva").src = "img/dice6.png";
        }

        if(noppia == 2){
            if(noppa2 == 1){
                document.getElementById("noppa-kuva2").src = "img/dice1.png";
            }
        
            if(noppa2 == 2){
                document.getElementById("noppa-kuva2").src = "img/dice2.png";
            }
        
            if(noppa2 == 3){
                document.getElementById("noppa-kuva2").src = "img/dice3.png";
            }
        
            if(noppa2 == 4){
                document.getElementById("noppa-kuva2").src = "img/dice4.png";
            }
        
            if(noppa2 == 5){
                document.getElementById("noppa-kuva2").src = "img/dice5.png";
            }
        
            if(noppa2 == 6){
                document.getElementById("noppa-kuva2").src = "img/dice6.png";
            }
        }

        }, 1000);
       
        
    
  
}

function pelaa(){
    if(noppia == 1){
        if(noppaaHeitetaan == false){
            heita();
            vuoroVaihtuu = false;
            kierroksenPisteet += noppa;
        
        
            if(noppa == 1){
                kierroksenPisteet = 0;
                setTimeout(() => {
                    vuoroPaattyy();
                }, 1100);
               
            }
              
     
    }
            //vuorot, vuoron vaihto, milloin vuoro päättyy
    }

    if(noppia == 2){
        if(noppaaHeitetaan == false){
            heita();
            vuoroVaihtuu = false;
           
            if(noppa == 1 && noppa2 == 1){
                kierroksenPisteet += 25;
            }
            else if(noppa == 1 || noppa2 == 1){
                kierroksenPisteet = 0;
                setTimeout(() => {
                    vuoroPaattyy();
                }, 1100);
            }else if(noppa == noppa2){
                kierroksenPisteet += (noppa + noppa2) * 2;
            }else{
                kierroksenPisteet += noppa + noppa2;
            }


        }
    }
    
    
}


function lisaapisteet(pisteet){

    if(vuoro == 1){
        pisteet1 += pisteet;
    }
    if(vuoro == 2){
        pisteet2 += pisteet;
    }
    if(vuoro == 3){
        pisteet3 += pisteet;
    }
    if(vuoro == 4){
        pisteet4 += pisteet;
    }
    if(vuoro == 5){
        pisteet5 += pisteet;
    }
    if(vuoro == 6){
        pisteet6 += pisteet;
    }
    if(vuoro == 7){
        pisteet7 += pisteet;
    }
    if(vuoro == 8){
        pisteet8 += pisteet;
    }
    paivitaPisteet();
}




function piilotaAlkuNakyma(){
    document.getElementById("alkunakyma").style.display = "none";
}


function naytaAlkuNakyma(){

}


function piilotaPeliNakyma(){
    document.getElementById("pelinakyma").style.display = "none";
}

function naytaPeliNakyma(){
    document.getElementById("pelinakyma").style.display = "block";
}


function paivitaPisteet(){
    if(pelaajia >= 8){
        document.getElementById("pisteet-8").innerHTML = pisteet8;
    }
    if(pelaajia >= 7){
        document.getElementById("pisteet-7").innerHTML = pisteet7;
    }
    if(pelaajia >= 6){
        document.getElementById("pisteet-6").innerHTML = pisteet6;
    }
    if(pelaajia >= 5){
        document.getElementById("pisteet-5").innerHTML = pisteet5;
    }
    if(pelaajia >= 4){
        document.getElementById("pisteet-4").innerHTML = pisteet4;
    }
    if(pelaajia >= 3){
        document.getElementById("pisteet-3").innerHTML = pisteet3;
    }
    if(pelaajia >= 2){
        document.getElementById("pisteet-2").innerHTML = pisteet2;
    }
    if(pelaajia >= 1){
        document.getElementById("pisteet-1").innerHTML = pisteet1;
    }
   
}


function paivitaPelaajat(){
    for(let i = 1; i <= pelaajia; i++){
        var id = ("pelaaja-" + i);
        var pointsID = ("pisteet-" + i);
        document.getElementById(id).innerHTML = nimet[(i - 1)];

        var pistemaara = 0;
        document.getElementById(pointsID).innerHTML = pistemaara;
        
    }
}

function arvo(){
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1) + min);

}





function checkGameMode(){

   

    var kentta1 = document.getElementById("pelaaja-laatikko-1").value;
    var kentta2 = document.getElementById("pelaaja-laatikko-2").value;
    var kentta3 = document.getElementById("pelaaja-laatikko-3").value;
    var kentta4 = document.getElementById("pelaaja-laatikko-4").value;
    var kentta5 = document.getElementById("pelaaja-laatikko-5").value;
    var kentta6 = document.getElementById("pelaaja-laatikko-6").value;
    var kentta7 = document.getElementById("pelaaja-laatikko-7").value;
    var kentta8 = document.getElementById("pelaaja-laatikko-8").value;
    var taytetytkentat = [kentta1, kentta2, kentta3, kentta4, kentta5, kentta6, kentta7, kentta8];


    for(let i = 0; i < taytetytkentat.length; i++){
        if(taytetytkentat[i] == ""){
            
        }else{
            nimet.push(taytetytkentat[i]);
        }
    }
    pelaajia = nimet.length;



    var noppaValikko = document.getElementById("noppa-valikko");
    var noppaMaara = noppaValikko.options[noppaValikko.selectedIndex].value;
    noppia = noppaMaara;

}





function lopetaHeittaminen(){

    if(noppaaHeitetaan == false && vuoroVaihtuu == false){
        vuoroPaattyy();
       
    }
    
}

function vuoroPaattyy(){
    vuoroVaihtuu = true;
    var vuoroID = "vuoro" + vuoro;
    document.getElementById(vuoroID).innerHTML = "";
    lisaapisteet(kierroksenPisteet); 
    
    edellinen = -1;
    if(pelaajia <= vuoro){
        vuoro = 1;
    }else{
        vuoro++;
    }

   alert("Vuoro vaihtuu pelaajalle " + nimet[vuoro - 1] + "\n ansaitut pisteet: " + kierroksenPisteet);
   kierroksenPisteet = 0;

    vuoroID = "vuoro" + vuoro;
    document.getElementById(vuoroID).innerHTML = "VUORO";
    
    
}