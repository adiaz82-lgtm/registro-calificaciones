
const nombre = document.getElementById("campo-nombre");
const parcial1 = document.getElementById("campo-parcial1");
const parcial2 = document.getElementById("campo-parcial2");

const registrar = document.getElementById("boton-registrar");
const reiniciar = document.getElementById("boton-reiniciar");
const lista = document.getElementById("lista-tarjetas");

// Registrar un estudiante
registrar.addEventListener("click", function() {

    const alumno = nombre.value.trim();
    const nota1 = parseFloat(parcial1.value);
    const nota2 = parseFloat(parcial2.value);

    if (alumno === "" || parcial1.value === "" || parcial2.value === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Las calificaciones deben estar entre 0 y 10.");
        return;
    }

    const promedio = (nota1 + nota2) / 2;

    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
        <h3>${alumno}</h3>
        <p>Parcial 1: ${nota1}</p>
        <p>Parcial 2: ${nota2}</p>
        <p>Promedio: ${promedio.toFixed(2)}</p>
        <strong>${promedio >= 6 ? "Aprobado" : "No aprobado"}</strong>
    `;

    lista.appendChild(tarjeta);

    nombre.value = "";
    parcial1.value = "";
    parcial2.value = "";

});

// Borrar todos los registros
reiniciar.addEventListener("click", function() {
    lista.innerHTML = "";
});
