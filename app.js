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
    hull: 6,
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
alienScore.textContent = ''

const stat = document.createElement('h2')
stat.textContent = 'Status : Game Not Started'

const alienStat = document.createElement('h2')
alienStat.textContent = 'Status : Game Not Started'

const alienShipstatus = document.createElement('h3')
alienShipstatus.textContent = 'Alien Ship Status: Game not started'

const playerScoreBoard = document.querySelector('.playerscore')
const alienScoreBoard = document.querySelector('.alienscore')

const popUp = document.querySelector('.popUpHidden')




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

const finalResult = document.querySelector('#finalResult')



let m = 1
function attack() {

    playerHealth = true
    alienHealth = true

    function playerAttack() {
        const newaccur = Math.random()
        if (newaccur >= accur && hull > 0) {
            console.log(`Alien Health:${alienShips[i].hull}`)
            alienShips[i].hull = alienShips[i].hull - firePow
            if (alienShips[i].hull < 0) {
                alienHealth = false
                alienStat.textContent = `${alienShips[i].name} Destroyed`
                popUp.className = 'popUp'

            }

            stat.textContent = 'Player Attacked'
            alienScore.textContent = `Alien hull value: ${alienShips[i].hull}`

        } else if (hull > 0) {
            stat.textContent = "Player Missed"
        }


    }

    function alienAttack() {
        const newaccur = Math.random()
        alienScore.textContent = `Alien hull value: ${alienShips[i].hull}`
        if (newaccur >= alienShips[i].accur && alienShips[i].hull > 0) {
            console.log(`Player Health:${hull}`)
            hull = hull - alienShips[i].firePow
            if (hull < 0) {
                playerHealth = false
                stat.textContent = 'Player destroyed'
                finalResult.textContent = "Aliens Destroyed You!...Game Over"
                openUpGameOver()
            }
            alienStat.textContent = 'Alien Attacked'

            playerScore.textContent = `Your hull value ${hull}`

        }

    }
    while (alienHealth && playerHealth) {

        playerAttack()

        alienAttack()


    }

}

function roundUp() {
    popUp.classList.toggle('popUpHidden')
    i++
    if (i > alienShips.length - 1) {
        finalResult.textContent = "You Destroyed all the ships... Game Over"
        openUpGameOver()
        return
    }
    attack()
}

const gameOver = document.querySelector('.gameOverHidden')
function openUpGameOver() {
    gameOver.className = 'gameOver'
    popUp.className = 'popUpHidden'
}

function reLoad() {
    location.reload()
}

// if (alienShips[i].hull < 0) {
//     stat.textContent = `Ship destroyed press replay to attack next`
// }





// attack()