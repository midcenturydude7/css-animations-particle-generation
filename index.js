import { random, range } from "lodash";

const btn = document.querySelector(".particleButton");

console.log("Script loaded, button found:", btn);

btn.addEventListener("click", () => {
  console.log("Button clicked!");
  btn.classList.toggle("liked");

  const isLiked = btn.classList.contains("liked");
  console.log("Is liked:", isLiked);

  if (!isLiked) return;

  range(5).forEach((i) => {
    console.log(`Creating particle ${i + 1}`);
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const top = random(0, 100);
    const left = random(0, 100);
    console.log(`Particle position: top ${top}%, left ${left}%`);

    particle.style.top = top + "%";
    particle.style.left = left + "%";

    btn.appendChild(particle);
    console.log("Particle added to DOM", particle);

    // Remove particle after animation completes
    setTimeout(() => {
      particle.remove();
      console.log("Particle removed");
    }, 1000);
  });
});
