document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

   
    function addToCart(product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
    }

    // Function to display products
    function displayProducts() {
        const products = [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
            { id: 3, name: 'Product 3', price: 30 }
        ];

        const productContainer = document.getElementById('product-list');
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    }

    // Function to validate form
    function validateForm() {
        const form = document.getElementById('user-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;

            if (name === '' || email === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Form submitted successfully!');
                form.reset();
            }
        });
    }

    // Initialize functions
    if (document.getElementById('product-list')) {
        displayProducts();
    }

    if (document.getElementById('user-form')) {
        validateForm();
    }
});