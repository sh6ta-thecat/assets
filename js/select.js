/**
 * Activa o desactiva un segundo select basado en el valor seleccionado del primero.
 * @param {string} select1Id - El ID del primer select.
 * @param {string} select2Id - El ID del segundo select.
 */
function activateSelect(select1Id, select2Id) {
    var select1 = document.getElementById(select1Id);
    var select2 = document.getElementById(select2Id);

    if (select1.value !== '') {
        select2.disabled = false;
    } else {
        select2.disabled = true;
    }
}
