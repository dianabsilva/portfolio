const body = document.querySelector('.background-layer');
const cursor = document.querySelector(".custom-cursor");

/* mouse real */
let mx = innerWidth / 2;
let my = innerHeight / 2;

/* cursor (rápido) */
let cx = mx;
let cy = my;

/* fundo (lento / seda) */
let fx = mx;
let fy = my;

document.addEventListener("mousemove", e => {
  mx = e.clientX;
  my = e.clientY;
});

function animate() {
  cx = mx;
  cy = my;
  fx = mx;
  fy = my;

  /* cursor */
  cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;

  /* spotlight */
  body.style.setProperty("--sx", fx + "px");
  body.style.setProperty("--sy", fy + "px");

  /* empurrão curto */
  body.style.setProperty("--dx", (fx - innerWidth / 2) * 0.03 + "px");
  body.style.setProperty("--dy", (fy - innerHeight / 2) * 0.03 + "px");

  requestAnimationFrame(animate);
}

animate();

document.querySelectorAll("a, button, summary").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("is-link");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-link");
  });
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("is-click");
});

document.addEventListener("mouseup", () => {
  cursor.classList.remove("is-click");
});