var alli = document.querySelector('module-menu');
var datos = ""
var caruselLista="";
var typeMueb = ["cocina", "placard", "rack", "cama", "escritorio", "industrial", "otros"];
function loadPage() {
  let dirInfo = window.location.hash
  let info = dirInfo.slice(1);
  if (info == "") {
    for (let i = 0; i < typeMueb.length; i++) {
      const element = typeMueb[i];
      caruselLista += `<!--html-->
          <div class="carousel__elemento">
            <a href="product.html#${element}" onClick="loadPage();">
              <img src="img/img productos/${element}.png" alt="cocinas" >
              <p>${element}</p>
            </a>
          </div>
      <!--!html-->`
    }
    datos = `<!--html-->
        <div class="carousel_lista">
          ${caruselLista}
        </div>
      <!--!html-->`;
    alli.innerHTML = datos;
  } else {
    datos = `<!--html-->
    <div class="imgsConteiner"></div>
    <div class="generalConteiner">
      <button class="prev" onclick="nextPrev(-1)"> <i class="fas fa-chevron-left"></i></button>
      <div class="imgConteiner"></div>
      <button class="next" onclick="nextPrev(1)"><i class="fas fa-chevron-right"></i></button>
    </div>
    <!--!html-->`
    alli.innerHTML = datos;
    buildIMG(info);
    changeIMG(info, 1);
    selectMu(info);
  }
}
function buildIMG(carpeta) {
  let imgs = "";
  for (let i = 1; i < 40; i++) {
    imgs += `<img src="img/${carpeta}/${carpeta} (${i}).jpg" id="${i}" alt="${carpeta}" onClick="changeIMG('${carpeta}',${i});" onerror="this.style.display='none'">`
  }
  var li = document.querySelector('.imgsConteiner');
  li.innerHTML = imgs;
  return imgs;
}
function changeIMG(carpeta, i) {
  var vwimg = document.querySelector('.imgConteiner');
  vwimg.innerHTML = `<img src="img/${carpeta}/${carpeta} (${i}).jpg" id="${i}" onload="addBackgroundColor(${i})" alt="${carpeta}">`
}

function selectMu(type) {
  var mueb = document.querySelectorAll(".listProduct a");
  console.log("data info: " + type + " ");
  for (let i = 0; i < mueb.length; i++) {
    const element = mueb[i];
    const ent = element.hash.slice(1);
    if (ent == type) {
      element.classList.add(".selected");
    } else {
      element.classList.remove(".selected")
    }
  }
}

function addBackgroundColor(a){
  const imgcont = document.querySelectorAll(".imgsConteiner img");
  document.getElementById(a).style.boxShadow = "#000000";
  var imgslist = document.querySelectorAll(".imgsConteiner img");
  console.log( imgslist);
  for (let i = 0; i < imgcont.length; i++) {
      const element = imgslist[i];
      element.style.boxShadow = "none"
      if(element.id == a){
        document.getElementById(a).style.boxShadow = " 0px 0px 15px #b38f59";
       }
  }
}