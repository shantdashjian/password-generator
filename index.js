const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let isPasswordGenerated = false

const generatePasswordsBtn = document.getElementById("generate-passwords-btn")
const firstPasswordEl = document.getElementById("first-password-el")
const secondPasswordEl = document.getElementById("second-password-el")
const passwordsEls = document.querySelectorAll(".password")
const copyPasswordsTipEl = document.getElementById("copy-passwords-tip")

generatePasswordsBtn.addEventListener('click', (event) => {
    firstPasswordEl.textContent = generatePassword()
    secondPasswordEl.textContent = generatePassword()
})

function generatePassword() {
    isPasswordGenerated = true
    let password = ""
    const maxIndexInclusive = characters.length - 1;
    for (let i = 0; i < 15; i++) {
        password += characters[getRandomNumberBetween(0, maxIndexInclusive)]
    }
    return password
}

function getRandomNumberBetween(minIndexInclusive, maxIndexInclusive) {
    return Math.floor(Math.random() * (maxIndexInclusive - minIndexInclusive + 1)) + minIndexInclusive
}

// Stretch Goal: Copy to Clipboard functionality
passwordsEls.forEach(password => {
    password.addEventListener('click', (event) => {
        if (!isPasswordGenerated) {
            return
        }
        const passwordText = event.target.textContent
        navigator.clipboard.writeText(passwordText)
        const copyPasswordsTipText = copyPasswordsTipEl.textContent
        const background = event.target.style.background
        event.target.style.background = "blue"
        copyPasswordsTipEl.textContent =  "Copied: " + passwordText
        setTimeout(() => {
            event.target.style.background = background
            copyPasswordsTipEl.textContent = copyPasswordsTipText
        }
        , 1500)
    })
})
