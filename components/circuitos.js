class CircuitoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set data(circuito) {
    this.shadowRoot.innerHTML = ''; 

    const style = document.createElement('style');
    style.textContent = `
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 2rem;
      justify-content: center;
    }

    .card {
      position: relative;
      font-family: 'Segoe UI', sans-serif;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      padding: 1.2rem;
      width: 100%;
      max-width: 420px;
      box-sizing: border-box;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
    }

    .button {
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

        .button:hover {
            background: #b71c1c;
            transform: scale(1.1);
            }

        .button:active {
            transform: scale(0.9);
            background: #880e4f;
            }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #2c3e50;
    }

    .country {
      font-size: 0.9rem;
      background-color: #3498db;
      color: #fff;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
    }

    .track-img {
      width: 100%;
      height: 180px;
      object-fit: contain;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    .info {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: #555;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #444;
    }

    .record, .winners {
      font-size: 0.8rem;
      color: #666;
    }

    .section-title {
      font-weight: bold;
      color: #333;
      margin-bottom: 0.4rem;
    }

    ul {
      padding-left: 1.2rem;
      margin: 0;
    }

    @media screen and (max-width: 1024px) {
      .grid {
        grid-template-columns: 1fr;
        padding: 1.5rem;
      }

      .card {
        margin: 0 auto;
        max-width: 85%;
      }
    }

    @media screen and (max-width: 500px) {
      .card {
        max-width: 90%;
        margin: 0 auto;
        padding: 1rem;
      }
    }
  </style>
`;

    const wrapper = document.createElement('div');
    wrapper.classList.add('card');
    const winnersList = circuito.ganadores.map(g => `<li>${g.temporada}: Piloto #${g.piloto}</li>`).join('');

    wrapper.innerHTML = `
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
      <button class="button">
            <span class="X"></span>
            <span class="Y"></span>
          </button>
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
    

    const deleteBtn = wrapper.querySelector('.button');
    deleteBtn.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('pista-eliminada', {
        detail: this.dataset.id,
        bubbles: true,
        composed: true,
      }));
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
  }
  
}

customElements.define('circuito-card', CircuitoCard);
