const photos = [
    { url: "imagenes/node1.jpeg", width: 729, height: 1040 },
    { url: "imagenes/node2.jpeg", width: 720, height: 976 },
    { url: "imagenes/node3.jpeg", width: 629, height: 1280 },
    { url: "paper/nota1.png", width: 1006, height: 473 },
    { url: "paper/grafica5.jpeg", width: 834, height: 521 },
    { url: "paper/nota2.png", width: 1019, height: 469 },
    { url: "paper/nota3.png", width: 974, height: 459 },
    { url: "paper/nota4.png", width: 1012, height: 468 },
    { url: "paper/nota5.png", width: 1015, height: 461 },
    { url: "paper/nota42.png", width: 995, height: 459 },
    { url: "paper/nota43.png", width: 981, height: 463 },
    { url: "paper/nota44.png", width: 1008, height: 469 },
    { url: "paper/nota45.png", width: 999, height: 473 },
    { url: "paper/grafica2.jpeg", width: 838, height: 524 },
    { url: "paper/nota46.png", width: 1018, height: 446 },
    { url: "paper/nota47.png", width: 1009, height: 462 },
    { url: "paper/grafica3.jpeg", width: 838, height: 524 },
    { url: "paper/nota48.png", width: 984, height: 473 },
    { url: "paper/nota49.png", width: 1011, height: 460 },
    { url: "imagenes/padres3.jpeg", width: 899, height: 1599 },
    { url: "paper/nota50.png", width: 1014, height: 464 },
    { url: "paper/nota6.png", width: 1025, height: 442 },
    { url: "paper/nota7.png", width: 1014, height: 465 },
    { url: "paper/grafica7.jpeg", width: 836, height: 521 },
    { url: "paper/nota8.png", width: 1010, height: 453 },
    { url: "paper/nota9.png", width: 998, height: 441 },
    { url: "paper/nota10.png", width: 997, height: 458 },
    { url: "paper/nota11.png", width: 1002, height: 458 },
    { url: "paper/nota12.png", width: 1015, height: 433 },
    { url: "paper/grafica1.jpeg", width: 833, height: 522 },
    { url: "paper/nota13.png", width: 1023, height: 451 },
    { url: "paper/nota14.png", width: 987, height: 430 },
    { url: "paper/nota15.png", width: 1007, height: 468 },
    { url: "paper/nota16.png", width: 1032, height: 472 },
    { url: "paper/nota17.png", width: 1000, height: 460 },
    { url: "paper/nota18.png", width: 1000, height: 452 },
    { url: "paper/nota19.png", width: 1002, height: 472 },
    { url: "imagenes/padres2.jpeg", width: 1040, height: 1280 },
    { url: "imagenes/padres1.jpeg", width: 1600, height: 1200 },
    { url: "paper/nota20.png", width: 1035, height: 471 },
    { url: "paper/nota21.png", width: 1002, height: 456 },
    { url: "paper/nota22.png", width: 1026, height: 466 },
    { url: "paper/nota23.png", width: 1025, height: 459 },
    { url: "paper/grafica4.jpeg", width: 840, height: 523 },
    { url: "paper/nota24.png", width: 1016, height: 463 },
    { url: "paper/nota25.png", width: 996, height: 455 },
    { url: "paper/nota26.png", width: 1019, height: 437 },
    { url: "paper/grafica8.jpeg", width: 838, height: 522 },
    { url: "paper/nota27.png", width: 1022, height: 447 },
    { url: "paper/nota28.png", width: 1006, height: 452 },
    { url: "paper/nota29.png", width: 1005, height: 475 },
    { url: "paper/nota30.png", width: 1012, height: 447 },
    { url: "paper/grafica6.jpeg", width: 842, height: 520 },
    { url: "paper/nota31.png", width: 1011, height: 458 },
    { url: "paper/nota32.png", width: 1000, height: 466 },
    { url: "paper/nota33.png", width: 1003, height: 466 },
    { url: "paper/nota34.png", width: 1018, height: 458 },
    { url: "imagenes/padres4.jpeg", width: 1080, height: 1434 },
    { url: "paper/nota35.png", width: 1022, height: 467 },
    { url: "paper/nota36.png", width: 1029, height: 459 },
    { url: "paper/nota37.png", width: 1030, height: 459 },
    { url: "paper/nota38.png", width: 1012, height: 472 },
    { url: "paper/nota39.png", width: 1002, height: 459 },
    { url: "paper/nota40.png", width: 1024, height: 473 },
    { url: "paper/nota41.png", width: 1016, height: 450 },
];

