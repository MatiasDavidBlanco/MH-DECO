/*CARRUSEL PRODUCTOS*/

window.addEventListener("load", function(){
    new Glider(document.querySelector(".carousel__lista"),{
        slidesToShow: 3,
        slidesToScroll: 5,
        dots: ".carousel__indicadores",
        arrow: {
            prev: ".carousel__anterior",
            next: ".carousel__siguiente"
        }
    });
});