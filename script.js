document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  // Aplicar configuración visual
  const root = document.documentElement;
  root.style.setProperty("--primary", INVITACION.tema.colorPrincipal);
  root.style.setProperty("--secondary", INVITACION.tema.colorSecundario);
  root.style.setProperty("--accent", INVITACION.tema.colorAcento);
  root.style.setProperty("--dark", INVITACION.tema.colorTexto);
  root.style.setProperty("--light", INVITACION.tema.colorFondo);

  // Datos
  $("heroName").textContent = INVITACION.cumpleanero;
  $("heroAge").textContent = INVITACION.edad;
  $("introAge").textContent = INVITACION.edad;
  $("footerName").textContent = INVITACION.cumpleanero;
  $("eventDate").textContent = INVITACION.fechaTexto;
  $("eventTime").textContent = INVITACION.horaTexto;
  $("eventPlace").textContent = INVITACION.lugar;
  $("mapAddress").textContent = INVITACION.lugar;

  // Foto principal
  const mainPhoto = $("mainPhoto");
  mainPhoto.src = INVITACION.fotoPrincipal;

  // Google Maps
  $("mapButton").href = INVITACION.mapsUrl;

  // WhatsApp
  const whatsappUrl =
    `https://wa.me/${INVITACION.whatsapp}?text=${encodeURIComponent(INVITACION.mensajeWhatsApp)}`;
  $("whatsappButton").href = whatsappUrl;

  // Galería
  const gallery = $("gallery");
  INVITACION.fotos.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${src}" alt="Fotografía ${index + 1}"
           onerror="this.parentElement.style.display='none'">
    `;
    item.addEventListener("click", () => openLightbox(src));
    gallery.appendChild(item);
  });

  // Música
  const audio = $("backgroundMusic");
  const musicButton = $("musicButton");
  audio.src = INVITACION.musica;
  let musicPlaying = false;

  musicButton.addEventListener("click", async () => {
    if (!audio.src) return;

    if (musicPlaying) {
      audio.pause();
      musicPlaying = false;
      musicButton.textContent = "🔇";
    } else {
      try {
        await audio.play();
        musicPlaying = true;
        musicButton.textContent = "🎵";
      } catch {
        alert("Para reproducir la música, toca nuevamente el botón.");
      }
    }
  });

  // Abrir invitación
  $("openInvitation").addEventListener("click", async () => {
    $("invitation").classList.remove("hidden");
    $("invitation").scrollIntoView({ behavior: "smooth" });

    // Los navegadores permiten iniciar audio después de una interacción.
    try {
      await audio.play();
      musicPlaying = true;
      musicButton.textContent = "🎵";
    } catch {
      musicPlaying = false;
    }
  });

  // Cuenta regresiva
  const targetDate = new Date(INVITACION.fechaISO).getTime();

  function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      $("days").textContent = "00";
      $("hours").textContent = "00";
      $("minutes").textContent = "00";
      $("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    $("days").textContent = String(days).padStart(2, "0");
    $("hours").textContent = String(hours).padStart(2, "0");
    $("minutes").textContent = String(minutes).padStart(2, "0");
    $("seconds").textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Animaciones al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Lightbox
  function openLightbox(src) {
    $("lightboxImage").src = src;
    $("lightbox").classList.remove("hidden");
  }

  $("closeLightbox").addEventListener("click", () => {
    $("lightbox").classList.add("hidden");
  });

  $("lightbox").addEventListener("click", (event) => {
    if (event.target === $("lightbox")) {
      $("lightbox").classList.add("hidden");
    }
  });

  // Loader
  setTimeout(() => $("loader").classList.add("hide"), 900);
});