// Contenedor principal
const container = document.getElementById("collage-container");

// Función para generar una posición aleatoria dentro del contenedor
function getRandomPosition(elementWidth, elementHeight) {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const x = Math.random() * (containerWidth - elementWidth/3);
    const y = Math.random() * (containerHeight - elementHeight/3);

    return { x, y };
}

// Crear fotografías
photos.forEach((photo) => {
    const img = document.createElement("div");
    img.classList.add("draggable", "photo");
    img.style.width = `${photo.width/3}px`;
    img.style.height = `${photo.height/3}px`;
    img.style.backgroundImage = `url(${photo.url})`;

    const { x, y } = getRandomPosition(photo.width, photo.height);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    container.appendChild(img);
});

// Hacer elementos arrastrables y gestionarlos al clic
const draggables = document.querySelectorAll(".draggable");

draggables.forEach((draggable, index) => {
    let offsetX = 0;
    let offsetY = 0;

    // Evento al hacer clic para mover el elemento al frente
    draggable.addEventListener("mousedown", (e) => {
        // Aumentar z-index para traer el elemento al frente
        draggable.style.zIndex = 10000 + index ; // Asegura que sea mayor a otros elementos

        // Gestionar arrastre
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;

        function onMouseMove(event) {
            draggable.style.left = `${event.clientX - offsetX}px`;
            draggable.style.top = `${event.clientY - offsetY}px`;
        }

        document.addEventListener("mousemove", onMouseMove);

        document.addEventListener(
            "mouseup",
            () => {
                document.removeEventListener("mousemove", onMouseMove);
            },
            { once: true }
        );
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const audioPlayer = new Audio(); // Crear un reproductor de audio
    let currentButton = null; // Botón actualmente activo
    let currentAudioSrc = ''; // Ruta del audio actualmente activo
    let isPlaying = false; // Estado de reproducción

    // --- Funciones del Carrusel ---
    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active', 'previous', 'next');
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex - 1 + items.length) % items.length) {
                item.classList.add('previous');
            } else if (index === (currentIndex + 1) % items.length) {
                item.classList.add('next');
            }
        });
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    prevBtn.addEventListener('click', prevPhoto);
    nextBtn.addEventListener('click', nextPhoto);

    // --- Botones de Reproducción y Pausa ---
    const audioButtons = document.querySelectorAll('.audio-btn');

    audioButtons.forEach((button) => {
        const audioSrc = button.parentElement.getAttribute('data-audio'); // Ruta del audio

        button.addEventListener('click', () => {
            if (currentAudioSrc !== audioSrc) {
                // Si se selecciona un nuevo audio
                audioPlayer.src = audioSrc;
                currentAudioSrc = audioSrc;

                // Cambiar el botón anterior a "Play"
                if (currentButton && currentButton !== button) {
                    currentButton.textContent = '▶';
                }

                currentButton = button; // Actualizar el botón actual
                isPlaying = false; // Reiniciar estado de reproducción
            }

            if (!isPlaying) {
                // Si no se está reproduciendo, inicia la reproducción
                audioPlayer.play();
                button.textContent = '■'; // Cambia el botón a "Stop"
                isPlaying = true; // Cambia el estado a reproduciendo
            } else {
                // Si está reproduciendo, pausa el audio
                audioPlayer.pause();
                button.textContent = '▶'; // Cambia el botón a "Play"
                isPlaying = false; // Cambia el estado a pausado
            }

            // Cuando el audio termine, restablece el botón a "Play"
            audioPlayer.addEventListener('ended', () => {
                button.textContent = '▶';
                isPlaying = false;
            });
        });
    });

    // Inicializar el carrusel
    let currentIndex = 0;
    updateCarousel();
});
