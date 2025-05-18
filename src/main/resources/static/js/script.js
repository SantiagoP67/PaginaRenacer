// Carrusel de imágenes (Quienes Somos)
document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.carrusel-slide');
    const images = document.querySelectorAll('.imagen-carrusel');
    let counter = 0;
    const size = images[0].clientWidth;//Depende del ancho viewport inicial
    const intervalTime = 5000;//Intervalo de 5 segundos

    //Posicionamiento inicial
    slide.style.transform = `translateX(${-size * counter}px)`;

    //Función para desplazar
    function autoSlide() {
        //Lógica de reinicio del contador
        if (counter >= images.length - 1) counter = -1;
        counter++;
        slide.style.transform = `translateX(${-size * counter}px)`;
        slide.style.transition = "transform 0.5s ease-in-out"; //Transición suave
    }

    //Interacción con hover
    let interval = setInterval(autoSlide, intervalTime);

    //Pausar al hacer hover
    slide.parentElement.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    // Reanudar al quitar hover
    slide.parentElement.addEventListener('mouseleave', () => {
        interval = setInterval(autoSlide, intervalTime);
    });
});


// Carrusel de Videos (Testimonios)
const slidesContainer = document.querySelector('.carrusel-videos');
const videoSlides = document.querySelectorAll('.video-slide');
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');

let indiceActual = 0;
const totalVideos = videoSlides.length;
const cantidadVisible = 3;

function actualizarCarrusel() {
    //Cálculo basado en ancho real + gap
    const anchoSlide = videoSlides[0].offsetWidth + 20; // Ancho + gap
    const offset = indiceActual * anchoSlide;
    slidesContainer.style.transform = `translateX(-${offset}px)`;//Desplazamiento horizontal
}

// 11. Navegación manual
btnAnterior.addEventListener('click', () => {
    if (indiceActual > 0) {
        indiceActual--;
        actualizarCarrusel();
    }
});

btnSiguiente.addEventListener('click', () => {
    if (indiceActual < totalVideos - cantidadVisible) {
        indiceActual++;
        actualizarCarrusel();
    }
});

// Pausar todos los videos excepto el que se está reproduciendo
const videos = document.querySelectorAll('.video-slide video');
videos.forEach(video => {
    video.addEventListener('play', () => {
        videos.forEach(v => {
            if (v !== video) v.pause();
        });
    });
});

// Formulario de Contacto (Únete)
const form = document.getElementById('formularioContacto');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const btnEnviar = document.querySelector('.btn-enviar');

    //Feedback visual durante envío
    btnEnviar.textContent = 'Enviando...';
    btnEnviar.disabled = true;

    try {
        const response = await fetch('https://formspree.io/f/xeogzawl', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('¡Postulación enviada con éxito!');
            form.reset();// Limpia formulari
        } else {
            throw new Error('Error en el envío');
        }
    } catch (error) {
        alert('Error al enviar, intenta nuevamente');//Manejo genérico
    } finally {
        btnEnviar.textContent = 'Enviar postulación';
        btnEnviar.disabled = false;
    }
});