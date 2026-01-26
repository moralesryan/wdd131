const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;


let temperature = 20;
let windSpeed = 10;
function calculateWindChill(temp, speed){
    return 13.12 + 0.6215 * temp - 11.37 * (speed ** 0.16) + 0.3965 * temp * (speed ** 0.16); 

}

let windChill = document.querySelector(".weather p:last-child");

if (temperature <=10 && windSpeed > 4.8) {
    let result = calculateWindChill(temperature, windSpeed);
    windChill.textContent = "Wind Chill: " + result + "°C"
} else {
    windChill.textContent = "Wind Chill: N/A";
}