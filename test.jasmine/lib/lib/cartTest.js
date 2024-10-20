import{addToCart,cart} from '../../cart.js';


describe('test suite:addTocart',()=>{
it('adds an existing product to the cart',()=>{

});
it('adds a new product to the cart',()=>{
    addToCart('a845b1-16ed-4eac-bdf9-5b591882113d');
expect(cart.length).toEqual(1);
});
});