//const convertButton = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

var btn = document.querySelector('#convert-btn');
btn.addEventListener('click',myFunctionLength);
btn.addEventListener('click',myFunctionVolume); 
btn.addEventListener('click',myFunctionMass); 

function myFunctionLength(){
    console.log("Clicked")
}

function myFunctionLength(){
    let meterValue = inputEl.value
    feet = meterValue * 3.2808399
    let feetValue = inputEl.value
    meter = feetValue/3.2808399
 
let x =""
 x += `<p id ="js-x">
        ${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meter.toFixed(3)} meters 
       </p> `

 lengthEl.innerHTML = x

}

function myFunctionVolume(){
    let litersValue = inputEl.value
    gallon = litersValue *0.264 
    let GallonValue = inputEl.value
    liter = GallonValue/0.264 
 
let y =""
 y += `<p id ="js-x">
        ${inputEl.value} liters = ${gallon.toFixed(3)} gallon | ${inputEl.value} gallons = ${liter.toFixed(3)} gallons 
       </p> `

       volumeEl.innerHTML = y
  
} 
function myFunctionMass(){
    let KilogramsValue = inputEl.value
    pound = KilogramsValue *2.20462262
    Kilogram = KilogramsValue/2.20462262
 
let z =""
 z += `<p id ="js-x">
        ${inputEl.value} Kilograms = ${pound.toFixed(3)} pounds | ${inputEl.value} pounds = ${Kilogram.toFixed(3)} kilograms 
       </p> `

       massEl.innerHTML = z

} 


 