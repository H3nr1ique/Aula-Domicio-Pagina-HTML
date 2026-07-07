// Animação ao rolar
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// Controles de Zoom
let currentZoom = 100;

function zoomIn() {
  currentZoom = Math.min(currentZoom + 10, 150);
  document.documentElement.style.zoom = currentZoom + '%';
}

function zoomOut() {
  currentZoom = Math.max(currentZoom - 10, 70);
  document.documentElement.style.zoom = currentZoom + '%';
}

function resetZoom() {
  currentZoom = 100;
  document.documentElement.style.zoom = '100%';
}
