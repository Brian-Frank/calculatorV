function calcular (){
    let sueldoBruto=document.getElementById("bruto").value;

    if (sueldoBruto){
        var sueldo = sueldoBruto -((sueldoBruto * 0.17) + (sueldoBruto * 0.35))
    }
    
    document.getElementById("resultadopesos").innerHTML = "Sueldo en pesos: " + sueldo;
}
