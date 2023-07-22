const slider = document.querySelector("#slider");
let seccionSlider = document.querySelectorAll(".slider__seccion");
let seccionSliderUltimo = seccionSlider[seccionSlider.length - 1];
const btnLeft = document.querySelector("#btn--left"); 
const btnRight = document.querySelector("#btn--right"); 


// Colocar le ultimo elemento al principio
slider.insertAdjacentElement('afterbegin', seccionSliderUltimo);

function Siguiente() {
    let seccionSliderPrimero = document.querySelectorAll(".slider__seccion")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1000ms";

    setTimeout(function() {
        slider.style.transition = "none";

        slider.insertAdjacentElement('beforeend', seccionSliderPrimero);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function Anterior() {
    let seccionSlider = document.querySelectorAll(".slider__seccion");
    let seccionSliderUltimo = seccionSlider[seccionSlider.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 1000ms";

    setTimeout(function() {
        slider.style.transition = "none";

        slider.insertAdjacentElement('afterbegin', seccionSliderUltimo);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

btnRight.addEventListener('click', function() {
    Siguiente();
});

btnLeft.addEventListener('click', function() {
    Anterior();
});
 
setInterval(() => {
    Siguiente()
}, 5000);
 