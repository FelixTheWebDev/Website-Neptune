// -------------------------
// Bild-Slider Funktion
// -------------------------
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');

    // Alle Slides ausblenden
    slides.forEach(slide => {
        slide.style.opacity = "0";
    });

    // Aktuellen Slide einblenden
    slides[slideIndex].style.opacity = "1";

    // Index erhöhen, zurücksetzen am Ende
    slideIndex = (slideIndex + 1) % slides.length;

    // Nächster Slide in 4 Sekunden
    setTimeout(showSlides, 2000);
}

// -------------------------
// Smooth Scroll zu Sektionen
// -------------------------
function scrollToSection(id) {
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offset = -50; // 👈 hier passt du den Abstand an (negativ = höher scrollen)
  
    window.scrollTo({
      top: elementPosition + offset,
      behavior: 'smooth'
    });
  }
// -------------------------
// Fade-In für Gigs (Intersection Observer)
// -------------------------
function fadeInElements() {
    const faders = document.querySelectorAll('.gig');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    faders.forEach(el => observer.observe(el));
}



// -------------------------
// Event Listener
// -------------------------
window.addEventListener('DOMContentLoaded', () => {
    showSlides();
    fadeInElements();


    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("lightbox-close");

    // Öffnen beim Klicken auf ein Bild
    document.querySelectorAll("#artist-gallery img").forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove("hidden");
            setTimeout(() => lightbox.classList.add("show"), 10);
        });
    });

    // Schließen beim Klick auf X
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
        setTimeout(() => lightbox.classList.add("hidden"), 300);
    });

    // Schließen mit Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && lightbox.classList.contains("show")) {
            lightbox.classList.remove("show");
            setTimeout(() => lightbox.classList.add("hidden"), 300);
        }
    });

    // Optional: Klick außerhalb des Bildes zum Schließen
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.classList.remove("show");
            setTimeout(() => lightbox.classList.add("hidden"), 300);
        }
    });


});
