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
  
    if (egg.classList.contains("cracked")) return;
  
    crackingText.classList.add("show");
  
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
  
      setTimeout(() => {
        egg.style.display = "none";
        crossContainer.style.display = "flex";
        message.classList.add("show");
  
        // Start typewriter animation
        typeMessage(
          "Happy Easter!\nJesus died for you to live.\nGive Him your heart today!",
          "typewriter",
          40
        );
      }, 700);
    }, 1500);
  }
  
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

  document.getElementById("tapMessage").style.display = "none";