// ELEMENTS
const petalContainer = document.getElementById("petal-container");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionSection = document.getElementById("questionSection");
const letterSection = document.getElementById("letterSection");
const typedTextEl = document.getElementById("typedText");

noBtn.addEventListener("mouseenter", () => {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});


const letterText = `Hey Pom-Pom ❤️

I was hoping you’d say yes.
tujhe hmesha preshan krta rhunga,
kbhi bhi shanti se stress lene nai dunga,
and hmesha tharkiyo wali harkatein tumhare sath krta rhunga.

Your's one and only 💌
`;

function typeText(element, text, speed = 45) {
    let index = 0;
    element.innerHTML = "";

    const interval = setInterval(() => {
        element.innerHTML += text[index];
        index++;

        if (index >= text.length) {
            clearInterval(interval);
        }
    }, speed);
}

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = 4 + Math.random() * 3 + "s";

    petalContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 7000);
}

yesBtn.addEventListener("click", () => {
    questionSection.style.display = "none";
    letterSection.style.display = "block";

    typeText(typedTextEl, letterText);

    const petalInterval = setInterval(createPetal, 350);

    setTimeout(() => {
        clearInterval(petalInterval);
    }, 10000);
});
