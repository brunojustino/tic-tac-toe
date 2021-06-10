console.log("hi")

let square = document.querySelectorAll(".choice")
let optionSpan = document.getElementsByClassName("x")
const [a0, a1, a2, b0, b1, b2, c0, c1, c2] = ['a0', 'a1', 'a2', 'b0', 'b1', 'b2', 'c0', 'c1', 'c2'].map(id => document.getElementById(id));
let gameArr = []
let lastPlayed = ""
let p1Points = 0
let p2Points = 0

let squareList = [...square]

squareList.forEach((s) => {
    console.log(s)
    s.addEventListener("click", () => {
        // console.log(s.id)
        if(s.id == "a0"){ clicked(s)}
        else if(s.id == "a1"){ clicked(s)}
        else if(s.id == "a2"){ clicked(s)}
        else if(s.id == "b0"){ clicked(s)}
        else if(s.id == "b1"){ clicked(s)}
        else if(s.id == "b2"){ clicked(s)}
        else if(s.id == "c0"){ clicked(s)}
        else if(s.id == "c1"){ clicked(s)}
        else if(s.id == "c2"){ clicked(s)}
        let result = isWinner()
        if(result) console.log("winnn")
    })
})

function clicked(s){
        if(!s.dataset.clicked){
            s.dataset.clicked = "clicked"
            if(lastPlayed == "" || lastPlayed == "p2"){
                s.dataset.player = "x"
                lastPlayed = "p1"
                addSquare(s, "X")
                playerPlay(lastPlayed, s.id)
            } else{
                s.dataset.player = "o"
                lastPlayed = "p2"
                addSquare(s, "O")
                playerPlay(lastPlayed, s.id)
            }
        }        
}


function playerPlay(player, field){
    gameArr.push({player: player, field: field})
}

function addSquare(s, o){
    let x = document.createElement("div")
    x.className = "choiceResult"
    s.appendChild(x)
    let span = document.createElement("span")
    span.className = "x"
    x.appendChild(span)
    span.textContent = o
}


function isWinner(){
    let result = false
    let winner = ""
    //012, 345, 678, 036, 147, 258, 048, 246
    if(game.lineWinCheck(0,1,2)|| game.lineWinCheck(3,4,5) || game.lineWinCheck(6,7,8) || 
    game.lineWinCheck(0,3,6) || game.lineWinCheck(1,4,7) || game.lineWinCheck(2,5,8) ||
    game.lineWinCheck(0,4,8) || game.lineWinCheck(2,4,6)    ) {
        result = true
        winner = game.winner
        return true
    }
}

const game = ( () => {
    let winner = ""
    function lineWinCheck(a,b,c){
        if(square[a].dataset["clicked"] && square[b].dataset["clicked"] && square[c].dataset["clicked"]){
            if(square[a].dataset["player"] == "x" && square[b].dataset["player"] == "x" && square[c].dataset["player"] == "x"){
                this.winner = "1"
                return true
            } else if(square[a].dataset["player"] == "o" && square[b].dataset["player"] == "o" && square[c].dataset["player"] == "o"){
                this.winner = "2"
                return true
            }
        }
    }

    function getWinner(){
        return winner
    }

    return {
        lineWinCheck,
        getWinner
    }
})()
