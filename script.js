let index = 0;
const slides = document.querySelector(".slides");
const indicadores = document.querySelectorAll(".indicador");
const totalSlides = document.querySelectorAll(".slide").length;

function cambiarSlide() {
    index = (index + 1) % totalSlides;
    actualizarCarrusel();
}

function actualizarCarrusel() {
    slides.style.transform = `translateX(-${index * 100}%)`;

    indicadores.forEach((indicador, i) => {
        indicador.classList.toggle("activo", i === index);
    });
}

indicadores.forEach((indicador) => {
    indicador.addEventListener("click", () => {
        index = parseInt(indicador.getAttribute("data-index"));
        actualizarCarrusel();
    });
});

setInterval(cambiarSlide, 5000);
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los enlaces con la clase .scroll-link
    const links = document.querySelectorAll(".scroll-link");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            
            const targetId = this.getAttribute("href"); // Obtiene el ID del destino
            const targetElement = document.querySelector(targetId); // Selecciona la sección
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajusta la posición para evitar solapamiento con header
                    behavior: "smooth" // Desplazamiento suave
                });
            }
        });
    });
});
/* JavaScript para manejar la aparición de secciones al hacer scroll */
document.addEventListener("DOMContentLoaded", function () {
    const secciones = document.querySelectorAll(".info-item");

    function verificarScroll() {
        const alturaVentana = window.innerHeight;
        secciones.forEach((seccion) => {
            const posicion = seccion.getBoundingClientRect().top;
            if (posicion < alturaVentana - 100) {
                seccion.classList.add("mostrar");
            }
        });
    }

    window.addEventListener("scroll", verificarScroll);
    verificarScroll();
});


     

            const programacion = document.getElementById('programacion');
            const datosGuardados = JSON.parse(localStorage.getItem('programacionSemanal')) || [];

            for (let i = 0; i < 24; i++) {
                for (let j = 0; j < 8; j++) {
                    if (j === 0) {
                        programacion.innerHTML += `<div class='hora'>${i}:00</div>`;
                    } else {
                        const contenido = datosGuardados[i * 7 + (j - 1)] || '';
                        programacion.innerHTML += `<div class='bloque'>${contenido}</div>`;
                    }
                }
            }
        
   