const co2 = document.querySelector('.co2Text')
const amountCo2 = document.getElementsByTagName('HTML')[0].outerHTML.length*0.03
const water = document.querySelector('.waterText')
const amountWater = document.getElementsByTagName('HTML')[0].outerHTML.length*1.953125
console.log(document.getElementsByTagName('HTML')[0].outerHTML.length + "Kb")
console.log(document.getElementsByTagName('HTML')[0].outerHTML.length*0.003 + "g de CO2")
console.log(document.getElementsByTagName('HTML')[0].outerHTML.length*1.953125 + "cl d'eau")


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
    water.innerHTML = Math.floor(totalWater/100)*0.01 + "L<br>d'eau"
    console.log(totalWater)
    console.log(parseInt(localStorage.getItem('water'))/10)
    console.log(Math.floor(totalWater/100)*0.01)
}

setAmount()


class Bars {
    constructor(_element) {
        this.element = _element
        this.setBars()
    }


    setBars() {
        const bar1Element = this.element.querySelector('.bar1')
        const fill1Element = bar1Element.querySelector('.bar1Fill')
        const bar1Knob = document.querySelector('.bar1Knob')
        const bar2Element = this.element.querySelector('.bar2')
        const fill2Element = bar2Element.querySelector('.bar2Fill')
        const bar2Knob = document.querySelector('.bar2Knob')
        const bar3Element = this.element.querySelector('.bar3')
        const fill3Element = bar3Element.querySelector('.bar3Fill')
        const bar3Knob = document.querySelector('.bar3Knob')

        //this.variable.addEventListener('timeupdate', () => {
          //  const ratio = this.audioElement.currentTime / this.audioElement.duration
       //     fill1Element.style.transform = `scaleX(${ratio})`
        //    bar1Knob.style.left = Math.floor(ratio) + "px"
        //    fill2Element.style.transform = `scaleX(${ratio})`
        //    bar2Knob.style.left = Math.floor(ratio) + "px"
        //    fill3Element.style.transform = `scaleX(${ratio})`
        //    bar3Knob.style.left = Math.floor(ratio) + "px"
        //})


    }

}

const bars = new Bars(document.querySelector('.bars'))