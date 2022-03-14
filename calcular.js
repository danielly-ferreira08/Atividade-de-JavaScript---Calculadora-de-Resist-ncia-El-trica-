function esconder(){

    let sel = document.getElementById("select_sel").value;

    if(sel <= 5){
        document.querySelector("#end_u").style.display = "block";
        document.querySelector("#end").style.display = "none";
    }else{
        document.querySelector("#end_u").style.display = "none";
        document.querySelector("#end").style.display = "block";
    }
    if(sel >= 5){
        document.querySelector("#select_t").style.display = "block";
    }else{
        document.querySelector("#select_t").style.display = "none";
    }if(sel == 6){
        document.querySelector("#select_ppm").style.display = "block";
    }else{
        document.querySelector("#select_ppm").style.display = "none";
    }
}

function calcular(){

    let sel_ = document.getElementById("select_sel").value;

    if(sel_ == 4){

        let faixa_um = document.querySelector("#select_p").value;
        let faixa_dois = document.querySelector("#select_s").value;
        let result = faixa_um + faixa_dois
        let faixa_mult = document.querySelector("#select_mult").value;
        faixa_mult = parseFloat(faixa_mult);
        let final_result = result * faixa_mult
        let faixa_tol = document.querySelector("#select_tol").value;

        
        document.querySelector("#end_u").innerHTML = final_result + " Ohms " + faixa_tol + "%"

    }if(sel_ == 5){

        let faixa_um = document.querySelector("#select_p").value;
        let faixa_dois = document.querySelector("#select_s").value;
        let faixa_tres = document.querySelector("#select_t").value;
        let result = faixa_um + faixa_dois + faixa_tres
        let faixa_mult = document.querySelector("#select_mult").value;
        faixa_mult = parseFloat(faixa_mult);
        let final_result = result * faixa_mult
        let faixa_tol = document.querySelector("#select_tol").value;

        
        document.querySelector("#end_u").innerHTML = final_result + " Ohms " + faixa_tol + "%"


    }if(sel_ == 6){

        let faixa_um = document.querySelector("#select_p").value;
        let faixa_dois = document.querySelector("#select_s").value;
        let faixa_tres = document.querySelector("#select_t").value;
        let result = faixa_um + faixa_dois + faixa_tres
        let faixa_mult = document.querySelector("#select_mult").value;
        faixa_mult = parseFloat(faixa_mult);
        let final_result = result * faixa_mult
        let faixa_tol = document.querySelector("#select_tol").value;
        let faixa_ppm = document.querySelector("#select_ppm").value;


        document.querySelector("#end").innerHTML = final_result + " Ohms " + faixa_tol + "% " + faixa_ppm + " ppm "
    }
}