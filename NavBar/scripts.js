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