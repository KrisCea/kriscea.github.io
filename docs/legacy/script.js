document.addEventListener('DOMContentLoaded', () => {
    // Resaltar menú activo
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');

    // Activa cuando la sección cruza la mitad de la pantalla
    const spyOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitar color activo de todos los enlaces
                navLinks.forEach(link => {
                    link.classList.remove('text-indigo-400');
                    link.classList.add('text-white');
                });

                // Añadir color activo al enlace correspondiente
                const activeLink = document.querySelector(`header nav ul li a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.remove('text-white');
                    activeLink.classList.add('text-indigo-400');
                }
            }
        });
    }, spyOptions);

    // Observar cada sección 
    sections.forEach(section => spyObserver.observe(section));


    // 2. Animación de entrada 
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        article.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
    });

    // Configuración del observador de animaciones
    const animationOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Se activa un poco antes de que el elemento aparezca
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitar las clases para que el elemento aparezca
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    // Observar cada artículo del portafolio
    articles.forEach(article => animationObserver.observe(article));
});