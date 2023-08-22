COLOR_CHARS = "0123456789ABCDEF";

const BUTTON_COLORS = {
    ERROR_COLOR: "#FF4D4D",
    DEFAULT_COLOR: "#5E5DF0",
    OK_COLOR: "#006600",
}

correctGuesses = 0;
totalGuesses = 0;
correctColor = "";
correctColorOptionIndice = -1;

firstOptionButton = null;
secondOptionButton = null;
thirdOptionButton = null;
gameColorBox = null;


function randomColor() {
    color = ""
    for (i = 0; i < 6; ++i) {
        indice = Math.floor(Math.random() * COLOR_CHARS.length);
        color += COLOR_CHARS[indice];
    }
    return "#" + color;
}

function setButtonTextOption(color1, color2, color3) {
    firstOptionButton.innerHTML = color1;
    secondOptionButton.innerHTML = color2;
    thirdOptionButton.innerHTML = color3;
}

function updateScore() {
    document.getElementById("score").innerHTML = `Score: ${correctGuesses}/${totalGuesses}`;
}

function loadColor() {
    const [color1, color2, color3] = [randomColor(), randomColor(), randomColor()];
    setButtonTextOption(color1, color2, color3);

    correctColorOptionIndice = Math.floor(Math.random() * 3);

    if (correctColorOptionIndice == 0) {
        correctColor = color1;
    } else if (correctColorOptionIndice == 1) {
        correctColor = color2;
    } else if (correctColorOptionIndice == 2) {
        correctColor = color3;
    }
    gameColorBox.style.backgroundColor = correctColor;
}

function setButtonsColor(color) {
    firstOptionButton.style.backgroundColor = color;
    secondOptionButton.style.backgroundColor = color;
    thirdOptionButton.style.backgroundColor = color;
}

function getCorrectButton() {
    if (correctColorOptionIndice == 0) {
        return firstOptionButton;
    } else if (correctColorOptionIndice == 1) {
        return secondOptionButton;
    }
    return thirdOptionButton;
}

function toggleButtonEnableState() {
    currentState = firstOptionButton.disabled;

    firstOptionButton.disabled = !currentState;
    secondOptionButton.disabled = !currentState;
    thirdOptionButton.disabled = !currentState;
}

function onButtonClick(event) {
    button = document.getElementById(event.target.id);

    option = button.innerHTML;

    toggleButtonEnableState();
    setButtonsColor(BUTTON_COLORS.ERROR_COLOR);
    correctOptionButton = getCorrectButton();
    correctOptionButton.style.backgroundColor = BUTTON_COLORS.OK_COLOR;

    if (option == correctColor) {
        correctGuesses += 1;
    }
    totalGuesses += 1;
    
    updateScore();

    setTimeout(() => {
        loadColor();
        setButtonsColor(BUTTON_COLORS.DEFAULT_COLOR);
        toggleButtonEnableState();
    }, 1500)
}



window.onload = () => {
    firstOptionButton = document.getElementById("first-option");
    secondOptionButton = document.getElementById("second-option");
    thirdOptionButton = document.getElementById("third-option");
    gameColorBox = document.getElementById("guess-card");

    loadColor()
}