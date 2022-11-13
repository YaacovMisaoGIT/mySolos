const convertButton = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

/* convertButton.addEventListener("click", function(){
    myFunctionLength()
    myFunctionVolume()
})  */
convertButton.addEventListener("click", function() {
  let baseValue = inputEl.value  
  meterToFeet =  baseValue*3.2808399
  feetToMeters =  baseValue/3.2808399
  literToGallon =baseValue*0.264172 
  gallonToliter = baseValue/0.264172
  kiloToPound = inputEl.value*2.20462
  poundToKilo = inputEl.value/2.20462

lengthEl.innerHTML =  ` 
                         ${baseValue} meter = ${meterToFeet.toFixed(3)} feet |
                         ${baseValue} feet = ${feetToMeters.toFixed(3)} meters 
                      `
volumeEl.innerHTML = ` 
                        ${baseValue} liters = ${literToGallon.toFixed(3)} gallon |
                        ${baseValue} gallon = ${gallonToliter.toFixed(3)} liters
                     `    
massEl.innerHTML = ` 
                        ${baseValue} kilograms = ${kiloToPound.toFixed(3)} pounds |
                        ${baseValue} pounds = ${poundToKilo.toFixed(3)} kilogram
                   `
})
