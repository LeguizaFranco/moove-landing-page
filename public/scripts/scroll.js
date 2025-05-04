
// Función para manejar el desplazamiento suave

export function setupSmoothScroll() {
    document.querySelectorAll("[data-scroll-to]").forEach((el) => {
        el.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = el.getAttribute("data-scroll-to");
            const target = document.getElementById(targetId);

            if (target) {
                const offset = window.innerWidth < 500 ? 170 : 100;
                const y = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    });
}
