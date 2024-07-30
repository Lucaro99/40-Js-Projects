document.addEventListener("DOMContentLoaded", function () {
  // Obtiene referencias a elementos del DOM
  const input = document.getElementById("lista");
  const guardarBtn = document.getElementById("guardar");
  const limpiarBtn = document.getElementById("limpiar");
  const mensaje = document.getElementById("mensaje");
  const listaItems = document.getElementById("lista-items");

  let itemEnEdicion = null; // Variable para guardar el ítem que se está editando

  // Cargar items desde localStorage cuando se carga la página
  cargarItems();

  // Asocia eventos a los botones
  guardarBtn.addEventListener("click", agregarItem);
  limpiarBtn.addEventListener("click", limpiarLista);

  // Permite agregar un ítem presionando la tecla Enter
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      agregarItem();
    }
  });

  /*Función para agregar un ítem a la lista*/
  function agregarItem() {
    const texto = input.value.trim(); // Obtiene el texto del input

    if (texto === "") {
      // Verifica si el texto está vacío
      mostrarMensaje("El campo no puede estar vacío", "error");
      return;
    }

    if (itemEnEdicion) {
      // Si hay un ítem en edición, actualiza su texto
      itemEnEdicion.querySelector("p").textContent = texto;
      actualizarEnLocalStorage(); // Actualiza los items en localStorage
      mostrarMensaje("Item editado", "success");
      itemEnEdicion = null; // Limpiar el ítem en edición
    } else {
      // Crea un nuevo ítem y lo agrega a la lista
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
        <p>${texto}</p>
        <div class="icon">
          <i class="fa-regular fa-square-check"></i>
          <i class="fa-regular fa-pen-to-square"></i>
          <i class="fa-regular fa-trash-can"></i>
        </div>
      `;
      listaItems.appendChild(item);
      guardarEnLocalStorage(texto); // Guarda el nuevo ítem en localStorage
      mostrarMensaje("Item agregado a la lista", "success");
      agregarEventosItem(item); // Asocia eventos al nuevo ítem
    }

    input.value = ""; // Limpia el input después de agregar o editar
  }

  /*Función para limpiar la lista de ítems*/
  function limpiarLista() {
    listaItems.innerHTML = ""; // Elimina todos los ítems de la lista
    localStorage.removeItem("items"); // Borra los ítems de localStorage
    mostrarMensaje("Lista limpiada", "success");
  }

  /*Función para cargar los ítems desde localStorage al cargar la página*/
  function cargarItems() {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach((itemTexto) => {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
        <p>${itemTexto}</p>
        <div class="icon">
          <i class="fa-regular fa-square-check"></i>
          <i class="fa-regular fa-pen-to-square"></i>
          <i class="fa-regular fa-trash-can"></i>
        </div>
      `;
      listaItems.appendChild(item);
      agregarEventosItem(item); // Asocia eventos a los ítems cargados
    });
  }

  /*Función para guardar un ítem en localStorage*/
  function guardarEnLocalStorage(texto) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(texto); // Añade el nuevo ítem a la lista
    localStorage.setItem("items", JSON.stringify(items)); // Guarda la lista actualizada
  }

  /*Función para mostrar mensajes al usuario*/
  function mostrarMensaje(mensajeTexto, tipo) {
    mensaje.style.display = "block"; // Muestra el mensaje
    if (tipo === "success") {
      mensaje.className = "mensaje"; // Aplica estilo para éxito
    } else if (tipo === "error") {
      mensaje.className = "mensaje-error"; // Aplica estilo para error
    }
    mensaje.querySelector("p").textContent = mensajeTexto; // Establece el texto del mensaje
    setTimeout(() => {
      mensaje.style.display = "none"; // Oculta el mensaje después de 3 segundos
    }, 3000);
  }

  /*Función para asociar eventos a cada ítem de la lista*/
  function agregarEventosItem(item) {
    const checkBtn = item.querySelector(".fa-square-check");
    const editBtn = item.querySelector(".fa-pen-to-square");
    const deleteBtn = item.querySelector(".fa-trash-can");

    // Evento para marcar/desmarcar ítem como completado
    checkBtn.addEventListener("click", function () {
      const isCompleted = item.classList.toggle("completed"); // Alterna la clase 'completed'

      // Actualiza estado de los botones
      if (isCompleted) {
        editBtn.style.color = "gray";
        deleteBtn.style.color = "gray";
        editBtn.style.pointerEvents = "none";
        deleteBtn.style.pointerEvents = "none";
      } else {
        editBtn.style.color = "";
        deleteBtn.style.color = "";
        editBtn.style.pointerEvents = "auto";
        deleteBtn.style.pointerEvents = "auto";
      }

      mostrarMensaje(
        isCompleted ? "Item marcado como completado" : "Item desmarcado",
        "success"
      );
      actualizarEnLocalStorage(); // Actualiza los ítems en localStorage
    });

    // Evento para editar el ítem
    editBtn.addEventListener("click", function () {
      input.value = item.querySelector("p").textContent; // Rellena el input con el texto del ítem
      itemEnEdicion = item; // Guarda el ítem que se está editando
    });

    // Evento para eliminar el ítem
    deleteBtn.addEventListener("click", function () {
      listaItems.removeChild(item); // Elimina el ítem de la lista
      eliminarDeLocalStorage(item.querySelector("p").textContent); // Elimina el ítem de localStorage
      mostrarMensaje("Item eliminado", "success");
    });
  }

  /* Función para actualizar los ítems en localStorage*/
  function actualizarEnLocalStorage() {
    const items = [];
    listaItems.querySelectorAll(".item p").forEach((p) => {
      items.push(p.textContent); // Agrega el texto de cada ítem a la lista
    });
    localStorage.setItem("items", JSON.stringify(items)); // Guarda la lista actualizada
  }

  /*Función para eliminar un ítem de localStorage*/
  function eliminarDeLocalStorage(texto) {
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items = items.filter((item) => item !== texto); // Filtra el ítem eliminado
    localStorage.setItem("items", JSON.stringify(items)); // Guarda la lista actualizada
  }
});
