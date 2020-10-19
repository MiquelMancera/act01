window.onload = mostrarHora;

function mostrarHora(){
    let rellotge = document.getElementById("rellotge");
    let informacio = document.getElementById("informacio");
    let missatge = document.getElementById("missatge");

    let data = new Date();
    
    let hores = data.getHours();
    let minuts = data.getMinutes();
    let segons = data.getSeconds();
    let horesMostrar, minutsMostrar, segonsMostrar;
  
    horesMostrar = (hores < 10) ? ("0" + hores) : hores;
    minutsMostrar = (minuts < 10) ? ("0" + minuts) : minuts;
    segonsMostrar = (segons < 10) ? ("0" + segons) : segons;
  
    rellotge.innerHTML= "Són les " + horesMostrar + ":" + minutsMostrar + ":" + segonsMostrar;
    informacio.innerHTML= "hores  = " + hores + "<br>minuts = " + minuts + "<br>segons = " + segons ;
    if (hores >= 7 && hores < 14){
      missatge.innerHTML = "Bon dia!";  
    }else if (hores >= 14 && hores < 18){
        missatge.innerHTML = "Bona tarda!";
    }else if (hores >= 18 && hores < 20){
        missatge.innerHTML = "Bon vespre!";
    }else if(hores >= 20 && hores < 7){
        missatge.innerHTML = "Bona nit!";
    }
}

function amagaMostraInfo(){
    let elementAAmagar = document.getElementById("informacio");
  let mostra = document.getElementById("amaga_mostra");
  if (elementAAmagar.style.display === "none") {
    elementAAmagar.style.display = "block";
    mostra.innerHTML="amaga";
  } else {
    elementAAmagar.style.display = "none";
    mostra.innerHTML="mostra";
  }
}