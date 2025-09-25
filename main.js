var r = document.getElementById("ratio_calc");
var h = document.getElementById("hit");
var m = document.getElementById("miss");

function update() {
    r.innerText = parseInt(h.innerText) / parseInt(m.innerText);
}