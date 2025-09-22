
// Función para manejar el desplazamiento a un elemento con un offset
// Función para manejar el desplazamiento a un elemento sin el offset en JS
export function setupSmoothScroll() {
    document.querySelectorAll("[data-scroll-to]").forEach((el) => {
        el.addEventListener("click", (event) => {
            // Previene el comportamiento por defecto de los enlaces de ancla
            event.preventDefault();
        });
    });
}