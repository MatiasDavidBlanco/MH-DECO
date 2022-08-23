var li = document.querySelector('.imgsConteiner');
var vwimg = document.querySelector('.imgConteiner');
var a = ""

function changeVar(value) {
  window.location.href = '../MH-DECO/product.html'; 
  a = value;
}
function loadPage() {
  buildIMG(a);
  changeIMG(a,1);
}
function buildIMG(carpeta) {
  let imgs = "";
  for (let i = 1; i < 40; i++) {
    imgs += `<img src="img/${carpeta}/${carpeta} (${i}).jpg" alt="${carpeta}" onClick="changeIMG('${carpeta}',${i})" onerror="this.style.display='none'">`
  }
  li.innerHTML = imgs;
}
function changeIMG(carpeta, i) {
  vwimg.innerHTML = `<img src="img/${carpeta}/${carpeta} (${i}).jpg" alt="${carpeta}">`
}