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

        // Verificar si el contenido de la etiqueta <tm> es solo texto o contiene HTML
        const contenidoHTML = node.innerHTML.trim();
        const esSoloTexto = contenidoHTML.indexOf('<') === -1; // No contiene '<'

        // Separar el contenido por el carácter de separación ":"
        let datos = [];
        if (esSoloTexto) {
          datos = contenidoHTML.split(':').map(dato => dato.trim());
        } else {
          // Si contiene HTML, conservar el contenido HTML
          datos.push(contenidoHTML);
        }

        // Crear celda para cada dato
        datos.forEach(dato => {
          const celda = document.createElement(cabecera ? 'th' : 'td');
          // Si el dato está vacío, usar un espacio en blanco
          celda.innerHTML = dato === '' ? ' ' : dato;
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
