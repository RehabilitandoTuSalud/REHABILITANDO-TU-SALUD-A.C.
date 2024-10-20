// // navbar toggling
// const navbarShowBtn = document.querySelector('.navbar-show-btn');
// const navbarCollapseDiv = document.querySelector('.navbar-collapse');
// const navbarHideBtn = document.querySelector('.navbar-hide-btn');

// navbarShowBtn.addEventListener('click', function(){
//     navbarCollapseDiv.classList.add('navbar-show');
// });
// navbarHideBtn.addEventListener('click', function(){
//     navbarCollapseDiv.classList.remove('navbar-show');
// });


// // stopping all animation and transition
// let resizeTimer;
// window.addEventListener('resize', () =>{
//     document.body.classList.add('resize-animation-stopper');
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         document.body.classList.remove('resize-animation-stopper');
//     }, 400);
// });

// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn'); // Botón para cerrar manualmente
const navLinks = document.querySelectorAll('.navbar-collapse a'); // Selecciona todos los enlaces del menú

// Muestra el menú al hacer clic en el botón de mostrar
navbarShowBtn.addEventListener('click', function() {
    navbarCollapseDiv.classList.add('navbar-show'); // Muestra el menú
});

// Cierra el menú al hacer clic en el botón de ocultar
navbarHideBtn.addEventListener('click', function() {
    navbarCollapseDiv.classList.remove('navbar-show'); // Cierra el menú
});

// Cierra el menú al seleccionar una opción
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarCollapseDiv.classList.remove('navbar-show'); // Cierra el menú
    });
});

// Detener animaciones y transiciones al redimensionar
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
