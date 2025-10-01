import { random, range } from "lodash";

const btn = document.querySelector(".particleButton");

const FADE_DURATION = 1000; // Match with CSS animation duration

console.log("Script loaded, button found:", btn);

btn.addEventListener("click", () => {
  console.log("Button clicked!");
  btn.classList.toggle("liked");

  const isLiked = btn.classList.contains("liked");
  console.log("Is liked:", isLiked);

  if (!isLiked) return;

  const particles = [];

  range(5).forEach((i) => {
    console.log(`Creating particle ${i + 1}`);
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const top = random(0, 100);
    const left = random(0, 100);
    console.log(`Particle position: top ${top}%, left ${left}%`);

    particle.style.top = top + "%";
    particle.style.left = left + "%";
    particle.style.animationDuration = `${FADE_DURATION}ms`;

    btn.appendChild(particle);
    console.log("Particle added to DOM", particle);

    particles.push(particle);
  });

  // Remove particle after animation completes
  setTimeout(() => {
    particles.forEach((particle) => {
      particle.remove();
      console.log("Particle removed");
    });
  }, FADE_DURATION + 200);
});
