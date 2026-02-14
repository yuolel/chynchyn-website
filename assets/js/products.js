// Product data loader and utilities

let productsData = [];

// Load products from JSON
async function loadProducts() {
    try {
        const response = await fetch('/products.json');
        const data = await response.json();
        productsData = data.products;
        return productsData;
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}

// Get product by ID
function getProductById(id) {
    return productsData.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') return productsData;
    return productsData.filter(p => p.category === category);
}

// Get featured products
function getFeaturedProducts() {
    return productsData.filter(p => p.featured);
}

// Format price in UAH
function formatPrice(price) {
    return `₴${price.toLocaleString('uk-UA')}`;
}

// Get category name in Ukrainian
function getCategoryName(category) {
    const categories = {
        'all': 'Всі',
        'chinos': 'Чиноси',
        'corduroy': 'Вельвет',
        'summer': 'Літні штани',
        'shorts': 'Шорти',
        'loungewear': 'Домашній одяг'
    };
    return categories[category] || category;
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <img src="/assets/images/products/${product.images[0]}"
                 alt="${product.name}"
                 class="product-image"
                 onerror="this.src='/assets/images/placeholder.jpg'">
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${product.id}')">
                    Додати в кошик
                </button>
            </div>
        </div>
    `;
}

// Render products to grid
function renderProducts(products, containerId = 'product-grid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<p class="text-center">Товари не знайдено</p>';
        return;
    }

    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];

    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
        default:
            return sorted;
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});
