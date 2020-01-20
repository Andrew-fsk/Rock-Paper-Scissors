let userChoise;
let compChoise;
let user = document.getElementById("user");
let comp = document.getElementById("comp");
let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let userVal = +userScore.nodeValue + 1;
let compVal = +compScore.nodeValue + 1;



function getComp() {
    let random = +(Math.random() * 10).toFixed(0);
    while (random < 1 || random > 3) {
        random = +(Math.random() * 10).toFixed(0);
    }
    switch (random) {
        case 1:
            random = "Rock";
            break;
        case 2:
            random = "Paper";
            break;
        case 3:
            random = "Scissors";
            break;
        default:
            break;
    }
    return random;

}

function check(compChoise, userChoise) {
    if (compChoise == userChoise) {
        return -1;
    }
    if (compChoise == "Rock" && userChoise == "Paper" ||
        compChoise == "Paper" && userChoise == "Scissors" ||
        compChoise == "Scissors" && userChoise == "Rock") {
        return true;
    } else {
        return false;
    }
}

function getUser(value) {
    userChoise = value;
    compChoise = getComp();
    comp.innerHTML = compChoise;
    user.innerHTML = userChoise;
    if (check(compChoise, userChoise) == -1) {
        userScore.innerHTML = userVal++;
        compScore.innerHTML = compVal++;
    } else if (check(compChoise, userChoise)) {
        userScore.innerHTML = userVal++;
    } else if (!check(compChoise, userChoise)) {
        compScore.innerHTML = compVal++;
    }
}
