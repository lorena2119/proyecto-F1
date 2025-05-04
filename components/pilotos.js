import { pilotos as pilotosBase } from "../data/pilotos.js";
let pilotos = JSON.parse(localStorage.getItem("piloto")) || pilotosBase;


class PilotoCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      
      const style = document.createElement("style");
      style.textContent = `
        .container {
          display: grid;
          grid-template-columns: repeat(4, minmax(245px, 340px));
          gap: 1.5rem;
          padding: 1rem;
          justify-content: center;
          }

        .card {
          background: #fff;
          border: 3px solid #ddd;
          border-radius: 12px;
          overflow: hidden;
          font-family: sans-serif;
          position: relative;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
  
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.33);
          border-right-color: red;
          border-bottom-color: red;
        }
  
        .info {
          padding: 1rem 1rem 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
  
        .nombre {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
  
        .nombre .nombre-pequeno {
          font-family: 'Bruno Ace SC';
          font-size: 0.7em;
          text-transform: uppercase;
          color: var(--color-2);
          font-weight: 600;
          letter-spacing: 0.05em;
        }
        
        .nombre .apellido {
          font-family: 'Bruno Ace SC';
          font-size: 1.5em;
          font-weight: bold;
          color: #111;
        }
  
        .equipo {
          font-size: 0.95em;
          color: #888;
          margin-top: 0.3rem;
          font-family: "Formula 1 Regular";
        }

        .equipo:hover {
          color: var(--color-1);
        }
  
        .extra {
          font-size: 0.8em;
          margin-top: 0.4rem;
          color: #333;
          font-family: "Formula 1 Regular";
          font-size: 0.75em;
        }
  
        .habilidades {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-top: 0.5rem;
          font-family: 'Bruno Ace SC';
        }
  
        .chip {
          background-color: var(--color-2);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          font-size: 0.7em;
          font-weight: 500;
        }
  
        .foto {
          width: 100%;
          max-height: 180px;
          object-fit: contain;
          margin-top: auto;
        }
        
        @media screen and (max-width: 1500px) {
          .container {
            grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
            margin: 1rem 35px;
            }
        }
      `;
  
      const container = document.createElement("div");
      container.classList.add("container");

      pilotos.forEach((piloto) => {
        const [nombre, ...resto] = piloto.nombre.split(" ");
        const apellido = resto.join(" ");
  
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <div class="info">
            <div class="nombre">
              <span class="nombre-pequeno">${nombre}</span>
              <span class="apellido">${apellido}</span>
            </div>
            <div class="equipo">${piloto.equipo}</div>
            <div class="extra"><strong>Rol:</strong> ${piloto.rol}</div>
            <div class="extra"><strong>Experiencia:</strong> ${piloto.experiencia} años</div>
            <div class="habilidades">
              ${piloto.habilidades.map(h => `<span class="chip">${h}</span>`).join('')}
            </div>
          </div>
          <img class="foto" src="${piloto.url}" alt="${piloto.nombre}">
        `;
        container.appendChild(card);
      });
  
      shadow.appendChild(style);
      shadow.appendChild(container);

    }
}

const driversLinks = document.querySelectorAll('.drivers-link');
const driversSection = document.getElementById('drivers-section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();


    if ([...driversLinks].includes(link)) {
      driversSection.style.display = 'block';
    } else {
      driversSection.style.display = 'none';
    }


    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});

customElements.define('piloto-card', PilotoCard);


// Component de card de admin
class PilotoCardAdmin extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    
    const style = document.createElement("style");
    style.textContent = `
      .container {
        display: grid;
        grid-template-columns: repeat(4, minmax(245px, 340px));
        gap: 1.5rem;
        padding: 1rem;
        justify-content: center;
        }

      .card {
        background: #fff;
        border: 3px solid #ddd;
        border-radius: 12px;
        overflow: hidden;
        font-family: sans-serif;
        position: relative;
        min-height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.33);
        border-right-color: red;
        border-bottom-color: red;
      }

      .info {
        padding: 1rem 1rem 0 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .nombre {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
      }

      .nombre .nombre-pequeno {
        font-family: 'Bruno Ace SC';
        font-size: 0.7em;
        text-transform: uppercase;
        color: var(--color-2);
        font-weight: 600;
        letter-spacing: 0.05em;
      }
      
      .nombre .apellido {
        font-family: 'Bruno Ace SC';
        font-size: 1.5em;
        font-weight: bold;
        color: #111;
      }

      .equipo {
        font-size: 0.95em;
        color: #888;
        margin-top: 0.3rem;
        font-family: "Formula 1 Regular";
      }

      .equipo:hover {
        color: var(--color-1);
      }

      .extra {
        font-size: 0.8em;
        margin-top: 0.4rem;
        color: #333;
        font-family: "Formula 1 Regular";
        font-size: 0.75em;
      }

      .habilidades {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        margin-top: 0.5rem;
        font-family: 'Bruno Ace SC';
      }

      .chip {
        background-color: var(--color-2);
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        font-size: 0.7em;
        font-weight: 500;
      }

      .foto {
        width: 100%;
        max-height: 180px;
        object-fit: contain;
        margin-top: auto;
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
          grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));font-family: "Bruno Ace SC";
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

      .button2 {
            position: absolute;
            top: 5px;
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
    `;

    const container = document.createElement("div");
    container.classList.add("container");

    const renderCard = (piloto) => {
      const [nombre, ...resto] = piloto.nombre.split(" ");
      const apellido = resto.join(" ");

      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute('data-id', piloto.id);
      card.innerHTML = `
        <div class="info">
          <div class="nombre">
            <span class="nombre-pequeno">${nombre}</span>
            <span class="apellido">${apellido}</span>
          </div>
          <div class="equipo">${piloto.equipo}</div>
          <div class="extra"><strong>Rol:</strong> ${piloto.rol}</div>
          <div class="extra"><strong>Experiencia:</strong> ${piloto.experiencia} años</div>
          <div class="habilidades">
            ${piloto.habilidades.map(h => `<span class="chip">${h}</span>`).join('')}
          </div>
        </div>
        <img class="foto" src="${piloto.url}" alt="${piloto.nombre}">
        <button class="button2">
            <span class="X"></span>
            <span class="Y"></span>
          </button>
        `;
        const deleteButton = card.querySelector('.button2');
        deleteButton.addEventListener('click', () => {
          card.remove();
          const index = pilotos.findIndex(p => p.id === piloto.id);
          if (index !== -1) {
            pilotos.splice(index, 1);
            localStorage.setItem("piloto", JSON.stringify(pilotos));
          }
        });
    
        container.appendChild(card);
      };

    // Renderizar pilotos iniciales
    pilotos.forEach(renderCard);

    const buttonAdd = document.createElement('button');
    buttonAdd.setAttribute('data-modal-target', '#modal');
    buttonAdd.id = 'buttonAdd';
    buttonAdd.textContent = 'Agregar Piloto';

    const overlay = document.createElement('div');
    overlay.id = "overlay";

    const formAdd = document.createElement('form');
    formAdd.classList.add("modal");
    formAdd.id = 'modal';
    formAdd.innerHTML = `
      <div class="modal-header">
        <h2>Nuevo Piloto</h2>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        <div class="input-box"><input id="name" type="text" required><label>Nombre</label></div>
        <div class="input-box"><input type="text" required id="team"><label>Equipo</label></div>
        <div class="input-box"><input type="text" required id="rol"><label>Rol</label></div>
        <div class="input-box"><input type="text" required id="experience"><label>Años Experiencia</label></div>
        <div class="input-box"><input type="text" required id="skills"><label>Habilidades (coma separadas)</label></div>
        <div class="input-box"><input type="text" required id="image"><label>Url Imagen</label></div>
        <button type="submit" class="button">Agregar</button>
      </div>
    `;

    shadow.appendChild(style);
    shadow.appendChild(overlay);
    shadow.appendChild(formAdd);
    shadow.appendChild(container);
    shadow.appendChild(buttonAdd);

    // Abrir y cerrar formulario de agregar piloto
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

    // Manejo del formulario
    const form = shadow.getElementById('modal');
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = shadow.getElementById('name').value;
        const team = shadow.getElementById('team').value;
        const rol = shadow.getElementById('rol').value;
        const experience = shadow.getElementById('experience').value;
        const skills = shadow.getElementById('skills').value;
        const image = shadow.getElementById('image').value;

        const newPiloto = {
          id: pilotos.length + 1,
          nombre: name,
          equipo: team,
          rol: rol,
          experiencia: experience,
          habilidades: skills.split(',').map(h => h.trim()),
          url: image
        };

        pilotos.push(newPiloto);
        localStorage.setItem("piloto", JSON.stringify(pilotos));
        renderCard(newPiloto); // Renderizar nuevo piloto

        // Cerrar modal
        form.classList.remove('active');
        overlay1.classList.remove('active');

        // Limpiar campos
        shadow.getElementById('name').value = "";
        shadow.getElementById('team').value = "";
        shadow.getElementById('rol').value = "";
        shadow.getElementById('experience').value = "";
        shadow.getElementById('skills').value = "";
        shadow.getElementById('image').value = "";
      });
    }
  }
}

customElements.define('piloto-card-admin', PilotoCardAdmin);
  