/* ═══════════════════════════════════════════════
   COLEGIO ADVENTISTA DE PASO CANOAS – script.js
════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────
   1. AOS – Animate on Scroll
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
  });
});

/* ──────────────────────────────────────────────
   2. Navbar: fondo al hacer scroll
────────────────────────────────────────────── */
const mainNav = document.getElementById('mainNav');

const handleNavScroll = () => {
  if (window.scrollY > 60) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });

/* ──────────────────────────────────────────────
   3. Navbar: resaltar enlace activo al hacer scroll
────────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNav = () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightNav, { passive: true });

/* ──────────────────────────────────────────────
   4. Cerrar menú móvil al hacer clic en enlace
────────────────────────────────────────────── */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler');
      toggler?.click();
    }
  });
});

/* ──────────────────────────────────────────────
   5. Contadores animados (estadísticas)
────────────────────────────────────────────── */
const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
};

// Disparar contadores cuando sean visibles
const statsSection = document.querySelector('.stats-row');
if (statsSection) {
  let countersStarted = false;
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });
  counterObserver.observe(statsSection);
}

/* ──────────────────────────────────────────────
   6. Filtro de Galería
────────────────────────────────────────────── */
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Activar botón
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeInUp .4s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ──────────────────────────────────────────────
   7. Lightbox de Galería
────────────────────────────────────────────── */
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

window.openLightbox = (thumbEl) => {
  const img = thumbEl.querySelector('img');
  const caption = thumbEl.querySelector('.gallery-overlay span')?.textContent || '';
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption;
  lightboxModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = () => {
  lightboxModal.classList.remove('open');
  document.body.style.overflow = '';
};

// Cerrar con Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ──────────────────────────────────────────────
   8. Formulario de Matrícula – validación y toast
────────────────────────────────────────────── */
const formMatricula = document.getElementById('formMatricula');

if (formMatricula) {
  formMatricula.addEventListener('submit', e => {
    e.preventDefault();
    if (!formMatricula.checkValidity()) {
      formMatricula.classList.add('was-validated');
      return;
    }
    showToast('✅ Solicitud de matrícula enviada. Nos pondremos en contacto pronto.');
    formMatricula.reset();
    formMatricula.classList.remove('was-validated');
  });
}

/* ──────────────────────────────────────────────
   9. Formulario de Contacto – validación y toast
────────────────────────────────────────────── */
const formContacto = document.getElementById('formContacto');

if (formContacto) {
  formContacto.addEventListener('submit', e => {
    e.preventDefault();
    if (!formContacto.checkValidity()) {
      formContacto.classList.add('was-validated');
      return;
    }
    showToast('✅ Mensaje enviado con éxito. Te responderemos a la brevedad.');
    formContacto.reset();
    formContacto.classList.remove('was-validated');
  });
}

/* ──────────────────────────────────────────────
   10. Toast helper
────────────────────────────────────────────── */
const showToast = (msg) => {
  const toastEl = document.getElementById('successToast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toastEl) return;
  toastMsg.textContent = msg;
  const toast = new bootstrap.Toast(toastEl, { delay: 4500 });
  toast.show();
};

/* Exportar para uso en HTML inline */
window.showToast = showToast;

/* ──────────────────────────────────────────────
   11. Alerta para formularios descargables (placeholder)
────────────────────────────────────────────── */
window.showAlert = (docName) => {
  // Cuando tengas los PDFs reales, reemplaza esta función
  // con: window.location.href = 'docs/nombre-del-archivo.pdf';
  alert(`📄 "${docName}" estará disponible próximamente.\n\nContacta a la administración para obtenerlo.`);
};

/* ──────────────────────────────────────────────
   12. Año actual en el footer
────────────────────────────────────────────── */
const footerYear = document.getElementById('footerYear');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

/* ──────────────────────────────────────────────
   13. Animación fadeInUp para galería (CSS keyframe)
────────────────────────────────────────────── */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
`;
document.head.appendChild(style);

/* ──────────────────────────────────────────────
   14. Smooth scroll para links internos (fallback Safari)
────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = mainNav ? mainNav.offsetHeight + 16 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ──────────────────────────────────────────────
   15. Lazy load de imágenes (IntersectionObserver)
────────────────────────────────────────────── */
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => imageObserver.observe(img));
}
