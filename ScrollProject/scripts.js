document
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.getElementById("nav").className = "nav-black";
  } else {
    document.getElementById("nav").className = "nav";
  }
});


document.addEventListener('DOMContentLoaded', () => {
  
  const navbar = document.querySelector('.nav');
  const navbarHeight = navbar.offsetHeight;

  document.querySelectorAll('.nav a').forEach(pepito => {
    pepito.addEventListener('click', function (a) {
      document.getElementById('links').classList.toggle('hide-toggle');
      const icon = document.getElementById('icon');
  if (icon.classList.contains('fa-bars')){
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
  } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
  }
      a.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    });
  });
});


document.getElementById("descubre").addEventListener('click', ()=>{
  const navbar = document.querySelector('.nav');
  const navbarHeight = navbar.offsetHeight;
  window.scrollTo({
    top: document.getElementById("tours").offsetTop - navbarHeight,
    behavior: 'smooth'
  });
})


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
