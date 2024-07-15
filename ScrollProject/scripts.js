document
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.getElementById("nav").className = "nav-black";
  } else {
    document.getElementById("nav").className = "nav";
  }
});


// scripts.js

// Esta línea asegura que el código dentro de la función se ejecute después de que todo el contenido del DOM se haya cargado.
document.addEventListener('DOMContentLoaded', () => {
  // Obtiene una referencia al elemento del navbar.
  const navbar = document.querySelector('.nav');
  
  // Calcula la altura del navbar y la guarda en la variable navbarHeight.
  const navbarHeight = navbar.offsetHeight;

  // Selecciona todos los enlaces dentro del navbar que tienen la clase 'nav a'.
  document.querySelectorAll('.nav a').forEach(pepito => {
    // Agrega un evento de clic a cada enlace seleccionado.
    pepito.addEventListener('click', function (a) {
      // Previene el comportamiento predeterminado del enlace (que es navegar instantáneamente a la sección).
      a.preventDefault();

      // Obtiene el valor del atributo 'href' del enlace (por ejemplo, '#about') y elimina el símbolo '#' al inicio.
      const targetId = this.getAttribute('href').substring(1);
      
      // Usa el valor del targetId para encontrar el elemento de destino en el documento.
      const targetElement = document.getElementById(targetId);

      // Desplaza la ventana a la posición del elemento de destino ajustando por la altura del navbar.
      // top: targetElement.offsetTop - navbarHeight: Calcula la posición a la que se debe desplazar.
      // behavior: 'smooth': Asegura que el desplazamiento sea suave.
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    });
  });
});
document.getElementById("nav-toggle").addEventListener('click', ()=>{
  document.getElementById('links').classList.toggle('hide-toggle');
  const icon = document.getElementById('icon');
  if (icon.classList.contains('fa-bars')){
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
  } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
  }
});
