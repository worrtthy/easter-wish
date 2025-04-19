window.onload = () => {
  document.getElementById("welcome").style.display = "flex";
};

function closeWelcome() {
  document.getElementById("welcome").style.display = "none";
}

function crackEgg() {
  const egg = document.getElementById("egg");
  const crackingText = document.getElementById("crackingText");
  const message = document.getElementById("message");
  const crossContainer = document.getElementById("crossContainer");
  const sharePrompt = document.getElementById("sharePrompt");
  const song = document.getElementById("easterSong");
  const tapMessage = document.getElementById("tapMessage");

  if (egg.classList.contains("cracked")) return;

  // Show cracking message
  crackingText.classList.add("show");

  // Fade out the tap message
  tapMessage.classList.add("fade-out");
  setTimeout(() => {
    tapMessage.style.display = "none";
  }, 600);

  // Continue egg cracking sequence
  setTimeout(() => {
    crackingText.classList.remove("show");
    egg.classList.add("cracked");

    // Play music
    song.play();

    // Launch confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.4 }
    });

    // Show cross and message after short delay
    // Show cross and message after a longer delay
    setTimeout(() => {
      egg.style.display = "none";
      crossContainer.style.display = "flex";
      message.classList.add("show");

      // Typewriter message
      typeMessage(
        "Happy Easter!\nJesus died for you to live.\nDeath did not win, Love did!\nGive Jesus your heart today!",
        "typewriter",
        65 // slower typing speed (was 40)
      );
    }, 1600); // increased from 700
  }, 2500); // increased from 1500

  function typeMessage(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.textContent = "";

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  function shareSite() {
    const sharePrompt = document.getElementById("sharePrompt");
    const currentLink = window.location.href;

    navigator.clipboard.writeText(currentLink).then(() => {
      sharePrompt.classList.add("show");
      setTimeout(() => {
        sharePrompt.classList.remove("show");
      }, 3000);
    });
  }