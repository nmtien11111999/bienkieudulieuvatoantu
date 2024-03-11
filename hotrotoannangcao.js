let calculatorscreen = document.getElementById("view")
function nhapvao(value) {
    calculatorscreen.value += value ;
}

function result() {
    let  result = eval(calculatorscreen.value)
    calculatorscreen.value = result ;
}

function dauAC() {
    calculatorscreen.value = "" ;
}
