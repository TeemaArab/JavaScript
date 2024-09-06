// temerature conversion program

const textBox = document.getElementById("textBox");
const toFahrenheit= document.getElementById("toFahrenheit");
const toCelcius= document.getElementById("toCelcius");
const result = document.getElementById("result");

let temperature; 


function convert(){

 if (toFahrenheit.checked){
    temp = Number(textBox.value);
    temp = temp * 9 /5 + 32;
    result.textContent = temp.toFixed(1) + "°F";  // 1.to show degree  >> windows+alt + 0176   
                                                 // 2. to show precesion in decimal , we used to fixed method. 1 shown the decimal 
 }
 else if(toCelcius.checked){
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "°C"; 
 }
 else{
    result.textContent = "Select a unit";
 }
}