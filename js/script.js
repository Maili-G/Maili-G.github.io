const video = document.getElementById("bg-video");

function slowVideo() {
    video.playbackRate = 0.5;
}

if (video.readyState >= 1) {
    slowVideo();
} else {
    video.addEventListener("loadedmetadata", slowVideo);
}

function animateText(id, delay = 50) {
    const element = document.getElementById(id);
    const text = element.textContent;
    element.textContent = "";

    // Crée un span par lettre
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.style.animationDelay = `${i * delay}ms`;
        element.appendChild(span);
    }
}


window.addEventListener("load", () => {

    const title = document.getElementById("hero-title");
    const subtitle = document.getElementById("hero-subtitle");

    setTimeout(() => {
        title.classList.add("show");
    }, 300);

    setTimeout(() => {
        subtitle.classList.add("show");
    }, 900);

});