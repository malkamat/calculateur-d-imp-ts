//déclarations des variables globals
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
const resultat = document.querySelector(".resultat")
const modalButton = document.querySelector(".modal-btn")
const modalBg = document.querySelector(".modal-bg")


// boucle dans les checkbox pour récupérer la valeur de SituationFamilialActuelle

for (i = 0; i < SituationFamilial.length; i++) {
    SituationFamilial[i].addEventListener("input", function (e) {
        SituationFamilialActuelle = e.target.id
    })
}

// parse d'une chaine de caratcte à un nobre et récuperation de la valeur du salaire net 

salaireBrutInput.addEventListener("input", (e) => {
    salaireBrut = parseFloat(e.target.value)
})


// fonction pour récupérer le nombre d'enfants et cacuer le nombre de parts qui en découle
const calculerNbDePartsEnfants = () => {
    if (SituationFamilialEnfants.value <= 2) {
        nbDeParts += SituationFamilialEnfants.value / 2
    } else if (SituationFamilialEnfants.value > 2) {
        nbDeParts += SituationFamilialEnfants.value - 1
    }
}
// Calculs du nombre de parts adultes (couple ou célibataire en fonction de ce que l'utilisateur à séléctionner dans les checkbox)
const calculerNbDePartsAdulte = () => {
    if (SituationFamilialActuelle == "celib") {
        nbDeParts = 1

    } else if (SituationFamilialActuelle == "marie") {
        nbDeParts = 2

    }


}


// fonction pour calculer le salaire net d'impot depuis le salaire net 

const caculerNet = () => {
    calculerNbDePartsAdulte()
    calculerNbDePartsEnfants()
    if (nbDeParts !== 0) {
        salaireBrut = salaireBrut / nbDeParts
        for (const i in tableauTranche2020) {

            if (salaireBrut > tableauTranche2020[i].max) {
                impot += tableauTranche2020[i].tranche * tableauTranche2020[i].taux

            }

        }

        for (const i in tableauTranche2020) {
            if (tableauTranche2020[i].max > salaireBrut) {
                impot2 += (salaireBrut - tableauTranche2020[i - 1].max) * tableauTranche2020[i].taux
                break

            }

        }
    }

}


boutonCalcul.addEventListener("click", () => {
    if (salaireBrut !== 0) {
        caculerNet()
        salaireBrutInput.value = null
        resultat.innerHTML = `Vos revenus net d'impôts s'élévent à ${Math.floor((salaireBrut * nbDeParts) - ((impot2 + impot) * nbDeParts))} €<br><br><button class="modal-btn">voir plus de détails</button>`
        salaireBrut = " "
        impot = 0
        impot2 = 0
        nbDeParts = 0
    }
    // si l'utilisateur clique sur le bouton plus d'info on ouvre la boite modal
   
    modalButton.addEventListener("click", (e) => {
        modalBg.classList.add("bg-active")
        console.log(e)
    })
})




window.addEventListener("click", (e) => {
    console.log(e);
})