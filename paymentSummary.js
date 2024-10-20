 import {cart} from './cart.js';
 import { getProduct } from './product.js';
 import {getDeliveryOption} from './deliveryOptions.js';
 import {formatCurrency} from './money.js';

 
 export function renderPaymentSummary(){
let productPrice =0;
let shippingPrice=0;


  cart.forEach((cartItem)=>{
    const product =  getProduct(cartItem.productId);
    productPrice+=product.price*cartItem.quantity;
     const deliveryOption = getDeliveryOption(cartItem.DeliveryOptionId);
    shippingPrice+=  deliveryOption.price;
  });
//   console.log(productPrice);
//   console.log(shippingPrice);
const totalPrice=productPrice+shippingPrice;
const paymentSummaryHTML=`
<div class="payment-summary-title">
Order Summary
</div>
<div class="payment-summary-row">
<div>Items(3):</div>
<div class="payment-summary-money">₹${formatCurrency(productPrice)}</div>
</div>
<div class="payment-summary-row">
<div>Shipping &amp; handling:</div>
<div class="payment-summary-money">₹${formatCurrency(shippingPrice)}</div>
</div>
<div class="payment-summary-row subtotal-row">
<div>Total :</div>
<div class="payment-summary-money">₹${formatCurrency(totalPrice)}</div>
</div>
<button class="place-order-button button-primary">
Place your order
</button>

`;
document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;
}