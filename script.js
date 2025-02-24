const pad = document.querySelector(".pad")

console.log(window.offsetWidth)
console.log(pad.offsetWidth)

let squares = []

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div")
    let newWidth = Number(pad.offsetWidth) / 16 - 2
    square.classList.add("square")
    square.style.width = newWidth + 'px'
    square.style.height = newWidth + 'px'
    pad.appendChild(square)
    squares.push(square)
}

function changeSquareSize(event) {
    let newWidth = Number(pad.offsetWidth) / 16 - 2
    pad.style.height = pad.offsetWidth + 'px'
    console.log(newWidth)
    squares.forEach(item => {
        item.style.width = newWidth + 'px'
        item.style.height = newWidth + 'px'
        console.log(item.offsetWidth)
    })

}

function changeSquareColor (event) {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = 'grey'
    }
}
 

window.addEventListener("resize", changeSquareSize)

pad.addEventListener("mouseover", changeSquareColor)