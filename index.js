let randomNum;
let targetedBox = 1;
let chance = false;
const grid = [
    [36, 35, 34, 33, 32, 31],
    [25, 26, 27, 28, 29, 30],
    [24, 23, 22, 21, 20, 19],
    [13, 14, 15, 16, 17, 18],
    [12, 11, 10, 9, 8, 7],
    [1, 2, 3, 4, 5, 6]
]

const ladder = {
    4: 16,
    12: 23,
    18: 30,
}
const snake = {
    35: 2,
    21: 7,
    15: 10,
}
function createGrid() {

    let gridHtml = ""

    grid.forEach((row) => {

        gridHtml = gridHtml + '<div class="row">'
        row.forEach((box) => {
            const className = `box ${ladder[box] ? "ladder" : ""} ${snake[box] ? "snake" : ""}`

            gridHtml += `<div class="${className}" data-num="${box}" id="${box}">${box}</div>`
        })
        gridHtml += `</div>`
    })
    const target = document.getElementById('container');
    target.innerHTML = gridHtml
}
document.addEventListener("load", createGrid())
document.addEventListener("beforeunload", alert("You are about to quit the game"))


const clickBtn = () => {

    const temp = document.getElementById(targetedBox)
    temp.classList.remove("active")
    randomNum = Math.floor(Math.random() * 6) + 1;
    const randomImgSource = "images/dice" + randomNum + ".png";
    const image = document.querySelectorAll('img')[0];
    image.setAttribute('src', randomImgSource);
    document.getElementById("showNum").innerHTML = randomNum
    if (randomNum == 6) {
        chance = true;

    } else if (chance == false) {
        alert("try again")
    }
    if (chance) {
        targetedBox = randomNum + targetedBox

        if (targetedBox >= 36) {
            targetedBox = 1
            alert("You Won")
            chance = false;
        }
        if (snake[targetedBox]) {
            targetedBox = snake[targetedBox]
            alert("ohh you have got bitten")
        }

        if (ladder[targetedBox]) {
            targetedBox = ladder[targetedBox]
            alert("chadd ja bhai")
        }

        movePlayer(targetedBox)
    }
}

const movePlayer = (value) => {
    const container = document.getElementById(value)
    container.classList.add("active")
}
