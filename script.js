function toggleCart() {
    const cart = document.getElementById('cart');
    cartVisible = !cartVisible;
    
    if (cartVisible) {
        cart.style.transform = 'translateX(0)';
        cart.style.opacity = '1';
    } else {
        cart.style.transform = 'translateX(100%)';
        cart.style.opacity = '0';
    }
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    const cart = document.getElementById('cart');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (cartVisible && !cart.contains(e.target) && e.target !== cartIcon) {
        cartVisible = false;
        cart.style.transform = 'translateX(100%)';
        cart.style.opacity = '0';
    }
});

// Handle login button click
document.querySelector('.login-button').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'register.html';
});

// Initialize cart styles
document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    cart.style.position = 'fixed';
    cart.style.top = '0';
    cart.style.right = '0';
    cart.style.width = '300px';
    cart.style.height = '100vh';
    cart.style.backgroundColor = 'white';
    cart.style.boxShadow = '-2px 0 5px rgba(0,0,0,0.1)';
    cart.style.transform = 'translateX(100%)';
    cart.style.opacity = '0';
    cart.style.transition = 'all 0.3s ease';
    cart.style.zIndex = '1000';
    cart.style.padding = '20px';
});

// Optional: Add hover effect to cart icon
document.querySelector('.cart-icon').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.cart-icon').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Update cart items display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = cartItems
            .map(item => `
                <div class="cart-item">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                    <button onclick="removeFromCart('${item.id}')">Remove</button>
                </div>
            `)
            .join('');
    }
}

// Add item to cart
function addToCart(item) {
    cartItems.push(item);
    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    updateCartDisplay();
}