console.log("hi")


const dom = ( () => {
    let square = document.querySelectorAll(".choice")
    let optionSpan = document.getElementsByClassName("x")
    const [a0, a1, a2, b0, b1, b2, c0, c1, c2] = ['a0', 'a1', 'a2', 'b0', 'b1', 'b2', 'c0', 'c1', 'c2'].map(id => document.getElementById(id));
    let gameArr = []
    let lastPlayed = ""
    let p1Points = 0
    let p2Points = 0
    let tiePoints = 0
    let clicks = 0
    let p1Dom = document.getElementById("player1Points")
    let p2Dom = document.getElementById("player2Points")
    let tieDom = document.getElementById("tiePoints")
    
    let squareList = [...square]

    function getSquares(){
        return square
    }
    
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
    
            let result = game.isWinner()
    
            if(clicks > 4 && clicks < 9){
                if(result) {
                    console.log("winner" + game.getWinner())
                    addPoints(game.getWinner())
                    clearTime()
                }
            } else if(clicks == 9 && !result){
                console.log("tie" + game.getWinner())
                addPoints(game.getWinner())
                clearTime()
            }
            
        }) // square click event listener end
    })

    function clearTime(){
        setTimeout(function () {
            clear()
        }, 2000)
    }
    
    function clicked(s){
            if(!s.dataset.clicked){
                s.dataset.clicked = "clicked"
                if(lastPlayed == "" || lastPlayed == "p2"){
                    play(s, "p1", "x")
                } else{
                    play(s,"p2", "o")
                }
            }        
    }

    function clear(){
        square.forEach(s => {
            if(s.dataset["clicked"] == "clicked"){
                s.dataset["clicked"] = ""
                s.dataset["player"] = ""
                s.innerHTML = ""
            }
        })
        gameArr = []
        lastPlayed = ""
        clicks = 0
    }

    function reset(){
        clear()
        p1Points = 0
        p2Points = 0
        tiePoints = 0
        p1Dom.innerText = ""
        p2Dom.innerText = ""
        tieDom.innerText = ""

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

    function play(s, p, x){
        s.dataset.player = x
        lastPlayed = p
        dom.addSquare(s, x.toUpperCase())
        clicks++
    }

    function addPoints(p){
        if(p == "1"){
            p1Points++
            p1Dom.innerText = p1Points.toString()
        } else if(p =="2"){
            p2Points++ 
            p2Dom.innerText = p2Points.toString()
        } else{
            tiePoints++ 
            console.log("tie pts" + tiePoints)
            tieDom.innerText = tiePoints.toString()
        }
    }
    

    return {
        getSquares,
        addSquare,
        clear,
        reset
    }


})()
       

// const player = ( () => {
//     function play(player, field){
//         gameArr.push({player: player, field: field})
//     }
//     return{
//         play
//     }
// })()  

const game = ( () => {
    let winner = ""
    let square = dom.getSquares()
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

    function isWinner(){
        let result = false
        //012, 345, 678, 036, 147, 258, 048, 246
        if(game.lineWinCheck(0,1,2)|| game.lineWinCheck(3,4,5) || game.lineWinCheck(6,7,8) || 
        game.lineWinCheck(0,3,6) || game.lineWinCheck(1,4,7) || game.lineWinCheck(2,5,8) ||
        game.lineWinCheck(0,4,8) || game.lineWinCheck(2,4,6)    ) {
            result = true
            winner = game.winner
            return true
        } else {
            winner = "3"
        }
    }

    function getWinner(){
        return winner
    }

    return {
        lineWinCheck,
        isWinner,
        getWinner
    }
})()
