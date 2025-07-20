// This file contains the JavaScript code for the project. It handles the interactive elements such as button clicks, music playback, and the love effect.

document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    const popup = document.getElementById('popup');
    const loveContainer = document.getElementById('love-container');

    // Typing effect for the text
    const messages = ["Untuk Kamu ❤️", "Kamu yang Teristimewa!"];
    let messageIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < messages[messageIndex].length) {
            typingText.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            charIndex = 0;
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(() => {
                typingText.textContent = '';
                type();
            }, 2000);
        }
    }

    type();

    // Button click events
    yesBtn.addEventListener('click', () => {
        popup.classList.remove('hidden');
    });

    noBtn.addEventListener('click', () => {
        alert("Semoga lain kali!");
    });

    // Music control
    musicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = '🎵 Pause Musik';
        } else {
            bgMusic.pause();
            musicBtn.textContent = '🎵 Play Musik';
        }
    });

    // Love effect
    function createLove() {
        const love = document.createElement('div');
        love.className = 'love';
        love.style.left = Math.random() * 100 + 'vw';
        love.style.animationDuration = Math.random() * 2 + 3 + 's';
        loveContainer.appendChild(love);
        setTimeout(() => {
            love.remove();
        }, 5000);
    }

    setInterval(createLove, 300);
});