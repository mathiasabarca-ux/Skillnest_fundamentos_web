document.addEventListener('DOMContentLoaded', () => {

    // 1. Mensaje de Bienvenida al hacer Login
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('email-input');

    loginBtn.addEventListener('click', () => {
        const emailValue = emailInput.value.trim();
        if (emailValue !== '') {
            alert(`Bienvenido\n${emailValue}`);
        } else {
            alert('Por favor ingresa un correo electrónico.');
        }
    });

    // 2. Cambio de imagen principal con Hover
    const heroImg = document.getElementById('hero-img');
    const imagenOriginal = heroImg.src;
    const imagenHover = 'static/images/comida-mexicana2.jpg';

    heroImg.addEventListener('mouseover', () => {
        heroImg.src = imagenHover;
    });

    heroImg.addEventListener('mouseout', () => {
        heroImg.src = imagenOriginal;
    });

    // 3. Contador del carrito al pulsar "+"
    const cartCountElement = document.getElementById('cart-count');
    const addButtons = document.querySelectorAll('.btn-agregar');
    let cartCount = 0;

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

});