/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputField = document.getElementById("input-field");
let lengthContainer = document.getElementById("length-container");
let volumeContainer = document.getElementById("volume-container");
let massContainer = document.getElementById("mass-container");


convertBtn.addEventListener("click", function(){
    const numberToConvert = inputField.value;
    let feets = meterToFeet( numberToConvert );
    let meters = feetToMeter( numberToConvert );
    let gallons = literToGallon( numberToConvert );
    let liters = gallonToLiter( numberToConvert );
    let pounds = kgToPound( numberToConvert );
    let kgs = poundToKg( numberToConvert );
    
    renderLength( numberToConvert ,meters, feets );
    renderVolume( numberToConvert , liters, gallons );
    renderMass( numberToConvert, kgs, pounds );
    
})

function meterToFeet( meters ){
    const feets = meters * 3.281;
    return feets.toFixed(3);
}
function feetToMeter( feets ){
    const meters = feets * 0.3048;
    return meters.toFixed(3);
}


function literToGallon( liters ){
    const gallons = liters * 0.264;
    return gallons.toFixed(3);
}
function gallonToLiter( gallons ){
    const liters = gallons * 3.785;
    return liters.toFixed(3);
}


function kgToPound( kgs ){
    const pounds = kgs * 2.204;
    return pounds.toFixed(3);
}
function poundToKg( pounds ){
    const kgs = pounds * 0.453;
    return kgs.toFixed(3);
}

function renderLength( originalNumber, meters, feets ){
    lengthContainer.innerHTML = `
    <p class="conversion-text">
        ${originalNumber} meters = ${feets} feets |
         ${originalNumber} feets = ${meters} meters
    </p>`
}
function renderVolume( originalNumber, liters, gallons ){
    volumeContainer.innerHTML = `
    <p class="conversion-text">
        ${originalNumber} liters = ${gallons} gallons |
         ${originalNumber} gallons = ${liters} liters
    </p>`
}
function renderMass( originalNumber,kgs, pounds ){
    massContainer.innerHTML = `
    <p class="conversion-text">
        ${originalNumber} kgs = ${pounds} pounds |
         ${originalNumber} pounds = ${kgs} kgs
    </p>`
}