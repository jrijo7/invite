const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isJumping = false;
let isGameOver = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !isJumping) {
        jump();
    } else if (event.code === 'Enter' && isGameOver) {
        restartGame();
    }
});

function jump() {
    isJumping = true;
    let position = 0;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 20;
                dino.style.bottom = position + 'px';
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.left < cactusRect.right &&
        dinoRect.right > cactusRect.left &&
        dinoRect.top < cactusRect.bottom &&
        dinoRect.bottom > cactusRect.top
    ) {
        isGameOver = true;
        cactus.style.animation = 'none';
        cactus.style.right = cactusRect.right + 'px';
        alert('Game Over! Pressione Enter para reiniciar.');
    }
}

function restartGame() {
    isGameOver = false;
    cactus.style.animation = 'moveCactus 2s linear infinite';
    dino.style.bottom = '0px';
}

setInterval(checkCollision, 10);
