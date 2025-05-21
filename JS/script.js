
  function shootConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"], textarea');

    inputs.forEach(input => {
      input.addEventListener('click', shootConfetti);
    });
  });


  function handleSubmit(event) {
    event.preventDefault();
    alert("Message sent, thank you for reaching out!");
  }
