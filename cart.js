// Shared cart array
let cart = [];
// Modified addToCart for the products page
function addToCart(event) {
    const productCard = event.target.closest('.product-card');
    const product = {
        id: Date.now(),
        name: productCard.querySelector('.product-title').textContent,
        price: parseFloat(productCard.querySelector('.product-price').textContent.replace('$', '')),
        image: productCard.querySelector('.product-image').src
    };
    
    [].push(product);
    updateCart();
    
    // Show "Added" feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.background = '#4CAF50';
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 1000);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    
    cartItems.innerHTML = [].map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div>$${item.price}</div>
            </div>
            <div class="remove-item" onclick="removeFromCart(${index})">✕</div>
        </div>
    `).join('');
}

function removeFromCart(index) {
    [].splice(index, 1);
    updateCart();
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('active');
}

// Initialize cart functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.product-card button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    // Add click handler to existing cart icon
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCart);
    }
});