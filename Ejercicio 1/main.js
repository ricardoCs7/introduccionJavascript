let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado")
var colresultado= document.getElementById("col-resultado");


btn.addEventListener("click", function () {
    var n1 = input1.value;
    var n2 = input2.value;
    resultado.innerHTML = random(n1, n2);

})

function random(n1, n2) {

    if (n1 > n2) {
        var max = n1;
        var min = n2;
    } else if (n2 > n1) {
        var min = n1;
        var max = n2;
    }
    return Math.round(Math.random() * (max - min) + parseInt(min));
}




