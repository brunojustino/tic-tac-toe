console.log("hi")

let square = document.querySelectorAll(".choice")
let optionSpan = document.getElementsByClassName("x")
const [a0, a1, a2, b0, b1, b2, c0, c1, c2] = ['a0', 'a1', 'a2', 'b0', 'b1', 'b2', 'c0', 'c1', 'c2'].map(id => document.getElementById(id));


let squareList = [...square]

squareList.forEach((s) => {
    console.log(s)
    s.addEventListener("click", () => {
        console.log(s.id)
        if(s.id == "a0"){ addSquare(s, "X")}
        else if(s.id == "a1"){ addSquare(s, "X")}
        else if(s.id == "a2"){ addSquare(s, "O")}
        else if(s.id == "b0"){ addSquare(s, "O")}
        else if(s.id == "b1"){ addSquare(s, "O")}
        else if(s.id == "b2"){ addSquare(s, "O")}
        else if(s.id == "c0"){ addSquare(s, "O")}
        else if(s.id == "c1"){ addSquare(s, "O")}
        else if(s.id == "c2"){ addSquare(s, "O")}
    })
})

function addSquare(s, o){
    let x = document.createElement("div")
    x.className = "choiceResult"
    s.appendChild(x)
    let span = document.createElement("span")
    span.className = "x"
    x.appendChild(span)
    span.textContent = o
}