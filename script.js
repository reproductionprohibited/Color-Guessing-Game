COLOR_CHARS = "0123456789ABCDEF"

correct_guesses = 0
total_guesses = 0
correctColor = ""

firstOptionBtn = null
secondOptionBtn = null
thirdOptionBtn = null
gameColorBox = null


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function loadColor() {
    const [color1, color2, color3] = [randomColor(), randomColor(), randomColor()]
    setButtonTextOption(color1, color2, color3)
    
    correctColorOptionIndice = Math.floor(Math.random() * 3)

    if (correctColorOptionIndice == 0) {
        correctColor = color1
    } else if (correctColorOptionIndice == 1) {
        correctColor = color2
    } else if (correctColorOptionIndice == 2) {
        correctColor = color3
    }
    gameColorBox.style.backgroundColor = correctColor
}

function setButtonTextOption(color1, color2, color3) {
    firstOptionBtn.innerHTML = color1
    secondOptionBtn.innerHTML = color2
    thirdOptionBtn.innerHTML = color3
}

function selectChoice(event) {
    chosen_option = document.getElementById(event.target.id).innerHTML
    
    if (chosen_option == correctColor) {
        correct_guesses += 1
    }

    total_guesses += 1
    updateScore(correct_guesses, total_guesses)
    loadColor()
}

function randomColor() {
    color = ""
    for (i = 0; i < 6; ++i) {
        indice = Math.floor(Math.random() * COLOR_CHARS.length)
        color += COLOR_CHARS[indice]
    }
    return "#" + color
}

function updateScore(correct, total) {
    document.getElementById("score").innerHTML = `Score: ${correct}/${total}`
}

window.onload = () => {
    firstOptionBtn = document.getElementById("first-option")
    secondOptionBtn = document.getElementById("second-option")
    thirdOptionBtn = document.getElementById("third-option")
    gameColorBox = document.getElementById("guess-card")

    loadColor()
}