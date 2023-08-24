// Código para manejar el menú desplegable en el formato mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Agrega este código para mostrar el footer al llegar al final
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    const windowHeight = window.innerHeight;
    
    function toggleFooter() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const mainHeight = main.offsetHeight;
        
        if (scrollTop + windowHeight >= mainHeight) {
            document.body.classList.add('show-footer');
        } else {
            document.body.classList.remove('show-footer');
        }
    }
    
    toggleFooter();
    window.addEventListener('scroll', toggleFooter);
});

// Código para mostrar el footer al llegar al final de la página
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Función para mostrar el footer al llegar al final
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    const windowHeight = window.innerHeight;

    function toggleFooter() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const mainHeight = main.offsetHeight;
        
        if (scrollTop + windowHeight >= mainHeight) {
            body.classList.add('show-footer');
        } else {
            body.classList.remove('show-footer');
        }
    }

    toggleFooter();
    window.addEventListener('scroll', toggleFooter);
});
