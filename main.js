import './components/circuitos.js'
import './components/equipos.js'
import './components/pilotos.js'
import './components/simulacion.js'
import './components/vehiculos.js';
import { vehiculos as vehiculosData } from "./data/vehiculos.js";
import {circuitos as circuitosData} from "./data/circuitos.js"

// Función para redireccionar según el usuario: user o admin
const credenciales = {
  admin: { user: 'admin', password: 'admin123' },
  usuario: { user: 'user', password: 'user123' }
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (user === credenciales.admin.user && password === credenciales.admin.password) {
      mostrarLoading('Accediendo como administrador...', 'inicioAdmin.html');
    } else if (user === credenciales.usuario.user && password === credenciales.usuario.password) {
      mostrarLoading('Accediendo como usuario...', 'inicio.html');
    } else {
      error.textContent = 'Credenciales incorrectas';
    }
  })});
    
  function mostrarLoading(mensaje, redireccion) {
    const loadingScreen = document.getElementById('loading-screen');
    const loaderText = loadingScreen.querySelector('.loader p');
    loaderText.textContent = mensaje;
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
      window.location.href = redireccion;
    }, 2000);
  }
  

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
  



  
  