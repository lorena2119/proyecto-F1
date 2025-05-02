import './components/circuitos.js'
import './components/pilotos.js'
import './components/simulacion.js'
import './components/vehiculos.js';
import { vehiculos as vehiculosData } from "./data/vehiculos.js";

// Función para redireccionar según el usuario: user o admin
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      let userUser = "user123";
      let userAdmin = "admin123";
      let passwordUser = "user123";
      let passwordAdmin = "admin123";

      let user = document.getElementById('user').value;
      let password = document.getElementById('password').value;

      if(user === userUser && password === passwordUser){
          window.location.href = 'inicio.html';
      } else if(user === userAdmin && password === passwordAdmin){
          window.location.href = 'inicioAdmin.html';
      } else {
          document.getElementById('error').textContent = 'Contraseña o usuario incorrecto';
      }
    });
  }
});

let vehiculos = JSON.parse(localStorage.getItem("vehiculos_guardados")) || [...vehiculosData];
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".hamburger-icon");

  if (icon) {
    icon.addEventListener("click", () => {
      const menu = document.querySelector(".menu-links");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  }
})

const container = document.getElementById('vehiculos-container');

vehiculos.forEach((vehiculo, index) => {
  const card = document.createElement("vehiculo-card");
  card.data = vehiculo;
  card.dataset.id = index;
  container.appendChild(card);

  card.addEventListener("vehiculo-eliminado", (e) => {
    const id = e.detail;
    vehiculos.splice(id, 1); 
    card.remove(); 
    localStorage.setItem("vehiculos_guardados", JSON.stringify(vehiculos));
  })

  let vehiculosGuardados = localStorage.getItem("vehiculos_guardados");
  if (vehiculosGuardados) {
    vehiculos = JSON.parse(vehiculosGuardados); 
  }})
