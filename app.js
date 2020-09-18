const tableauTranche2020 = [ 
    {max: 10064, taux: 0},
    {max: 25659, taux: 11},
    {max: 73369, taux: 30},
    {max: 157806, taux: 41},
    {max: Infinity, taux: 45},
]
let SituationFamilialActuelle = ""
const SituationFamilial = document.querySelectorAll(".check-box")

// boucle dans les checkbox pour récupérer la valeur de SituationFamilialActuelle

for(i = 0; i < SituationFamilial.length; i++) {
    SituationFamilial[i].addEventListener("input", function(e) {
        SituationFamilialActuelle = e.target.id
    })
}

