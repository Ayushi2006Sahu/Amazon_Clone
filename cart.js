 export let cart=JSON.parse(localStorage.getItem('cart'));
 
 if(!cart){
    cart=[{
        productId:'77a845b1-16ed-4eac-ghf9-5b591882113d',
        quantity:2,
        deliveryOptionId:'1'
     }
     ];
 }
 
 function saveToStroage(){
    localStorage.setItem('cart',JSON.stringify(cart));
 }
 export function addtoCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        matchingItem.quantity += 1;
    }
    else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId:'1'
        });
    }
    saveToStroage();
} 

 export function removefromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStroage();
}
 export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId =deliveryOptionId;
    saveToStroage();
}
