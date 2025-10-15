document.addEventListener("DOMContentLoaded", () => {
  const alarm = document.getElementById("alarmSound");
  alarm
    .play()
    .catch((error) =>
      console.log("Reproducción automática bloqueada por el navegador.")
    );

  window.minimizeWindow = function () {
    document.body.style.visibility = "hidden";
  };

  window.closeApp = function () {
    window.open("", "_self").close();
  };

  window.snooze = function () {
    alert("Snooze activated, we will notify you in 5 minutes.");
    setTimeout(() => {
      window.location.href = "times_up.html";
    }, 5 * 60 * 1000);
  };
});
