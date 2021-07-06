//50% korting tussen de 18 en ouder en 25 jaar en jonger.
const age = 18;

if (age >=18 && age <=25) {
    console.log("Je krijgt 50% korting!");
}else {
    console.log("je krijgt 25% korting");
}

//Sarah en Bram krijgen gratis bier

const firstName = "Sarah" || "Bram";

if (firstName=== "Sarah" || "Bram") {
    console.log("Jij krijgt een gratis biertje");
}

//Bestel voor 25 euro dan gratis bitterballen
//Bestel voor 50 euro dan gratis portie nachos
//Bestel voor 100 euro dan gratis flesje champagne

const totalAmount =101

if (totalAmount >=25) {
    console.log("Gratis bitterballen");
    
}else if (totalAmount >=50) {
    console.log ("Gratis portie nacho's");
    
}else if (totalAmount >=100) { 
    console.log("Gratis flesje champagne");
   
} 

