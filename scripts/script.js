// Constantes con los elementos de html (DOM)
const inputAgregar = document.getElementById('input_agregar');
const btnAñadir = document.getElementById('btn_añadir');
const lista = document.getElementById('lista');

// Función para agregar una tarea
function agregarTarea() {
    const tareaTexto = inputAgregar.value.trim();
    if (tareaTexto !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <svg data="realizado" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            </svg>
            <p class="tarea">${tareaTexto}</p>
            <svg data="eliminado" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        `;
        lista.appendChild(li);
        inputAgregar.value = ''; // Limpiar el input
    }
}

// Función para marcar o eliminar una tarea
function manejarTarea(event) {
    const elemento = event.target;
    if (elemento.tagName === 'svg') {
        const accion = elemento.getAttribute('data');
        const li = elemento.parentElement;
        const tarea = li.querySelector('.tarea'); // Selecciona el elemento de texto

        if (accion === 'realizado') {
            li.classList.toggle('realizado'); // Agregar o quitar clase para marcar como realizado
            tarea.classList.toggle('completado'); // Agregar o quitar clase para tachar el texto
        } else if (accion === 'eliminado') {
            lista.removeChild(li); // Eliminar la tarea
        }
    }
}


// Eventos
btnAñadir.addEventListener('click', agregarTarea);
lista.addEventListener('click', manejarTarea);
