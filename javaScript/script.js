
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });

    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                this.querySelector('i').classList.replace('bi-heart-fill', 'bi-heart');
            } else {
                this.classList.add('liked');
                this.querySelector('i').classList.replace('bi-heart', 'bi-heart-fill');
            }
        });
    });

    

    // Abre el modal al hacer clic en la imagen
function openImage(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = image.src;
}

// Cierra el modal al hacer clic en la "x"
document.querySelector(".close").onclick = function() {
    document.getElementById("imageModal").style.display = "none";
}

    

/* --------------------------------------
   CAMBIO DE TEMA (CLARO-OSCURO)
--------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    let currentTheme = localStorage.getItem("theme") || "default";

    // Función para cambiar el tema
    function setTheme(theme) {
        const themeLink = document.createElement("link");
        themeLink.rel = "stylesheet";
        themeLink.type = "text/css";
        themeLink.href = `./styles/themes/${theme}.css`;
        themeLink.id = "theme-style";

        const existingThemeLink = document.getElementById("theme-style");
        if (existingThemeLink) {
            document.head.replaceChild(themeLink, existingThemeLink);
        } else {
            document.head.appendChild(themeLink);
        }

        // Cambiar icono de luna/sol
        themeToggle.classList.toggle('bi-sun', theme === 'default');
        themeToggle.classList.toggle('bi-moon', theme === 'dark');

        // Guardar el tema en localStorage
        localStorage.setItem("theme", theme);
        currentTheme = theme;  // Actualiza el tema actual
    }

    // Aplicar el tema al cargar la página
    setTheme(currentTheme);

    // Cambiar tema al hacer clic en el botón
    themeToggle.addEventListener("click", function () {
        const newTheme = currentTheme === "default" ? "dark" : "default";
        setTheme(newTheme);
    });
});



/* --------------------------------------
   OCULTAR TOP-NAVBAR CON SCROLL HACIA ABAJO
--------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY; // Guarda la posición del scroll anterior
    const topNav = document.querySelector('.top-nav');
    const threshold = 50; // Umbral de scroll en píxeles

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            // Si el scroll está en la parte superior, siempre muestra la top-nav
            topNav.classList.remove('hidden');
        } else if (currentScrollY > lastScrollY ) {
            // Desplazamiento hacia abajo - oculta la top-nav
            topNav.classList.add('hidden');
        } else if (lastScrollY > currentScrollY + threshold) {
            // Desplazamiento hacia arriba - muestra la top-nav
            topNav.classList.remove('hidden');
        }

        lastScrollY = currentScrollY; // Actualiza la posición del scroll
    });
});
