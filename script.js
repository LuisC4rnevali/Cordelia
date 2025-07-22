const audio = document.getElementById('audio');
const mensajeDiv = document.getElementById('mensaje');

const mensajes = [
    { time: 5, text: "Cada vez que escucho esta canción..." },
    { time: 10, text: "pienso en cómo iluminas mis días 🌟" },
    { time: 15, text: "Eres mi Cordelia..." },
    { time: 20, text: "la melodía que nunca quiero dejar de escuchar." },
    { time: 30, text: "Te amo más que a todas las canciones juntas." }
];

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    mensajes.forEach(msg => {
        if (currentTime >= msg.time && currentTime < msg.time + 2) {
            mensajeDiv.innerHTML = `<p>${msg.text}</p>`;
            mensajeDiv.style.opacity = 1;
        }
    });
});