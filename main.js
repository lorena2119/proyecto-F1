import './components/circuitos.js'
import './components/pilotos.js'
import './components/simulacion.js'
import './components/vehiculos.js';
import { vehiculos } from './data/vehiculos.js';

const container = document.getElementById('vehiculos-container');

vehiculos.forEach((vehiculo, index) => {
  const card = document.createElement("vehiculo-card");
  card.data = vehiculo;
  card.dataset.id = index; // para identificarlo luego
  container.appendChild(card);

  localStorage.setItem('borrar-elemento',card.addEventListener("vehiculo-eliminado", (e) => {
    const id = e.detail;
    vehiculos.splice(id, 1); 
    card.remove(); 
  }));
});

document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".hamburger-icon");

  if (icon) {
    icon.addEventListener("click", () => {
      const menu = document.querySelector(".menu-links");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    });
  }
});