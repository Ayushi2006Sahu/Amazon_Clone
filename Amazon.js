import {cart,addtoCart} from './cart.js';
import {products} from './product.js';
import { formatCurrency } from './money.js';

let productsHTML = '';

products.forEach((product) => {
    productsHTML +=
        `<div class="product-container"  style="margin-top: 87px;">
<div class="product-image">
    <img class="product-images" src="${product.image}">
</div>
<div class="product-name">${product.name}</div>
<div class="product-rating">
    <img class="product-rating-stars" src="rating-${product.rating.stars * 10}.png">
    <div class="product-rating-count"> ${product.rating.count}
    </div>
</div>
<div class="product-price"> ₹${formatCurrency(product.price)}</div>
<div class="product-quantity-container">
    <select class="js-quantity-selector" data-testid="quantity-selector">
        <option selected="" value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
</div>
<div class="product-spacer"></div>
<div class="js-added-to-cart-message added-to-cart-message" data-testid="added-to-cart-message">
    <img src="checkmark.png">
    Added
</div>
<button class="add-to-cart-button js-add-to-cart"
data-product-id="${product.id}">
Add to cart</button>
</div>`;
});
// console.log(productsHTML);
document.querySelector('.js-products-grid').innerHTML = productsHTML;


function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addtoCart(productId);
            updateCartQuantity();
        });
    });