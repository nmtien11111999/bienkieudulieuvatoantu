function nhap() {
    let Amount = document.getElementById("Amount").value;
    let Acode = document.getElementById ("A") .value;
    let Dcoin = document.getElementById("B").value;
    let ketqua;


    if (Acode == "USD" && Dcoin == "VND") {
        ketqua = (Amount * 23000)
    }
    else if (Acode == "VND"&& Dcoin =="USD"){
        ketqua = (Amount / 23000)
    }
    else if (Acode == "VND" && Dcoin == "VND") {
        ketqua = Amount
    } else {
        ketqua = Amount
    }

    document.getElementById("ketqua").innerHTML = ketqua;
}