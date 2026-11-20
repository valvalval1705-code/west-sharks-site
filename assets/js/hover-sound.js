const robotCards = document.querySelectorAll(".robot_card");
const navLinks = document.querySelectorAll(".links-menu a");

try {
  const hoverSound = new Audio("/assets/sounds/hover.wav");
  hoverSound.volume = 0.5;

  const hoverSound2 = new Audio("/assets/sounds/hover-2.wav");
  hoverSound2.volume = 0.5;

  if (navLinks.length != 0) {
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        hoverSound2.currentTime = 0;
        hoverSound2.play().catch(() => {});
      });
    });
  }

  if (robotCards.length != 0) {
    robotCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
      });
    });
  }
} catch (e) {
  console.log(e)
}
