// A GUESSING GAME - INTEGERS BETWEEN 0 AND 10

// VERSION 1.0.0

let answer = Math.ceil(Math.random()*10)
let attempt = 6 // USER'S ATTEMPTS  
document.querySelector(".attempts").innerHTML = attempt

function guessingGame(){
    let num =  parseInt(document.querySelector(".guess").value) // USER INPUT
    if(attempt >= 1){
        attempt--  
        document.querySelector(".attempts").innerHTML = attempt 
        if(num == answer){
            alert("Congaculations!! You Win")
        }else{
            alert("Try again")
            document.querySelector(".guess").value = ""
            if(attempt == 0) {
                document.querySelector(".answer").innerHTML = `The number was ${answer}`
            }
        }
    }else {
        alert("YOU HAVE 0 ATTEMPTS")
        let reTry = confirm("Do you want to try again?")
        if(reTry){
            document.querySelector(".guess").value = ""
            attempt = 6
            document.querySelector(".attempts").innerHTML = attempt
            answer = Math.ceil(Math.random()*10)
        }else{
            alert("Goodbye!")
        }
    }
}
// guessingGame()





