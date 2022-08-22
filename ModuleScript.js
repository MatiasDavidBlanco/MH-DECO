var li = document.querySelector('.imgsConteiner');
var vwimg = document.querySelector('.imgConteiner');

function buildIMG(carpeta){
  let imgs = "";
  for(let i=1;i<40;i++){
    imgs += `<img src="img/${carpeta}/${carpeta} (${i}).jpg" alt="${carpeta}" onClick="changeIMG('${carpeta}',${i})" onerror="this.style.display='none'">`
  }
  li.innerHTML=imgs;
}
function changeIMG(carpeta,i){
  vwimg.innerHTML=`<img src="img/${carpeta}/${carpeta} (${i}).jpg" alt="${carpeta}">`
}