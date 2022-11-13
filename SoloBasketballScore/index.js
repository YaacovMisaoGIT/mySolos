let myScore1 = document.getElementById("score-js1")
let myScore2 = document.getElementById("score-js2")
 
let count = 0
let count2 = 0

function incrementbyOne(){
    count = count + 1
    myScore1.innerText = count
    console.log(count)
}

function incrementbyTwo(){
    count += 2
    myScore1.innerText = count
}

function incrementbyThree(){
    count += 3
    myScore1.innerText = count
}

function incrementByOneGuest(){
    count2 = count2 + 1
    myScore2.innerText = count2
    console.log(count)
}
function incrementbyTwoGuest(){
    count2 = count2 + 2
    myScore2.innerText = count2
    console.log(count)
}
function incrementbyThreeGuest(){
    count2 += 3
    myScore2.innerText = count2
    console.log(count)
}
function redo(){
    myScore1.textContent = 0
    myScore2.innerText = 0
    count = 0
    count2 = 0
}

/*function redo(){
    Myscore[0].innerText = 0
    Myscore[1].innerText = 0
}*/