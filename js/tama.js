document.addEventListener('DOMContentLoaded', function() {
  // Obtener todas las etiquetas <tama> en el documento
  const tablasMagicas = document.querySelectorAll('tama');

  tablasMagicas.forEach(t => {
    // Crear una tabla
    const tabla = document.createElement('table');
    let cabecera = true; // Flag para identificar si estamos en la cabecera o no

    // Recorrer todos los hijos de la etiqueta <tama>
    t.childNodes.forEach(node => {
      if (node.tagName === 'TM') {
        // Crear fila en la tabla
        const fila = document.createElement('tr');
        
        // Obtener el contenido HTML de la etiqueta <tm>
        const contenidoHTML = node.innerHTML;

        // Dividir el contenido por el carácter de separación ":"
        const datos = contenidoHTML.split(' : ');

        // Crear celda para cada dato
        datos.forEach(dato => {
          const celda = document.createElement(cabecera ? 'th' : 'td');
          // Si el dato está vacío, usar un espacio en blanco
          celda.innerHTML = dato.trim() === '' ? ' ' : dato.trim();
          fila.appendChild(celda);
        });

        // Agregar fila a la tabla
        tabla.appendChild(fila);
        
        // Ya no estamos en la cabecera
        cabecera = false;
      }
    });

    // Reemplazar la etiqueta <tama> por la tabla generada
    t.parentNode.replaceChild(tabla, t);
  });
});
