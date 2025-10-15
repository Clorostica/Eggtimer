document.addEventListener("DOMContentLoaded", () => {
  const pantallaInicio = document.getElementById("pantallaInicio");
  const pantallaSeleccion = document.getElementById("pantallaSeleccion");
  const bgMusic = document.getElementById("bg-music");

  window.startApp = function () {
    bgMusic
      .play()
      .catch((err) => console.log("No se pudo reproducir el audio:", err));
    pantallaInicio.style.display = "none";
    pantallaSeleccion.style.display = "block";
  };

  window.minimizarVentana = function () {
    document.body.style.visibility = "hidden";
  };

  window.cerrarApp = function () {
    window.close();
  };

  window.redirigirATemporizador = function (pagina) {
    console.log("Redirigiendo a: " + pagina);
    window.location.href = pagina;
  };
});
