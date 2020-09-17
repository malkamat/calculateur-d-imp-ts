const revenuesNet = document.querySelector("#revenues-net")
let revenuesBrut = 0

revenuesNet.addEventListener("input", calculer => {
    if(isNaN(revenuesNet.value)) {
        console.log("erreur")
    } else if (revenuesNet.value <= 10064) {
        revenuesBrut = revenuesNet.value
      
    } else if (revenuesNet.value > 10064 && revenuesNet.value <= 25659) {
        revenuesBrut = revenuesNet.value - ((revenuesNet.value/100)*11)
   
    } else if (revenuesNet.value > 25659 && revenuesNet.value <= 73369) {
        revenuesBrut = revenuesNet.value - ((revenuesNet.value/100)*30)
     
    } else if (revenuesNet.value > 74517 && revenuesNet.value <= 157806) {
        revenuesBrut = revenuesNet.value - ((revenuesNet.value/100)*41)
     
    }else{
        revenuesBrut = revenuesNet.value - ((revenuesNet.value/100)*45)

    }  
    console.log(Math.floor(revenuesBrut))
})