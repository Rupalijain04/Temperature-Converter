// Get references to the Celcius and Fahrenheit input fields
const celcius = document.querySelector("#celcius");
const fahrenheit = document.querySelector("#fahrenheit");


// set focus to the celcius input field when the page loads
window.addEventListener("load", () => celcius.focus());


// convert celcius to fahrenheit when celcius value changes
celcius.addEventListener("input", () => {
    fahrenheit.value = ((celcius.value * 9) / 5  + 32).toFixed(2);
    // clear fahrenheit input when celcius input is empty
    if(!celcius.value) fahrenheit.value = "";
});


// convert fahrenheit to celcius when fahrenheit value changes
fahrenheit.addEventListener("input", () => {
    celcius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    // clear celcius input when fahrenheit input is empty
    if(!fahrenheit.value) celcius.value = "";
});
