AOS.init();

const dataDoEvento = new Date("Jun 10, 2024 17:00:00");
const dataDoEventoTimeStamp = dataDoEvento.getTime();
const spanHorasRestantes = document.getElementById("contador")

const timerRestanteDeTempo = setInterval(function () {
    const horaAtual = new Date();
    const timeStampAtual = horaAtual.getTime();
    const distanciaAteOEvento = dataDoEventoTimeStamp - timeStampAtual;
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const diasRestantes = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasRestantes = Math.floor(distanciaAteOEvento % diasEmMs/ horasEmMs);
    const minutosRestantes = Math.floor(distanciaAteOEvento % horasEmMs/ minutosEmMs)
    const segundosRestantes = Math.floor(distanciaAteOEvento % minutosEmMs / segundosEmMs)

    spanHorasRestantes.innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}min ${segundosRestantes}s`    
}, 1000)