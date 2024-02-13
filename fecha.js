function actualizarCalendario() {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    document.getElementById('calendario').innerText = fechaFormateada;
  }

  function actualizarReloj() {
    const hora = new Date();
    const opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const horaFormateada = hora.toLocaleTimeString('es-ES', opciones);
    document.getElementById('reloj').innerText = horaFormateada;
  }

  // Actualizar calendario y reloj cada segundo
  setInterval(() => {
    actualizarCalendario();
    actualizarReloj();
  }, 1000);

  // Inicializar al cargar la página
  actualizarCalendario();
  actualizarReloj();