class Simulation extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
    
      const container = document.createElement("div")
      const style = document.createElement('style')

      style.textContent= `
      iframe{
        width: 100%;
        height: 64.8vh;
        display:flex;
        }
        
      `

      container.innerHTML = `
      <iframe src="simulation/dist/index.html" scrolling="no" style="display: block; border: none;">
      `

      shadow.appendChild(style)
      shadow.appendChild(container)
    
    const simulationlink = document.querySelectorAll('.simulation-links');
    const simulationsection = document.getElementById('simulation-section');
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
      e.preventDefault();
    
    
      if ([...simulationlink].includes(link)) {
        simulationsection.style.display = 'block';
      } else {
        simulationsection.style.display = 'none';
      }
    
    
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
    });
    }
  }
    customElements.define("simulation-animate", Simulation);