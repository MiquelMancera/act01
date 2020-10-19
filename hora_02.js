window.onload = mostraHora;

function mostraHora(){
  let rellotge = document.getElementById("rellotge");
  let informacio = document.getElementById("informacio");
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
}