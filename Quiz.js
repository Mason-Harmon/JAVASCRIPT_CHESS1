
var ark = prompt("What is the name you wll be using for this test?").toLowerCase();
console.log(ark);
var title_ark = document.createElement("h1");
if(ark == "ben"){
    title_ark.innerText = "Name: PBJ";
}else{
    title_ark.innerText = "Name: " + ark;
}

document.body.appendChild(title_ark);
var fp = prompt("What is you favorite peice?")
var resp = document.createElement("h1")
resp.innerText = "Favorite Peice: " + fp;
document.body.appendChild(resp)
var x = document.createElement("h1");
x.innerText = "Chess Quiz";
document.body.appendChild(x);
var break1 = document.createElement("br")
document.body.appendChild(break1)
var break2 = document.createElement("br")
document.body.appendChild(break2)
var break3 = document.createElement("br")
document.body.appendChild(break3)
var break4 = document.createElement("br")
document.body.appendChild(break4)
var q1 = document.createElement("h1");
q1.innerText = "What Country Banned Chess?"
document.body.appendChild(q1)
var a1 = document.createElement("h3");
var a2 = document.createElement("h3");
var a3 = document.createElement("h3");
var a4 = document.createElement("h3");
a1.innerText = "A: England";
a2.innerText = "B: France"
a3.innerText = "C: Spain";
a4.innerText = "D: USA"
document.body.appendChild(a1);
document.body.appendChild(a2);
document.body.appendChild(a3);
document.body.appendChild(a4);
var q2 = document.createElement("h1");
q2.innerText = "Where Was Chess Invented??"
document.body.appendChild(q2)
var b1 = document.createElement("h3");
var b2 = document.createElement("h3");
var b3 = document.createElement("h3");
var b4 = document.createElement("h3");
b1.innerText = "A: India";
b2.innerText = "B: China"
b3.innerText = "C: Spain";
b4.innerText = "D: Persia"
document.body.appendChild(b1);
document.body.appendChild(b2);
document.body.appendChild(b3);
document.body.appendChild(b4);
var q3 = document.createElement("h1");
q3.innerText = "What is the most common chess opening moce?"
document.body.appendChild(q3)
var c1 = document.createElement("h3");
var c2 = document.createElement("h3");
var c3 = document.createElement("h3");
var c4 = document.createElement("h3");
c1.innerText = "A: e4";
c2.innerText = "B: d4"
c3.innerText = "C: e3";
c4.innerText = "D: d3"
document.body.appendChild(c1);
document.body.appendChild(c2);
document.body.appendChild(c3);
document.body.appendChild(c4);
var tile = document.createElement("h1")
tile.innerHTML = "Press down the key of the starting rank for white king"
document.body.appendChild(tile);
//functions
function correct(){
this.setAttribute("style", "color: green");
alert("Correct!")
}
function keyAlert(e){
    if(e.key != "Shift"){
        var keyText = e.code;
        if(keyText == "KeyA"){
            alert("Correct!!!")
        }else{
            for (var i=0; i<Infinity; i++) {
                console.log(i);
            }
        }
    }
}
function wrong(){
    this.setAttribute(
        "style", 
        "text-decoration: line-through; color: red");
    alert("Wrong!")
    for (var i=0; i<Infinity; i++) {
        console.log(i);
    }
}

//styling below here
rizz.setAttribute("style", "background-color: grey");
x.setAttribute(
    "style",
    "color: white; font-size: 75px; text-align: center"
)
//listeners
a1.addEventListener("click", wrong);
a2.addEventListener("click", correct);
a3.addEventListener("click", wrong);
a4.addEventListener("click", wrong);
b1.addEventListener("click", correct);
b2.addEventListener("click", wrong);
b3.addEventListener("click", wrong);
b4.addEventListener("click", wrong);
c1.addEventListener("click", correct);
c2.addEventListener("click", wrong);
c3.addEventListener("click", wrong);
c4.addEventListener("click", wrong);
document.body.addEventListener("keydown", keyAlert);