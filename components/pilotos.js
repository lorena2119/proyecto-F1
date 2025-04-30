import { pilotos } from "../data/pilotos.js";

class PilotoCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
  
      const style = document.createElement("style");
      style.textContent = `
        .container {
          display: grid;
          grid-template-columns: repeat(5, minmax(245px, 1fr));
          gap: 1.5rem;
          padding: 1rem;
        }
        
        .card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 12px;
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
  
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
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
          font-size: 0.7em;
          text-transform: uppercase;
          color: #00b0f0;
          font-weight: 600;
          letter-spacing: 0.05em;
        }
  
        .nombre .apellido {
          font-size: 1.2em;
          font-weight: bold;
          color: #111;
        }
  
        .equipo {
          font-size: 0.85em;
          color: #888;
          margin-top: 0.3rem;
        }
  
        .extra {
          font-size: 0.8em;
          margin-top: 0.4rem;
          color: #333;
        }
  
        .habilidades {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-top: 0.5rem;
        }
  
        .chip {
          background-color: #00b0f0;
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
  
  customElements.define('piloto-card', PilotoCard);
  