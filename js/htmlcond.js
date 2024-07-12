
document.addEventListener('DOMContentLoaded', function() {
        // evaluar las condiciones
        function evaluateCondition(condition) {
            try {
                return eval(condition);
            } catch (e) {
                console.error('Error en la evaluación de la condición:', e);
                return false;
            }
        }
    
        // etiqueta condicional
        document.querySelectorAll('condicional').forEach(condicional => {
            const ifElement = condicional.querySelector('if');
            const elseElement = condicional.querySelector('else');
            
            if (ifElement) {
                const condition = ifElement.getAttribute('condic');
                if (evaluateCondition(condition)) {
                    ifElement.style.display = 'block';
                    if (elseElement) elseElement.style.display = 'none';
                } else {
                    ifElement.style.display = 'none';
                    if (elseElement) elseElement.style.display = 'block';
                }
            }
        });
    });
