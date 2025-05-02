import { circuitos } from '../data/circuitos.js';

class CircuitoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const style = `
      <style>
        .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(280px, 360px));
        gap: 5rem;
        padding: 2rem;
        justify-content: center;
        }


        .card:nth-child(7) {
            grid-column: 2; 
        }
  
        .card {
          font-family: 'Arial', sans-serif;
          border: 2px solid #ccc;
          border-radius: 15px;
          padding: 1rem;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 1rem;
        }
  
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
  
        .title {
          font-size: 1.3rem;
          font-weight: bold;
        }
  
        .info {
          display: flex;
          justify-content: space-around;
          text-align: center;
          font-size: 0.85rem;
        }
  
        .track-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          background: #f5f5f5;
        }
  
        .description {
          font-size: 0.9rem;
        }
  
        .record, .winners {
          font-size: 0.8rem;
        }
  
        .section-title {
          font-weight: bold;
          margin-top: 0.5rem;
          margin-bottom: 0.3rem;
        }
  
        ul {
          padding-left: 1rem;
          margin: 0;
        }

        @media screen and (max-width: 1300px) {
          .grid {
              grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
              gap: 4rem;
              padding: 1 rem 3.5rem;
              margin: 0 25px;
        }
        
        .card:nth-child(7) {
            grid-column: auto; 
        }

        @media screen and (max-width: 415px) {
          .grid {
              grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
              gap: 4rem;
              padding: 1 rem 3.5rem;
              margin: 0 28px 0 0;
        }
        
        .card:nth-child(7) {
            grid-column: auto; 
        }
      </style>
    `;
  
    const cards = circuitos.map(circuito => {
      const winnersList = circuito.ganadores.map(g => `<li>${g.temporada}: Piloto #${g.piloto}</li>`).join('');
      return `
        <div class="card">
          <div class="header">
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
        </div>
      `;
    }).join('');
  
    this.shadowRoot.innerHTML = `${style}<div class="grid">${cards}</div>`;
  }
  
}

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

customElements.define('circuito-card', CircuitoCard);
