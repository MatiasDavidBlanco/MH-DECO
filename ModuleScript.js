var li = document.querySelector('.imgsConteiner');
var vwimg = document.querySelector('.imgConteiner');

function buildIMG(carpeta){
  let imgs = "";
  for(let i;i<10;i++){
    imgs += `<img src="img/${carpeta}/${carpeta}(${i}).jpg" alt="${carpeta}" onClick="changeIMG(i)">`
  }
  li.innerHTML=imgs;
}
function changeIMG(i){
  vwimg.innerHTM=`<img src="img/${carpeta}/${carpeta}(${i}).jpg" alt="${carpeta}">`
}