const clockElement = document.getElementById('clock');
const timezoneSelect = document.getElementById('timezone');
const toggleFormatButton = document.getElementById('toggle-format');

let is24HourFormat = true;

// Actualiza el reloj cada segundo
function updateClock() {
  const now = new Date();
  const timezone = timezoneSelect.value;
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: !is24HourFormat,
    timeZone: timezone === 'local' ? undefined : timezone,
  };
  clockElement.textContent = new Intl.DateTimeFormat('es-ES', options).format(now);
}

// Cambiar el formato de 24h a 12h
toggleFormatButton.addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  updateClock();
});

// Actualiza el reloj automáticamente
timezoneSelect.addEventListener('change', updateClock);
setInterval(updateClock, 1000);
updateClock();
