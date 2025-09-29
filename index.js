import { random, range } from "lodash";
import "./styles.css";

const btn = document.querySelector(".particleButton");

btn.addEventListener("click", () => {
  btn.classList.toggle("liked");

  const isLiked = btn.classList.contains("liked");

  if (!isLiked) return;

  range(5).forEach(() => {
    const particle = document.createElement(span);
    particle.classList.add("particle");

    particle.style.top = random(0, 100) + "%";
    particle.style.left = random(0, 100) + "%";

    btn.appendChild(particle);
  });
});
