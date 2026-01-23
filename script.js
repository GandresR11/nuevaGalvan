// Inicializar librería de animaciones AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Referencias de elementos del DOM
const modal = document.getElementById("calendarModal");

// Función para abrir el modal del calendario
function openCalendar() {
    modal.style.display = "block";
    // Bloquear el scroll del cuerpo para mejorar UX
    document.body.style.overflow = "hidden";
}

// Función para cerrar el modal del calendario
function closeCalendar() {
    modal.style.display = "none";
    // Restaurar el scroll
    document.body.style.overflow = "auto";
}

// Cerrar el modal si el usuario hace clic fuera de la caja del calendario
window.onclick = function(event) {
    if (event.target == modal) {
        closeCalendar();
    }
}

// Efecto de cambio de fondo en el Header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.padding = '0.8rem 5%';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '1.2rem 5%';
    }
});

// Menú Móvil toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Cerrar menú al hacer clic en un link (Móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.querySelector('.menu-toggle i').classList.add('fa-bars');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');
    });
});

  const headers = document.querySelectorAll('.card-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      // Ocultar todas las listas
      document.querySelectorAll('.lista-servicios').forEach(list => list.classList.remove('show'));
      
      // Mostrar solo la lista de la tarjeta clicada
      const list = header.nextElementSibling;
      list.classList.add('show');
    });
  });


    
  // Selecciona todos los títulos de las tarjetas
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h3');
    const list = card.querySelector('.lista-servicios');

    // Al hacer clic en el título
    title.addEventListener('click', () => {
      // Oculta todas las listas primero
      document.querySelectorAll('.lista-servicios').forEach(l => l.style.display = 'none');

      // Muestra solo la lista de la tarjeta clicada
      list.style.display = 'block';
    });
  });

document.querySelectorAll('.lista-servicios').forEach(l => l.classList.remove('show'));
list.classList.add('show');
