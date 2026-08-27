/*
=========================================================
CONFIGURACIÓN DE LA INVITACIÓN
=========================================================
EDITA PRINCIPALMENTE ESTE ARCHIVO.

1. Cambia la temática en "tema".
2. Reemplaza las imágenes dentro de /images.
3. Coloca tu música dentro de /music y cambia "musica".
4. No necesitas modificar index.html para los cambios habituales.
*/

const INVITACION = {
  cumpleanero: "Luccas Alejandro",
  edad: 6,

  fechaTexto: "27 de agosto de 2026",
  fechaISO: "2026-08-27T17:30:00-05:00",
  horaTexto: "5:30 p. m.",

  lugar: "Av. 09 de Octubre 461",

  // Puedes reemplazar este enlace por el de Google Maps.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.%2009%20de%20Octubre%20461",

  whatsapp: "51945488229",
  mensajeWhatsApp: "¡Hola! Confirmo mi asistencia al cumpleaños de Luccas Alejandro. 🎉",

  // =====================================================
  // TEMÁTICA: PERSONALIZA ESTA PARTE
  // =====================================================
  tema: {
    nombre: "Mi temática",
    colorPrincipal: "#ff7eb6",
    colorSecundario: "#7c5cff",
    colorAcento: "#ffd166",
    colorTexto: "#29223a",
    colorFondo: "#fff8fc"
  },

  // =====================================================
  // FOTOGRAFÍAS
  // Coloca tus archivos dentro de /images
  // =====================================================
  fotoPrincipal: "images/foto-principal.jpg",

  fotos: [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto6.jpg"
  ],

  // =====================================================
  // MÚSICA
  // Coloca tu archivo dentro de /music
  // Ejemplo: music/cancion.mp3
  // =====================================================
  musica: "music/cancion.mp3"
};
