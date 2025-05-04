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
        object-fit: fill;
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
            display: flex;
            position: relative;
            justify-content: center;
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
        <div class="section-title">Motor: <span class="chip">${equipo.motor}</div>
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
const searchBox = document.createElement("div");
searchBox.classList.add("input-box1");
searchBox.innerHTML = `
  <div class="input-box2">
    <input id="searchInput" type="text" required placeholder=" ">
    <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar equipo...</label>
  </div>
`;
    shadow.appendChild(searchBox);
    shadow.appendChild(container);
    const searchInput = shadow.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  // Limpiar contenedor antes de renderizar resultados filtrados
  container.innerHTML = "";

  const filteredPilotos = equipos.filter(p =>
    p.nombre.toLowerCase().includes(value) ||
    p.pais.toLowerCase().includes(value)
  );

  filteredPilotos.forEach(agregarTarjeta);
});
    
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


//Funciones admin
class EquiposCardAdmin extends HTMLElement {
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
          object-fit: fill;
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
      right: 5%;
      box-shadow: 0px 3px 20px rgba(255, 255, 255, 0.4);
      background-color: rgb(0, 0, 0);
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
            width: 35px;
            height: 35px;
            background: #d32f2f;
            border: 2px solid #b71c1c;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.2s, background 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
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
          <div class="section-title">Motor: <span class="chip">${equipo.motor}</div>
          <div class="record">
            <div class="section-title">Pilotos:</div>
            ${equipo.pilotos.map(h => `<span class="chip">${h}</span>`)}
          </div>
        `;
        
        container.appendChild(card);
  };
  
      equipos.forEach(agregarTarjeta);
      shadow.appendChild(style);
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
        <h2>Nuevo Equipo</h2>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        <div class="input-box"><input id="name" type="text" required><label>Nombre</label></div>
        <div class="input-box"><input type="text" required id="country"><label>Pais</label></div>
        <div class="input-box"><input type="text" required id="motor"><label>Motor</label></div>
        <div class="input-box"><input type="text" required id="pilots"><label>Pilotos (coma separadas)</label></div>
        <div class="input-box"><input type="text" required id="image"><label>Url Imagen</label></div>
        <button type="submit" class="button">Agregar</button>
      </div>
    `;

    

    // Crear barra de búsqueda
const searchBox = document.createElement("div");
searchBox.classList.add("input-box1");
searchBox.innerHTML = `
  <div class="input-box2">
    <input id="searchInput" type="text" required placeholder=" ">
    <label for="searchInput"><box-icon name='search' color='#ffffff' ></box-icon>Buscar equipo...</label>
  </div>
`;
shadow.appendChild(searchBox);
    shadow.appendChild(overlay);
    shadow.appendChild(formAdd);
    shadow.appendChild(container);
    shadow.appendChild(buttonAdd);
    const searchInput = shadow.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  // Limpiar contenedor antes de renderizar resultados filtrados
  container.innerHTML = "";

  const filteredteams = equipos.filter(p =>
    p.nombre.toLowerCase().includes(value) ||
    p.pais.toLowerCase().includes(value)
  );

  filteredteams.forEach(agregarTarjeta);
});
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
        const country = shadow.getElementById('country').value;
        const motor = shadow.getElementById('motor').value;
        const pilots = shadow.getElementById('pilots').value;
        const image = shadow.getElementById('image').value;

        const newteam = {
          nombre: name,
          pais: country,
          motor: motor,
          pilotos: pilots.split(',').map(h => h.trim()),
          url: image
        };

        equipos.push(newteam);
        localStorage.setItem("equipo", JSON.stringify(equipos));
        renderCard(newteam); // Renderizar nuevo piloto

        // Cerrar modal
        form.classList.remove('active');
        overlay1.classList.remove('active');

        // Limpiar campos
        shadow.getElementById('name').value = "";
        shadow.getElementById('country').value = "";
        shadow.getElementById('motor').value = "";
        shadow.getElementById('pilots').value = "";
        shadow.getElementById('image').value = "";
      });
    }
  }
}
  
  customElements.define('equipos-card-admin', EquiposCardAdmin);
  