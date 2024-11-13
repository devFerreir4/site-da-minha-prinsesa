function showSurprise() {
    const message = document.getElementById('surpriseMessage');
    const phrases = [
        "Você é a melhor namorada do mundo, Amor! 💖",
        "Estou ansioso para nossa linda jornada juntos!",
        "Nossa Helena vai ter a melhor mãe do mundo! 💕",
        "Amor da minha vida, eu e Helena te amamos infinitamente!",
        "Nosso futuro é cheio de amor, sonhos e alegria!",
        "Minha inspiração, minha paz, meu amor. 💖",
        "Juntos para sempre, com muito amor e aventuras!",
        "Helena será tão maravilhosa quanto você, meu amor!",
        "Te amo mais a cada dia, Amor!💕",
        "A helena serar flamenguista💖"
    ];

    // Exibe uma frase aleatória
    message.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    message.style.display = 'block';

    // Inicia animação de corações
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(heart);

        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
