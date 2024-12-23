const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")
let generateBtnEl = document.getElementById("generate-btn")

generateBtnEl.addEventListener("click", function () {
    firstPasswordEl.textContent = "";
    secondPasswordEl.textContent = "";
    
    for ( let i = 0; i < 15 ; i++ ) {
        firstPasswordEl.textContent += getFirstPassword()
        secondPasswordEl.textContent += getSecondPassword()
    }   
})

function getFirstPassword() {
    let firstPassword = characters[Math.floor(Math.random() * characters.length)]
    return firstPassword
}
getFirstPassword()
function getSecondPassword() {
    let secondPassword = characters[Math.floor(Math.random() * characters.length)]
    return secondPassword
}
