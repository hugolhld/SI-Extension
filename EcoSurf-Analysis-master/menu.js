document.querySelector('.dev-tool').addEventListener( 'click', () =>{
    alert('Pour utiliser le dev tool, pressez la touche F12 afin d\'accéder au panneau de développeur')
})

const co2 = document.querySelector('.co2Text')
const amountCo2 = document.getElementsByTagName('HTML')[0].outerHTML.length*0.03
const water = document.querySelector('.waterText')
const amountWater = document.getElementsByTagName('HTML')[0].outerHTML.length*1.953125

function setAmount() {



    if (isNaN(localStorage.getItem('co2'))) { 

        totalCo2 = amountCo2
    }

    else {

        totalCo2 = Math.floor(parseFloat(localStorage.getItem('co2')) ) + amountCo2
    }

    if (isNaN(localStorage.getItem('water'))) { 

        totalWater = amountWater
    }

    else {

        totalWater = Math.floor(parseFloat(localStorage.getItem('water'))) + amountWater
    }

    localStorage.setItem('co2', totalCo2);
    co2.innerHTML = parseInt(localStorage.getItem('co2'))/10 + "g<br>de CO2"
    console.log(totalCo2)
    console.log(parseInt(localStorage.getItem('co2'))/10)
    localStorage.setItem('water', totalWater);
    water.innerHTML = Math.floor(totalWater/10)*0.01 + "cl<br>d'eau"
    console.log(totalWater)
    console.log(parseInt(localStorage.getItem('water'))/10)
    console.log(Math.floor(totalWater/100)*0.01)

    const kmDiv = document.querySelector('.co2-description')
    let kmDescription = Math.floor(parseInt(localStorage.getItem('co2'))/10 / 120)
    kmDiv.innerHTML = kmDescription
    const waterDiv = document.querySelector('.water-description')
    let waterDescription = Math.floor((Math.floor(totalWater/10)*0.01)*1.5) 
    waterDiv.innerHTML = waterDescription
    
}


setAmount()

