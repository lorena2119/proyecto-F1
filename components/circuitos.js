import { circuitos } from "../data/circuitos.js";

class CircuitoCard extends HTMLElement {
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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        object-fit: contain;
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

      .description {
        font-size: 0.95rem;
        line-height: 1.4;
        color: #bbb;
      }

      .winners ul {
        list-style: none;
        padding-left: 0;
        font-size: 0.85rem;
      }

      .winners li {
        margin-bottom: 0.3rem;
      }

.button2 {
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 25px;
            height: 25px;
            background: #d32f2f;
            border: 2px solid #b71c1c;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.2s, background 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            }

        .X, .Y {
            position: absolute;
            width: 16px;
            height: 2px;
            background: white;
            }

        .X {
            transform: rotate(45deg);
            }

        .Y {
            transform: rotate(-45deg);
            }

        .button2:hover {
            background: #b71c1c;
            transform: scale(1.1);
            }

        .button2:active {
            transform: scale(0.9);
            background: #880e4f;
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

    circuitos.forEach((circuito) => {
      const winnersList = circuito.ganadores.map(g => `<li>${g.temporada}: Piloto #${g.piloto}</li>`).join('');
      const card = document.createElement("div")
      card.classList.add("card");
      card.innerHTML =`<div class="header">
        <div class="title">${circuito.nombre}</div>
        <div class="country">${circuito.pais}</div>
      </div>
      <img class="track-img" src="${circuito.imagen}" alt="${circuito.nombre}">
      <div class="info">
            <div><strong>Longitud:</strong><br>${circuito.longitud_km} km</div>
            <div><strong>Vueltas:</strong><br>${circuito.vueltas}</div>
          </div>
  
          <div class="description">${circuito.descripcion}</div>
  
          <div class="record">
            <div class="section-title">Récord de Vuelta:</div>
            ${circuito.record_vuelta.tiempo} - ${circuito.record_vuelta.piloto} (${circuito.record_vuelta.año})
          </div>
  
          <div class="winners">
            <div class="section-title">Ganadores recientes:</div>
            <ul>${winnersList}</ul>
          </div>
          `
          container.appendChild(card);
          shadow.appendChild(container)
          shadow.appendChild(style)
    });
    
const tracksLinks = document.querySelectorAll('.tracks-link');
const tracksSection = document.getElementById('tracks-section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();


    if ([...tracksLinks].includes(link)) {
      tracksSection.style.display = 'block';
    } else {
      tracksSection.style.display = 'none';
    }


    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
  }}

  customElements.define('circuito-card', CircuitoCard);




// Circuitos Admin
class CircuitoCardAdmin extends HTMLElement{
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
      background: #111;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  object-fit: contain;
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

.description {
  font-size: 0.95rem;
  line-height: 1.4;
  color: #bbb;
}

.winners ul {
  list-style: none;
  padding-left: 0;
  font-size: 0.85rem;
}

.winners li {
  margin-bottom: 0.3rem;
}

.button2 {
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 25px;
            height: 25px;
            background: #d32f2f;
            border: 2px solid #b71c1c;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.2s, background 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            }

        .X, .Y {
            position: absolute;
            width: 16px;
            height: 2px;
            background: white;
            }

        .X {
            transform: rotate(45deg);
            }

        .Y {
            transform: rotate(-45deg);
            }

        .button2:hover {
            background: #b71c1c;
            transform: scale(1.1);
            }

        .button2:active {
            transform: scale(0.9);
            background: #880e4f;
            }

.title {
  font-size: 1.2rem;
}

.country {
  font-size: 0.9rem;
  color: #aaa;
}
      .input-box{
        position: relative;
        width: 310px;
        margin: 20px 0;
        border-bottom: 2px solid #000000;
      }
      .input-box label{
        position: absolute;
        top:50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 1rem;
        color: #000000;
        pointer-events: none;
        transition: .5s;
      }
      .input-box input:focus~label,
      .input-box input:valid~label{
        top: -5px;
      }
      .input-box input{
        width: 100%;
        height: 40px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1rem;
        color: #000000;
        padding: 0 0px 0 5px;
      }
        .button{
        width: 100%;
        height: 40px;
        background: rgb(225, 6, 0);
        border: none;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        font-size: 1em;
        color: #ffffff;
        font-weight: 500;
        font-family: "Bruno Ace SC";
      }
      .modal{
        position: fixed;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%) scale(0);
        transition: 200ms ease-in-out;
        background-color: #ffffff;
        border-radius: 10px;
        z-index: 50000;
        width: 500px;
        max-width: 80%;
        }
      .modal.active{
        transform: translate(-50%, 50%) scale(1);
      }
      .modal-header{
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e4dddd;
      }
      h2{
        font-weight: bold;
        font-size: 2rem;
        color: #000000;
        margin: 0;
        text-align: center;
      }

      .modal-header .close-button{
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .modal-body{
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        padding: 10px 15px;

      }
      #overlay{
        position: fixed;
        opacity: 0;
        transition: 200ms ease-in-out;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 30000;
        background-color:rgba(0, 0, 0, 0.54);
        pointer-events: none
      }
        #overlay.active{
          pointer-events: all;
          opacity: 1;
        }
           @media screen and (max-width: 1500px) {
        .container {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));font-family: "Bruno Ace SC";
          margin: 1rem 35px;
          }
      }
      #buttonAdd{
        padding: 10px 10px;
        position: fixed; 
        bottom: 5%;
        font-family: "Bruno Ace SC";
        right: 10px;
        background-color: rgb(225, 6, 0);
        z-index: 20000;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        font-size: 1em;
        color: #ffffff;
        font-weight: 500;
      }
  
    `;

    const container = document.createElement("div")
    container.classList.add("container")

    circuitos.forEach((circuito) => {
      const winnersList = circuito.ganadores.map(g => `<li>${g.temporada}: Piloto #${g.piloto}</li>`).join('');
      const card = document.createElement("div")
      card.classList.add("card");
      card.innerHTML =`<div class="header">
        <div class="title">${circuito.nombre}</div>
        <div class="country">${circuito.pais}</div>
      </div>
      <img class="track-img" src="${circuito.imagen}" alt="${circuito.nombre}">
      <div class="info">
            <div><strong>Longitud:</strong><br>${circuito.longitud_km} km</div>
            <div><strong>Vueltas:</strong><br>${circuito.vueltas}</div>
          </div>
  
          <div class="description">${circuito.descripcion}</div>
  
          <div class="record">
            <div class="section-title">Récord de Vuelta:</div>
            ${circuito.record_vuelta.tiempo} - ${circuito.record_vuelta.piloto} (${circuito.record_vuelta.año})
          </div>
  
          <div class="winners">
            <div class="section-title">Ganadores recientes:</div>
            <ul>${winnersList}</ul>
          </div>
      <button class="button2">
            <span class="X"></span>
            <span class="Y"></span>
          </button>
          `
          container.appendChild(card);
    });
    const buttonAdd = document.createElement('button')
    buttonAdd.setAttribute('data-modal-target', '#modal')
    buttonAdd.id = 'buttonAdd'
    const formAdd = document.createElement('form')
    const overlay = document.createElement('div')
    overlay.id = "overlay"
    formAdd.classList.add("modal")
    formAdd.id = 'modal'
    buttonAdd.textContent = 'Agregar Piloto'
    formAdd.innerHTML = `
      <div class="modal-header">
        <h2>Nuevo Piloto</h2>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        <div class="input-box">
          <input id="name" type="text" required>
          <label>Nombre</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="team">
          <label>Equipo</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="rol">
          <label>Rol</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="experience">
          <label>Años Experiencia</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="skills">
          <label>Habilidades</label>
        </div>
        <div class="input-box">    
          <input type="text" required id="image">
          <label>Url Imagen</label>
        </div>
        <button type="submit" class="button">Agregar</button>
        </div>
      </div>
      
    `
    shadow.appendChild(style);
    shadow.appendChild(overlay)
    shadow.appendChild(formAdd);
    shadow.appendChild(container);
    shadow.appendChild(buttonAdd);

    const openModalButtons = shadow.querySelectorAll('[data-modal-target]');
    const closeModalButtons = shadow.querySelectorAll('[data-close-button]');
    const overlay1 = shadow.getElementById('overlay');

    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = shadow.querySelector(button.dataset.modalTarget);
        if (modal) {
          modal.classList.add('active');
          overlay1.classList.add('active');
        }
      });
    });

    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
          modal.classList.remove('active');
          overlay1.classList.remove('active');
        }
      });
    });
    const tracksLinks = document.querySelectorAll('.tracks-link');
const tracksSection = document.getElementById('tracks-section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();


    if ([...tracksLinks].includes(link)) {
      tracksSection.style.display = 'block';
    } else {
      tracksSection.style.display = 'none';
    }


    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
  }}

  customElements.define('circuito-card-admin', CircuitoCardAdmin);