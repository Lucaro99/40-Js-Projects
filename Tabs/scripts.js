let contenedorBtn = document.getElementById("btn")
contenedorBtn.querySelectorAll("button").forEach(boton=> {
    boton.addEventListener('click', (evento)=>{
       let losBotones = contenedorBtn.querySelectorAll("button");
       losBotones.forEach(b=>{
           let nombreTab = document.getElementById(b.id.substring(4));
           if(b === evento.target){
            b.className = 'btn-active';
            nombreTab.className = 'info-active';
        }else{
            b.className = 'btn-none'
            nombreTab.className = 'info-none';
        }
       })

    })
    
});
