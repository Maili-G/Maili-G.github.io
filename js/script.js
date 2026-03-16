const video = document.getElementById("bg-video");

function slowVideo() {
    video.playbackRate = 0.5;
}

if (video.readyState >= 1) {
    slowVideo();
} else {
    video.addEventListener("loadedmetadata", slowVideo);
}

function typeText(element, text, speed = 80) {
  return new Promise(resolve => {
    let i = 0;
    const interval = setInterval(() => {
      element.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

window.addEventListener("load", async () => {
  const title    = document.getElementById("hero-title");
  const subtitle = document.getElementById("hero-subtitle");

  await typeText(title, "Maïli", 120);
  title.classList.add("done"); // stoppe le curseur sur le titre

  await new Promise(r => setTimeout(r, 300)); // petite pause

  await typeText(subtitle, "Développeur Web", 80);
  // le curseur reste visible sur le subtitle à la fin
});

// Met à jour le lien actif selon la section visible
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});