const tableauTranche2020 = [{
        max: 10064,
        taux: 1,
        tranche: 0
    },
    {
        max: 25659,
        taux: .11,
        tranche: 15595
    },
    {
        max: 73369,
        taux: .30,
        tranche: 47710
    },
    {
        max: 157806,
        taux: .41,
        tranche: 84437
    },
    {
        max: Infinity,
        taux: .45,
        tranche: Infinity
    },
]
let SituationFamilialActuelle = ""
let nbDeParts = 0
let salaireNet = 0
let salaireBrut = 0
let nbEnfants = 0
let impot = 0
let impot2 = 0
const SituationFamilial = document.querySelectorAll(".check-box")
const SituationFamilialEnfants = document.querySelector("#enfants-select")
const salaireBrutInput = document.querySelector("#salaire-brut")
const salaireNetInput = document.querySelector("#salaire-net")
const boutonCalcul = document.querySelector(".bouton-calculer")

// boucle dans les checkbox pour récupérer la valeur de SituationFamilialActuelle

for (i = 0; i < SituationFamilial.length; i++) {
    SituationFamilial[i].addEventListener("input", function (e) {
        SituationFamilialActuelle = e.target.id
    })
}

salaireBrutInput.addEventListener("input", (e) => {

    salaireBrut =  parseFloat(e.target.value)
})



const calculerNbDePartsEnfants = () => {
    if (SituationFamilialEnfants.value <= 2) {
        nbDeParts += SituationFamilialEnfants.value / 2
    } else if (SituationFamilialEnfants.value > 2) {
        nbDeParts += SituationFamilialEnfants.value - 1
    }
}

const calculerNbDePartsTotal = () => {
    if (SituationFamilialActuelle == "celib") {
        nbDeParts = 1
        calculerNbDePartsEnfants()
    } else if (SituationFamilialActuelle == "marie") {
        nbDeParts = 2
        calculerNbDePartsEnfants()
    }

    console.log(nbDeParts);
}


const caculerNet = () => {
    calculerNbDePartsEnfants()
    calculerNbDePartsTotal()
     salaireBrut = salaireBrut/nbDeParts
    for(const i in tableauTranche2020) {

        if(salaireBrut > tableauTranche2020[i].max) {
            impot += tableauTranche2020[i].tranche * tableauTranche2020[i].taux
    
        } 
    
    }    
    
    for (const i in tableauTranche2020) {
        if (tableauTranche2020[i].max > salaireBrut) {
                    impot2 += (salaireBrut - tableauTranche2020[i - 1].max) * tableauTranche2020[i].taux
    
           break
           
        } 
        
    }
console.log((impot2 + impot) * nbDeParts)


}





boutonCalcul.addEventListener("click", () => {
    if(salaireBrut !== 0) {
        caculerNet()
        salaireBrutInput.value = 0
       
    }

})