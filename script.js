const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let hull = 20
let firePow = 5
let accur = 0.7

// let hullAl = 6
// let firePowAl = 5
// let accurAl = 0.6
let i = 0

const alienShips = [{
    name: 'ship1',
    hull: 10,
    firePow: 4,
    accur: 0.6
},
{
    name: 'ship2',
    hull: 8,
    firePow: 6,
    accur: 0.7
}]
const playerScore = document.createElement('h2')
playerScore.textContent = `Your hull value ${hull}`

const alienScore = document.createElement('h2')
alienScore.textContent = `Alien hull value: ${alienShips[i].hull}`

const stat = document.createElement('h2')
stat.textContent = 'Status : Game Not Started'

const alienStat = document.createElement('h2')
alienStat.textContent = 'Status : Game Not Started'

const alienShipstatus = document.createElement('h3')
alienShipstatus.textContent = 'Alien Ship Status: Game not started'

const playerScoreBoard = document.querySelector('.playerscore')
const alienScoreBoard = document.querySelector('.alienscore')




// function onLoad() {
//     let hull = 20
//     let firePow = 5
//     let accur = 0.7
//     // playerScore.textContent = ''
//     playerScoreBoard.appendChild(playerScore)
//     // stat.textContent = ''
//     playerScoreBoard.appendChild(stat)
//     // alienShips.textContent = ''
//     playerScoreBoard.appendChild(alienShipstatus)
// }
// window.addEventListener('load', onLoad)
playerScoreBoard.appendChild(playerScore)
playerScoreBoard.appendChild(stat)



alienScoreBoard.appendChild(alienScore)
alienScoreBoard.appendChild(alienStat)

const popUp = document.querySelector('.popUpHidden')



let m = 1
function attack() {

    playerHealth = true
    alienHealth = true

    function playerAttack() {
        const newaccur = Math.random()
        if (newaccur >= accur && hull > 0) {
            alienShips[i].hull = alienShips[i].hull - firePow
            if (alienShips[i].hull < 0) { alienHealth = false }
            stat.textContent = 'Player Attacked'
        } else if (hull > 0) stat.textContent = "Player Missed"
        else { stat.textContent = "Player Destroyed" }

    }

    function alienAttack() {
        const newaccur = Math.random()
        alienScore.textContent = `Alien hull value: ${alienShips[i].hull}`
        if (newaccur >= alienShips[i].accur && alienShips[i].hull > 0) {
            hull = hull - alienShips[i].firePow
            if (hull < 0) { playerHealth = false; stat.textContent = "Player Destroyed" }

            playerScore.textContent = `Your hull value ${hull}`
        } else if (alienShips[i].hull > 0) alienStat.textContent = 'Alien Attacked'
        else if (alienShips[i].hull < 0) {
            alienStat.textContent = `${alienShips[i].name} destroyed`
            popUp.className = 'popUp'
        }
    }


    while (alienHealth && playerHealth) {

        playerAttack()
        console.log(1)

        alienAttack()
        console.log(3)

    }

}

function roundUp() {
    popUp.classList.toggle('popUpHidden')
    i++
    attack()
}

const gameOver = document.querySelector('.gameOver')
function openUpGameOver() {
    gameOver.className = 'gameOver'
}