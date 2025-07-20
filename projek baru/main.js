const typingText = document.getElementById('typing-text');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const loveContainer = document.getElementById('love-container');
const popup = document.getElementById('popup');

const message = "INDI NIO JADI PACAR BG? ❤️";
let index = 0;

// Efek Typing
function typeEffect() {
    if (index < message.length) {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Tombol YES
yesBtn.addEventListener('click', () => {
    typingText.innerHTML = "Yeay! Kamu bikin aku bahagia ❤️";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    startLoveRain();
    showPopup();
    startConfetti();
});

// Tombol NO (kabur lebih liar)
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Musik Control Button
musicBtn.addEventListener('click', () => {
    bgMusic.play();
    musicBtn.style.display = 'none';
});

// Musik aktif setelah klik pertama di layar
document.body.addEventListener('click', () => {
    bgMusic.play().catch(() => console.log("Autoplay dibatasi"));
}, { once: true });

// Efek Hujan Love
function startLoveRain() {
    setInterval(() => {
        const love = document.createElement('div');
        love.classList.add('love');
        love.style.left = Math.random() * 100 + 'vw';
        love.style.fontSize = Math.random() * 20 + 20 + 'px';
        love.innerHTML = '❤️';
        loveContainer.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 5000);
    }, 200);
}

// Popup Ucapan
function showPopup() {
    popup.classList.remove('hidden');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 4000);
}

// Efek Confetti
function startConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('love');
        confetti.innerHTML = '💖';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        loveContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
