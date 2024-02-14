function saltar(event, nextInputId) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById(nextInputId).focus();
    }
  }
  