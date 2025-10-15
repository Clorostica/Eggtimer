document.addEventListener("DOMContentLoaded", () => {
  let tiempoRestante = 3 * 60;
  let temporizadorID;

  function actualizarDisplay() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    document.getElementById("timer-display").textContent = `${minutos}:${
      segundos < 10 ? "0" + segundos : segundos
    }`;
  }

  window.iniciarTemporizador = function () {
    if (!temporizadorID) {
      temporizadorID = setInterval(() => {
        if (tiempoRestante > 0) {
          tiempoRestante--;
          actualizarDisplay();
        } else {
          clearInterval(temporizadorID);
          temporizadorID = null;
          window.location.href = "times_up.html";
        }
      }, 1000);
    }
  };

  window.detenerTemporizador = function () {
    clearInterval(temporizadorID);
    temporizadorID = null;
    alert("El temporizador se ha detenido.");
  };

  actualizarDisplay();
});
