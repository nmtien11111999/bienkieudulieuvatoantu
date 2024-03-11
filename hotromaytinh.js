function cong() {
    let so1 = +document.getElementById("number1").value
    let so2 =  +document.getElementById("number2").value
    let a = so1 + so2
    document.getElementById("ketqua").innerHTML = "ketqua = " + a ;
}
function tru() {
    let so1 = +document.getElementById("number1").value
    let so2 = +document.getElementById("number2").value
    let b = so1 - so2
    document.getElementById("ketqua").innerHTML = "ketqua = " + b ;
}