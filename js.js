// JavaScript code for K Grocery Store

// Function to add a product to the cart
function addToCart(productName, price) {
    // Get the cart items container
    var cartItemsContainer = document.querySelector('.cart-items');

    // Create a new cart item element
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Construct the HTML content for the cart item
    var htmlContent = `
        <img src="${productName.toLowerCase()}.jpg" alt="${productName}">
        <div class="item-details">
            <h3>${productName}</h3>
            <p>Price: ${price}</p>
            <p>Quantity: 1</p>
        </div>
        <button class="remove-button"><i class="fas fa-trash"></i> Remove</button>
    `;

    // Set the HTML content for the cart item
    cartItem.innerHTML = htmlContent;

    // Append the cart item to the cart items container
    cartItemsContainer.appendChild(cartItem);
}

// Function to remove a product from the cart
function removeFromCart(cartItem) {
    // Get the cart items container
    var cartItemsContainer = document.querySelector('.cart-items');

    // Remove the cart item from the cart items container
    cartItemsContainer.removeChild(cartItem);
}

// Example usage:
// Add event listeners to all "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var productName = this.dataset.productName;
        var price = this.dataset.price;
        addToCart(productName, price);
    });
});

// Add event listeners to all "Remove" buttons
var removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var cartItem = this.parentElement;
        removeFromCart(cartItem);
    });
});
