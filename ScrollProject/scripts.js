window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.getElementById("nav").className = "nav-black";
  } else {
    document.getElementById("nav").className = "nav";
  }
});
