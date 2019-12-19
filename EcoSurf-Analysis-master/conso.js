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


let currenturl1 = document.querySelector(".line1");
let currenturl2 = document.querySelector(".line2");
let currenturl3 = document.querySelector(".line3");
let currentGrade1 = document.querySelector(".rect1");
let currentGrade2 = document.querySelector(".rect2");
let currentGrade3 = document.querySelector(".rect3");
let analyse_history = localStorage.getItem("analyse_history");
let analyse_to_store = JSON.parse(analyse_history);

let analyse_to_store[0].stringify(url) = analyse_to_store[0].ecoIndex
let score1 = analyse_to_store[1].ecoIndex
let score2 = analyse_to_store[2].ecoIndex
let score3 = analyse_to_store[3].ecoIndex
let score4 = analyse_to_store[4].ecoIndex
let score5 = analyse_to_store[5].ecoIndex
let score6 = analyse_to_store[6].ecoIndex
let score7 = analyse_to_store[7].ecoIndex
let score8 = analyse_to_store[8].ecoIndex
let score9 = analyse_to_store[9].ecoIndex
let score10 = analyse_to_store[10].ecoIndex
let score11 = analyse_to_store[11].ecoIndex

let ordre = [score0, score1, score2, score3, score4, score5, score6, score7, score8, score9, score10, score11] 




console.log(ordre)

console.log(analyse_history)
console.log(analyse_to_store)

function sortNumber(a, b) {
    return b - a;
  }
  
  ordre.sort(sortNumber);

/* alert(analyse_to_store.ecoIndex) // renvoie 30 */
currenturl1.innerHTML =  '<p class="url_style">' + analyse_to_store[0].url + "</p>" ;
currentGrade1.innerHTML = '<p class="url_style">' + analyse_to_store[0].ecoIndex + "</p>" ;

currenturl2.innerHTML =  '<p class="url_style">' + analyse_to_store[1].url + "</p>" ;
currentGrade2.innerHTML = '<p class="url_style">' + analyse_to_store[1].ecoIndex + "</p>" ;

currenturl3.innerHTML =  '<p class="url_style">' + analyse_to_store[2].url + "</p>" ;
currentGrade3.innerHTML = '<p class="url_style">' + analyse_to_store[2].ecoIndex + "</p>" ;





/* 
if(currentGrade1 < analyse_to_store[0].ecoIndex){

    currenturl1.innerHTML = '<p class="url_style">' + analyse_to_store.url + "</p>" ;
    currentGrade1.innerHTML = '<p class="url_style">' + analyse_to_store.ecoIndex + "</p>";
}

 */