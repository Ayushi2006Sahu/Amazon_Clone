// function clickF(){
// var textElement = document.getElementById("demo");
// textElement.innerHTML = "Hello Pagal";

// }
// let txt="WE are \"Vikings\"";
// alert(txt);
// const d = new Date();
// year = d.getFullYear();
// alert(year);
// alert(d);
// const fruits = ["Apple", "Banana", "Orange"];
// for (x of fruits) {
//   console.log(x);
// }
// for (i = 0; i < 10; i++) {
//     if (i == 5) {
//     continue;
//     }
//     console.log(i);
//   }
  


// document.getElementsByTagName("p")[0].innerHTML= "Hello";
// const product1={
//   name:'basketball',
//   price:3000
// };
// console.log(product)
// product.price+=500;
// product['delivery-time']='3days';
// console.log(product);
// const product2={
//   name:'basketball',
//   price:3000
// };
// function comparePrice(product1,product2){
//   if(product1.price>product2.price){
//    return product1;
//   }
//   else{
//     return product2;
//   }
// }
// console.log(comparePrice(product1,product2));
// function isSameProduct(product1,product2){
//   if((product1.name===product2.name)&& (product1.price===product2.price)){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isSameProduct(product1,product2));
// const GM={
//   message:'Good Morning'
// }
// console.log(GM.message.toLowerCase());
function subscribe(){const buttonElement=document.querySelector('.js-subscribe-button');
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
    }
    else{
        buttonElement.innerHTML='Subscribe';
    }
  }
  function calculateTotal(){
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);
    if(cost<40){
        cost+=10;
        console.log(cost);
    }
    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
  }
let cartQuantity=0;
displayCartQuantity();
function updatecart(change){
    if(cartQuantity+change>10){
        alert('The cart is full');
        return;
    }
    if(cartQuantity+change<0){
        alert('Not enough items in the cart');
        return;
    }
    cartQuantity+=change;
    displayCartQuantity();
}
function displayCartQuantity(){
    document.querySelector('.js-cart-quantity')
    .innerHTML=`Cart quantity: ${cartQuantity}`;
}
let calculation = localStorage.getItem('calculation')|| '';
function displaycalculation(value){
    // document.querySelector()
    calculation+=value;
    console.log(calculation);
    localStorage.setItem('calculation',calculation);
}
function saveCalculation(){
    localStorage.setItem('calculation',calculation);
}