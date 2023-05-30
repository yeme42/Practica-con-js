
function cargar(){
    let nombre = document.getElementById("nombre").value;
    let materia = document.getElementById("materia").value;
    let nota =document.getElementById("nota").value;
    

    let boletin = {
        nombre: nombre,
        materia: materia,
        nota: nota 
        
    }
    alert('el alumno ' + nombre + ' en ' + materia + ' tuvo una calificacion de ' + nota + ' puntos.')
    
}
function vaciar(){
    nombre.value = "";
    materia.value = "";
    nota.value = "";
}


