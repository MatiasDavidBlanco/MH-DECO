var li = document.querySelector('.imgsConteiner');
var vwimg = document.querySelector('.imgConteiner');
var muestras = ["cocina","placard","rack","camas","escritorio","otros"]
var datos = ""
function loadPage(){
  let dirInfo = window.location.hash
  let info = dirInfo.slice(1);
  if(info==""){
    for(i=0;i<muestras.length;i++){
      datos+= buildIMG(muestras[i]);
    }
    li.innerHTML = datos;
    changeIMG(muestras[0],1);
  }else{
    buildIMG(info);
    changeIMG(info,1);
  }
  
}
function buildIMG(carpeta) {
  let imgs = "";
  for (let i = 1; i < 40; i++) {
    imgs += `<img src="img/${carpeta}/${carpeta} (${i}).jpg" id="${i}" alt="${carpeta}" onClick="changeIMG('${carpeta}',${i})" onerror="this.style.display='none'">`
  }
  li.innerHTML = imgs;
  return imgs;
}
function changeIMG(carpeta, i) {
  vwimg.innerHTML = `<img src="img/${carpeta}/${carpeta} (${i}).jpg" id="${i}" alt="${carpeta}">`
}

function getFilesInsideFolder(path,search){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     let datos = JSON.parse(this.responseText);
        console.log(datos);
    }
  };
  xhttp.open("GET", path+"/", true);
xhttp.send();
}
getFilesInsideFolder("./img",'[href*=".jpg"]')