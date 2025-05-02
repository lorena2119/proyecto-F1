class VehiculoCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    set data(data) {
      const style = `
        <style>
          .card {
            font-family: 'Segoe UI', sans-serif;
            background: #ffffff;
            border: 3px solid #dedede;
            border-radius: 16px;
            padding: 1rem;
            max-width: 360px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position:relative;
          }
          
          .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.33);
          border-right-color: red;
          border-bottom-color: red;
        }
  
          .card h2 {
            margin: 0;
            font-size: 1.3rem;
            color: var(--color-2);
          }
  
          .card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }
  
          .subtitulo {
            font-weight: 600;
            font-size: 1rem;
            color: #333;
          }
  
          .stats {
            font-size: 0.85rem;
            text-align: left;
            width: 100%;
          }
  
          .stats p {
            margin: 4px 0;
            font-family: "Formula 1 Regular";
            font-size: 0.8rem;
          }
  
          .modo {
            margin-top: 0.5rem;
            font-weight: bold;
            color: #555;
            font-family: "Bruno Ace SC";
          }

          .modo:hover {
            color: var(--color-2);
          }
  
          hr {
            width: 100%;
            border: 0;
            border-top: 1px solid #ddd;
            margin: 8px 0;
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
            
        </style>
      `;

      const renderRendimiento = (modo, datos) => `
        <div class="modo">${modo}</div>
        <div class="stats">
          <p><strong>Velocidad promedio:</strong> ${datos.velocidad_promedio_kmh} km/h</p>
          <p><strong>Consumo (seco):</strong> ${datos.consumo_combustible.seco}</p>
          <p><strong>Desgaste (seco):</strong> ${datos.desgaste_neumaticos.seco}</p>
        </div>
      `;
  
      const html = `
        <div class="card">
          <h2>${data.equipo}</h2>
          <div class="subtitulo">${data.modelo} – ${data.motor}</div>
          <img src="${data.imagen}" alt="Vehículo ${data.equipo}">
          <div class="stats">
            <p><strong>Velocidad máx:</strong> ${data.velocidad_maxima_kmh} km/h</p>
            <p><strong>0-100 km/h:</strong> ${data.aceleracion_0_100} s</p>
          </div>
          <hr>
          ${renderRendimiento("Conducción normal", data.rendimiento.conduccion_normal)}
          ${renderRendimiento("Conducción agresiva", data.rendimiento.conduccion_agresiva)}
          ${renderRendimiento("Ahorro de combustible", data.rendimiento.ahorro_combustible)}

          <button class="button">
            <span class="X"></span>
            <span class="Y"></span>
          </button>
        </div>
      `;
  
      this.shadowRoot.innerHTML = `${style}${html}`;
      const close_button = this.shadowRoot.querySelector(".button");
        close_button.addEventListener("click", () => {
          this.dispatchEvent(new CustomEvent("vehiculo-eliminado", {
            detail: this.dataset.id, 
            bubbles: true,
            composed: true,
          }));
        });
      }
    }
  

  const vehiclesLinks = document.querySelectorAll('.vehicle-link');
  const vehiclesSection = document.getElementById('vehicles-section');
  const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();


    if ([...vehiclesLinks].includes(link)) {
        vehiclesSection.style.display = 'block';
    } else {
        vehiclesSection.style.display = 'none';
    }


    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  });
});
  
  customElements.define("vehiculo-card", VehiculoCard);
  