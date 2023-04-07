const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")
console.log(passOne)
console.log(passTwo)
//let randomIndexOne = Math.floor(Math.random() * characters.length)
//    console.log(randomIndexOne)


function generatePass() {
    passOne.textContent = " "
    passTwo.textContent = " "
    
    for (let i = 0; i < 9; i++){
        let randomCharactersOne = Math.floor(Math.random() * characters.length)
        let randomCharactersTwo = Math.floor(Math.random() * characters.length)
        passOne.textContent += characters[randomCharactersOne]
        passTwo.textContent += characters[randomCharactersTwo]
    }
    console.log("click")     
}