// Shopping cart management

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('chynchyn-cart');
    return cart ? JSON.parse(cart) : { items: [], total: 0 };
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('chynchyn-cart', JSON.stringify(cart));
    updateCartUI();
}

// Add item to cart
function addToCart(productId, size = null, color = null, quantity = 1) {
    const product = getProductById(productId);
    if (!product) {
        alert('Товар не знайдено');
        return;
    }

    const cart = getCart();

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(item =>
        item.productId === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += quantity;
    } else {
        cart.items.push({
            productId,
            name: product.name,
            price: product.price,
            size,
            color,
            quantity,
            image: product.images[0]
        });
    }

    // Recalculate total
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    saveCart(cart);
    showCartNotification('Товар додано до кошика');
}

// Remove item from cart
function removeFromCart(index) {
    const cart = getCart();
    cart.items.splice(index, 1);
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    saveCart(cart);
}

// Update item quantity
function updateCartItemQuantity(index, quantity) {
    const cart = getCart();
    if (quantity <= 0) {
        removeFromCart(index);
        return;
    }

    cart.items[index].quantity = quantity;
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    saveCart(cart);
}

// Clear cart
function clearCart() {
    localStorage.removeItem('chynchyn-cart');
    updateCartUI();
}

// Update cart UI (count badge and preview)
function updateCartUI() {
    const cart = getCart();
    const cartCount = document.getElementById('cart-count');

    // Update count badge
    if (cartCount) {
        const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Update cart preview if it exists
    updateCartPreview(cart);
}

// Update cart preview dropdown
function updateCartPreview(cart) {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const emptyCart = document.getElementById('empty-cart');

    if (!cartItemsContainer) return;

    if (cart.items.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartItemsContainer) cartItemsContainer.style.display = 'none';
        if (cartTotal) cartTotal.style.display = 'none';
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (cartTotal) cartTotal.style.display = 'flex';

    // Render cart items
    cartItemsContainer.innerHTML = cart.items.map((item, index) => `
        <div class="cart-item">
            <img src="/assets/images/products/${item.image}"
                 alt="${item.name}"
                 class="cart-item-image"
                 onerror="this.src='/assets/images/placeholder.jpg'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">
                    ${item.size ? `Розмір: ${item.size}` : ''}
                    ${item.color ? ` | Колір: ${item.color}` : ''}
                    <br>Кількість: ${item.quantity}
                </div>
                <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
            <button onclick="removeFromCart(${index})" class="btn-remove" title="Видалити">✕</button>
        </div>
    `).join('');

    // Update total
    if (cartTotal) {
        cartTotal.innerHTML = `
            <span>Разом:</span>
            <span>${formatPrice(cart.total)}</span>
        `;
    }
}

// Toggle cart preview
function toggleCartPreview() {
    const preview = document.getElementById('cart-preview');
    if (preview) {
        preview.classList.toggle('active');
    }
}

// Close cart preview when clicking outside
document.addEventListener('click', (e) => {
    const preview = document.getElementById('cart-preview');
    const cartIcon = document.getElementById('cart-icon');

    if (preview && !preview.contains(e.target) && !cartIcon.contains(e.target)) {
        preview.classList.remove('active');
    }
});

// Show cart notification
function showCartNotification(message) {
    // Simple alert for now, can be enhanced with a toast notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--gold);
        color: var(--charcoal);
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});
