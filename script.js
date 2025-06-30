// Script para animaciones y funcionalidades adicionales

document.addEventListener('DOMContentLoaded', function() {
    // Animación al hacer scroll
    const cards = document.querySelectorAll('.service-card, .gallery-item');
    
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            }
        });
    }
    
    // Agregar clase para animación con CSS
    cards.forEach(card => {
        card.classList.add('animate');
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verificar al cargar la página
    
    // Mensaje de confirmación al hacer clic en botones de reserva
    const reservationButtons = document.querySelectorAll('.btn');
    
    reservationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Solo para fines de demostración (opcional)
            console.log('Enviando a WhatsApp: ' + this.getAttribute('href'));
            
            // Si quieres agregar un mensaje de confirmación:
            // e.preventDefault();
            // if (confirm('¿Estás segura de enviar este mensaje a Sebas?')) {
            //    window.location.href = this.getAttribute('href');
            // }
        });
    });
});

// Función para cambiar dinámicamente los colores del tema (opcional)
function changeTheme(primaryColor, secondaryColor) {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
}

// Opcional: Agregar un easter egg
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let secretCodePosition = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === secretCode[secretCodePosition]) {
        secretCodePosition++;
        
        if (secretCodePosition === secretCode.length) {
            // Easter egg activado
            alert('¡Has descubierto un mensaje secreto! Dannita, eres lo más maravilloso que me ha pasado. ❤️');
            
            // Efecto visual divertido
            const hearts = document.createElement('div');
            hearts.classList.add('floating-hearts');
            document.body.appendChild(hearts);
            
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('floating-heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                hearts.appendChild(heart);
            }
            
            setTimeout(() => {
                hearts.remove();
            }, 5000);
            
            secretCodePosition = 0;
        }
    } else {
        secretCodePosition = 0;
    }
});

// Agregar estilos para los corazones flotantes
const style = document.createElement('style');
style.textContent = `
.floating-hearts {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}

.floating-heart {
    position: absolute;
    font-size: 2rem;
    top: -20px;
    animation: floatHeart linear forwards;
}

@keyframes floatHeart {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
