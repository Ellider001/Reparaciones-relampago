 /********** Webstrixrd **********/
 document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.dropdown-item'); // Seleccionamos todos los enlaces del dropdown
    const sections = {}; // Objeto para guardar las secciones y sus elementos DOM

    // Creamos un objeto con las secciones y sus elementos DOM
    links.forEach(function (link) {
      const hash = link.getAttribute('href').split('#')[1]; // Obtenemos el hash de cada enlace
      if (hash) {
        const section = document.getElementById(hash);
        if (section) {
          sections[hash] = section; // Guardamos la referencia de cada sección
        }
      }
    });

    // Función para detectar si una sección está visible
    function checkSectionVisibility() {
      const scrollPosition = window.scrollY + window.innerHeight; // Posición actual del scroll (parte inferior de la ventana)

      links.forEach(function (link) {
        const hash = link.getAttribute('href').split('#')[1]; // Obtenemos el hash de cada enlace
        if (hash && sections[hash]) {
          const section = sections[hash];
          const sectionRect = section.getBoundingClientRect(); // Obtenemos las coordenadas de la sección
          
          // Verificamos si la sección está parcialmente visible
          if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
            link.classList.add('active'); // Añadimos la clase active si la sección es visible
          } else {
            link.classList.remove('active'); // Removemos la clase active si no está visible
          }
        }
      });
    }

    // Ejecutamos la función al hacer scroll
    window.addEventListener('scroll', checkSectionVisibility);

    // Ejecutamos la función una vez al cargar la página para verificar si ya estamos en una sección
    checkSectionVisibility();

    // Activamos el menú cuando se hace clic en uno de los enlaces
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        links.forEach(function (link) {
          link.classList.remove('active'); // Removemos la clase active de todos los enlaces
        });
        link.classList.add('active'); // Añadimos la clase active al enlace que fue clickeado
      });
    });
  });



