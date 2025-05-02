import './components/circuitos.js'
import './components/pilotos.js'
import './components/simulacion.js'
import './components/vehiculos.js';
import { vehiculos as vehiculosData } from "./data/vehiculos.js";

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
