const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('vasantdada patil best college', 2)

puzzleEl.textContent = game1.Puzzle
guessesEl.textContent = game1.StatusMessage

window.addEventListener('keypress', (e)=> {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)  
    puzzleEl.textContent = game1.Puzzle
    guessesEl.textContent = game1.StatusMessage
})




const requestCountries = new XMLHttpRequest()

requestCountries.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        const arr = JSON.parse(e.target.responseText)
        const country = arr.find((country) => country.alpha2code === countryCode)
        console.log(country.name)  
    }
})

requestCountries.open('GET','http://restcountries.eu/rest/v2/all')
requestCountries.send()
