const tableauTranche2020 = [ 
    {max: 10064, taux: 1 , tranche: 0},
    {max: 25659, taux: .11, tranche: 15595},
    {max: 73369, taux: .30, tranche: 47710},
    {max: 157806, taux: .41, tranche: 84437},
    {max: Infinity, taux: .45, tranche: Infinity},
]
let SituationFamilialActuelle = ""
let nbDeParts = 0
let salaireNet = 0
let salaireBrut = 0
let nbEnfants = 0
const SituationFamilial = document.querySelectorAll(".check-box")
const SituationFamilialEnfants = document.querySelector("#enfants-select")

// boucle dans les checkbox pour récupérer la valeur de SituationFamilialActuelle

for(i = 0; i < SituationFamilial.length; i++) {
    SituationFamilial[i].addEventListener("input", function(e) {
        SituationFamilialActuelle = e.target.id
    })
}

class CalculAvecNet  {
    constructor(nbDeParts, salaireNet) {
            this.nbDeParts = nbDeParts
            this.salaireNet = salaireNet
    }
}

const calculerNbDePartsEnfants = () => {
   if (SituationFamilialEnfants.value <= 2) {
        nbDeParts += SituationFamilialEnfants.value/2
    } else if (SituationFamilialEnfants.value > 2) {
        nbDeParts += SituationFamilialEnfants.value - 1
    }
}

const calculerNbDePartsTotal = () => {
    if(SituationFamilialActuelle == "celib") {
        nbDeParts = 1
        calculerNbDePartsEnfants()
    } else if (SituationFamilialActuelle == "marie") {
        nbDeParts = 2
        calculerNbDePartsEnfants()
    }

    console.log(nbDeParts);
}

const caculerNet = () => {
    // const objetx = new CalculAvecNet(nbDeParts, 32000)
    
}

// for ( i = 0 ; i < tableauTranche2020.length ; i++ ) {
//         console.log(tableauTranche2020[i].tranche);
//         if(75000 < tableauTranche2020[i].max) {
//             console.log(75000 - tableauTranche2020[i - 1].max);
//         }
        

//     }
// tableauTranche2020.forEach(el => {
//     let test = 32000
//     if (test > el.max && test > 10064) {
//         test -= el.max
//         console.log( test);
//     } else if (test < el.max) {
        
//     }

   
// });


let test = 32000
let impot = 0
let impot2 = 0
for(const i in tableauTranche2020) {

    if(test > tableauTranche2020[i].max) {
        impot += tableauTranche2020[i].tranche * tableauTranche2020[i].taux
        
    } 
    

}    

for(const i in tableauTranche2020) {
    if(tableauTranche2020[i].max < test) {
        tableauTranche2020.shift()
        impot2 += (test - tableauTranche2020[i].max) * tableauTranche2020[1].taux
    }
}

console.log(impot);
console.log(impot2);
