import  { equipos as equiposBase }  from "../data/equipos.js";
let equipos = JSON.parse(localStorage.getItem("equipos")) || equiposBase;

class EquiposCard extends HTMLElement {
  constructor(){
    super();
    
    const shadow = this.attachShadow({ mode: "open" });
    
    const style = document.createElement("style");
    style.textContent = `
    .container {
      display: grid;
      grid-template-columns: repeat(3, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem;
}

    .container .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1f1f1f;
      padding: 0.75rem 1rem;
      border-radius: 10px 10px 0 0;
      font-weight: bold;
      color: #fff;
    }

      .card {
        background: #222;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s;
        position:relative;
      }

      .card:hover {
        transform: translateY(-5px);
      }

      .track-img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-bottom: 2px solid #ff1e00;
        background-color:white;
      }

      .info, .record, .winners, .description {
        padding: 1rem;
        color: #ddd;
      }

      .info {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
      }

      .section-title {
        color: #ff1e00;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .input-box1{
        display: flex;
        justify-content: center;
        align
        width: 310px;
        margin: 20px 0;
      }
         .input-box2 {
  position: relative;
  width: 300px;
}

.input-box2 input {
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 30px;
  color: white;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease;
}

.input-box2 input:focus {
  border-color: #ff1f1f;
  box-shadow: 0 0 10px #ff1f1f;
}

.input-box2 label {
  position: absolute;
  left: 15px;
  display: flex;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  pointer-events: none;
  transition: 0.3s ease;
  font-size: 14px;
}

.input-box2 input:focus + label,
.input-box2 input:not(:placeholder-shown) + label {
  top: 0;
  left: 12px;
  font-size: 12px;
  background: #b60000;
  padding: 0 6px;
  border-radius: 12px;
  color: #fff;
}

        .title {
          font-size: 1.2rem;
        }

        .country {
          font-size: 0.9rem;
          color: #aaa;
        }
          @media screen and (max-width: 1500px) {
        .container {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));font-family: "Bruno Ace SC";
          margin: 1rem 35px;
          }
    `;

    const container = document.createElement("div")
    container.classList.add("container")

    const agregarTarjeta = (equipo) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="header">
          <div class="title">${equipo.nombre}</div>
          <div class="country">${equipo.pais}</div>
        </div>
        <img class="track-img" src="${equipo.imagen}" alt="${equipo.nombre}">
        <div class="record">
          <div class="section-title">Pilotos:</div>
          ${equipo.pilotos.map(h => `<span class="chip">${h}</span>`)}
        </div>
      `;
      
      container.appendChild(card);
};

    equipos.forEach(agregarTarjeta);
    shadow.appendChild(style);
    shadow.appendChild(container)
    // Crear barra de búsqueda
// const searchBox = document.createElement("div");
// searchBox.classList.add("input-box1");
// searchBox.innerHTML = `
//   <div class="input-box2">
//     <input id="searchInput" type="text" required placeholder=" ">
//     <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar circuito...</label>
//   </div>
// `;
//     shadow.appendChild(searchBox);
//     shadow.appendChild(container);
//     const searchInput = shadow.getElementById("searchInput");

// searchInput.addEventListener("input", () => {
//   const value = searchInput.value.toLowerCase();

//   // Limpiar contenedor antes de renderizar resultados filtrados
//   container.innerHTML = "";

//   const filteredPilotos = circuitos.filter(p =>
//     p.nombre.toLowerCase().includes(value) ||
//     p.pais.toLowerCase().includes(value)
//   );

//   filteredPilotos.forEach(agregarTarjeta);
// });
    
const teamsLinks = document.querySelectorAll('.teams-links');
const teamsSection = document.getElementById('teams-section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();


    if ([...teamsLinks].includes(link)) {
        teamsSection.style.display = 'block';
    } else {
        teamsSection.style.display = 'none';
    }


    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
  }}

customElements.define('equipos-card', EquiposCard);
