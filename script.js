document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Bricks', price: '$19.99', img: 'bricks.jpg' },
        { name: 'Gitti', price: '$29.99', img: 'gitti.jpg' },
        { name: 'saria', price: '$39.99', img: 'saria.jpg' },
        { name: 'morang', price: '$49.99', img: 'morang.jpg' },
        { name: 'kudar', price: '$30.30', img: 'kudar.jpg' },
        { name: 'Hathoda', price: '$50', img: 'Hathoda.jpg' },
    ];

    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        productGrid.appendChild(productCard);
    });
});
